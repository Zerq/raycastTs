"use strict";
var Grid = (function () {
    function Grid(width, height) {
        this.data = [];
        this.height = height;
        this.width = width;
    }
    Grid.prototype.add = function (item, x, y, xOff, yOff, widthOff, heithtOff) {
        if (xOff === void 0) { xOff = 0; }
        if (yOff === void 0) { yOff = 0; }
        if (widthOff === void 0) { widthOff = this.width; }
        if (heithtOff === void 0) { heithtOff = this.height; }
        if (x + xOff < xOff || y + yOff < yOff || x > widthOff || y > heithtOff) {
            throw new Error("grid out of range!");
        }
        if (this.data[x + xOff] == undefined) {
            this.data[x + xOff] = [];
        }
        this.data[x + xOff][y + yOff] = item;
    };
    Grid.prototype.remove = function (x, y, xOff, yOff) {
        if (xOff === void 0) { xOff = 0; }
        if (yOff === void 0) { yOff = 0; }
        this.data[x + xOff][y + yOff] = undefined;
    };
    Grid.prototype.get = function (x, y, xOff, yOff) {
        if (xOff === void 0) { xOff = 0; }
        if (yOff === void 0) { yOff = 0; }
        return this.data[x + xOff][y + yOff];
    };
    Grid.prototype.gridTraverse = function (itemfunc, newLineFunc, xOff, yOff, widthOff, heithtOff) {
        if (xOff === void 0) { xOff = 0; }
        if (yOff === void 0) { yOff = 0; }
        if (widthOff === void 0) { widthOff = this.width; }
        if (heithtOff === void 0) { heithtOff = this.height; }
        for (var y = yOff; y < heithtOff; y++) {
            for (var x = xOff; x < widthOff; x++) {
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