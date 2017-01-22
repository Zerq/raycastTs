import { Grid } from './model/grid';
import { TileBase } from './model/tilebase';
import { TileCollection } from './model/tilecollection';

let grid = new Grid<number>(6, 6);
grid.add(0,     0, 0);
grid.add(0,     1, 0);
grid.add(1,     2, 0);
grid.add(4,     3, 0);
grid.add(0,     4, 0);
grid.add(0,     5, 0);



grid.add(0,     0, 1);
grid.add(null,  1, 1);
grid.add(null,  2, 1);
grid.add(null,  3, 1);
grid.add(null,  4, 1);
grid.add(0,     5, 1);

grid.add(1,     0, 2);
grid.add(null,  1, 2);
grid.add(null,  2, 2);
grid.add(null,  4, 2);
grid.add(3,     5, 2);


grid.add(0,     0, 3);
grid.add(null,  1, 3);
grid.add(null,  2, 3);
grid.add(3,     3, 3);
grid.add(null,  4, 3);
grid.add(3,     5, 3);


grid.add(0,     0, 4);
grid.add(1,     1, 4);
grid.add(0,     2, 4);
grid.add(null,     3, 4);
grid.add(null,     4, 4);
grid.add(1,     5, 4);


grid.add(null, 0, 5);
grid.add(null, 1, 5);
grid.add(0, 2, 5);
grid.add(0, 3, 5);
grid.add(1, 4, 5);
grid.add(1, 5, 5);


let canvas = <HTMLCanvasElement>document.getElementById("game");
var context = canvas.getContext("2d");

var img = <HTMLCanvasElement>document.getElementById("img");
context.clearRect(0, 0, 64 * 5, 64 * 5);
grid.gridTraverse((n, x, y) => {
    let tile = TileCollection.GetByIndex(n);
    if (tile != null) {
        context.drawImage(img, tile.x, tile.y, tile.width, tile.height, x * 64, y * 64, 64, 64);
    }
}, () => {

});

//14kg, vesa200