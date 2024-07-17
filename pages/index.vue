<script setup lang="ts">

</script>

<template>
  <div>
    <h1>Home page</h1>

    <NuxtLink to="/about">About page</NuxtLink>

    <UICustomSlotsButton>
      <template v-slot:icon-before>
        <span>420</span>
      </template>
      <template v-slot:button-text>
        Completely different text
      </template>
      <template v-slot:icon-after>
        <span>123</span>
      </template>
    </UICustomSlotsButton>

    <UICustomPropsButton
      :button-text="'I\'m a button'"
      :button-text-color="'red'"
      :show-icon-before="true"
      :show-icon-after="true"
    />
    
  </div>
</template>