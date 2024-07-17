
<template>
  <div class="custom-button-with-props">
    <button
      class="button is-primary"
    >
      <span
        v-if="showIconBefore"
        class="custom-button-with-props__icon--before"
      >
        <i class="fa fa-arrow-right"></i>
      </span>
      <span
        v-if="buttonText.length"
        :style="`color:${buttonTextColor}`"
        class="custom-button-with-props__text"
      >
        {{ buttonText }}
      </span>
      <span
        v-if="showIconAfter"
        class="custom-button-with-props__icon--before"
      >
        <i class="fas fa-arrow-right"></i>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CustomButtonWithProps',
  props: {
    buttonText: {
      type: String,
      default: '',
    },
    buttonTextColor: {
      type: String,
      default: '#fff',
    },
    showIconBefore: {
      type: Boolean,
      default: false,
    },
    showIconAfter: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.custom-button-with-props__text {
  padding: 0 12px;
}
</style>