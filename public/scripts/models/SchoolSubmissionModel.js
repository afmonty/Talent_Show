import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		schoolId: '',
		submissionId: ''
		
	},
	urlRoot: '/api/v1/schoolSubmission',
	idAttribute: 'id'
});