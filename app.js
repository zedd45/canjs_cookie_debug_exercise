// core
import $ from 'jquery';
import can from 'can/';
import 'can/view/stache/';
import 'can/list/promise/';
import 'bootstrap/modal';

// observables (maps / lists / viewModels )
import CookieList from 'observables/CookieList';

// components
import 'components/captains/';

// template(s)
import template from 'app.stache!';

// fixtures
import 'fixtures/';

// last but not least, Less Styles
import "less/app.less!";

$('body').append(template({
    // cookies: new can.List(), // test empty
    cookies: new CookieList(),
}));

