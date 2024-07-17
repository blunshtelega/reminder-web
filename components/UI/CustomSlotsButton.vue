<template>
  <div class='custom-button-with-slots'>
    <button
      class="button is-primary"
    >
      <slot name="icon-before"></slot>
      <span class="custom-button-with-props__text">
        <slot name="button-text"></slot>
      </span>
      <slot name="icon-after"></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CustomButtonWithSlots',
};
</script>