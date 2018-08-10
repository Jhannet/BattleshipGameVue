<template>
  <div class="board">
    <h4>Board game {{rows}} x {{columns}}</h4>
    <div id="board-container">
      <table id='my-table'>
        <tr v-for="row in rows" :key="row">
          <td v-for="column in columns" :key="column"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {EventBus} from '@/services/event-bus';

export default {
  name: 'board',
  data() {
    return {
      rows: 10,
      columns: 10,
    }
  },
  mounted() {
    EventBus.$on('rows', (data) => {
      this.rows = data;
    })
    EventBus.$on('columns', (data) => {
      this.columns = data;
    })
  },
};
</script>

<style scoped>
.board {
    border: #42b983 solid 1px;
    width: 60%;
    float: left;
}
#board-container {
  margin: 10px;
}
#my-table {
  border-collapse: collapse;
  border: 1px solid #42b983;
}
tr, td {
  border: 1px solid #42b983;
  width: 20px;
  height: 20px;
}
</style>
