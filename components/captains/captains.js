import can from 'can/';
import 'can/view/stache/';

import template from './captains.stache!';

import 'components/captains-list/';
import 'components/captains-favorites/';

import ViewModel from './viewmodel';

var Captains = can.Component.extend({
	tag: 'captains-setup',
	template: template,
	scope: ViewModel
});

export { Captains as default };