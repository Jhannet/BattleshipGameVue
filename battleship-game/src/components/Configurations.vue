<template>
  <div class="configurations">
    <board-configuration></board-configuration>
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
    width: 37%;
    float: left;
    /* border: 3px solid blue; */
    position: relative;
}
</style>