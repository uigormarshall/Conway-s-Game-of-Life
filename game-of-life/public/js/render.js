import { Matrix } from "./matrix";
export class Render {
    constructor(x, y, randomize) {
        console.log("Iniciando Render");
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
                if (cell) {
                    if (nextGen[row][column].isLive == 1) {
                        cell.style.backgroundColor = '#cc4f43';
                    }
                    else {
                        cell.style.backgroundColor = '#0a050f';
                    }
                }
            }
        }
    }
    born(row, column) {
        this.matrix.born(row, column);
        const id = `${row}-${column}`;
        let cell = document.getElementById(id);
        if (cell != null)
            cell.style.backgroundColor = "#cc4f43";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8iLCJzb3VyY2VzIjpbInJlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE1BQU0sT0FBTyxNQUFNO0lBRWYsWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLFNBQWtCO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBc0I7UUFDaEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXFCLENBQUM7UUFFbEUsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxLQUFLLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDeEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztnQkFDdkMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtZQUNELEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBTztRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM1QixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRWxDLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDakMsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDN0MsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7Z0JBQzlCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUcsSUFBSSxFQUFDO29CQUNKLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7d0JBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztxQkFDMUM7eUJBQU07d0JBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO3FCQUMxQztpQkFDSjthQUVKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQVcsRUFBRSxNQUFjO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUM3QixNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUcsSUFBSSxJQUFJLElBQUk7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDNUMsQ0FBQztDQUNKIn0=