import { IRule } from "../interfaces/irule";

export class MazeRule implements IRule{
    name: string = "Maze";
    apply(oldCell: any): void {
        console.log(this.name + ': Aplicando Rules');
        
        // Lógica específica do Maze
        if (oldCell.isLive) {
            // Célula viva
            if (oldCell.neighbors < 1 || oldCell.neighbors > 5) {
                oldCell.isLive = 0; // Morte por solidão ou superpopulação
            }
        } else {
            // Célula morta
            if (oldCell.neighbors === 3) {
                oldCell.isLive = 1; // Nascimento
            }
        }
    }

    getRandomNumber(): number {
        const maxValue = 9;
        return Math.floor(Math.random() * maxValue);
    }
}