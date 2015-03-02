// this should definitely be a component with a view control

import can from 'can/';
import $ from 'jquery';
import 'can/construct/super/';
import './editable-item.less!';

// find any instances of editable-item and transform them into an input
// that has two-way binding
var EditableItem = can.Control.extend({
    defaults: {
        // 'editableClass': "click-2-edit",
        'editableInputClass': "new-value-input",
        'fieldType': "text",
        'clickSelector': 'td',
        // this line has the potential to become very brittle with the DOM manip in this file
        // TODO: find a better way!
        'insertSelector': '> td',
    },
},
{
    init: function ( element, options ) {
        this._super( element, options );

        // styling hook to hide the elements
        this.element.addClass('editable-container');

        var $input = $('<input>').attr({
            // this is ok b/c it's new, but I'd want to retrieve the list
            // and push the new class to the classList otherwise
            'className': [this.options.editableInputClass, "edit-item-input"].join(" "),
            'type': this.options.fieldType,
        });

        // append this input to *each* element that matches insertSelector under this.element
        $input.appendTo( $(this.element).find(this.options.insertSelector) );
    },

    destroy: function () {
        // clean up our DOM manipulation
        this.element.find('input.' + this.options.editableClass).remove();
        this._super();
    },

    '{clickSelector} click': function (el, ev) {
        // this is way too much like old skool jQuery DOM manip.
        // we CAN improve this.. hehehe pun intended.  Hey, it's 9:30 Friday night where I'm flying to...
        var text = el.text(),
            input = el.find(this.options.editableInputClass);

        input.show().val(text);
        el.text(null);
    },
    'input blur': function () {
        // this is ridiculous at this point b/c we're rewriting the wheel on 2 way bindings
        var text = input.val();
        input.hide();
        input.parent().text(text);
    },
});


export { EditableItem as default };
