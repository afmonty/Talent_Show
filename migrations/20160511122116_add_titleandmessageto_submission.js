

exports.up = function(knex, Promise) {
  return knex.schema.table('submissions', function(t) {
  	t.string('title').notNull().defaultTo('Title');
  	t.text('message').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('submissions');
};

