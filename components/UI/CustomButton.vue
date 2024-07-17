<script setup lang="ts">

defineProps<{
  title?: {
    type: string,
    required: false,
    // default: 'default string?'
  },
  titleProp: string | null,
  likes?: number
}>()

defineEmits({

})

// const emit = defineEmits({
//   // No validation
//   click: null,

//   // Validate submit event
//   submit: ({ email, password }) => {
//     if (email && password) {
//       return true
//     } else {
//       console.warn('Invalid submit event payload!')
//       return false
//     }
//   }
// })

// function submitForm(email, password) {
//   emit('submit', { email, password })
// }

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

</script>

<template>

</template>