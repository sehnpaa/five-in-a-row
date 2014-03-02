/*jshint indent: 4, undef: false */

// Manually test if jshint runs:
// eval();

test("sanity check", function () {
    equal(4, 4);
});

test("module.initBoard", function () {
    equal(module.cells[0][0].state, "empty", "module.cells[0][0] is empty");
});

test("module.isValidState()", function () {
    equal(module.isValidState("randomstring"), false, "'randomstring' is not a valid state");
    equal(module.isValidState("whiteSelectCell"), true, "'whiteSelectCell' is a valid state");
});
