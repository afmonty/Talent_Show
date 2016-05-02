require('./User');
require('./School');

module.exports = bookshelf.model('Submission', {
	tableName: 'submissions',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	school: function() {
		return this.belongsTo('School');
	},
	user: function() {
		return this.belongsTo('User');
	}
});