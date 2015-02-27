import 'bootstrap/modal';

var ModalDialog = can.Control.extend({
    init: function (selector) {
        // TODO: sanity checking
        var handle = $(selector).modal({
            show: false
        });

        return handle;
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
