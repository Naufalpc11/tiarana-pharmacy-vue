<template>
  <MainLayout>
    <div class="artikel-page flex flex-col gap-8">
      <header class="artikel-hero relative overflow-hidden rounded-[2.5rem] bg-cover bg-center p-10 text-white shadow-2xl shadow-indigo-900/10" role="banner" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="artikel-hero__overlay flex flex-col items-center gap-4 rounded-[2rem] bg-slate-900/70 px-4 py-10 text-center text-white backdrop-blur" ref="artikelHeroOverlay">
          <h1 class="home-title text-4xl font-extrabold tracking-tight sm:text-5xl" ref="artikelHeroTitle">Artikel</h1>
          <p class="home-subtitle max-w-3xl text-lg text-white/80" ref="artikelHeroSubtitle">
            Edukasi farmasi, tips kesehatan, info obat, pengumuman, dan promo terbaru dari Tiarana Farma.
          </p>
          <div class="artikel-controls flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-center" ref="artikelSearchBar">
            <label class="artikel-search flex w-full max-w-xl items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white shadow-inner backdrop-blur focus-within:border-white/80" aria-label="Cari artikel">
              <i class="fa-solid fa-magnifying-glass artikel-search__icon text-white/70" aria-hidden="true"></i>
              <input
                type="search"
                placeholder="Cari artikel..."
                autocomplete="off"
                class="artikel-search__input flex-1 bg-transparent text-base text-white placeholder:text-white/60 focus:outline-none"
                v-model="query"
              />
            </label>

            <div class="artikel-sort flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
              <label for="artikel-sort-select" class="artikel-sort__label">Urutkan</label>
              <select
                id="artikel-sort-select"
                class="artikel-sort__select rounded-full bg-white/90 px-3 py-2 text-slate-900"
                v-model="sortOption"
              >
                <option v-for="option in sortOptions" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <section class="artikel-section rounded-[2rem] bg-white p-6 shadow-2xl shadow-indigo-900/5" aria-label="Daftar Artikel">
        <div class="artikel-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3" ref="artikelGrid">
          <template v-if="filteredArticles.length">
            <ArticleCard
              v-for="article in visibleArticles"
              :key="article.id"
              v-bind="article"
            />
          </template>
          <p v-else class="artikel-empty rounded-2xl bg-slate-50 p-6 text-center text-slate-500" role="status">
            tidak ada artikel terkait pencarian anda
          </p>
        </div>

        <div
          v-if="filteredArticles.length"
          class="artikel-load-more mt-8 rounded-full bg-indigo-50 px-6 py-3 text-center text-sm text-indigo-700"
          ref="loadMoreSentinel"
          aria-live="polite"
        >
          <span v-if="hasMoreArticles">Gulir untuk menampilkan artikel berikutnya...</span>
          <span v-else>Anda sudah mencapai akhir daftar artikel.</span>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { initializeArtikelAnimations } from '@/animation/artikelAnimations'
import ArticleCard from '@/components/ArticleCard.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const props = defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
})

const heroImage = new URL('../assets/Images/Hero-bg.jpg', import.meta.url).href
const fallbackImage = heroImage

const articles = computed(() =>
  props.articles.map((article) => ({
    ...article,
    image: article.image || fallbackImage,
    imageAlt: article.imageAlt || article.title,
    date: article.date || formatDate(article.datetime),
    datetime: article.datetime || article.date,
    href: article.href || `/artikel/${article.slug}`,
  }))
)

const sortOptions = Object.freeze([
  { value: 'newest', label: 'Terbaru' },
  { value: 'oldest', label: 'Terlama' },
  { value: 'az', label: 'Judul A-Z' },
])

const LOAD_STEP = 6

const query = ref('')
const sortOption = ref(sortOptions[0].value)
const artikelHeroOverlay = ref(null)
const artikelHeroTitle = ref(null)
const artikelHeroSubtitle = ref(null)
const artikelSearchBar = ref(null)
const artikelGrid = ref(null)
const loadMoreSentinel = ref(null)
const visibleCount = ref(LOAD_STEP)

let loadObserver

const filteredArticles = computed(() => {
  const list = articles.value

  if (!query.value.trim()) {
    return list
  }

  const keyword = query.value.trim().toLowerCase()
  return list.filter((article) => {
    const title = (article.title || '').toLowerCase()
    const excerpt = (article.excerpt || '').toLowerCase()
    return title.includes(keyword) || excerpt.includes(keyword)
  })
})

const sortedArticles = computed(() => {
  const list = [...filteredArticles.value]

  if (sortOption.value === 'az') {
    return list.sort((a, b) => a.title.localeCompare(b.title, 'id-ID'))
  }

  if (sortOption.value === 'oldest') {
    return list.sort((a, b) => compareByDate(a, b))
  }

  return list.sort((a, b) => compareByDate(b, a))
})

const clampedVisibleCount = computed(() => Math.min(visibleCount.value, sortedArticles.value.length))
const visibleArticles = computed(() => sortedArticles.value.slice(0, clampedVisibleCount.value))
const hasMoreArticles = computed(() => clampedVisibleCount.value < sortedArticles.value.length)

function formatDate(input) {
  if (!input) {
    return ''
  }

  const date = new Date(input)
  if (Number.isNaN(date.getTime())) {
    return input
  }

  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date)
}

function compareByDate(articleA, articleB) {
  const aTime = getTimeValue(articleA.datetime || articleA.date)
  const bTime = getTimeValue(articleB.datetime || articleB.date)
  return (aTime ?? 0) - (bTime ?? 0)
}

function getTimeValue(source) {
  if (!source) {
    return null
  }

  const date = new Date(source)
  return Number.isNaN(date.getTime()) ? null : date.getTime()
}

const increaseVisibleArticles = () => {
  if (!hasMoreArticles.value) {
    return
  }

  visibleCount.value += LOAD_STEP
}

const setupObserver = () => {
  if (!loadMoreSentinel.value || !hasMoreArticles.value) {
    return
  }

  if (loadObserver) {
    loadObserver.disconnect()
  }

  loadObserver = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        increaseVisibleArticles()
      }
    },
    { rootMargin: '0px 0px 220px 0px' }
  )

  loadObserver.observe(loadMoreSentinel.value)
}

const resetInfiniteScroll = () => {
  visibleCount.value = LOAD_STEP
  if (loadObserver) {
    loadObserver.disconnect()
  }
  requestAnimationFrame(setupObserver)
}

watch(
  () => query.value,
  () => {
    resetInfiniteScroll()
  }
)

watch(
  () => sortOption.value,
  () => {
    resetInfiniteScroll()
  }
)

watch(
  () => filteredArticles.value.length,
  () => {
    visibleCount.value = LOAD_STEP
  }
)

watch(
  () => loadMoreSentinel.value,
  () => {
    setupObserver()
  }
)

watch(
  () => hasMoreArticles.value,
  (hasMore) => {
    if (!hasMore && loadObserver) {
      loadObserver.disconnect()
    } else if (hasMore) {
      setupObserver()
    }
  }
)

onMounted(() => {
  initializeArtikelAnimations({
    heroOverlay: artikelHeroOverlay.value,
    heroTitle: artikelHeroTitle.value,
    heroSubtitle: artikelHeroSubtitle.value,
    searchBar: artikelSearchBar.value,
    artikelGrid: artikelGrid.value,
  })

  setupObserver()
})

onBeforeUnmount(() => {
  if (loadObserver) {
    loadObserver.disconnect()
  }
})
</script>

