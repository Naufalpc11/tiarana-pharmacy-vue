<template>
  <section
    class="articles-highlight mx-auto w-full rounded-[2.75rem] border border-white/20 bg-white/95 px-4 py-10 opacity-0 shadow-2xl shadow-indigo-900/10 transition duration-500 sm:px-8"
    :class="{ 'opacity-100 translate-y-0': isVisible, 'translate-y-6': !isVisible }"
    ref="sectionRef"
  >
    <div class="articles-grid grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
      <article class="highlight-card relative isolate overflow-hidden rounded-[2.5rem] bg-slate-900 text-white shadow-2xl">
        <transition-group name="highlight-image" tag="div" class="media-background-wrapper absolute inset-0">
          <div
            v-for="layer in backgroundLayers"
            :key="layer.key"
            class="media-background absolute inset-0 bg-cover bg-center bg-no-repeat"
            :style="layer.style"
          ></div>
        </transition-group>
        <div class="media-overlay absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/80"></div>
        <div class="content relative flex min-h-[520px] flex-col justify-between gap-8 p-8 sm:p-10">
          <div class="card-date absolute right-8 top-8 text-sm font-semibold tracking-[0.3em] text-white/80">
            {{ displayDate }}
          </div>

          <div class="text space-y-4">
            <h3 class="text-3xl font-semibold leading-tight sm:text-4xl">{{ displayTitle }}</h3>
            <p class="text-base leading-relaxed text-white/80">{{ displayExcerpt }}</p>
          </div>

          <div class="card-actions flex flex-wrap items-center justify-between gap-4">
            <Button :href="primaryArticleHref" size="lg">
              Baca Artikel
            </Button>
            <div class="nav-controls inline-flex gap-3" v-if="showNavControls">
              <CircleButton
                :disabled="isPrevDisabled"
                aria-label="Artikel sebelumnya"
                @click="goPrev"
              >
                <span class="inline-block h-4 w-4" v-html="arrowLeftSvg" />
              </CircleButton>
              <CircleButton
                :disabled="isNextDisabled"
                aria-label="Artikel selanjutnya"
                @click="goNext"
              >
                <span class="inline-block h-4 w-4" v-html="arrowRightSvg" />
              </CircleButton>
            </div>
          </div>
        </div>
      </article>

      <aside class="cta flex flex-col items-end justify-center gap-6 rounded-[2rem] bg-slate-100/80 p-8 text-right">
        <div class="cta-heading space-y-3">
          <h2 class="bg-gradient-to-b from-indigo-600 to-indigo-900 bg-clip-text text-4xl font-extrabold leading-tight text-transparent">
            <span class="block">Dapatkan</span>
            <span class="block">Berita dan</span>
            <span class="block">Artikel</span>
            <span class="block">Terbaru</span>
          </h2>
          <p class="text-base text-slate-600">Jelajahi informasi kesehatan terkurasi langsung dari apoteker kami.</p>
        </div>
        <Button :href="secondaryHref" size="lg" icon-position="right">
          Selengkapnya
          <template #icon>
            <span class="inline-block h-4 w-4" v-html="arrowRightSvg" />
          </template>
        </Button>
      </aside>
    </div>
  </section>
</template>

<script setup>
import arrowLeftSvg from '@/assets/Icon/arrow-left-solid.svg?raw'
import arrowRightSvg from '@/assets/Icon/arrow-right-solid.svg?raw'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import Button from './Button.vue'
import CircleButton from './CircleButton.vue'

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null
const backgroundLayers = ref([])
const backgroundTimeout = ref(null)

onMounted(() => {
  const el = sectionRef.value
  if (!el) return

  observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry && entry.isIntersecting) {
      isVisible.value = true
      if (observer) {
        observer.disconnect()
        observer = null
      }
    }
  }, { threshold: 0.25 })

  observer.observe(el)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }

  if (backgroundTimeout.value) {
    clearTimeout(backgroundTimeout.value)
    backgroundTimeout.value = null
  }
})

