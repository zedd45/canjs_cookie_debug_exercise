/* this whole thing seems redundant when we can just use BS3's declarative syntax */
import 'bootstrap/modal';
// import 'can/construct/super/';

var DebugButton = can.Control.extend({
    init: function () {
        this.$target = $(this.element.data().target);
    },
    // destroy: function () {
    //     this._modalElement.modal('destroy');
    //     this._super();
    // },
    click: function () {
        this.$target.modal();
    }
});

export { DebugButton as default };
