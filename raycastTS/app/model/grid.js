"use strict";
var Grid = (function () {
    function Grid(width, height) {
        this.data = [];
        this.height = height;
        this.width = width;
    }
    Grid.prototype.add = function (item, x, y) {
        if (x < 0 || y < 0 || x > this.width || y > this.height) {
            throw new Error("grid out of range!");
        }
        if (this.data[x] == undefined) {
            this.data[x] = [];
        }
        this.data[x][y] = item;
    };
    Grid.prototype.remove = function (x, y) {
        this.data[x][y] = undefined;
    };
    Grid.prototype.get = function (x, y) {
        return this.data[x][y];
    };
    Grid.prototype.gridTraverse = function (itemfunc, newLineFunc) {
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                var item = this.data[x][y];
                itemfunc(item, x, y);
            }
            newLineFunc();
        }
    };
    return Grid;
}());
exports.Grid = Grid;
//# sourceMappingURL=grid.js.map