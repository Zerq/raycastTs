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
    public add(item: T, x: number, y: number) {
        if (x < 0 || y < 0 || x > this.width || y > this.height) {
            throw new Error("grid out of range!");
        }
        if (this.data[x] == undefined) {
            this.data[x] = [];
        }

        this.data[x][y] = item;
    }
    public remove(x: number, y: number) {
        this.data[x][y] = undefined;
    }
    public get(x: number, y: number): T {
        return this.data[x][y];
    }
    public gridTraverse(itemfunc: (itm: T, x: number, y: number) => void, newLineFunc: () => void) {
        for (let y: number = 0; y < this.height; y++) {
            for (let x: number = 0; x < this.width; x++) {
                let item = <T> this.data[x][y];
                itemfunc(item, x, y);
            }
            newLineFunc();
        }
    }
}