// Five-in-a-row  - with a twist (rewrite)

var module = {
    board: {
        hej: "hej"
    },
    cells: [
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
         { state: "white" }],
        [{ state: "white" },
         { state: "black" },
         { state: "white" },
         { state: "white" },
         { state: "white" },
         { state: "white" }]
    ],
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


/*watch(module.cells, function () {
    module.updateDebugLog();
});*/

module.cells[0][0].state = "modified";
