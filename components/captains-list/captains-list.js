import can from 'can/';
import 'can/view/stache/';

import template from './captains-list.stache!';
import ViewModel from './viewmodel';

var CaptainList = can.Component.extend({
	tag: 'captains-list',
	template: template,
	scope: ViewModel
});

export { CaptainList as default };