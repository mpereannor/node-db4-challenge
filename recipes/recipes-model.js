const db = require('../data/db.config');

module.exports = { 
    getRecipes,
    getShoppingList
    // getInstructions,
};

function getRecipes(){ 
    return db('recipes')
}


function getShoppingList(recipe_id) {

    /*
    select re.recipe_name as recipeName,
        i.ingredient_name as ingredientName,
        i.ingredient_qty as ingredientQty
    from 
        recipes_ingredients as ri
    join
        recipes as re
    on 
        re.id = ri.recipe_id
    join
        ingredients as i
    on 
        i.id = ri.ingredient_id;
    where
        ri.recipe_id = re.id
    */
    
    return db('recipes_ingredients as ri')
    .join('recipes as re', 're.id', 'ri.recipe_id')
    .join('ingredients as i','i.id', 'ri.ingredient_id')
    .select(
        're.recipe_name as recipeName',
        'i.ingredient_name as ingredientName',
        'i.ingredient_qty as ingredientQty'
        )
    .where('ri.recipe_id', recipe_id)
}
