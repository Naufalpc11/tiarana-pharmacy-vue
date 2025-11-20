<template>
  <article
    class="contact-info-card grid grid-cols-[52px_1fr_auto] items-center gap-4 rounded-2xl border border-indigo-950/10 bg-white p-6 shadow-xl shadow-indigo-900/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-indigo-900/15 sm:grid-cols-[48px_1fr]"
  >
    <div
      class="icon flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10"
      aria-hidden="true"
    >
      <img v-if="iconImageUrl" :src="iconImageUrl" alt="" class="h-8 w-8 object-contain" />
      <i v-else :class="icon" class="text-indigo-700" />
    </div>

    <div class="content space-y-1 text-left">
      <h3 class="text-lg font-semibold text-indigo-950">{{ title }}</h3>
      <p v-for="line in lines" :key="line" class="text-sm text-slate-600">{{ line }}</p>
    </div>

    <button
      v-if="copyText && copyable"
      type="button"
      class="copy-btn ml-auto inline-flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-700 transition hover:bg-indigo-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      :aria-label="`Salin ${title}`"
      @click="$emit('copy', copyText)"
    >
      <i class="fa-regular fa-copy" aria-hidden="true" />
    </button>
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
  title: {
    type: String,
    required: true,
  },
  lines: {
    type: Array,
    default: () => [],
  },
  copyText: {
    type: String,
    default: '',
  },
  copyable: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['copy'])
</script>
