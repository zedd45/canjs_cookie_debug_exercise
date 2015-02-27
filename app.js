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
import Cookie from 'models/cookie';
// fixtures
import 'fixtures/';

var CookieList = can.List.extend({
    init: function(){
        this.replace(Cookie.findAll());
    }
});


$('body').append(template({
    cookies: new CookieList()
}));

new DebugButton('.btn-info');

