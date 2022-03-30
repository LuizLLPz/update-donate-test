/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('Post', table => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.string('categoria').notNullable();
        table.string('corpo').notNullable();
        table.integer('uid').unsigned().notNullable();
        table.foreign('uid').references('User.id');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        
    });
        
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  
};
