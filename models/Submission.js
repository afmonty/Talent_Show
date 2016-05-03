require('./User');
require('./School');

module.exports = bookshelf.model('Submission', {
	tableName: 'submissions',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	school: function() {
		return this.belongsToMany('School', 'schoolSubmissions', 'schoolId', 'submissionId');
	},
	user: function() {
		return this.belongsTo('User');
	}
});


