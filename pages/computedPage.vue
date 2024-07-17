<script setup lang="ts">
// ! Нужен туту импорт?
// import { reactive, computed, ref } from 'vue'

const testNumber = ref(0)
const message = ref('')

const changeNumber = () => {
  testNumber.value += 1
}

const manCard = ref({
  id: 1,
  name: 'Paul',
  born: 1993
})

const womanCard = reactive({
  id: 2,
  name: 'Julia',
  born: 1991
})

// a computed ref
// The computed() function expects to be passed a getter function, and the returned value is a computed ref
const getSexByName = computed(() => {
  console.log('manCard.name', manCard.value.name)
  console.log('manCard', manCard)
  console.log('manCard', manCard.value)

  return manCard.name === 'Paul' ? 'man' : 'woman'
})

const getSexByNameReactive = computed(() => {
  console.log('womanCard.name', womanCard.name)
  console.log('womanCard', womanCard)

  return womanCard.name === 'Paul' ? 'man' : 'woman'
})


const testReactive = () => {

}

// const hugeArray = new Array(100000).fill(1)
// console.log('hugeArray', hugeArray)
const reactiveHugeArray = reactive(new Array(1000000).fill(1))
// console.log('reactiveHugeArray', reactiveHugeArray)


// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// const changeArray = () => {
//   const changedIndex = getRandomInt(100000)
//   console.log('changedIndex', changedIndex)
//   reactiveHugeArray[changedIndex] = 5
// }

// const getArrayCalculate = computed(() => {
//   console.time("computed test")
//   const res = reactiveHugeArray.reduce((acc, i ) => {
//     return acc += i
//   }, 0)
//   console.timeEnd("computed test")
//   return res
// })

// function getArrayAsFunc() {
//   console.time("function test")
//   const res = reactiveHugeArray.reduce((acc, i ) => {
//     return acc += i
//   }, 0)
//   console.timeEnd("function test")
//   return res
// }


// ! It is important to remember that computed getter functions should only perform pure computation and be free of side effects. For example, don't mutate other state, make async requests, or mutate the DOM inside a computed getter!
// ! Avoid mutating computed value

</script>

<template>
  <div>
    {{ message }}
    <input v-model.lazy="message" />
    {{ getSexByName }}
    {{ getSexByNameReactive }}
    <!-- <span>{{ publishedBooksMessage }}</span> -->
    <!-- Вывод as method: {{ getArrayAsFunc() }}
    Вывод as computed: {{ getArrayCalculate }} -->
    <!-- <button @click="changeArray">CLICK ME</button>
    <button @click="changeNumber">CLICK ME TO CHANGE NUMBER</button>
    {{ testNumber }} -->
    <button @click="testReactive">TEST REACTIVE</button>
    
  </div>
</template>