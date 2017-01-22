export class Player {
    public x: number;
    public y: number;
    public angle: number;


    
        private static deg = Math.PI / 180;
        private radiate(x: number, y: number, amplitude: number, degree: number, context: CanvasRenderingContext2D) {
        context.moveTo(x, y);
        let xx = (Math.cos(degree * Player.deg) * amplitude) + this.x;
        let yy = (Math.sin(degree * Player.deg) * amplitude) + this.y;
        context.lineTo(xx, yy);
    }

    public render(context: CanvasRenderingContext2D): void {   
        context.beginPath();
        context.strokeStyle = "#ffff00";
        context.moveTo(this.x, this.y);
        this.radiate(this.x, this.y, 22, this.angle-45, context);
        this.radiate(this.x, this.y, 44, this.angle, context);
        this.radiate(this.x, this.y, 22, this.angle+45, context);
        context.stroke(); 
    }

}