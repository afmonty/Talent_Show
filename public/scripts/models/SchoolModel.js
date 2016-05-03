import Backbone from 'backbone';

export.default.Model.Backbone.extend({
		defaults: {
		createdAt: null,
		updatedAt: null,
		schoolName: '',
		address: '',
		address2: '',
		contact: ''
	},
	urlRoot: '/api/schools',
	idAttribute: 'id'
});
