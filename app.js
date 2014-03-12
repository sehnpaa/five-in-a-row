// Five-in-a-row  - with a twist (rewrite)
/* jshint indent: 4, undef: false */

var module = {
    board: {
        hej: "hej"
    },
    cells: [
        [{ state: "empty" },
         { state: "black" },
         { state: "white" },
         { state: "white" },
         { state: "white" },
         { state: "white" }],
        [{ state: "white" },
         { state: "black" },
         { state: "white" },
         { state: "white" },
         { state: "white" },
         { state: "white" }],
        [{ state: "white" },
         { state: "black" },
         { state: "white" },
         { state: "white" },
         { state: "white" },
         { state: "white" }],
        [{ state: "white" },
         { state: "black" },
         { state: "white" },
         { state: "white" },
         { state: "white" },
         { state: "white" }],
        [{ state: "white" },
         { state: "black" },
         { state: "white" },
         { state: "white" },
         { state: "white" },
         { state: "white" }],
        [{ state: "white" },
         { state: "black" },
         { state: "white" },
         { state: "white" },
         { state: "white" },
         { state: "white" }]
    ],
    gameState: "whiteSelectCell",
    setGameStateTo: function ( newState ) {
        if ( module.isValidGameState( newState ) ) {
            module.gameState = newState;
        }
    },
    getGameState: function () {
        return module.gameState;
    },
    isValidGameState: function ( state ) {
        var validInput = [
            'whiteSelectCell',
            'blackSelectCell'
        ];
        var isValid = false;
        var i;
        for ( i = 0; i < validInput.length; i++ ) {
            if ( state === validInput[i] ) {
                isValid = true;
                break;
            }
        }
        return isValid;
    },
    setCellState: function(row, column, state) {
        module.cells[row][column].state = state;
    },
    getCellState: function(row, column, state) {
        return module.cells[row][column].state;
    },
    initBoard: function () {
        module.setAllCellstate("empty");
    },
    setAllCellState: function (newState) {
        for (var x in module.cells) {
            for (var y in module.cells[x]) {
                module.setCellState(x, y, newState);
            }
        }
    },
    updateDebugLog: function () {
        var debug_log = $('#debug_log');
        debug_log.text('');
        for (var i in module.cells) {
            for (var j in module.cells[i]) {
                debug_log.append(module.cells[i][j].state + ' ');
            }
            debug_log.append('</br>');
        }
    }
};

watch(module.cells, function () {
    module.updateDebugLog();
});

// Invoke/Trigger model
callWatchers(module.cells);

$(document).ready(function () {
    $('td.cell').on('click', function () {
        var row = $(this).data('row');
        var column = $(this).data('column');
        alert(module.getCellState(row, column));
    });
});
