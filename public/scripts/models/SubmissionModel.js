import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		url: '',
		description: '',
		status: 'new',
		userId: ''
	},
	urlRoot: '/api/v1/submission',
	idAttribute: 'id'
});

