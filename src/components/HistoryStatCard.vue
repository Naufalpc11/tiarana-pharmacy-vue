<template>
  <article
    class="history-stat-card grid place-items-center gap-3 rounded-3xl border border-indigo-950/10 bg-gradient-to-b from-slate-50 to-indigo-50 p-6 text-center shadow-lg shadow-indigo-900/10 transition duration-200 hover:-translate-y-1 hover:shadow-indigo-900/40"
    tabindex="0"
  >
    <div class="icon flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10" aria-hidden="true">
      <img v-if="iconImageUrl" :src="iconImageUrl" alt="" class="h-9 w-9 object-contain" />
      <i v-else :class="icon" class="text-xl text-indigo-700" />
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
