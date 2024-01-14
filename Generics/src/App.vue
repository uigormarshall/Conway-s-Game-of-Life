<template>
  <div id="app">
    <header>
      
    </header>
    <router-view></router-view>
    <RoutesList></RoutesList>
  </div>
</template>

<script>
import RoutesList from './components/RoutesList.vue';
export default {
  name: 'App',
  components: {
    RoutesList, 
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Tirhuta&family=Nunito+Sans:opsz,wght@6..12,300&family=Pixelify+Sans:wght@400;500;600;700&display=swap');
body {
  background-color: #08001f ;
  margin: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;  
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 20px;
}
div{
  padding: 5px 5px;
}


</style>