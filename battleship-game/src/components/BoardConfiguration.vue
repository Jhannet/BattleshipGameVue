<template>
  <div class="board-configuration">
        <label>Number of rows</label>
        <input v-model.number="rows" type="number" min='4' @change="sendValues(rows, columns)">
        <label>Number of columns</label>
        <input v-model.number="columns" type="number" min='4' @change="sendValues(rows, columns)">
        <button @click="createGame(rows, columns)">Create</button>
  </div>
</template>

<script>
import {EventBus} from '@/services/event-bus';
import Game from '@/services/game';

export default {
  name: 'boardConfiguration',
  data() {
    return {
      rows: 4,
      columns: 4,
    }
  },
  methods: {
    sendValues(rows, columns) {
      EventBus.$emit('rows', rows);
      EventBus.$emit('columns', columns);
    },
    createGame(rows, columns) {
      Game.createGame({rows, columns})
      .then(game => {
        console.log(game);
        console.log(game.session);
        EventBus.$emit('token', game.session);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
};
</script>

<style scoped>
.board-configuration {
    border: 3px solid red;
    width: 300px;
    height: 150px;
    float: left;
    padding: 20px;
}
label {
  display: block;
}
input {
  display: block;
  margin: 5px 20px 0 0;
}
</style>