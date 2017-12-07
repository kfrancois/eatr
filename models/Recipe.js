let mongoose = require('mongoose');

let RecipeSchema = new mongoose.Schema({
    name: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    people: Number,
    category: String,
    image: String,
    description: String,
    time: String,
    steps: [String],
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
    }],
    created: {
        type: Date
    }
});

mongoose.model('Recipe', RecipeSchema);