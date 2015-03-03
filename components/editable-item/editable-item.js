// this should definitely be a component with a view control

import can from 'can/';
import template from './editable-item.stache!';

var EditableItem = can.Component.extend({
    tag: "editable-item",
    template: template,
    scope: {
        editing: false,
    },
    events: {

        'dblclick': function () {
            this.scope.attr('editing', true);
            this.element.find('input').focus();
        },

        'input blur': function (el) {
            this.processUpdate(el);
        },

        'input keyup': function (el, ev) {
            if (13 === ev.keyCode) {
                this.processUpdate(el);
            }
        },

        processUpdate: function (input) {
            var value = input.val(),
                key = this.scope.attr('item').key,
                cookie = this.scope.attr('item');


            cookie.attr( key, value );
            cookie.save();
            this.scope.attr('editing', false);
        }
    }
});


export { EditableItem as default };
