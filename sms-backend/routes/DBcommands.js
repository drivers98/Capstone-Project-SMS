var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('mysql');
var router = express.Router();
var cors = require("cors");

var sms_DB = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '',
    database  : 'smsdatabase'
});

router.use(cors())
router.use(bodyParser.urlencoded({extedned: true}))

///////////////////////////////////////////////////////////////
//Instructor login and registration

//Check for login
router.post('/loginInstructor', (req, res) => {
    let email = req.body.email;
    let password = req.body.password

    let login = "SELECT * FROM instructors WHERE Email = ? AND Password = ?";
    let query = sms_DB.query(login, [email, password], (err, result) => {
        if(err){ 
            res.send({err: err});
        }
        if (result.length > 0) {
            res.send(result);
        }
        else {
            res.send({ message: "invalid email or password" });
        }
    });
});

//register instructor
router.post('/registerInstructor', (req, res) => {
    let instr_ID = req.body.instr_ID;
    let instr_Name = req.body.instr_Name;
    let email = req.body.email;
    let password = req.body.password

    let Instructor = "INSERT INTO instructors (Instructor_ID, Instructor_Name, Email, Password) VALUES (?,?,?,?)";
    let query = sms_DB.query(Instructor, [instr_ID, instr_Name, email, password], (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('instructor uploaded to sms-database');
    });
});

///////////////////////////////////////////////////////////////

router.get('/showSyllabus/:keyword', (req, res) => {
    let keyword = req.params.keyword;
    let instructorSelect = "SELECT * FROM `courses` WHERE Instructor_ID = (SELECT Instructor_ID FROM instructors Where Instructor_Name = ?)"
    let query = sms_DB.query(instructorSelect, keyword, (err, result) => {
        if(err) throw err;
        if(result){
            res.send(result)
        }
    })
});

router.post('/uploadSyllabus', (req, res) => {
    let CRN = req.body.CRN;
    let SYL = req.body.SYL;

    let Syllabus = "INSERT INTO syllabus (CRN, Uploaded_SYL) VALUES (?,?)"; 
    let query = sms_DB.query(Syllabus, [CRN, SYL], (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('syllabus uploaded to sms-database');
    });
});

router.post('/uploadCourses', (req, res) => {
    // let instr_ID = req.body.instr_ID;
    // let CRN = req.body.CRN;
    // let course_Name = req.body.course_Name;
    // let semester = req.body.semester;
    // let meeting_Time = req.body.meeting_Time;
    // let location = req.body.location;
    // let office_Hour = req.body.office_Hour;
    // let course_Description = req.body.course_Description;
    // let prereq = req.body.prereq;
    // let course_Topics = req.body.course_Topics;
    let { CRN, course_Name, semester, meeting_Time, location, instr_ID, office_Hour, course_Description, prereq, course_Topics} = req.body;
    let errors = [];

    if(!CRN){errors.push("Please Enter CRN")}
    if(!course_Name){errors.push("Please Enter the CRN")}
    if(!semester){errors.push("Please Enter the Semester")}
    if(!instr_ID){errors.push("Please Enter Your KSU ID")}
    if(!course_Description){errors.push("Please Enter a Description")}
    if(!prereq){errors.push("Please Enter Prequesites(if None Please enter None)")}

    if(errors.length > 0) {
        res.render('upload', { 
            CRN, 
            course_Name, 
            semester, 
            meeting_Time, 
            location, 
            instr_ID, 
            office_Hour, 
            course_Description, 
            prereq, 
            course_Topics
        });
    }
    else {
        let Course = "INSERT INTO courses (CRN, Course_Name, Semester, Meeting_Time, Location, Instructor_ID, Office_Hours, Course_Description, Prerequisites, Course_Topics) VALUES ((SELECT `CRN` FROM `syllabus` WHERE `CRN` LIKE ?),?,?,?,?,(SELECT Instructor_ID FROM instructors WHERE `Instructor_ID`=?),?,?,?,?)";
        let query = sms_DB.query(Course, [CRN, course_Name, semester, meeting_Time, location, instr_ID, office_Hour, course_Description, prereq, course_Topics], (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('courses uploaded to sms-database');
        });
    }
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
    let sql = "CREATE TABLE `smsdatabase`.`instructors` (`Instructor_ID` DECIMAL(9) NOT NULL, `Instructor_Name` VARCHAR(225) NOT NULL, `Email` VARCHAR(225) NOT NULL, `Password` VARCHAR(225) NOT NULL, PRIMARY KEY (`Instructor_ID`));";
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

//

module.exports = router;
