import can from 'can/';
import Captain from 'models/captain';

var ViewModel = can.Map.extend({
	define: {
		captains: {
			Value: Captain.List,
			get: function(captains){
				captains.replace(Captain.findAll());
				return captains;
			}
		}
	}
});

export { ViewModel as default };