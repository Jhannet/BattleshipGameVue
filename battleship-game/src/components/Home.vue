<template>
  <div class="home">
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

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
