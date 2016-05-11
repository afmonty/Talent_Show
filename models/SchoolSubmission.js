require('./User');
require('./School');
require('./Submission');

module.exports = bookshelf.model('SchoolSubmission', {
	tableName: 'schoolSubmissions',
	hasTimestamps: [],
	school: function() {
		return this.belongsTo('School', 'schoolId');
	},
	user: function() {
		return this.belongsTo('User', 'userId');
	},
	submission: function() {
		return this.belongsTo('Submission', 'submissionId');
	}
});