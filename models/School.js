require('./User.js');
module.exports = bookshelf.model('School', {
	tableName: 'schools',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		this.hasMany('User', 'userId');
	}
});