import { Matrix } from "./matrix";

export class Render {
    matrix: Matrix;
    constructor(x: number, y: number, randomize: boolean) {
        console.log("Iniciando Render")
        this.matrix = new Matrix(x, y, randomize);
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
                cell.style.backgroundColor = '#0a050f';
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
                        cell.style.backgroundColor = '#cc4f43';
                    } else {
                        cell.style.backgroundColor = '#0a050f';
                    }
                }
                
            }
        }
    }

    born(row: any, column: any) {
        this.matrix.born(row, column)
        const id = `${row}-${column}`;
        let cell = document.getElementById(id);
        if(cell != null)
         cell.style.backgroundColor = "#cc4f43";
    }
}