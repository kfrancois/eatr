let mongoose = require('mongoose');

let RecipeSchema = new mongoose.Schema({
    title: String,
    rating: Number,
    ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}],
    steps:  [{type: mongoose.Schema.Types.ObjectId, ref: 'Step'}],
});

mongoose.model('Recipe', RecipeSchema);