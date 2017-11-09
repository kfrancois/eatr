let mongoose = require('mongoose');

let IngredientSchema = new mongoose.Schema({
    name: String,
    amount: Number
});

mongoose.model('ingredient', IngredientSchema);