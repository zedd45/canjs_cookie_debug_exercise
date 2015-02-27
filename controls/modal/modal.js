import 'bootstrap/modal';

var ModalDialog = can.Control.extend({
    init: function (selector) {
        // TODO: sanity checking
        $(selector).modal({
            show: false
        });
    },

    // 'show.bs.modal': function () {
    //     // probably better in init?
    //     this.element.find('.modal-body').html("replaced");
    // },
    'hide.bs.modal': function () {
        this.element.modal('destroy');
    }
});

export { ModalDialog as default };
