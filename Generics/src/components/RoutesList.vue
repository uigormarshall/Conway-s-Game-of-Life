
<template>
  <div>
    <ul :class="{ 'hovered': isLinkHovered('/game-of-life') }">
      <router-link to="/game-of-life"><p>Game of Life</p></router-link>
    </ul>
    <ul :class="{ 'hovered': isLinkHovered('/maze') }">
      <router-link to="/maze"><p>Maze</p></router-link>
    </ul>
  </div>
</template>

<style scoped>
p {
  color: #b4b7ca;
  font-size: 13px;
}

a {
  text-decoration: none;
}

p:hover {
  background-color: #444d84;
  color: #b2d5d1;
}

/* Estilo para o ul quando o router-link é hover */
ul.hovered {
  background-color: #444d84;
  color: #b2d5d1;
}

/* Estilo para o router-link quando hover */
ul:hover router-link {
  background-color: #444d84;
  color: #b2d5d1;
}
</style>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();

    const isLinkHovered = (path) => {
      return computed(() => route.path === path).value;
    };

    return {
      isLinkHovered,
    };
  },
};
</script>
