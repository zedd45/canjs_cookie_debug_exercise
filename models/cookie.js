'format es6'

import can from 'can/';
import 'can/map/define/';
import 'can/map/validations/';
import 'can/construct/super/';
import "jquery-cookie";

import BackupModel from './backupModel';

var Cookie = BackupModel.extend({

    // return serialized list of cookies.
    findAll: function (params, success, error) {

        var cookiesObj = $.cookie(),
            dfd = new can.Deferred(),
            self = this; // clean this up... I dislike this (anti-pattern? (now))

        dfd.done( function (cookies) {
            if ("function" === typeof success) {
                success.call(self, cookies);
                self._super();
            }
        })
        .fail( function () {
            if ("function" === typeof error) {
                error.apply(self, arguments);
            }
        });

        // dfd.resolve(new Cookie.List(cookiesObj));
        dfd.resolve(cookiesObj);
        // debugger;
        return dfd;
    },
    findOne: function ( params, success, error ) {

        var cookie = $.cookie( params.name || params.id ),
            dfd = new can.Deferred(),
            self = this; // clean this up... I dislike this (anti-pattern? (now))

        dfd.done( function (cookie) {
            if ("function" === typeof success) {
                success.call(self, cookie);
                self._super();
            }
        })
        .fail( function () {
            if ("function" === typeof error) {
                error.apply(self, arguments);
            }
        });

        dfd.resolve( new Cookie.List(cookie));

        return dfd;
    },
    create:  function ( params ) {
        return $.cookie( params.name, params.value);
    },
    update:  function ( cookieName, attrs) {
        var currentCookie = this.findOne(cookieName);
        // TODO: update the params with a _.merge?
        $.cookie(cookieName, attrs);
    },
    destroy: function ( cookieName ) {
        return $.removeCookie(cookieName);
    },

    // parseModels allows us to format the cookies as `key: value` pairs, vs
    // an array of objects whose keys are unknown
    // this allows us to reliably
    parseModels: function (rawDough) {
       var bakedCookies = [];
       // note the syntax difference here between lodash
       can.each( rawDough, function ( value, indexKey ) {
            bakedCookies.push({
                key: indexKey,
                value: value,
            });
       });
       return bakedCookies;
    }

}, {
    define: {
        key: {
            value: ""
        },
        value: {
            value: ""
        }
    },
});


export { Cookie as default };











