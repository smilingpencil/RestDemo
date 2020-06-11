var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/devices', function(req, res, next) {
  res.send(devices);
});

var devices = [
  {name:'Crusing Machine', sensors: [
    {name:'temp-sensor', value:100},
    {name:'humid-sensor', value:10},
  ]},
  {name:'Rotary machine', sensors: [
    {name:'Rotation-speed', value:1000},
    {name:'count', value:599},
  ]}
]

module.exports = router;
