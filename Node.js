const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "youtube_bookmarks"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

app.post("/save", (req, res) => {
  const { userId, videoId, time, desc } = req.body;
  db.query("INSERT INTO bookmarks SET ?", { userId, videoId, time, desc }, (err) => {
    if (err) throw err;
    res.send({ message: "Bookmark saved!" });
  });
});

app.get("/bookmarks/:userId", (req, res) => {
  db.query("SELECT * FROM bookmarks WHERE userId = ?", [req.params.userId], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete("/delete/:id", (req, res) => {
  db.query("DELETE FROM bookmarks WHERE id = ?", [req.params.id], (err) => {
    if (err) throw err;
    res.send({ message: "Bookmark deleted!" });
  });
});

app.listen(3000, () => console.log("Server running on port 3000")); Explain each and every line of code
