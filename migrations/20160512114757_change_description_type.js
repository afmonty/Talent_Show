
exports.up = function(knex, Promise) {
  return knex.schema.table('submissions', function(t) {
  	
  	t.dropColumn('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('submissions');
};