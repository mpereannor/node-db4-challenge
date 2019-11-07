
exports.up = function(knex) {
    return knex.schema

    .createTable('recipes', table => { 
        table.increments()
        table.string('recipe_name', 128)
    })

    .createTable('ingredients', table => { 
        table.increments()
        table.string('ingredient_name', 128)
        table.integer('ingredient_qty')
    })

    .createTable('recipes_ingredients', table => {

        table.increments()
        
        table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        
        table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')

        table.string('instructions', 128);
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('meal')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
