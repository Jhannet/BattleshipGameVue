<template>
	<div class="board-setup">
		<div class="board-container">
			<table id="board">
				<tr v-for="(row, rowIndex) in rows">
					<td v-for="(col, colIndex) in cols" :id="(rowIndex + 1)+'-'+(colIndex + 1)">
						0					
          </td>
				</tr>
			</table>
		</div>
		<div id="ship-container">
			<div>ship1</div>
			<div>ship2</div>
			<div>ship3</div>
			<div>ship4</div>
			<div>ship5</div>
		</div>
		<button>Rotate</button>
		<button>Save</button>
	</div>
</template>
<script>
//const dragula = require('dragula');
import * as dragula from 'dragula';
export default {
	name: 'BoardSetup',
	data() {
		return {
			cols: 0,
			rows: 0
		}
	},
	mounted() {
	  this.getBoard()
	  	.then(board => {
	  		this.cols = board.cols
	  		this.rows = board.rows
      }),
    this.dragShip()
	},
	methods: {
		getBoard() {
			return Promise.resolve({
				rows: 10,
				cols: 15
			})
		},
		dragShip() {
      dragula([document.getElementById('ship-container'), document.getElementById('board')], {
        copy: function (el, source) {
          return source === document.getElementById('ship-container')
        },
        accepts: function (el, target) {
          return target !== document.getElementById('ship-container')
        }
      });
		}
	}
}
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