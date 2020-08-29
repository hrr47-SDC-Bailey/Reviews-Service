const express = require('express');
const db = require('./database/db.js');
const path = require('path');

const app = express();

app.use(express.json());
app.use('/hostels/:hostel_id', express.static(path.join(__dirname, '../public')));


app.get('/hostels/:id/api/reviews', (req, res) => {
  const queryStr = `SELECT * FROM reviews INNER JOIN authors ON reviews.author_id = authors.id WHERE reviews.hostel_id = ${req.params.id}`;
  db.connection.query(queryStr, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('done');
      res.json(response);
    }
  });
});

app.post('/hostles/:id/api/reviews', (req, res) => {
  const total = ((req.body.security + req.body.location + req.body.staff + req.body.atmosphere + req.body.cleanliness + req.body.facilities + req.body.value) / 7).toFixed(1);
  const queryStr =`INSERT INTO authors (authdescription, name, gender, age_group, picture_url) VALUES ("${req.body.authdescription}", "${req.body.name}", "${req.body.gender}", "${req.body.age_group}", "${req.body.picture_url}");
  SELECT id INTO @last_author_id FROM authors WHERE authors.name = "${req.body.name}";
  INSERT INTO reviews (hostel_id, author_id, description, security, location, staff, atmosphere, cleanliness, facilities, value, total, created_at ) VALUES (${req.params.id}, @last_author_id, "${req.body.description}", ${req.body.security}, ${req.body.location}, ${req.body.staff}, ${req.body.atmosphere}, ${req.body.cleanliness}, ${req.body.facilities}, ${req.body.value}, ${total}, "${req.body.created_at}");`;
  db.connection.query(queryStr, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('done');
      res.json(response);
    }
  });
});

app.put('/hostles/:id/api/reviews', (req, res) => {
  const total = ((req.body.security + req.body.location + req.body.staff + req.body.atmosphere + req.body.cleanliness + req.body.facilities + req.body.value) / 7).toFixed(1);
  const queryStr =`SELECT id INTO @last_author_id FROM authors WHERE authors.name = "${req.body.name}";
  UPDATE reviews SET hostel_id = ${req.params.id}, author_id = @last_author_id, description = "${req.body.description}", security =  ${req.body.security}, location = ${req.body.location}, staff = ${req.body.staff}, atmosphere = ${req.body.atmosphere}, cleanliness = ${req.body.cleanliness}, facilities = ${req.body.facilities}, value = ${req.body.value}, total = ${total}, created_at = "${req.body.created_at}" WHERE reviews.id = ${req.body.reviewId};`;
  db.connection.query(queryStr, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('done');
      res.json(response);
    }
  });
});

app.delete('/hostles/:id/api/reviews', (req, res) => {

  const queryStr =`DELETE FROM reviews WHERE reviews.id = ${req.body.reviewId};`;
  db.connection.query(queryStr, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('done');
      res.json(response);
    }
  });
});


app.listen(3001, () => console.log('listening on 3001'));
