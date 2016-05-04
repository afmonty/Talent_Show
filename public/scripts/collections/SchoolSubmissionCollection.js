import Backbone from 'backbone';
import SchoolSubmission from './../models/SchoolSubmissionModel.js';

const SchoolSubmissionCollection = Backbone.Collection.extend({
	model: SchoolSubmission,
	url: '/api/v1/schoolSubmission'
});

export default new SchoolSubmissionCollection();