import './style.css'
import { Game } from './game';
import { MazeRule } from './rules/maze.rule';

const mazeRule = new MazeRule();
const game = new Game('game of life', 5, mazeRule);

game.run();
