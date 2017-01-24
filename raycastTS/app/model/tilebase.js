"use strict";
var TileBase = (function () {
    function TileBase(x, y, width, height, name) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.name = name;
    }
    TileBase.prototype.getColumn = function (x) {
        return new TileBase(this.x + x, this.y, 1, this.height, "");
    };
    return TileBase;
}());
exports.TileBase = TileBase;
//# sourceMappingURL=tilebase.js.map