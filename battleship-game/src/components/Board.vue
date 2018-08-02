<template>
  <div class="board">
    <table>
        <tbody>
            <tr>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
            <tr>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
            <tr>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'board',
};
</script>

<style scoped>
.board {
    border: #42b983 solid 1px;
}
</style>