const props = defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
  title: { type: String, default: 'Amoksisilin: Kapan Perlu Kapan Tidak' },
  excerpt: {
    type: String,
    default:
      'Ketahui kapan antibiotik benar-benar diperlukan, bagaimana penggunaannya yang aman, dan risiko resistensi bila digunakan tidak tepat.',
  },
  date: { type: String, default: '2025/09/26' },
  image: { type: String, default: null },
  primaryHref: { type: String, default: '#' },
  secondaryHref: { type: String, default: '#' },
})

const activeIndex = ref(0)
const availableArticles = computed(() => props.articles ?? [])
const hasArticles = computed(() => availableArticles.value.length > 0)

watch(
  () => availableArticles.value.length,
  (length) => {
    if (length === 0) {
      activeIndex.value = 0
      return
    }

    if (activeIndex.value >= length) {
      activeIndex.value = length - 1
    }

    if (activeIndex.value < 0) {
      activeIndex.value = 0
    }
  }
)

const currentArticle = computed(() => {
  if (!hasArticles.value) {
    return {
      title: props.title,
      excerpt: props.excerpt,
      published_at: props.date,
      cover_image_url: props.image,
      url: props.primaryHref,
    }
  }

  return availableArticles.value[activeIndex.value] ?? availableArticles.value[0]
})

const articleKey = computed(() => {
  const article = currentArticle.value
  if (!article) {
    return `fallback-${activeIndex.value}`
  }

  return (
    article.id ??
    article.slug ??
    (article.title ? article.title.toString() : `article-${activeIndex.value}`)
  )
})

const backgroundKey = computed(() => `bg-${articleKey.value}`)

const displayTitle = computed(() => currentArticle.value?.title ?? props.title)
const displayExcerpt = computed(() => currentArticle.value?.excerpt ?? props.excerpt)
const displayDate = computed(() => {
  const raw = currentArticle.value?.published_at ?? props.date
  if (!raw) return ''
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return raw
  return new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(d)
})

const primaryArticleHref = computed(() => {
  if (hasArticles.value) {
    const article = currentArticle.value
    if (!article) {
      return props.primaryHref
    }

    if (article.url) {
      return article.url
    }

    if (article.slug) {
      return `/artikel/${article.slug}`
    }
  }

  return props.primaryHref
})

const showNavControls = computed(() => availableArticles.value.length > 1)
const isPrevDisabled = computed(() => !showNavControls.value)
const isNextDisabled = computed(() => !showNavControls.value)

const goPrev = () => {
  if (!showNavControls.value) return
  const total = availableArticles.value.length
  activeIndex.value = (activeIndex.value - 1 + total) % total
}

const goNext = () => {
  if (!showNavControls.value) return
  const total = availableArticles.value.length
  activeIndex.value = (activeIndex.value + 1) % total
}

const bgStyle = computed(() => {
  const coverImage = currentArticle.value?.cover_image || currentArticle.value?.cover_image_url || props.image

  if (coverImage) {
    return {
      backgroundImage: `url(${coverImage})`,
    }
  }

  return {
    backgroundColor: '#000',
    backgroundImage: 'none',
  }
})

const applyBackgroundLayer = () => {
  const style = { ...bgStyle.value }
  const layerKey = `${backgroundKey.value}-${Date.now()}`

  backgroundLayers.value = [...backgroundLayers.value.slice(-1), { key: layerKey, style }]

  if (backgroundTimeout.value) {
    clearTimeout(backgroundTimeout.value)
  }

  backgroundTimeout.value = setTimeout(() => {
    backgroundLayers.value = backgroundLayers.value.slice(-1)
    backgroundTimeout.value = null
  }, 350)
}

watch(
  () => backgroundKey.value,
  () => {
    applyBackgroundLayer()
  },
  { immediate: true }
)
</script>

