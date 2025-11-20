<template>
  <article
    class="mission-card group grid min-h-[210px] place-items-center gap-5 rounded-3xl border border-indigo-950/10 bg-white p-8 text-center text-slate-900 shadow-xl shadow-indigo-900/10 transition duration-200 hover:-translate-y-2 hover:bg-indigo-950 hover:text-white hover:shadow-indigo-900/40 focus-visible:outline-none"
    role="article"
    tabindex="0"
  >
    <h3 class="text-lg font-semibold transition group-hover:text-white">{{ title }}</h3>
    <p class="text-base leading-relaxed transition group-hover:text-white/90">{{ description }}</p>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
