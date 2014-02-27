test("sanity check", function () {
	equal(4, 4);
});

test("initBoard", function () {
	module.initBoard();
	equal(module.cells[0][0].state, "white", "first och first state is white");
});
