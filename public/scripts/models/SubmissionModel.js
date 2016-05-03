import Backbone from 'backbone';

const SubmissionModel = Backbone.Model.extend({
	defaults:{
		createdAt: null,
		updatedAt: null,
		deletedAt: null,
		finishedAt: null,
		userId: '',
		schoolId: '',
		
	},
	urlRoot: '/api/submissions',
	idAttribute: 'id'
});

export default new SubmissionReadModel();