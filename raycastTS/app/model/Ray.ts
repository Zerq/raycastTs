import { Grid } from './grid';
import { Player } from './player';
import { Fake3dState } from './fake3d.state';

export interface RayResult {
    distance: number; // ray distance
    tileIndex: number; //index of tile hit
    xTilePixelColumn: number; // x pixel dimention of the pixel column to scale
}

export class Ray {
    state: Fake3dState;
    public cast(): RayResult {


        return null;
    }
    


}