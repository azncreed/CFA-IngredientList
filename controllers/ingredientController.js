
const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient');

exports.getIngredients = (req, res) => {
  Ingredient.find()
    .then(ingredients => {
      res.render('index', {
        title: 'Ingredients',
        ingredients: ingredients
       });
    });
};

exports.findIngredients = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      res.render('editIngredient', {ingredient: ingredient});
    });
};

exports.dirIngredients = (req, res) => {
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/');
    });
};

exports.editIngredients = (req, res) => {
	console.log('reqy.body:', req.body);
    Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true //returns new ingredient
  })
    .then(ingredient => {
      res.redirect('/')
    });
};

exports.deleteIngredients = (req, res) => {
	Ingredient.findOne({ _id: req.params.id }).remove((err, data) => {
    	res.redirect('/')
    });
};

// API

exports.apiIngredientsShow = (req, res) => {
	Ingredient.findOne({ _id: req.params.id })
     .then((ingredient) => {
       res.json(ingredient)
     });
};

exports.apiIngredientsIndex = (req, res) => {
  Ingredient.find()
     .then(ingredients => {
       res.json(ingredients)
     });
};

exports.apiIngredientsCreate = (req, res) => {
  const name = req.body.name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(ingredient => {
      res.json(ingredient);
    });
};
