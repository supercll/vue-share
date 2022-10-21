<template>
  <div class="ruben">
    <p>{{ count }}</p>
    <button @click="increment">放大</button>
    <button @click="reduce">缩小</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(1)
const increment = () => {
  count.value++
}
const reduce = () => {
  if (count.value > 1) {
    count.value--
  }
}
</script>

<style scoped>
.ruben {
  transform: scale(v-bind(count));
}
</style>
