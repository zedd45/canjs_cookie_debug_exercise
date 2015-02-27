import can from 'can/';
import 'can/map/define/';
import 'can/map/validations/';
import jQCookie from "jquery-cookie";

import BackupModel from './backupModel';

var Cookie = BackupModel.extend({

    // return serialized list of cookies.
    findAll: function (params, success, error) {
        var cookies = jQCookie(),
            dfd = new can.Deferred(),
            self = this; // clean this up... I dislike this (anti-pattern? (now))

        dfd.done( function (cookies) {
            if ("function" === typeof success) {
                success.call(self, cookies);
            }
        })
        .fail( function () {
            if ("function" === typeof error) {
                error.apply(self, arguments);
            }
        });

        dfd.resolve(cookies);

        return dfd;
    },
    findOne: function ( obj ) {
        return jQCookie( obj.name || obj.id );
    },
    create:  function ( obj ) {
        // TODO: use _ to remove the name & value from the final param
        return jQCookie( obj.name, obj.value, obj);
    },
    update:  function (obj) {
        var currentCookie = this.findOne(obj);
        jQCookie();
    },
    destroy: function ( obj ) {
        var target = obj && obj.name || obj;
        return $.removeCookie(target);
    },

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











