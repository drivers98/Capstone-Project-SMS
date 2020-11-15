var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('mysql');
var router = express.Router();

var sms_DB = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '',
    database  : 'smsdatabase'
});

router.use(bodyParser.urlencoded({extedned: true}))

router.get('/showSyllabus', (req, res) => {
    let select = "SELECT * FROM Courses"
    sms_DB.query(select, (err, result) => {
        if(err) throw err;
        res.send(result);
    })
});

router.post('/uploadSyllabus', (req, res) => {
    let CRN = req.body.CRN;
    let SYL = req.body.SYL;

    let Syllabus = "INSERT INTO syllabus (CRN, Uploaded_SYL) VALUES (?,?)"; 
    sms_DB.query(Syllabus, [CRN, SYL], (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('syllabus uploaded to sms-database');
    });
});

router.post('/uploadInstructor', (req, res) => {
    let instr_ID = req.body.instr_ID;
    let instr_Name = req.body.instr_Name;

    let Instructor = "INSERT INTO instructors (Instructor_ID, Instructor_Name) VALUES (?,?)";
    sms_DB.query(Instructor, [instr_ID, instr_Name], (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('instructor uploaded to sms-database');
    });
});

router.post('/uploadCourses', (req, res) => {
    let instr_ID = req.body.instr_ID;
    let CRN = req.body.CRN;
    let course_Name = req.body.course_Name;
    let semester = req.body.semester;
    let meeting_Time = req.body.meeting_Time;
    let location = req.body.location;
    let office_Hour = req.body.office_Hour;
    let course_Description = req.body.course_Description;
    let prereq = req.body.prereq;
    let course_Topics = req.body.course_Topics;
    
    let Course = "INSERT INTO courses (CRN, Course_Name, Semester, Meeting_Time, Location, Instructor_ID, Office_Hours, Course_Description, Prerequisites, Course_Topics) VALUES ((SELECT `CRN` FROM `syllabus` WHERE `CRN` LIKE ?),?,?,?,?,(SELECT Instructor_ID FROM instructors WHERE `Instructor_ID`=?),?,?,?,?)";
    sms_DB.query(Course, [CRN, course_Name, semester, meeting_Time, location, instr_ID, office_Hour, course_Description, prereq, course_Topics], (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('courses uploaded to sms-database');
    });
});

///////////////////////////////////////////////////////////

//Create database
router.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE smsdatabase';
    sms_DB.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

//Create Syllabus table
router.get('/createsyllabus', (req, res) => {
    let sql = "CREATE TABLE `smsdatabase`.`syllabus` (`CRN` VARCHAR(8) NOT NULL, `Uploaded_SYL` BLOB NULL, PRIMARY KEY (`CRN`));";
    sms_DB.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('syllabus table created...');
    });
});

//Create Instructor table
router.get('/createinstructors', (req, res) => {
    let sql = "CREATE TABLE `smsdatabase`.`instructors` (`Instructor_ID` DECIMAL(9) NOT NULL, `Instructor_Name` VARCHAR(225) NOT NULL, PRIMARY KEY (`Instructor_ID`));";
    sms_DB.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('instructor table created...');
    });
});

//Create Course table
router.get('/createcourse', (req, res) => {
    let sql = "CREATE TABLE `smsdatabase`.`courses` (`CRN` VARCHAR(8) NOT NULL, `Course_Name` VARCHAR(45) NOT NULL, `Semester` VARCHAR(7) NOT NULL, `Meeting_Time` VARCHAR(40) NULL, `Location` VARCHAR(45) NULL, `Instructor_ID` DECIMAL(9) NOT NULL, `Office_Hours` VARCHAR(15) NULL, `Course_Description` TEXT(1000) NOT NULL, `Prerequisites` VARCHAR(100) NOT NULL, `Course_Topics` VARCHAR(45) NULL, PRIMARY KEY (`CRN`), FOREIGN KEY (`Instructor_ID`) REFERENCES instructors(`Instructor_ID`), FOREIGN KEY (`CRN`) REFERENCES syllabus(`CRN`));";
    sms_DB.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('courses table created...');
    });
});

module.exports = router;
