// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

export default {
  development: {
    client: 'mysql2',
    connection: {
	    uri: "mysql://root@localhost:3306/update_donate" 
    }
  }

};
