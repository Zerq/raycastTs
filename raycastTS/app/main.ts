import { GameStateLike } from './model/statelike';
import { Fake3dState } from './model/fake3d.state';

export class Game {
    static running: boolean = true;
  static  run() {
        let canvas = <HTMLCanvasElement>document.getElementById("game");
        let context = <CanvasRenderingContext2D>canvas.getContext("2d");
        let state: GameStateLike = new Fake3dState();
        state.stateStart = Date.now();
        requestAnimationFrame(GameFrame);
        function GameFrame() {
            state.lastCycle = Date.now();
            state.update().then(() => {
                state.draw(context).then(x => {
                    if (Game.running) {
                        requestAnimationFrame(GameFrame); // <-- this is fucked up! need to rethink this big time and base it on game time.... to late to think properly now though
                    }
              });
            });
        }
    }
}

Game.run();
//14kg, vesa200