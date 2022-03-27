/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up  = (knex) => {
    return knex.schema.createTable('Post', table => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.string('categoria').notNullable();
        table.string('corpo').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}
export const down = (knex) => knex.dropTable('Post');
    