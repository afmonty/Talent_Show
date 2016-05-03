require('./User.js');
require('./Submission.js');

module.exports = bookshelf.model('School', {
	tableName: 'schools',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		this.hasMany('User', 'userId');
	},
	submission: function() {
        return this.belongsToMany('Submission', 'schoolSubmissions', 'submissionId', 'schoolId');
    }
});

