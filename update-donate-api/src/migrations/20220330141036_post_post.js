/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export const up  = (knex) => {
    return knex.schema.createTable('User', table => {
        table.increments('id').primary().notNullable();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('cpf').notNullable();
        table.string('password').notNullable();
        table.enu('tipo', ['donatário', 'doador', 'admin']).notNullable().defaultTo('donatário');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
    
}
export const down = () => true;


