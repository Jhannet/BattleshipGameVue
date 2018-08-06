<template>
  <div class="token-configuration">
    <div class="form">
      <label>Session game</label>
      <input type="text" v-model="token"/>
      <button @click="gameJoin(token)">Join</button>
    </div>
  </div>
</template>

<script>
import {EventBus} from '@/services/event-bus';
import Game from '@/services/game';
export default {
  name: 'tokenConfiguration',
  data(){
    return {
      token:"",
    }
  },
  mounted() {
    EventBus.$on('token', (data) => {
      this.token = data;
    })
  },
  methods: {
    gameJoin(token) {
      Game.gameJoin(token)
      .then(game => {
        console.log(game);
        EventBus.$emit('columns', game.cols);
        EventBus.$emit('rows', game.rows);
      })
    }
  }
};
</script>

<style scoped>
.token-configuration {
    border: 3px solid green;
    width: 300px;
    height: 100px;
}
</style>