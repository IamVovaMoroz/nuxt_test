import { ref } from 'vue'

//counterComposable
//let count = ref(0) so initialValue = 0
export function useCounter (initialValue = 0) {
  const count = ref(initialValue)

  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, increment, decrement }
}
