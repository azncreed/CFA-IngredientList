const mongoose = require('mongoose')
// destructuring
const { Schema } = mongoose;

// recipes is the db we are creating
mongoose.connect('mongodb://localhost/recipes')
const { connection: db } = mongoose;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('connected to the recipe databse')
});

const ingredientsSchema = new Schema({
  name: {
    type: String,
    trim: true //name='      Sugar - it will only be Sugar and remove whitespsace'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

const Ingredient = mongoose.model('Ingredient', ingredientsSchema);
module.exports = Ingredient;
