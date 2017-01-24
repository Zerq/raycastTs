import { Grid } from './grid';
import { Player } from './player';
import { Fake3dState } from './fake3d.state';
import { TileCollection } from './tilecollection';
export interface RayResult {
    distance: number; // ray distance
    tileIndex: number; //index of tile hit
    xTilePixelColumn: number; // x pixel dimention of the pixel column to scale
    failed: boolean;
}

export class Ray {
    public static cast(dirX: number, dirY: number, player: Player, map: Grid<number>): RayResult {
        let lenght;
        let px = player.x / 64;
        let py = player.y / 64;
        let currentTile = map.get(Math.round(px), Math.round(py));

        for (lenght = 0; lenght < 32; lenght++) {
            if (TileCollection.GetByIndex(map.get(Math.round(px), Math.round(py))) != null) {
                currentTile = map.get(Math.round(px), Math.round(py));
                break;
            }
     
            px += dirX;
            py += dirY;            
        }
        window["debugTestWatch"] = lenght;
        //fakeout implementation
        return <RayResult>{ distance: lenght - 64, failed: false, tileIndex: currentTile, xTilePixelColumn: 0 };
    }
    


}