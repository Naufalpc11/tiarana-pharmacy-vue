<template>
  <button
    class="circle-button inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white shadow-lg shadow-slate-900/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 disabled:pointer-events-none disabled:opacity-50"
    type="button"
    :disabled="props.disabled"
    v-bind="$attrs"
  >
    <span class="circle-button__icon flex items-center justify-center text-lg">
      <slot />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>
