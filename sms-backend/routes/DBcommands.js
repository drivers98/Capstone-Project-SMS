var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('mysql');
var router = express.Router();
var upload = require('express-fileupload')

router.use(upload())

var sms_DB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'smsdatabase'
});

var cookieParser = require('cookie-parser');
var session = require('express-session');

var bcrypt = require('bcrypt');
var saltRounds = 10;


router.use(cookieParser());
router.use(bodyParser.urlencoded({ extedned: true }));

router.use(session({
    key: "userID",
    secret: "thisSessionIsSecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1000 * 60 * 45
    },
}));

///////////////////////////////////////////////////////////////
//Instructor login and registration


router.get('/logoutInstructor', (req, res) => {
    req.session.destroy();
})

//Check for session
router.get('/loginInstructor', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    }
    else {
        res.send({ loggedIn: false });
    }
});

//Check for login
router.post('/loginInstructor', (req, res) => {
    let email = req.body.email;
    let password = req.body.password

    let login = "SELECT * FROM instructors WHERE Email = ?";
    let query = sms_DB.query(login, [email], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].Password, (err, response) => {
                if (err) console.log(err);
                if (response) {
                    req.session.user = result;
                    res.send(result);
                }
                else {
                    res.send({ message: "Invalid Password" });
                }
            })
        }
        else {
            res.send({ message: "Invalid Email" });
        }
    });
});

//register instructor
router.post('/registerInstructor', (req, res) => {
    let instr_ID = req.body.instr_ID;
    let instr_Name = req.body.instr_Name;
    let email = req.body.email;
    let password = req.body.password
    let confirmPassword = req.body.confirmPassword
    let messages = [];

    if(!instr_Name){ messages.push("Please Enter Your Name")};
    if(!instr_ID){ messages.push("Please Enter Your Instructor ID")};
    if(instr_ID.length != 8 && instr_ID.length > 0){messages.push("Make sure that ID is exactly 8 digits")} 
    if(!email){ messages.push("Please Enter Your Email")};
    if(email && !email.includes("@kent.edu")){messages.push("Please enter a @kent.edu email")}
    if(!password){ messages.push("Please Enter a Password")};
    if(password < confirmPassword || password > confirmPassword){messages.push("Passwords do not match")}

    if(messages.length > 0){
        res.send({messages})
    }
    else{
     bcrypt.hash(password, saltRounds, (err, hash) => {

         if (err) {
            console.log(err);
         }

         let Instructor = "INSERT INTO instructors (Instructor_ID, Instructor_Name, Email, Password) VALUES (?,?,?,?)";
         let query = sms_DB.query(Instructor, [instr_ID, instr_Name, email, hash], (err, result) => {
             if (err) {
                 console.log(err);
                 if (err.errno == 1062) {
                     messages.push("This user already exists")
                     res.send({ messages })
                 }
             }
             res.send({ messages })
             console.log(result);
         });
    })   
    }
});

///////////////////////////////////////////////////////////////

router.get('/viewSyllabus:keyword', (req, res) => {
    let CRN = req.params.keyword;
    let getSYL = 'SELECT Uploaded_SYL FROM `syllabus` WHERE CRN = ?'
    let query = sms_DB.query(getSYL, CRN, (err, result) => {
        if (err)  console.log(err);
        if (result) {
            console.log(result);
            res.send(result)
        }
    })
})

router.get('/showSyllabus/:keyword', (req, res) => {
    let keyword = req.params.keyword;
    if (keyword.includes("CS")) {
        let instructorSelect = "SELECT * FROM `courses` WHERE CRN = ?"
        let query = sms_DB.query(instructorSelect, keyword, (err, result) => {
            if (err)  console.log(err);
            if (result) {
                res.send(result)
            }
        })
    }
    else {
        let instructorSelect = "SELECT * FROM `courses` WHERE Instructor_ID = (SELECT Instructor_ID FROM instructors Where Instructor_Name = ?)"
        let query = sms_DB.query(instructorSelect, keyword, (err, result) => {
            if (err)  console.log(err);
            if (result.length != 0) {
                res.send(result)
            }
            else {
                let courseNameSelect = "SELECT * FROM `courses` WHERE Course_Name = ?"
                let query = sms_DB.query(courseNameSelect, keyword, (err, result) => {
                    if (err)  console.log(err);
                    res.send(result)
                })

            }
        })
    }
});

///////////////////////////////////////

