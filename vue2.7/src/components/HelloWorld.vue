<template>
  <div>
    <h3>{{ num }}</h3>
    <button @click="add">增加+1</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const num = ref(18)
function add() {
  num.value++
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
