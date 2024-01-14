import './style.css'
import { Game } from './game';
import { GameOfLifeRule } from './rules/game-of-life.rule';

const gameOfLifeRule = new GameOfLifeRule();
const game = new Game('game of life', 5, gameOfLifeRule);

game.run();
