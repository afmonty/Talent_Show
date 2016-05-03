import Backbone from 'backbone';

const UserModel = Backbone.Model.extend ({
	defaults:{
		firstName: '',
		lastName: '',
		email: '',
		createdAt: null,
		updatedAt: null,
		deletedAt: null,
		userType: ''
	},
	urlRoot: '/api/user',
	idAttribute: 'id'

});


 export default new UserModel(window.user);