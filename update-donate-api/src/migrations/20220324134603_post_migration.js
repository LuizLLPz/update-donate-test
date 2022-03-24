/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export const up = function(knex) {
return knex.schema.createTable("post", table => {
        table.increments('id').unique().notNullable().primary();
        table.string('titulo').unique();
        table.text('corpo').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    return knex.schema.dropTable("post");
};
