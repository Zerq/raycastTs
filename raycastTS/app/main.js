"use strict";
var fake3d_state_1 = require("./model/fake3d.state");
var Game = (function () {
    function Game() {
    }
    Game.run = function () {
        var canvas = document.getElementById("game");
        var context = canvas.getContext("2d");
        var state = new fake3d_state_1.Fake3dState();
        state.stateStart = Date.now();
        requestAnimationFrame(GameFrame);
        function GameFrame() {
            state.lastCycle = Date.now();
            state.update().then(function () {
                state.draw(context).then(function (x) {
                    if (Game.running) {
                        requestAnimationFrame(GameFrame); // <-- this is fucked up! need to rethink this big time and base it on game time.... to late to think properly now though
                    }
                });
            });
        }
    };
    return Game;
}());
Game.running = true;
exports.Game = Game;
Game.run();
//14kg, vesa200 
//# sourceMappingURL=main.js.map