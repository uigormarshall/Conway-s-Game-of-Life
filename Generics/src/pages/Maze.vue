<script setup lang="ts">
</script>

<template>
    <div>
        <table id="matrix">
        </table>
    </div>
</template>
<style>
td{
    border: none;
    width: 2px; 
    height: 2px; 
    transition: background-color 2s ease;
}
table {
    border-collapse: collapse;  
}

</style>
<script>
import { Game } from '../game';

import { MazeRule } from '../rules/maze.rule';
export default {
  data() {
    return {
      gameOfLife: null,
    };
  },
  mounted() {
   const rule = new MazeRule();
   const game = new Game('Game Of Life: Maze', 10 ,rule);
   game.run();
 
  },
};
</script>
