import { IRule } from "./interfaces/irule";
import { Matrix } from "./matrix";

export class Render {
    matrix: Matrix;
    rule: IRule;

    colors = {
        live: '#b2d5d1 ',
        death: '#08001f',
        background: '#08001f'
    }
    constructor(x: number, y: number, randomize: boolean, rule: IRule) {
        console.log("Iniciando Render")
        this.rule = rule;
        this.matrix = new Matrix(x, y, randomize, this.rule);
        this.generateCells(this.matrix.matrix);
    }

    generateCells(matrix: string | any[]) {
        let table = document.getElementById('matrix') as HTMLTableElement;

        for (let row = 0; row < matrix.length; row++) {
            let rowTd = document.createElement('tr');
            for (let column = 0; column < matrix[row].length; column++) {
                const cell = document.createElement('td');
                const id = `${matrix[row][column].id}`;
                cell.id = id;
                cell.style.backgroundColor = this.colors.background;
                rowTd.appendChild(cell);
            }
            table.appendChild(rowTd);
        }
        document.body.appendChild(table);
    }

    nextGen() {
        const nextGen = this.matrix.nextGen();
        const rows = nextGen.length;
        const columns = nextGen[0].length;

        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) {
                const id = `${row}-${column}`;
                let cell = document.getElementById(id);
                if(cell){
                    if (nextGen[row][column].isLive == 1) {
                        cell.style.backgroundColor = this.colors.live;
                    } else {
                        cell.style.backgroundColor = this.colors.death;
                    }
                }
            }
        }
    }

    born(row: number, column: number) {
        this.matrix.born(row, column)
        const id = `${row}-${column}`;
        let cell = document.getElementById(id);
        if(cell != null)
         cell.style.backgroundColor = this.colors.death;
    }
}