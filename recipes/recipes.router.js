const express = require('express');

const Recipes = require('./recipes-model');
 
const router = express.Router();

router.get('/', (req, res) =>{
    Recipes.getRecipes()
    .then(recipes => { 
        res.json(recipes);
    })
    .catch(error => {
        res.status(500).json(
            'failed to get recipes' + error.message
        )
    })
});


module.exports = router;