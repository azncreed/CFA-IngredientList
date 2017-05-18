var express = require('express');
var router = express.Router();

const ingredientController = require('../controllers/ingredientController');

// index
router.get('/ingredients', ingredientController.apiIngredientsIndex);
// create
router.post('/ingredients', ingredientController.apiIngredientsCreate);
// show
router.get('/ingredients/:id', ingredientController.apiIngredientsShow);

module.exports = router;
