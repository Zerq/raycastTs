export interface GameStateLike {
    stateStart: number;
    lastCycle: number;
    load(): void;
    unload(): void;
    update(): PromiseLike<void>;
    draw(context: CanvasRenderingContext2D): PromiseLike<void>;
}