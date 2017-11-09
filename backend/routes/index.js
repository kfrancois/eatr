let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let Recipe = mongoose.model('Recipe');

/* GET home page. */
router.get('/API/recipes/', function (req, res, next) {
    let query = Recipe.find().populate('steps').populate('ingredients');
    query.exec((err, recipes) => {
        if (err) return err;
        res.json(recipes);
    })
});

module.exports = router;