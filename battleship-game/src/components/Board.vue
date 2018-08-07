<template>
  <div class="board">
    <h4>Board game {{rows}} x {{columns}}</h4>
    <div id="board-container">
      <table id='my-table'>
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
      rows: 4,
      columns: 4,
    }
  },
  mounted() {
    EventBus.$on('rows', (data) => {
      this.rows = data;
    })
    EventBus.$on('columns', (data) => {
      this.columns = data;
      this.createTable();
    })
    this.createTable();
  },
  methods: {
      createTable(){
        let table="<tbody>";
        for (var i = 0; i < this.rows; i++) {
          table+="<tr>";
          for (var j = 0; j < this.columns; j++) {
            table+="<td>x</td>";
          }
          table+="</tr>";
        }
        table+="</tbody>";
        document.getElementById("my-table").innerHTML = table;
      }
  },
};
</script>

<style scoped>
.board {
    border: #42b983 solid 1px;
    width: 60%;
    /* height: 100%; */
    float: left;
}
#my-table {
  border-collapse: collapse;
  /* background: #42b983; */
  border: 1px solid #42b983;
}
#my-tabl, tr, td {
  border: 1px solid #42b983;
  width: 20px;
  height: 20px;
}
</style>
