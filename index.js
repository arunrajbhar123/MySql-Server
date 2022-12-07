const express = require("express");
const connection = require("./cofing/db");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  connection.query("SELECT * from new_table", (err, row, fields) => {
    if (!err) {
      res.send(row);
    } else {
      console.log("err", err);
    }
  });
});

app.post("/", (req, res) => {
  const { name, role, age } = req.body;
  const sql = `INSERT INTO new_table (name,age,role) VALUES ('${name}','${age}','${role}')`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send("1 record inserted");
  });
});

app.delete("/", (req, res) => {
  const { name } = req.body;
  const sql = `DELETE FROM new_table WHERE name='${name}'`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send("1 record deleted");
  });
});

app.patch("/", (req, res) => {
  const {name,oldname} = req.body;
  const sql = `UPDATE new_table SET name='${name}' WHERE name='${oldname}'`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send("1 record update");
  });
});

app.listen(8080, () => {
  console.log("server is running on port: 8080");
});
