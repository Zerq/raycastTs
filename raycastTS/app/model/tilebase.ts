export class TileBase {
    public constructor(x: number, y: number, width: number, height: number, name: string) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.name = name;
    }
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
}