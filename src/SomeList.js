SomeList = function(list) {
	this.items = list || [];
};

SomeList.prototype.addItem = function(item) {
	this.items.push(item);
};

SomeList.prototype.addItems = function(listOfItems) {
	// listOfItems.forEach(function(i, item) {
	// this.addItem(item);
	// });
	
	for ( var i=0; i<listOfItems.length; i++ ){
		this.addItem(listOfItems[i]);
		}
};

SomeList.prototype.clear = function() {
	this.items = [];
};
