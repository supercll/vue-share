import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const num = ref(18)
    function add() {
      num.value += 2
    }

    return {
      num,
      add,
    }
  },
})