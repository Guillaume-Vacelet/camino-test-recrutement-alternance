// imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// packages use
const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

// database
const db = require('mysql');

pool =  db.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '12345',
  database : 'products'
});

app.get("/items", (req,res) => {
  try {
    pool.getConnection((err, connection) => {
      if(err) throw err;
      console.log('connected as id ' + connection.threadId);
      connection.query("SELECT * FROM PRODUCTS", (err, rows) => {
          connection.release(); // return the connection to pool
          if(err) throw err;
          res.status(200).send(rows);
        });
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/item", (req,res) => {
  try {
    pool.getConnection((err, connection) => {
      if(err) throw err;
      console.log('connected as id ' + connection.threadId);
      connection.query(`SELECT * FROM PRODUCTS WHERE id=${req.query.id}`, (err, rows) => {
          connection.release(); // return the connection to pool
          if(err) throw err;
          res.status(200).send(rows);
        });
    });
  } catch (err) {
    console.log(err);
  }
});

app.post('/item/edit-title', (req, res) => {
  console.log("PARAMS = ");
  console.log(req.query);
  try {
    db.query(`UPDATE PRODUCTS SET title=${req.title} WHERE id=${req.query.id}`)
    res.status(200).send({ msg: "Updated product " + req.query.id + " title."});
  } catch (err) {
    console.log(err);
  }
})

app.post('/item/edit-visibility', (req, res) => {
  console.log("PARAMS = ");
  console.log(req.query);
  try {
    db.query(`UPDATE PRODUCTS SET visibility = NOT visibility WHERE id=${req.query.id}`)
    res.status(200).send({ msg: "Updated product " + req.query.id + " visibility."});
  } catch (err) {
    console.log(err);
  }
})

app.listen(process.env.PORT || 8081)