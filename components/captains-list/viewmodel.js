import can from 'can/';

var ViewModel = can.Map.extend({
	inc: function(captain) {
		// Arbitrary, but an optional API is to
		// use a setter on the model instance. Defined in models/captain.js
		// captain.attr('votes', 3);
		captain.upvote();
	},

	dec: function(captain) {
		// captain.attr('votes', -3);
		captain.downvote();
	},

	toggleFavorite: function(captain) {
		captain.attr('favorite', !captain.attr('favorite'));
	}
});

export { ViewModel as default };