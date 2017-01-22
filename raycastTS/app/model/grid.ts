import { Point } from './point-types';
export class Grid<T> {
    public constructor(width: number, height: number) {
        this.data = [];
        this.height = height;
        this.width = width;
    }
    private data: T[][];
    public width: number;
    public height: number;
    public add(item: T, x: number, y: number, xOff: number = 0, yOff: number = 0, widthOff: number = this.width, heithtOff: number = this.height) {
        if (x + xOff < xOff || y + yOff < yOff || x > widthOff || y > heithtOff) {
            throw new Error("grid out of range!");
        }
        if (this.data[x + xOff] == undefined) {
            this.data[x + xOff] = [];
        }

        this.data[x + xOff][y + yOff] = item;
    }
    public remove(x: number, y: number, xOff: number = 0, yOff: number = 0) {
        this.data[x + xOff][y + yOff] = undefined;
    }
    public get(x: number, y: number, xOff: number = 0, yOff: number = 0): T {
        return this.data[x + xOff][y + yOff];
    }
    public gridTraverse(itemfunc: (itm: T, x: number, y: number) => void, newLineFunc: () => void, xOff: number = 0, yOff: number = 0, widthOff: number = this.width, heithtOff: number = this.height) {
        for (let y: number = yOff; y < heithtOff; y++) {
            for (let x: number = xOff; x < widthOff; x++) {
                let item = <T> this.data[x][y];
                itemfunc(item, x, y);
            }
            newLineFunc();
        }
    }
}