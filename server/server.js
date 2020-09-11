const express = require('express');
const db = require('./database/db.js');
const path = require('path');

require('newrelic');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../public')));


app.get('/hostels/:id/api/reviews', (req, res) => {
  const queryStr = `SELECT * FROM user_reviews WHERE hostileId= '${'hostel' + req.params.id }'`;
  db.connection.execute(queryStr, function(err, result) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('got user reviews for hostel' + req.params.id);
      res.json(result.rows);
    }
    console.log();
  });
});

// app.post('/hostles/:id/api/reviews', (req, res) => {
//   const total = ((req.body.security + req.body.location + req.body.staff + req.body.atmosphere + req.body.cleanliness + req.body.facilities + req.body.value) / 7).toFixed(1);
//   const newReview = new models.instance.reviews({
//     hostileId: req.params.id,
//     review: req.body.description,
//     user: req.body.name,
//     description: req.body.authdescription,
//     age: req.body.age_group,
//     gender: req.body.gender,
//     security: req.body.security,
//     location: req.body.location,
//     staff: req.body.staff,
//     atmosphere: req.body.atmosphere,
//     cleanliness: req.body.cleanliness,
//     facilities: req.body.facilities,
//     value: req.body.value,
//     total: total,
//     date: req.body.created_at,
//   });
//   newReview.save(function(err){
//     if(err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//     console.log('Added review from: ' + req.body.name + 'created at: ' + req.body.created_at);
//     res.json(response);
//     }
//   });

// });

// app.delete('/hostles/:id/api/reviews', (req, res) => {

//   const queryStr =`DELETE FROM reviews WHERE reviews.id = ${req.body.reviewId};`;
//   db.connection.query(queryStr, (err, response) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       console.log('done');
//       res.json(response);
//     }
//   });
// });


app.listen(port, () => console.log('listening on 3001'));
