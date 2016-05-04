
exports.up = function(knex, Promise) {
    return knex.schema.createTable('schoolSubmissions', function(t) {
    	t.increments('id').unsigned().primary();
    	t.integer('userId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
        t.integer('schoolId')
            .unsigned()
            .notNull()
            .references('id')
            .inTable('schools')
            .onDelete('CASCADE');
        t.integer('submissionId') 
            .unsigned()
            .notNull()
            .references('id')
            .inTable('submissions')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('schoolSubmissions');
};
