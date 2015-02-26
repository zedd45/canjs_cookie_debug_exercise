import can from 'can/';
import 'can/util/fixture/';
import faker from 'faker';

var store = can.fixture.store(10, function(i) {
	return {
		id: i,
		first: faker.name.firstName(),
		last: faker.name.lastName(),
		photo: faker.image.avatar(),
		ship: faker.company.companyName(),
		upvotes: faker.helpers.randomNumber(100).toString(),
		downvotes: faker.helpers.randomNumber(75).toString()
	}
});

can.fixture.delay = 200;
can.fixture('GET /captains', store.findAll);
can.fixture('DELETE /captains/{id}', store.destroy);

export { store as default };