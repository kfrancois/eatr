let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Recipe = mongoose.model('Recipe');
let Step = mongoose.model('Step');
let Ingredient = mongoose.model('Ingredient');


/* GET home page. */
router.get('/API/recipes/', function (req, res, next) {
    let query = Recipe.find().populate('ingredients').populate('steps');
    query.exec((err, recipes) => {
        if (err) return err;
        res.json(recipes);
    })
});

router.post('/API/recipes/', function (req, res, next) {

    let recipe = new Recipe({
        title: req.body.title,
        rating: req.body.rating
    });

    Ingredient.create(req.body.ingredients, function (err, result) {
        if (err) {
            return next(err);
        }
        recipe.ingredients = result;
    });

    Step.create(req.body.steps, function (err, result) {
        if (err) {
            return next(err);
        }
        recipe.steps = result;
    });

    recipe.save(function (err, post) {
        if (err) {
            return next(err);
        }
        res.json(recipe);
    });
});

module.exports = router;