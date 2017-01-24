"use strict";
var tilecollection_1 = require("./tilecollection");
var Ray = (function () {
    function Ray() {
    }
    Ray.cast = function (dirX, dirY, player, map) {
        var lenght;
        var px = player.x / 64;
        var py = player.y / 64;
        var currentTile = map.get(Math.round(px), Math.round(py));
        for (lenght = 0; lenght < 32; lenght++) {
            if (tilecollection_1.TileCollection.GetByIndex(map.get(Math.round(px), Math.round(py))) != null) {
                currentTile = map.get(Math.round(px), Math.round(py));
                break;
            }
            px += dirX;
            py += dirY;
        }
        window["debugTestWatch"] = lenght;
        //fakeout implementation
        return { distance: lenght - 64, failed: false, tileIndex: currentTile, xTilePixelColumn: 32 };
    };
    return Ray;
}());
exports.Ray = Ray;
//# sourceMappingURL=ray.js.map