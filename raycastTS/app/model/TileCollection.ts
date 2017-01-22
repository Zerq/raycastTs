import { TileBase } from './tilebase';

export class TileCollection {
    private static data: Array<TileBase> = [
      new TileBase(0, 0, 64, 64, "StoneWall"),
      new TileBase(64, 0, 64, 64, "DarkStoneWall"),
      new TileBase(64 * 4, 0, 64, 64, "StoneWallNaziFlag"),
      new TileBase(64 * 5, 0, 64, 64, "DarkStoneWallNaziFlag"),
      new TileBase(0, 64, 64, 64, "Hitler"),
      new TileBase(64, 64, 64, 64, "HitlerDark")
    ];
 
    public static GetByIndex(index: number) {
        if (TileCollection.data.length <= index) {
            return null;
        }
        return TileCollection.data[index];
    }
    public static GetByName(name: string) {
        let result = TileCollection.data.filter(n => n.name == name);
        if (result.length == 0) {
            return null;
        }
        return result;
    }
}