exports.up = function(knex, Promise) {
  return knex.schema.table('submissions', function(t) {
  	t.string('description', 500).nullable;
  	
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('submissions');
};
