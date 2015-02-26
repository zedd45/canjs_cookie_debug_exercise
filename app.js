import $ from 'jquery';
import can from 'can/';
import 'can/view/stache/';
import 'can/list/promise/';

import 'components/captains-list/';
import 'components/captains-favorites/';
import template from 'app.stache!';

import Captain from 'models/captain';

import 'fixtures/';

var captains = new Captain.List();
captains.replace(Captain.findAll());

$('body').append(template({
	captains: captains
}));