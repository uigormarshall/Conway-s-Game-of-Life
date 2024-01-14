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
  width: 2px; 
  height: 2px; 
}

</style>
<script>
import { Game } from '../game';
import { GameOfLifeRule } from '../rules/game-of-life.rule';

export default {
  data() {
    return {
      gameOfLife: null,
    };
  },
  mounted() {
    const rule = new GameOfLifeRule();
   const game = new Game('Game Of Life', 5 ,rule);
   game.run();
 
  },
};
</script>
