import Backbone from 'backbone';
import Submission from './../models/SubmissionModel.js';

const SubmissionCollection = Backbone.Collection.extend({
	model: Submission,
	url: '/api/v1/Submission'
});

export default new SubmissionCollection();