exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
  	t.dropColumn('title');
  	t.dropColumn('message');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
