import { IRule } from "./interfaces/irule";

export class Matrix {
    rows : number = 0;
    columns : number = 0;
    matrix :any;
    rule: IRule;
    constructor(x: number, y: number, randomize = false, rule: IRule) {
        console.log("Inicializando Matriz")
        this.rows = x;
        this.columns = y;
        this.matrix = this.generateEmptyMatrix(x, y);
        this.rule = rule;
        if (randomize) this.randomizeLiveCells();
    }

    generateEmptyMatrix(x: number, y: number) {
        let matrix = [];
        for (let row = 0; row < x; row++) {
            let line: { id: string; row: number; column: number; isLive: boolean; neighbors: number; checker: string; }[] = []
            matrix.push(line);
            for (let column = 0; column < y; column++) {
                const id = `${row}-${column}`
                let cell = {
                    id: id,
                    row: row,
                    column: column,
                    isLive: false,
                    neighbors: 0,
                    checker: ""
                }
                line.push(cell);
            }
        }
        return matrix;
    }

    randomizeLiveCells() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                const numberOfSort = this.rule.getRandomNumber();
                if (numberOfSort == 1) {
                    this.matrix[row][column].isLive = numberOfSort;
                    this.matrix[row][column].neighbors = this.countNeighbors(this.matrix[row][column], this.matrix);
                }
            }
        }
    }

    updateNeighbors(matriz: any[][]) {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                const cell = matriz[row][column];
                cell.neighbors = this.countNeighbors(cell, matriz);
                this.matrix[row][column].neighbors = cell.neighbors;
            }
        }
    }

    countNeighbors(cell: { row: number; column: number; isLive: number; } , m: any[][]) {
        let matrix = m;
        let count = 0;
        let neighbors = [
            { name: "norte[N]", row: cell.row - 1, column: cell.column },
            { name: "Sul[S]", row: cell.row + 1, column: cell.column },
            { name: "Oeste[O]", row: cell.row, column: cell.column - 1 },
            { name: "Este[E]", row: cell.row, column: cell.column + 1 },
            { name: "Noroeste[NO]", row: cell.row - 1, column: cell.column - 1 },
            { name: "Nordeste[NE]", row: cell.row - 1, column: cell.column + 1 },
            { name: "Sudoeste[SO]", row: cell.row + 1, column: cell.column - 1 },
            { name: "Sudeste[SE]", row: cell.row + 1, column: cell.column + 1 },
        ];
        neighbors.forEach((neighbor) => {
            if (
                (neighbor.row >= 0 && neighbor.row < this.rows) &&
                (neighbor.column >= 0 && neighbor.column < this.columns)
            ) {
                cell = matrix[neighbor.row][neighbor.column];
                if (cell !== undefined) {
                    if (cell.isLive == 1) {
                        count++;
                    }
                } else {
                    console.log("Cell not found");
                }
            }
        });
        return count;
    }

    nextGen() {
        let nextGen = this.matrix;
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                let cell = nextGen[row][column];
                cell.neighbors = this.matrix[row][column].neighbors;
                const oldCell = this.matrix[row][column]
                this.rule.apply(oldCell)
            }
        }
        this.updateNeighbors(nextGen);
        return nextGen;
    }


    born(row: string | number, column: string | number) {
        this.matrix[row][column].isLive = 1;
        this.updateNeighbors(this.matrix);
    }
}