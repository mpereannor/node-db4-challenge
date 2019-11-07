
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {
          recipe_id: 1, 
          ingredient_id: 2,
          instructions: 'boil for a while'
        },
        {
          recipe_id: 2, 
          ingredient_id: 1,
          instructions: 'mix with oil'
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          instructions: 'heat with water'
        }
      ]);
    });
};
