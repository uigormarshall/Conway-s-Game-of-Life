class Matrix {
    constructor(x, y, randomize = false) {
        this.rows = x;
        this.columns = y;
        this.matrix = this.generateEmptyMatrix(x, y);

        if (randomize) this.randomizeLiveCells();
    }

    generateEmptyMatrix(x, y) {
        let matrix = [];
        for (let row = 0; row < x; row++) {
            let line = []
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
                const numberOfSort = this.generateRandomNumber(0, 3);
                if (numberOfSort == 1) {
                    this.matrix[row][column].isLive = numberOfSort;
                    this.matrix[row][column].neighbors = this.countNeighbors(this.matrix[row][column], this.matrix);
                }
            }
        }
    }
    generateRandomNumber(min, max) {
        // Gera um número aleatório entre min e max (incluindo min e max)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    updateNeighbors(matriz) {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                const cell = matriz[row][column];
                cell.neighbors = this.countNeighbors(cell, matriz);
                this.matrix[row][column].neighbors = cell.neighbors;
            }
        }
    }

    countNeighbors(cell, m) {
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
                if (oldCell.isLive && (oldCell.neighbors < 2 || oldCell.neighbors > 3)) {
                    oldCell.isLive = 0;
                }
                if (oldCell.neighbors == 3) {
                    oldCell.isLive = 1;
                }
            }
        }
        this.updateNeighbors(nextGen);
        return nextGen;
    }

    born(row, column) {
        this.matrix[row][column].isLive = 1;
        this.updateNeighbors(this.matrix);
    }
}

class Render {
    constructor(x, y, randomize) {
        this.matrix = new Matrix(x, y, randomize);
        this.generateCells(this.matrix.matrix);
    }

    generateCells(matrix) {
        let table = document.getElementById('matrix');

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
                if (nextGen[row][column].isLive == 1) {
                    cell.style.backgroundColor = '#cc4f43';
                } else {
                    cell.style.backgroundColor = '#0a050f';
                }
            }
        }
    }

    born(row, column) {
        this.matrix.born(row, column)
        const id = `${row}-${column}`;
        let cell = document.getElementById(id);
        cell.style.backgroundColor = "#cc4f43";
    }
}


function Game() {
    const x = 54
    const y = 96
    const randomize = true;
    const render = new Render(x, y, randomize);
    setInterval(render.nextGen.bind(render), 500);
}


Game();