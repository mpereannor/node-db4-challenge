
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          ingredient_name: 'glass of water',
          ingredient_qty: 10
        },

        {
          id: 2,
          ingredient_name: 'cup of butter',
          ingredient_qty: 20,  
        },

        {
          id: 3,
          ingredient_name: 'cup of salt',
          ingredient_qty: 30,

        }
      ]);
    });
};
