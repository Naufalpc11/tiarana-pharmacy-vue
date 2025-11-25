<template>
  <article
    class="history-stat-card grid place-items-center gap-3 rounded-3xl bg-white p-6 text-center
           shadow-md shadow-slate-900/10 transition duration-200
           hover:-translate-y-1 hover:shadow-slate-900/20"
    tabindex="0"
  >
    <div
      class="icon flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700"
      aria-hidden="true"
    >
      <span v-if="iconImageUrl" v-html="iconImageUrl" class="h-9 w-9"></span>
      <i v-else :class="icon" class="text-xl" />
    </div>

    <div class="value text-2xl font-semibold text-indigo-950">{{ value }}</div>
    <div class="label text-sm text-slate-600">{{ label }}</div>
  </article>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: '',
  },
  iconImageUrl: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>
