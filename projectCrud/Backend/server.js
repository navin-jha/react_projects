import mysql from "mysql2";
import express from "express";
// import cors from "cors";

const app = express();
app.use(express.json());
// app.use(cors({
//     origin: "http://localhost:5173",
//     Credential: true
// }));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "n@123",
    database: "projectcrud"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
        return;
    }
    console.log("Connected to database");
});
app.post("/api/insert", (req, res) => {
    const { name, password, email } = req.body;
    const query = "insert into users (name, password, email) value (?, ?, ?)";
    const values = [name, password, email];
    db.query(query, values, (err, result) => {
        if (err) {
            console.log("Error inserting data:", err);
            res.status(500).json({ error: "Insert failed" });
        } else {
            res.json({message: "Data inserted successfully" });
        }
    });
});

app.get("/api/allUser", (req, res) => {
    const query = "select * from users";
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
});

app.delete("/api/delete/:id", (req, res) => {
    const { id } = req.params;
    const query = "delete from users where id = ?";
    db.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: "Delete failed" });
        } else {
            res.json({ message: "Data deleted successfully" });
        }
    });
});
app.put("/api/update/:id", (req, res) => {
    const { id } = req.params;
    const { name, password, email } = req.body;
    const query = `update users set name = ?, password = ?, email = ?   where id=?`;
    const value= [name, password, email, id];
    db.query(query, value, (err, result) => {
        if (err) {
            res.status(500).json({ error: "update false" });
        } else {
            res.json({ message: "data edit sucessfully"});
        }
    })
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
