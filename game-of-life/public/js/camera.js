export class Camera {
    constructor() {
    }
    click() {
        let printContents = document.getElementById("matrix");
        if (printContents !== null) {
            let originalContents = document.body.innerHTML;
            window.print();
            document.body.innerHTML = originalContents;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8iLCJzb3VyY2VzIjpbImNhbWVyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxNQUFNLE9BQU8sTUFBTTtJQUNmO0lBRUEsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUcsYUFBYSxLQUFLLElBQUksRUFBQztZQUN4QixJQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBSTdDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVmLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1NBQzlDO0lBRUQsQ0FBQztDQUNOIn0=