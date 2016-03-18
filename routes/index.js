var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/rooms', function(req, res, next) {
  //go to the views directory
  //find a file named views
  //run it through the template engine (handlebars)
  //stick it in the layout
  //send it back to the browser
  res.render('room', {
    strawberry: req.body.roomName
  });
  // res.send(req.body.roomName.toUpperCase())
});

module.exports = router;
