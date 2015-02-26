import $ from 'jquery';
import can from 'can/';
import 'can/view/stache/';
import 'can/list/promise/';

import 'components/captains/';
import template from 'app.stache!';

import 'fixtures/';

$('body').append(template());