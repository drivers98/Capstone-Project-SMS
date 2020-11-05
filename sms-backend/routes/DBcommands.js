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

router.get('/upload', (req, res) => {
    res.send('In database command router');
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
