import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('rental');
	},
	actions: {
		deleteRental(rental) {
			let confirmation = confirm('Are you sure want to delete rental ?')
			if(confirmation) {
				rental.destroyRecord();
			}
		},
		willTransition() {
			this.controller.set('responseMessage', false);
		}
	},
});
