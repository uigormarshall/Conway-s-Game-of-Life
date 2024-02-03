import { IRule } from "./interfaces/irule";
import { Render } from "./render";
import wait from 'wait';
export class Game {
    name: string = "";
    fps: number = 5
    rule: IRule;
    start: boolean = true;
    constructor(name: string, fps: number, rule: IRule){
        this.name = name;
        this.fps = fps;
        this.rule = rule;
    }

    async run(){
        const x = 90
        const y = 35
        const randomize = true;

        const render = new Render(x, y, randomize, this.rule);
        while(this.start){
            render.nextGen()
            await wait(1000/this.fps);
        }
        
        //setInterval(render.nextGen.bind(render), 1000/this.fps);
    }

    stop(){
        console.log("stop game")
        this.start = false;
    }
}