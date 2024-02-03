<script setup lang="ts">
</script>

<template>
  <div>
    <transition name="fade">
      <table class="game-of-life" id="matrix" v-if="show">
      </table>
    </transition>
  </div>
</template>
<style>
.game-of-life {
  border-collapse: inherit;  
  td{
    width: 1px; 
    height: 1px; 
    transition: background-color 0.3s ease-out;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 10%;
}
</style>
<script>
import { Game } from '../game';
import { GameOfLifeRule } from '../rules/game-of-life.rule';
const rule = new GameOfLifeRule();
export default {
  data() {
    return {
      gameOfLife: new Game('Game Of Life', 2 ,rule),
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
