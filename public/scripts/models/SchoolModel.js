import Backbone from 'Backbone';


export default Backbone.Model.extend({
		defaults: {
		createdAt: null,
		updatedAt: null,
		schoolName: '',
		address: '',
		address2: '',
		contact: ''
	},
	urlRoot: '/api/v1/school',
	idAttribute: 'id'
});
