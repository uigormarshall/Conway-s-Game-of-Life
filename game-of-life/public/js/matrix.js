export class Matrix {
    constructor(x, y, randomize = false) {
        this.rows = 0;
        this.columns = 0;
        console.log("Inicializando Matriz");
        this.rows = x;
        this.columns = y;
        this.matrix = this.generateEmptyMatrix(x, y);
        if (randomize)
            this.randomizeLiveCells();
    }
    generateEmptyMatrix(x, y) {
        let matrix = [];
        for (let row = 0; row < x; row++) {
            let line = [];
            matrix.push(line);
            for (let column = 0; column < y; column++) {
                const id = `${row}-${column}`;
                let cell = {
                    id: id,
                    row: row,
                    column: column,
                    isLive: false,
                    neighbors: 0,
                    checker: ""
                };
                line.push(cell);
            }
        }
        return matrix;
    }
    randomizeLiveCells() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                const numberOfSort = this.generateRandomNumber(0, 2);
                if (numberOfSort == 1) {
                    this.matrix[row][column].isLive = numberOfSort;
                    this.matrix[row][column].neighbors = this.countNeighbors(this.matrix[row][column], this.matrix);
                }
            }
        }
    }
    generateRandomNumber(min, max) {
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
            if ((neighbor.row >= 0 && neighbor.row < this.rows) &&
                (neighbor.column >= 0 && neighbor.column < this.columns)) {
                cell = matrix[neighbor.row][neighbor.column];
                if (cell !== undefined) {
                    if (cell.isLive == 1) {
                        count++;
                    }
                }
                else {
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
                const oldCell = this.matrix[row][column];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4LmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8iLCJzb3VyY2VzIjpbIm1hdHJpeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sTUFBTTtJQUlmLFlBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxTQUFTLEdBQUcsS0FBSztRQUhuRCxTQUFJLEdBQVksQ0FBQyxDQUFDO1FBQ2xCLFlBQU8sR0FBWSxDQUFDLENBQUM7UUFHakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdDLElBQUksU0FBUztZQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUNwQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM5QixJQUFJLElBQUksR0FBd0csRUFBRSxDQUFBO1lBQ2xILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDdkMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUE7Z0JBQzdCLElBQUksSUFBSSxHQUFHO29CQUNQLEVBQUUsRUFBRSxFQUFFO29CQUNOLEdBQUcsRUFBRSxHQUFHO29CQUNSLE1BQU0sRUFBRSxNQUFNO29CQUNkLE1BQU0sRUFBRSxLQUFL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