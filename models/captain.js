import can from 'can/';
import 'can/map/define/';
import 'can/map/validations/';

import BackupModel from './backupModel';

var Captain = BackupModel.extend({
	resource: '/captains',

	init: function() {
		this.validate(['upvotes'], function(val) {
			if(val < 0) return 'less than 0!';
		});
	}
}, {
	define: {
		fullName: {
			get: function() {
				return this.attr('first') + ' ' + this.attr('last');
			}
		},

		favorite: {
			value: false
		},

		upvotes: {
			type: 'number'
		},

		downvotes: {
			type: 'number'
		},

		votes: {
			get: function() {
				return this.attr('upvotes') - this.attr('downvotes');
			}/*,
			This is the optional setter used in components/captain-list/viewmodel.js
			Signature is this.attr('votes', 1) || this.attr('votes', -1)

			set: function(val) {
				if(val > 0) {
					this.attr('upvotes', this.attr('upvotes') + val);
				}
				else {
					this.attr('downvotes', this.attr('downvotes') + val * -1);
				}
			}*/
		}
	},

	upvote: function() {
		this.attr('upvotes', this.attr('upvotes') + 1);
	},

	downvote: function() {
		this.attr('downvotes', this.attr('downvotes') + 1);
	}
});

Captain.List = Captain.List.extend({
	favorites: function() {
		return this.filter(function(captain) {
			return captain.attr('favorite');
		});
	}
});

window.Captain = Captain;

export { Captain as default };











