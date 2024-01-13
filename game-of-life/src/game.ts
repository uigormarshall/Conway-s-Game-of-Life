
import { Render } from "./render";

function start() {
  console.log("Iniciando Game...")
  
  const x = 100
  const y = 100
  const randomize = true;

  const render = new Render(x, y, randomize);
  setInterval(render.nextGen.bind(render), 200);
}


start();