router.delete('/deleteSyllabus:CRN', (req, res) => {
    let CRN = req.params.CRN;
    let deleteCourse = "DELETE FROM courses WHERE CRN = ?"
    let query = sms_DB.query(deleteCourse, CRN, (err, result) => {
        if (err)  console.log(err);
    })
    let deleteSyllabus = "DELETE FROM `syllabus` WHERE `syllabus`.`CRN` = ?" 
    let query2 = sms_DB.query(deleteSyllabus, CRN, (err, result) => {
        if(err)  console.log(err);
    })
})

router.post('/uploadSyllabus', (req, res) => {
    let CRN = req.body.CRN;

   if(req.files){
        console.log(req.files)
    } 

    
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
    let SYL = req.body.SYL;

    let messages = [];

    if(!CRN){messages.push("Please Enter CRN")}
    if (CRN && !CRN.includes("CS ") && CRN.length !== 8) {
        messages.push("Invaild CRN. Ex: 'CS 000000'");
    }
    if(!course_Name){messages.push("Please Enter the Course Name")}
    if(!semester){messages.push("Please Enter the Semester")}
    if (semester && !semester.includes("Spring") && !semester.includes("Fall") && !semester.includes("Summer")) {
        messages.push("Invalid Semester EX: Spring 2020")
    }
    if (!meeting_Time){messages.push("Please enter a Meeting Time")}
    if(!course_Description){messages.push("Please Enter a Description")}
    if(!prereq){messages.push("Please Enter Prequesites(if None Please enter None)")}

    
    if(messages.length > 0){
        res.send({messages})
    }
    else{
        let Syllabus = "INSERT INTO syllabus (CRN, Uploaded_SYL) VALUES (?,?)";
        let query2 = sms_DB.query(Syllabus, [CRN, SYL], (err, result) => {
            if (err)  console.log(err);
        });
        let Course = "INSERT INTO courses (CRN, Course_Name, Semester, Meeting_Time, Location, Instructor_ID, Office_Hours, Course_Description, Prerequisites, Course_Topics) VALUES ((SELECT `CRN` FROM `syllabus` WHERE `CRN` LIKE ?),?,?,?,?,(SELECT Instructor_ID FROM instructors WHERE `Instructor_ID`=?),?,?,?,?)";
        let query = sms_DB.query(Course, [CRN, course_Name, semester, meeting_Time, location, instr_ID, office_Hour, course_Description, prereq, course_Topics], (err, result) => {
            if (err)  console.log(err);
            console.log(result)
            res.send({messages})
        });
    }
});

///////////////////////////////////////////////////////////

//Create database
router.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE smsdatabase';
    sms_DB.query(sql, (err, result) => {
        if (err)  console.log(err);
        console.log(result);
        res.send('Database created...');
    });
});

//Create Syllabus table
router.get('/createsyllabus', (req, res) => {
    let sql = "CREATE TABLE `smsdatabase`.`syllabus` (`CRN` VARCHAR(8) NOT NULL, `Uploaded_SYL` VARCHAR(225) NULL, PRIMARY KEY (`CRN`));";
    sms_DB.query(sql, (err, result) => {
        if (err)  console.log(err);
        console.log(result);
        res.send('syllabus table created...');
    });
});

//Create Instructor table
router.get('/createinstructors', (req, res) => {
    let sql = "CREATE TABLE `smsdatabase`.`instructors` (`Instructor_ID` DECIMAL(9) NOT NULL, `Instructor_Name` VARCHAR(225) NOT NULL, `Email` VARCHAR(225) NOT NULL, `Password` VARCHAR(225) NOT NULL, PRIMARY KEY (`Instructor_ID`));";
    sms_DB.query(sql, (err, result) => {
        if (err)  console.log(err);
        console.log(result);
        res.send('instructor table created...');
    });
});

//Create Course table
router.get('/createcourse', (req, res) => {
    let sql = "CREATE TABLE `smsdatabase`.`courses` (`CRN` VARCHAR(8) NOT NULL, `Course_Name` VARCHAR(45) NOT NULL, `Semester` VARCHAR(7) NOT NULL, `Meeting_Time` VARCHAR(40) NULL, `Location` VARCHAR(45) NULL, `Instructor_ID` DECIMAL(9) NOT NULL, `Office_Hours` VARCHAR(15) NULL, `Course_Description` TEXT(1000) NOT NULL, `Prerequisites` VARCHAR(100) NOT NULL, `Course_Topics` VARCHAR(45) NULL, PRIMARY KEY (`CRN`), FOREIGN KEY (`Instructor_ID`) REFERENCES instructors(`Instructor_ID`), FOREIGN KEY (`CRN`) REFERENCES syllabus(`CRN`));";
    sms_DB.query(sql, (err, result) => {
        if (err)  console.log(err);
        console.log(result);
        res.send('courses table created...');
    });
});

//

module.exports = router;
