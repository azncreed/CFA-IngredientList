const mongoose = require('mongoose');
// destructuring
const { Schema } = mongoose;



const ingredientsSchema = new Schema({
  name: {
    type: String,
    trim: true //name='      Sugar - it will only be Sugar and remove whitespsace'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Ingredient = mongoose.model('Ingredient', ingredientsSchema);
module.exports = Ingredient;
