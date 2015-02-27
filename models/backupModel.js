import can from 'can/';
import 'can/map/backup/';
import 'can/construct/super/';

var BackupModel = can.Model.extend({
	init: function() {
		this.backup();
		this._super();
	}
});

export { BackupModel as default };

/*
var bm = new BackupModel({name: 'foo'});
assert bm.isDirty() -> false

bm.attr('name', 'bar');
assert bm.isDirty() -> true

bm.restore();
assert bm.isDirty() -> false
assert bm.attr('name') -> 'foo'
*/