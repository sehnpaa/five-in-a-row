// Five-in-a-row  - with a twist (rewrite)

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
    state: "whiteSelectCell",
    setStateTo: function ( newState ) {
        if ( module.isValidState( newState ) ) {
            module.state = newState;
        }
    },
    isValidState: function ( state ) {
        var validInput = [
            'whiteSelectCell',
            'blackSelectCell'
        ];
        isValid = false;
        var i;
        for ( i = 0; i < validInput.length; i++ ) {
            if ( state === validInput[i] ) {
                isValid = true;
                break;
            }
        }
        return isValid;
    },
    initBoard: function () {

    },
    resetBoard: function () {

    },
    updateDebugLog: function () {
        debug_log = $('#debug_log');
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
