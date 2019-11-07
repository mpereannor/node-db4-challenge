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

// GET /api/recipes/:id/shoppingList
router.get('/:id/shoppingList' ,(req, res) => {
    const {recipe_id} = req.params;
    Recipes.getShoppingList(recipe_id)
    .then(shoplist => { 
        res.json(shoplist);
    })
    .catch(error => {
        res.status(500).json(
            'failed to get list' + error.message
        )
    })
});
module.exports = router;