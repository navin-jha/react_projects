// const mysql = require('mysql2');
// const Express = require('express');
// import mysql from 'mysql2';
// import Express from 'express';
// const app = Express();

// const db = mysql.createConnection({
//     host: "localhost",
//     password: "n@123",
//     user: "root",
//     database: 'db'
// })

// db.connect(err => {
//     if (err)
//         console.log("connected to error", err)
//     else {
//         console.log("connected to database");
//     }

//     const insertQuery = `insert into db_table (id, name, age) values (?, ?, ?)`
//     const insertValues = [6, 'mohit', 'mohit@gmail2342'];

//     db.query(insertQuery, insertValues, (insertErr, insertResult) => {
//         if (insertErr) {
//             return console.error("insert err:", insertErr);
//         }
//         console.log("insert ID:", insertResult);

//     })
//     app.listen(3000, () => {
//         console.log("http://localhost:3000");
//     })

// })


// // function sayHello() {
// //     console.log( "Hello " + this.name);
// // }

// // var obj = { name: "Sandy" };
// // sayHello.call(obj);
// // // sayHello.call(obj);	

// // let a = [1, 'A', 2, 'B', 3, 'C'];
// // let numArr= []
// // let charArr= []
// // const result = a.map((item) => { 
// //     if (item) 
// //         {
// //         typeof item === Number() ? numArr.push() : charArr.push()
// //         }
// // })
// // console.log(numArr)
// // console.log(charArr)
// // let a = [1, 'A', 2, 'B', 3, 'C'];
// // let numArr = [];
// // let charArr = [];

// // a.forEach((item) => {
// //     if (typeof item === "number") {
// //         numArr.push(item);
// //     } else if (typeof item === "string") {
// //         charArr.push(item);
// //     }
// // });

// // console.log(numArr); // [1, 2, 3]
// // console.log(charArr); // ['A', 'B', 'C']

// // console.log(a);
// // console.log(b);
// // var a = b = 10;

// // const first = () => {
// //     console.log(this.name);
// // }
// // first.call({ name: "mohan" });

// // console.log("8"+b*5);


// import mysql from "mysql2"
// import express from 'express'

// const app = express

// const db = mysql.createConnection({
//     database: "db_test",
//     password: "n@123",
//     host: "localhost",
// });

// db.connect(err => {
//     if (err) {
//         console.error("connection faild!")
//     } else {
//         console.log("Connected Sucessfully!")
//     }
// })
// app.post("/create", (req, res) => {
//     const { name, email } = req.body
//     const sql = `insert into db_table(name, email) value(? ?)`
//     db.query(sql, (result, err) => {
//         if (err) {
//             return res.json({ error: err })
//         }
//         res.json({ message: "Data Inserted!", insertId: result.insertId });

//     })

// })

// const arr= [1, 2, 4, 5, 6, 9, 8, 7, 3];

// function maxProduct(arr){
//         const shortArr= arr.sort((a, b)=>b-a
//     );
//         console.log(shortArr);
//         // for(let i=0; i<arr.length; i++){
//         //         console.log(shortArr[0], shortArr[1]);
//         // }
//         // return shortArr[0]*shortArr[1];
// }

// console.log(maxProduct(arr));

function restArr( ...Rest){
        return Rest;
}

console.log(restArr(1,[3, 32], 4,"jnjncwidj"))