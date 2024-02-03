<template>
  <div id="app">
    <router-view></router-view>
    <RoutesList></RoutesList>
  </div>
</template>

<script>
import RoutesList from './components/RoutesList.vue';
import GameOfLife from './pages/GameOfLife.vue';
import Maze from './pages/Maze.vue';
export default {
  name: 'App',
  components: {
    RoutesList, 
    GameOfLife,
    Maze
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Tirhuta&family=Nunito+Sans:opsz,wght@6..12,300&family=Pixelify+Sans:wght@400;500;600;700&display=swap');
body {
  background-color: #08001f ;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;  
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 20px;
}
div{
  padding: 10px 10px;
}
</style>