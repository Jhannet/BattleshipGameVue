<template>
  <div id="app">
    <h1>Battleship Game</h1>
    <router-view/>    
  </div>
</template>

<script>

export default {
  name: 'app'
};
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
