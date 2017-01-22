"use strict";
var Player = (function () {
    function Player() {
    }
    Player.prototype.radiate = function (x, y, amplitude, degree, context) {
        context.moveTo(x, y);
        var xx = (Math.cos(degree * Player.deg) * amplitude) + this.x;
        var yy = (Math.sin(degree * Player.deg) * amplitude) + this.y;
        context.lineTo(xx, yy);
    };
    Player.prototype.render = function (context) {
        context.beginPath();
        context.strokeStyle = "#ffff00";
        context.moveTo(this.x, this.y);
        this.radiate(this.x, this.y, 22, this.angle - 45, context);
        this.radiate(this.x, this.y, 44, this.angle, context);
        this.radiate(this.x, this.y, 22, this.angle + 45, context);
        context.stroke();
    };
    return Player;
}());
Player.deg = Math.PI / 180;
exports.Player = Player;
//# sourceMappingURL=player.js.map