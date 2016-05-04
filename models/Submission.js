require('./User');
require('./School');
require('./Submission');

module.exports = bookshelf.model('Submission', {
	tableName: 'submissions',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	school: function() {
		return this.belongsToMany('School', 'schoolSubmissions', 'submissionId', 'schoolId');
	},
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});


