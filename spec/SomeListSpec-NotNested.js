describe('SomeListSpec', function () {
	// setup
	beforeEach(function() {
		list = new SomeList([ 'item 1', 'item 2' ]);
	});

	// teardown
	afterEach(function() {
		list.clear();
	});

	// just a test
	it('Should return true', function() {
		expect(false).toBeTruthy();
	});

	it('Should accept accept array to constructor', function() {
		// var list = new SomeList(['item 1','item 2']);
		expect(list.items.length).toEqual(2);
	});

	it('Should add product', function() {

		// act
		list.addItem('test item');

		// assert
		expect(list.items.length).toEqual(3);
	});

	it("Should add multiple items", function() {
		// arrange
		spyOn(list, 'addItem');

		// act
		list.addItems([ 'item 1', 'item 3' ]);

		// assert
		expect(list.addItem).toHaveBeenCalled();
		expect(list.addItem).toHaveBeenCalledWith('item 1');
		expect(list.addItem).toHaveBeenCalledWith('item 3');
		expect(list.addItem.callCount).toEqual(2);
	});

	it('Should clear the list.', function() {
		// act
		list.clear();

		// assert
		expect(list.items.length).toEqual(0);
	});

});