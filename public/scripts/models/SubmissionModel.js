import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		url: '',
		description: '',
		status: 'new',
		title: '',
		userId: '',
		message: ''
	},
	urlRoot: '/api/v1/submission',
	idAttribute: 'id'
});

