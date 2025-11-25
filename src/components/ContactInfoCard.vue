<template>
  <article
    class="contact-info-card flex items-start gap-4 rounded-2xl bg-white p-6
           shadow-lg shadow-slate-900/5 transition duration-200
           hover:-translate-y-0.5 hover:shadow-slate-900/10"
  >
    <div
      class="icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl
             bg-indigo-500/10 text-[#1a237e]"
      aria-hidden="true"
    >
      <span v-if="iconImageUrl" v-html="iconImageUrl" class="h-7 w-7"></span>
      <i v-else :class="icon" class="text-lg" />
    </div>

    <div class="content flex-1 space-y-1 text-left">
      <h3 class="text-base font-semibold text-slate-900">{{ title }}</h3>
      <p
        v-for="(line, i) in lines"
        :key="i"
        class="text-sm leading-relaxed text-slate-600"
      >
        {{ line }}
      </p>
    </div>

    <button
      v-if="copyText && copyable"
      type="button"
      class="copy-btn ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center
             rounded-xl bg-indigo-500/10 text-indigo-700 transition
             hover:bg-indigo-500/20 focus-visible:outline-none
             focus-visible:ring-2 focus-visible:ring-indigo-500 self-start"
      :aria-label="`Salin ${title}`"
      @click="$emit('copy', copyText)"
    >
      <i class="fa-regular fa-copy text-sm" aria-hidden="true" />
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
