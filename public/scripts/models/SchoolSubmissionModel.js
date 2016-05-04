import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		userId: '',
		schoolId: '',
		submissionId: ''
		
	},
	urlRoot: '/api/v1/schoolSubmission',
	idAttribute: 'id'
});