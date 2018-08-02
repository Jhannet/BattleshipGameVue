<template>
  <div class="configurations">
    <!-- <router-view/> -->
    <BoardConfiguration></BoardConfiguration>
    <token-configuration></token-configuration>
  </div>
</template>

<script>
import BoardConfiguration from '@/components/BoardConfiguration.vue';
import TokenConfiguration from '@/components/TokenConfiguration.vue';

export default {
  name: 'configurations',
  components: {
    BoardConfiguration,
    TokenConfiguration,
  },
};
</script>

<style scoped>
.configurations {
    width: 40%;
    height: 100%;
    float: left;
    border: 3px solid blue;
}
</style>