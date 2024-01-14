import { IRule } from "./interfaces/irule";
import { Render } from "./render";

export class Game {
    name: string = "";
    fps: number = 5
    rule: IRule;
    constructor(name: string, fps: number, rule: IRule){
        this.name = name;
        this.fps = fps;
        this.rule = rule;
    }

    run(x: number=60, y: number=30){
        const randomize = true;
        const render = new Render(x, y, randomize, this.rule);
        setInterval(render.nextGen.bind(render), 1000/this.fps);
    }
}