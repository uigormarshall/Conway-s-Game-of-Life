<script setup lang="ts">
</script>

<template>
    <div>
        <table class="maze" id="matrix" v-if="show">
        </table>
    </div>
</template>
<style>
  .maze {
      border: none;
      border-collapse: collapse;  
      td{
        
        width: 2px; 
        height: 2px; 
        transition: background-color 1.5s ease;
      } 
  }
</style>
<script>
import { Game } from '../game';
import { MazeRule } from '../rules/maze.rule';
const rule = new MazeRule();
export default {
  data() {
    return {
      gameOfLife: new Game('Game Of Life: Maze', 6,rule),
      show: true
    };
  },
  mounted() {
   
   this.gameOfLife.run();
 
  },
  beforeRouteLeave(to, from, next) {
    // Lógica para desabilitar o componente ao sair da rota
    this.gameOfLife.stop();
    this.show = false;
    next();
  },
};
</script>
