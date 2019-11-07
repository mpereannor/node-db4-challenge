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

router.get('/:id/shoppinglist' ,(req, res) => {
    const {id} = req.params;
    Recipes.getShoppingList(id)
    .then(shoplist => { 
        res.json(shoplist);
    })
    .catch(error => {
        res.status(500).json(
            'failed to get list' + error.message
        )
    })
});

router.get('/:id/instructions', (req, res ) => { 
    const {id} = req.params;
    Recipes.getInstructions(id)
    .then(ins => { 
        res.json(ins);
    })
    .catch(error => {
        res.status(500).json(
            'failed to get instructions' + error.message 
        )
    })
})
module.exports = router;