/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('post', table => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.string('categoria').notNullable();
        table.text('conteudo').notNullable();
        table.timestamp('data').notNullable().defaultTo(knex.fn.now());;     
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('post');
};
