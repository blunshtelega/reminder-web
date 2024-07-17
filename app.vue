<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

// const { data: count } = await useFetch('/api/count')

</script>

<template>
  <div>
    <!-- <header>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/">Main</NuxtLink></li>
      </ul>
    </nav>
  </header> -->
  <!-- <p>Page visits: {{ count }}</p> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- <button @click="setPageLayout('default')"> Default </button>
    <button @click="setPageLayout('dark')"> Dark </button> -->
<!-- 
    <UButton color="white" @click="setPageLayout('default')">
        layouts/default.vue
      </UButton>
      <UButton color="white" @click="setPageLayout('dark')">
        layouts/custom.vue
      </UButton> -->


  </div>



</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
