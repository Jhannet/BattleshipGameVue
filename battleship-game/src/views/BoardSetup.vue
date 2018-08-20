<template>
	<div class="board-setup">
		<div class="board-container">
			<table id="board">
				<tr v-for="(row, rowIndex) in rows" v-bind:key=row>
					<td v-for="(col, colIndex) in cols" :id="(rowIndex + 1)+'-'+(colIndex + 1)" v-bind:key=col>
						0
					</td>
				</tr>
				<tr>
					<td :id="'78-9'+1" v-on:click="dragShip()">
						0
					</td>
				</tr>
			</table>
		</div>
		<div id="ship-container">
			<div class="ship-2"></div>
			<div class="ship-3"></div>
			<div class="ship-3"></div>
			<div class="ship-4"></div>
			<div class="ship-5"></div>
		</div>
		<button>Rotate</button>
		<button>Save</button>
	</div>
</template>
<script>
import * as dragula from "dragula";
export default {
  name: "BoardSetup",
  data() {
    return {
      cols: 0,
      rows: 0
    };
  },
  mounted() {
    this.getBoard().then(board => {
      this.cols = board.cols;
      this.rows = board.rows;
    })
    .then(()=> {this.dragShip()})
  },
  methods: {
    getBoard() {
      return Promise.resolve({
        rows: 10,
        cols: 15
      });
    },
    dragShip() {
      for (let i = 1; i <= this.rows; i++) {
        for (let j = 1; j <= this.cols; j++) {
          const id = i + "-" + j;
          // console.log(id);
          dragula(
            [
              document.getElementById("ship-container"),
              document.getElementById(i+"-"+j)
            ],
            {
              copy: function(el, source) {
                return source === document.getElementById("ship-container");
              },
              accepts: function(el, target) {
                return target !== document.getElementById("ship-container");
              }
            }
          );
        }
      } /*
      dragula(
        [
          document.getElementById("ship-container"),
          document.getElementById(idCol)
        ],
        {
          copy: function(el, source) {
            return source === document.getElementById("ship-container");
          },
          accepts: function(el, target) {
            return target !== document.getElementById("ship-container");
          }
        }
			);*/
    }
  }
};
</script>
<style scoped>
.board {
  border: #42b983 solid 1px;
  width: 60%;
  float: left;
}
.board-container {
  padding: 20px;
  width: 65%;
  float: left;
}
#my-table {
  border-collapse: collapse;
  border: 1px solid #42b983;
}
tr,
td {
  border: 1px solid #42b983;
  width: 45px;
  height: 45px;
}
#ship-container {
  width: 25%;
  height: 200px;
  padding: 20px;
  float: left;
}
#ship-container div {
  margin-bottom: 15px;
}
.ship-2 {
  background-image: url(../assets/boat-2.png);
  background-repeat: no-repeat;
  background-size: 50px 25px;
  height: 25px;
  width: 50px;
}
.ship-3 {
  background-image: url(../assets/boat-3.png);
  background-repeat: no-repeat;
  background-size: 75px 25px;
  height: 25px;
  width: 75px;
}
.ship-4 {
  background-image: url(../assets/boat-4.png);
  background-repeat: no-repeat;
  background-size: 100px 25px;
  height: 25px;
  width: 100px;
}
.ship-5 {
  background-image: url(../assets/boat-5.png);
  background-repeat: no-repeat;
  background-size: 125px 25px;
  height: 25px;
  width: 125px;
}
</style>