let mongoose = require('mongoose');

let IngredientSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    unit: String
});

IngredientSchema.pre('remove', function (next) {
    this.model('Recipe').remove({
        ingredients: this_.id
    }, next);
})

mongoose.model('Ingredient', IngredientSchema);