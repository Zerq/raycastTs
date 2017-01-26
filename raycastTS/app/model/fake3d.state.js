/// <reference path="../../node_modules/@types/es6-shim/index.d.ts" />
"use strict";
var grid_1 = require("./grid");
var tilecollection_1 = require("./tilecollection");
var player_1 = require("./player");
var ray_1 = require("./ray");
var Fake3dState = (function () {
    function Fake3dState() {
        this.img = document.getElementById("img");
        this.grid = new grid_1.Grid(6, 6);
        this.grid.add(0, 0, 0);
        this.grid.add(0, 1, 0);
        this.grid.add(1, 2, 0);
        this.grid.add(4, 3, 0);
        this.grid.add(0, 4, 0);
        this.grid.add(0, 5, 0);
        this.grid.add(0, 0, 1);
        this.grid.add(null, 1, 1);
        this.grid.add(null, 2, 1);
        this.grid.add(null, 3, 1);
        this.grid.add(null, 4, 1);
        this.grid.add(0, 5, 1);
        this.grid.add(1, 0, 2);
        this.grid.add(null, 1, 2);
        this.grid.add(null, 2, 2);
        this.grid.add(null, 4, 2);
        this.grid.add(3, 5, 2);
        this.grid.add(0, 0, 3);
        this.grid.add(null, 1, 3);
        this.grid.add(null, 2, 3);
        this.grid.add(3, 3, 3);
        this.grid.add(null, 4, 3);
        this.grid.add(3, 5, 3);
        this.grid.add(0, 0, 4);
        this.grid.add(1, 1, 4);
        this.grid.add(0, 2, 4);
        this.grid.add(null, 3, 4);
        this.grid.add(null, 4, 4);
        this.grid.add(1, 5, 4);
        this.grid.add(null, 0, 5);
        this.grid.add(null, 1, 5);
        this.grid.add(0, 2, 5);
        this.grid.add(0, 3, 5);
        this.grid.add(1, 4, 5);
        this.grid.add(1, 5, 5);
        this.player = new player_1.Player();
        this.player.x = 170;
        this.player.y = 74;
        this.player.angle = 0;
    }
    Fake3dState.prototype.load = function () {
    };
    Fake3dState.prototype.unload = function () {
    };
    Fake3dState.prototype.update = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var gamepads = navigator.getGamepads();
            if (gamepads.length > 0) {
                if (gamepads[0] != null) {
                    if (gamepads[0].axes.length > 0) {
                        var up = Math.round(gamepads[0].axes[1]) < 0;
                        var down = Math.round(gamepads[0].axes[1]) > 0;
                        var left = Math.round(gamepads[0].axes[0]) < 0;
                        var right = Math.round(gamepads[0].axes[0]) > 0;
                        var deg = (Math.PI / 180);
                        var dirx = Math.cos(_this.player.angle * deg) * 2;
                        var diry = Math.sin(_this.player.angle * deg) * 2;
                        if (left) {
                            _this.player.angle--;
                        }
                        if (right) {
                            _this.player.angle++;
                        }
                        if (up) {
                            _this.player.x += dirx;
                            _this.player.y += diry;
                        }
                        if (down) {
                            _this.player.x -= dirx;
                            _this.player.y -= diry;
                        }
                    }
                }
            }
            resolve();
        });
    };
    Fake3dState.prototype.draw = function (context) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                context.clearRect(0, 0, 64 * 5, 64 * 5);
                _this.grid.gridTraverse(function (n, x, y) {
                    var tile = tilecollection_1.TileCollection.GetByIndex(n);
                    if (tile != null) {
                        context.drawImage(_this.img, tile.x, tile.y, tile.width, tile.height, x * 64, y * 64, 64, 64);
                    }
                }, function () {
                });
                var tilefractionX = Math.round((_this.player.x / 64) * 10) / 10;
                var tilefractionY = Math.round((_this.player.y / 64) * 10) / 10;
                context.clearRect(400, 25, 500, 200);
                context.font = "30px arial";
                context.fillStyle = "#ff0";
                context.fillText("x=" + tilefractionX + "    y=" + tilefractionY, 400, 50);
                var deg = (Math.PI / 180);
                _this.player.render(context);
                var rayAnglePart = 90 / 320;
                var rays = new Array();
                for (var raycount = 0; raycount < 320; raycount++) {
                    var angle = (_this.player.angle - 45) + (rayAnglePart * raycount);
                    var x = Math.cos(angle);
                    var y = Math.sin(angle);
                    rays.push(ray_1.Ray.cast(x, y, _this.player, _this.grid));
                }
                var i_1 = 0;
                rays.forEach(function (n) {
                    var tile = tilecollection_1.TileCollection.GetByIndex(n.tileIndex);
                    if (tile != null) {
                        var tileSlice = tile.getColumn(n.xTilePixelColumn);
                        context.drawImage(_this.img, tileSlice.x, tileSlice.y, tileSlice.width, tileSlice.height, i_1 + 400, 200 + (n.distance / 2), 1, n.distance);
                    }
                    i_1++;
                });
                resolve();
            }
            catch (err) {
                reject(err);
            }
        });
    };
    return Fake3dState;
}());
exports.Fake3dState = Fake3dState;
//# sourceMappingURL=fake3d.state.js.map