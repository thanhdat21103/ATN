var express = require('express');
const ToyModel = require('../models/ToyModel');
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res) =>{
  var toys = await ToyModel.find();
  res.render('list',{toys:toys});
});
router.get('/add', async(req, res) =>{
  res.render('add');
})
router.post('/add', async(req, res) =>{
  await ToyModel.create(req.body);
  res.redirect('/');
})
router.get('/edit/:id', async(req, res) =>{
  var toy = await ToyModel.findById(req.params.id);
  console.log(req.params.id);
  res.render('edit', {toy: toy});
});
router.post('/edit/:id', async(req, res) =>{
  var toy = await ToyModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
});
router.get('/delete/:id', async(req, res) =>{
  await ToyModel.findByIdAndDelete(req.params.id);
  res.redirect('/');
});
router.get('/drop', async(req, res) =>{
  await ToyModel.deleteMany();
  res.redirect('/');
});
module.exports = router;
