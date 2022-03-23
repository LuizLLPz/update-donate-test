// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: 'mysql2',
    connection: {
      uri: process.env.DB_URI,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/migrations'
    }
  },
};
