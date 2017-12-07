let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let jwt = require('express-jwt');

let Recipe = mongoose.model('Recipe');
let Ingredient = mongoose.model('Ingredient');
let User = mongoose.model('User');

let auth = jwt({
    secret: process.env.BACKEND_SECRET,
    userProperty: 'payload'
});

router.get('/recipes/', auth, function (req, res, next) {
    let query = User.findById(req.payload._id).populate('recipes');
    query.exec((err, user) => {
        if (err) {
            return next(err);
        }
        res.json(user.recipes);
    })
});

router.get('/recipes/user/:user', auth, function (req, res, next) {
    let query = User.findById(req.params.user).populate('recipes');
    query.exec((err, user) => {
        if (err) {
            return next(err);
        }

        res.json(user.recipes);
    })
});

router.get('/recipes/following', auth, function (req, res, next) {
    let query = User.findById(req.payload._id).populate({
        path: 'recipes',
        path: 'following',
        populate: {
            path: 'recipes'
        }
    });
    query.exec((err, user) => {
        if (err) {
            return next(err);
        }
        let recipes = [].concat(...user.following.map(u => u.recipes));
        res.json(recipes);
    })
});

router.get('/recipes/all', auth, function (req, res, next) {
    let query = Recipe.find().sort({
        date: -1
    });
    query.exec(function (err, recipes) {
        if (err) return next(err);
        res.json(recipes);
    });
});

router.post('/recipes/', auth, function (req, res, next) {

    let recipe = new Recipe({
        name: req.body.name,
        user: req.payload._id,
        people: req.body.people,
        category: req.body.category,
        image: req.body.image,
        description: req.body.description,
        time: req.body.time,
        steps: req.body.steps,
        created: Date.now()
    });

    Promise.all(req.body.ingredients.map(i => new Ingredient(i).save())).then(result => {
        recipe.ingredients = result;
        recipe.save(function (err, post) {
            if (err) {
                return next(err);
            }
            User.findByIdAndUpdate({
                '_id': req.payload._id
            }, {
                $push: {
                    'recipes': recipe
                }
            }, function (err, result) {
                if (err) {
                    return next(err);
                }
                res.json(post)
            });
        })
    });
});

router.post('/subscribe/', auth, function (req, res, next) {
    let query = User.findByIdAndUpdate({
        '_id': req.payload._id
    }, {
        $push: {
            'following': req.body.user
        }
    }, function (err, result) {
        if (err) {
            return next(err);
        }
        res.json("ok");
    });
});

router.post('/unsubscribe/', auth, function (req, res, next) {
    let query = User.update({
        '_id': req.payload._id
    }, {
        $pull: {
            'following': req.body.user
        }
    }, function (err, result) {
        if (err) {
            return next(err);
        }
        res.json({
            'response': 'ok'
        });
    });
});

router.post('/checkSubscription', auth, function (req, res, next) {
    let query = User.findById(req.payload._id);
    query.exec(function (err, result) {
        if (result.following.indexOf(req.body.user) !== -1) {
            res.json({
                'result': 'subscribed'
            })
        } else {
            res.json({
                'result': 'not subscribed'
            })
        }
    });
});

router.post('/getUsername', auth, function (req, res, next) {
    User.findById(req.body.user, function (err, result) {
        if (result) {
            res.json({
                'username': result.username
            });
        } else {
            res.json({});
        }
    });
});


router.param('recipe', function (req, res, next, id) {
    let query = Recipe.findById(id);
    query.exec(function (err, recipe) {
        if (err) {
            return next(err);
        }
        if (!recipe) {
            return next(new Error('not found ' + id));
        }
        req.recipe = recipe;
        return next();
    });
});

router.get('/recipe/:recipe', auth, function (req, res) {
    req.recipe.populate('ingredients', function (err, rec) {
        if (err) return next(err);
        User.findById(rec.user, function (err, user) {
            if (err) return next(err);

            Promise.resolve(() => {
                rec.user._id = "abc"
            }).then(() => res.json(rec));
        });

    });
});



module.exports = router;