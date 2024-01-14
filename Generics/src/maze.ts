import './style.css'
import { Game } from './game';
import { MazeRule } from './rules/maze.rule';

const mazeRule = new MazeRule();
const game = new Game('Maze', 2, mazeRule);

game.run();
