const express = require("express")
const mysql = require("mysql")
const cors = require('cors');
// const { createConnection } = require("net");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "signup"
})

app.post('/signup',(req,res) => {
     const sql = "INSERT INTO login (`Name`,`email`,`password`,`mobile`,`address`,`job`,`blood`,`hobby`) VALUES (?)";
     const values = [
        req.body.Name,
        req.body.email,
        req.body.password,
        req.body.mobile,
        req.body.address,
        req.body.job,
        req.body.blood,
        req.body.hobby

     ]
     db.query(sql,[values],(err,data) => {
        if(err){
            return res.json("Error")
        }
        return res.json(data);
     })
})

app.post('/login',(req,res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
   
    db.query(sql,[req.body.email,req.body.password],(err,data) => {
       if(err){
           return res.json("Error")
       }
       if(data.length>0){
        return res.json("Success");
       }
       else{
        return res.json("Fail");
       }
    })
})

app.get('/users', (req, res) => {
    const { email } = req.query;
    const sql = `SELECT * FROM login WHERE email = ?`;
    
    db.query(sql, [email], (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      
      res.json(data);
    });
  });







app.listen(8086,()=> {
    console.log("listening");
})