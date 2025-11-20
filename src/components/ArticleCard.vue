<template>
  <article
    class="article-card group w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-slate-900/15"
  >
    <component
      :is="href ? 'a' : 'div'"
      class="article-card__link grid h-full grid-rows-[auto_1fr_auto] text-current"
      :href="href"
      :target="target"
      :rel="relAttribute"
    >
      <figure class="article-card__media relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          :src="image"
          :alt="imageAlt"
          loading="lazy"
          class="article-card__image h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </figure>

      <div class="article-card__body grid gap-3 px-7 py-6">
        <h3 class="article-card__title text-lg font-semibold text-slate-900">{{ title }}</h3>
        <p class="article-card__excerpt text-sm leading-relaxed text-slate-600">{{ excerpt }}</p>
      </div>

      <footer class="article-card__footer px-7 pb-6 text-sm text-slate-500">
        <time :datetime="datetime">{{ date }}</time>
      </footer>
    </component>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  datetime: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: null,
  },
  target: {
    type: String,
    default: '_self',
  },
})

const relAttribute = computed(() => {
  if (props.target === '_blank') {
    return 'noopener noreferrer'
  }
  return undefined
})
</script>
