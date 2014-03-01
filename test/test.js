/*jshint indent: 4, undef: false */

test("sanity check", function () {
    equal(4, 4);
});

eval();

test("initBoard", function () {
    module.initBoard();
    equal(module.cells[0][0].state, "white", "module.cells[0][0] is white");
});
