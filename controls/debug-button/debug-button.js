import ModalDialog from 'controls/modal/';

var DebugButton = can.Control.extend({
    init: function () {
        this._modal = new ModalDialog(this.element.data().target);
    },
    destroy: function () {
        this._modal.destroy();

    },
});

export { DebugButton as default };
