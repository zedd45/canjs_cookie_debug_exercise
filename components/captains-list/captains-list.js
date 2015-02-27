import can from 'can/';
import 'can/view/stache/';

import template from './captains-list.stache!';
import ViewModel from './viewmodel';

var CaptainList = can.Component.extend({
	tag: 'captains-list',
	template: template,
	scope: ViewModel,
	helpers: {
		showErrors: function(options) {
			var errors = options.context.errors();

			return errors
				? options.fn(errors)
				: options.inverse();
		}
	}
});

export { CaptainList as default };