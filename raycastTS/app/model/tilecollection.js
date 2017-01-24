"use strict";
var tilebase_1 = require("./tilebase");
var TileCollection = (function () {
    function TileCollection() {
    }
    TileCollection.GetByIndex = function (index) {
        if (TileCollection.data.length <= index) {
            return null;
        }
        return TileCollection.data[index];
    };
    TileCollection.GetByName = function (name) {
        var result = TileCollection.data.filter(function (n) { return n.name == name; });
        if (result.length == 0) {
            return null;
        }
        return result[0];
    };
    return TileCollection;
}());
TileCollection.data = [
    new tilebase_1.TileBase(0, 0, 64, 64, "StoneWall"),
    new tilebase_1.TileBase(64, 0, 64, 64, "DarkStoneWall"),
    new tilebase_1.TileBase(64 * 4, 0, 64, 64, "StoneWallNaziFlag"),
    new tilebase_1.TileBase(64 * 5, 0, 64, 64, "DarkStoneWallNaziFlag"),
    new tilebase_1.TileBase(0, 64, 64, 64, "Hitler"),
    new tilebase_1.TileBase(64, 64, 64, 64, "HitlerDark")
];
exports.TileCollection = TileCollection;
//# sourceMappingURL=tilecollection.js.map