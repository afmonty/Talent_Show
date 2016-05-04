import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		url: '',
		descrition: '',
		status: 'new',
		userId: '',
		schoolId: ''
		
	},
	urlRoot: '/api/v1/submission',
	idAttribute: 'id'
});

