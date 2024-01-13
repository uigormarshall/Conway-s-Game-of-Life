
import { Render } from "./render";

function start() {
  console.log("Iniciando Game...")
  
  const x = 120
  const y = 120
  const randomize = true;

  const render = new Render(x, y, randomize);
  setInterval(render.nextGen.bind(render), 200);
}


start();