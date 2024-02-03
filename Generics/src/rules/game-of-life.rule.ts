import { IRule } from "../interfaces/irule";

export class GameOfLifeRule implements IRule{
    
    name: string = "Game Of Life";
    apply(oldCell: any): void {
        if (oldCell.isLive && (oldCell.neighbors < 2 || oldCell.neighbors > 3)) {
            oldCell.isLive = 0;
        }
        if (oldCell.neighbors == 3) {
            oldCell.isLive = 1;
        }
    }

    getRandomNumber(): number {
        const maxValue = 4;
        return Math.floor(Math.random() * maxValue);
    }
}