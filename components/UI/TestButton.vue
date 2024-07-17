<script setup>
import { ref } from 'vue'

const count = ref(0)

const refObject = ref({
  id: 1,
  name: 'Paul',
  born: 1993
})

const hugeArray = ref(new Array(1000).fill(1))

const reactiveObject = reactive({
  id: 2,
  name: 'Julia',
  born: 1991
})

// a computed ref
// The computed() function expects to be passed a getter function, and the returned value is a computed ref
const getSexByName = computed(() => {
  return refObject.name === 'Paul' ? 'man' : 'woman'
})

const getSexByNameReactive = computed(() => {
  return reactiveObject.name === 'Paul' ? 'man' : 'woman'
})

// In cases where you do not want caching, use a method call instead.
function calculateBooksMessage() {
  console.log('')
  return reactiveObject.name === 'Paul' ? 'man' : 'woman'
}

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>