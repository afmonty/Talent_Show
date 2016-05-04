import Backbone from 'backbone';
import School from './../models/SchoolModel.js';

const SchoolCollection = Backbone.Collection.extend({
	model: School,
	url: '/api/v1/School'
});

export default new SchoolCollection();