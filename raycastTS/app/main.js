"use strict";
var grid_1 = require("./model/grid");
var tilecollection_1 = require("./model/tilecollection");
var grid = new grid_1.Grid(5, 5);
grid.add(0, 0, 0);
grid.add(0, 1, 0);
grid.add(0, 2, 0);
grid.add(0, 3, 0);
grid.add(0, 4, 0);
grid.add(1, 0, 0);
grid.add(1, 1, null);
grid.add(1, 2, null);
grid.add(1, 3, null);
grid.add(1, 4, 0);
grid.add(2, 0, 0);
grid.add(2, 1, null);
grid.add(2, 2, null);
grid.add(2, 3, null);
grid.add(2, 4, 3);
grid.add(3, 0, 0);
grid.add(3, 1, null);
grid.add(3, 2, null);
grid.add(3, 3, null);
grid.add(3, 4, 0);
grid.add(4, 0, 0);
grid.add(4, 1, 0);
grid.add(4, 2, 1);
grid.add(4, 3, 0);
grid.add(4, 4, 0);
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var img = document.getElementById("img");
context.clearRect(0, 0, 64 * 5, 64 * 5);
grid.gridTraverse(function (n, x, y) {
    var tile = tilecollection_1.TileCollection.GetByIndex(n);
    if (tile != null) {
        context.drawImage(img, tile.x, tile.y, tile.width, tile.height, x * 64, y * 64, 64, 64);
    }
}, function () {
});
//14kg, vesa200 
//# sourceMappingURL=main.js.map