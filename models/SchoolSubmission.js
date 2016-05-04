require('./User');
require('./School');
require('./Submission');

module.exports = bookshelf.model('SchoolSubmission', {
	tableName: 'schoolSubmissions',
	school: function() {
		return this.belongsToMany('School', 'schoolSubmissions', 'schoolSubmissionId', 'schoolId');
	},
	user: function() {
		return this.belongsTo('User', 'userId');
	},
	submission: function() {
		return this.belongsTo('Submission', 'submissionId');
	}
});