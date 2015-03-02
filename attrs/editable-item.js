import EditableRow from 'controls/editable-item/';

can.view.attr('editable-item', function ( el, attrData ) {
    new EditableRow(el);
});

// we don't actually need to export this;
// once included, when the template parses the named attr, it will do this work
