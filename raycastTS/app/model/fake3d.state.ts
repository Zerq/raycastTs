/// <reference path="../../node_modules/@types/es6-shim/index.d.ts" />
import { GameStateLike } from './statelike';
import { Grid } from './grid';
import { TileBase } from './tilebase';
import { TileCollection } from './tilecollection';
import { Player } from './player';


export class Fake3dState implements GameStateLike {

    player: Player;
    grid: Grid<number>;
    img: HTMLImageElement;
    public constructor() {
        this.img = <HTMLImageElement>document.getElementById("img");
        this.grid = new Grid<number>(6, 6);
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

        this.player = new Player();
        this.player.x = 170;
        this.player.y = 74;
        this.player.angle = 0;
    }

    stateStart: number;
    lastCycle: number;
    load(): void {

    }

    unload(): void {

    }

    update(): PromiseLike<void> {
        return new Promise<void>((resolve, reject) => {
            let gamepads = navigator.getGamepads();
            if (gamepads.length > 0) {
                if (gamepads[0] != null) {
                    if (gamepads[0].axes.length > 0) {
                        let up: boolean = Math.round(gamepads[0].axes[1]) < 0;
                        let down: boolean = Math.round(gamepads[0].axes[1]) > 0;
                        let left: boolean = Math.round(gamepads[0].axes[0]) < 0;
                        let right: boolean = Math.round(gamepads[0].axes[0]) > 0;

                        let deg = (Math.PI / 180);

                        let dirx = Math.cos(this.player.angle * deg) * 2
                        let diry = Math.sin(this.player.angle * deg) * 2


                        if (left) {
                            this.player.angle--;
                        }
                        if (right) {
                            this.player.angle++;
                        }
                        if (up) {
                            this.player.x += dirx;
                            this.player.y += diry;
                        }
                    
                        if (down) {
                            this.player.x -= dirx;
                            this.player.y -= diry;
                        }

         

 
                    }
                }
            }



            resolve();
        });
    }

    draw(context: CanvasRenderingContext2D): PromiseLike<void> {
     return new Promise<void>((resolve, reject) => {
            try {
                context.clearRect(0, 0, 64 * 5, 64 * 5);
                this.grid.gridTraverse((n, x, y) => {
                    let tile = TileCollection.GetByIndex(n);
                    if (tile != null) {
                        context.drawImage(this.img, tile.x, tile.y, tile.width, tile.height, x * 64, y * 64, 64, 64);
                    }
                }, () => {
                    });


                let tilefractionX = Math.round((this.player.x / 64) * 10) / 10;
                let tilefractionY = Math.round((this.player.y / 64) * 10) / 10;
                context.clearRect(400, 25, 500, 200);

                context.font = "20px Georgia";
                context.strokeText(`x=${tilefractionX}    y=${tilefractionY}`, 400, 50);


                this.player.render(context);
                resolve();
            } catch (err) {
                reject(err);
            }
        }); 
      }    
}



