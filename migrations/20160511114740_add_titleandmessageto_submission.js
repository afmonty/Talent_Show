
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
  	t.string('title').notNull().defaultTo('Title');
  	t.text('message').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
