exports.up = function(knex, Promise) {
	return knex.schema.createTable('submissions', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('schoolName').notNull();
		t.string('address').nullable();
		t.string('address2').nullable();
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
		t.integer('agencyId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('agencies')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('submissions');
};