// core
import $ from 'jquery';
import can from 'can/';
import 'can/view/stache/';
import 'can/list/promise/';

// components
import 'components/captains/';
import DebugButton from 'controls/debug-button/';

// template(s)
import template from 'app.stache!';

// model(s)
import cookie from 'models/cookie';
// fixtures
import 'fixtures/';

$('body').append(template({
    cookies: cookie
}));
new DebugButton('.btn-info');

