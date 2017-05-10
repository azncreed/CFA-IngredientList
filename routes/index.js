var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient');
const ingredientController = require('../controllers/ingredientController');

/* GET home page. */
router.get('/', ingredientController.getIngredients);

router.post('/', ingredientController.dirIngredients);

router.get('/ingredients/:id/edit', ingredientController.findIngredients);

router.get('/ingredients/:id/delete', ingredientController.deleteIngredients);

router.post('/ingredients/:id/edit', ingredientController.editIngredients);

router.get('/api/:id', ingredientController.apiIngredients);


module.exports = router;
