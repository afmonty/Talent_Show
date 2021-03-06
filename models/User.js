require('./Authentication');
module.exports = bookshelf.model('User', {
	tableName: 'users',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	authentication: function() {
		this.hasMany('Authentication', 'userId');
	},
	school: function() {
		this.hasOne('School', 'userId');
	},
	submission: function () {
		this.hasMany('Submission', 'userId');
	}
});