import can from 'can/';
import 'can/view/stache/';

import template from './captains-favorites.stache!';

var CaptainsFavorites = can.Component.extend({
	tag: 'captains-favorites',
	template: template
});

export { CaptainsFavorites as default };