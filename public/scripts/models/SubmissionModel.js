import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		url: '',
		description: '',
		status: 'new',
		title: 'Look at M'
	},
	urlRoot: '/api/v1/submission',
	idAttribute: 'id'
});

