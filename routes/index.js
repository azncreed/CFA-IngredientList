var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient');
const ingredientController = require('../controllers/ingredientController');
/* GET home page. */
router.get('/', ingredientController.getIngredients);

router.post('/', (req, res) => {
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/');
    });
});

router.get('/ingredients/:id/edit', (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      res.render('editIngredient', {ingredient: ingredient});
    });
});

router.post('/ingredients/:id/edit', (req, res) => {
  console.log('reqy.body:', req.body);
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true //returns new ingredient
  })
    .then(ingredient => {
      res.redirect('/')
    });
});

module.exports = router;
