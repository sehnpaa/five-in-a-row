/*jshint indent: 4, undef: false */

// Manually test if jshint runs:
// eval();

test("sanity check", function () {
    equal(4, 4);
});

test("initBoard", function () {
    module.initBoard();
    equal(module.cells[0][0].state, "white", "module.cells[0][0] is white");
});
