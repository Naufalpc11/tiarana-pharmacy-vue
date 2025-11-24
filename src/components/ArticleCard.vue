<template>
  <article
    class="article-card group w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-slate-900/15 h-[520px] flex flex-col"
  >
    <component
      :is="linkTag"
      class="article-card__link flex h-full flex-col text-current"
      v-bind="linkAttrs"
    >
      <figure class="article-card__media relative h-[200px] overflow-hidden bg-slate-100">
        <img
          :src="image"
          :alt="imageAlt"
          loading="lazy"
          class="article-card__image h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </figure>

      <div class="article-card__body flex flex-1 flex-col gap-3 px-7 py-6">
        <h3 class="article-card__title text-lg font-semibold text-slate-900 line-clamp-2">{{ title }}</h3>
        <p class="article-card__excerpt text-sm leading-relaxed text-slate-600 line-clamp-4">{{ excerpt }}</p>
      </div>

      <footer class="article-card__footer px-7 pb-6 text-sm text-slate-500">
        <time :datetime="datetime">{{ date }}</time>
      </footer>
    </component>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

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

const isInternal = computed(() => typeof props.href === 'string' && /^\/[^/]/.test(props.href))

const relAttribute = computed(() =>
  props.target === '_blank' ? 'noopener noreferrer' : undefined
)

const linkTag = computed(() => {
  if (!props.href) return 'div'
  return isInternal.value ? RouterLink : 'a'
})

const linkAttrs = computed(() => {
  if (!props.href) return {}
  if (isInternal.value) {
    return { to: props.href }
  }
  return {
    href: props.href,
    target: props.target,
    rel: relAttribute.value,
  }
})
</script>

<style scoped>
/* Simple line clamp without Tailwind plugin */
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-clamp: 4;
  overflow: hidden;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
}
</style>
