<template>
  <div class="home">
    <!-- <router-view/> -->
    <board></board>
    <configurations></configurations>
  </div>
</template>

<script>
import Board from '@/components/Board.vue';
import Configurations from '@/components/Configurations.vue';

export default {
  name: 'home',
  components: {
    Board,
    Configurations,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
