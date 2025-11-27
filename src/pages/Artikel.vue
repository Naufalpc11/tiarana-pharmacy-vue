<template>
  <MainLayout>
    <div class="artikel-page flex flex-col gap-10 pb-16">
      <header
        class="hero-bg-image relative min-h-[480px] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
                overflow-hidden bg-cover bg-center"
        role="banner"
        :style="{ backgroundImage: `url(${heroImage})` }"
      >
        <div class="absolute inset-0 bg-slate-900/55"></div>

        <div
          class="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 lg:px-8 min-h-[480px] pt-50"
          ref="artikelHeroOverlay"
        >
          <div class="space-y-4">
            <h1
              class="home-title text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white"
              ref="artikelHeroTitle"
            >
              Artikel
            </h1>

            <p
              class="home-subtitle max-w-2xl text-lg text-white/85 sm:text-xl"
              ref="artikelHeroSubtitle"
            >
              Edukasi farmasi, tips kesehatan, info obat, pengumuman, dan promo
              terbaru dari Tiarana Farma.
            </p>

            <div
              class="artikel-controls mt-4 flex w-full flex-col gap-3 sm:max-w-xl md:max-w-2xl md:flex-row md:items-center"
              ref="artikelSearchBar"
            >
              <label
                class="artikel-search flex w-full items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 text-sm text-slate-600 shadow-md shadow-slate-900/10 ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-indigo-500"
                aria-label="Cari artikel"
              >
                <span
                  class="artikel-search__icon inline-block h-4 w-4 text-slate-400"
                  v-html="magnifyingGlassSvg"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  placeholder="Cari artikel..."
                  autocomplete="off"
                  class="artikel-search__input flex-1 border-none bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  v-model="query"
                />
              </label>

              <div class="artikel-sort flex shrink-0">
                <Dropdown
                  v-model="sortOption"
                  :options="sortOptions"
                  size="sm"
                  variant="default"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        class="artikel-section mx-auto mt-6 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
        aria-label="Daftar Artikel"
      >
        <div
          class="artikel-grid grid gap-6 grid-cols-1 md:grid-cols-3"
          ref="artikelGrid"
        >
          <template v-if="visibleArticles.length">
            <div
              v-for="(article, index) in visibleArticles"
              :key="article.id"
              class="transition duration-700 ease-out transform"
              :class="cardsVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'"
              :style="{ transitionDelay: cardsVisible ? index * 120 + 'ms' : '0ms' }"
            >
              <ArticleCard v-bind="article" />
            </div>
          </template>

          <p
            v-else
            class="artikel-empty col-span-full rounded-2xl bg-white p-6 text-center text-sm text-slate-500 shadow-sm shadow-slate-900/5"
            role="status"
          >
            Tidak ada artikel terkait pencarian Anda.
          </p>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script setup>
import { initializeArtikelAnimations } from '@/animation/artikelAnimations'
import magnifyingGlassSvg from '@/assets/Icon/magnifying-glass-solid.svg?raw'
import ArticleCard from '@/components/ArticleCard.vue'
import Dropdown from '@/components/Dropdown.vue'
import { articles } from '@/data/articles'
import MainLayout from '@/layouts/MainLayout.vue'
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const heroImage = new URL('../assets/Images/HeroSection/Article.jpg', import.meta.url).href
const fallbackImage = heroImage

const rawArticles = ref([])

const loadArticles = () => {
  try {
    const adminArticles = localStorage.getItem('tiarana_admin_articles')
    const parsedAdmin = adminArticles ? JSON.parse(adminArticles) : []

    const allArticles = [...parsedAdmin.map(a => ({
      id: a.slug || a.id,
      title: a.title,
      excerpt: a.content || a.excerpt || '',
      published_at: a.date || a.published_at,
      cover_image: a.image || a.cover_image,
    })), ...articles]
    
    rawArticles.value = allArticles.map(a => ({
      id: a.id,
      title: a.title,
      excerpt: a.excerpt,
      date: new Date(a.published_at).toLocaleDateString('id-ID'),
      published_at: a.published_at,
      cover_image: a.cover_image,
    }))
  } catch (e) {
    console.error('Error loading articles:', e)
    // Fallback to static articles
    rawArticles.value = articles.map(a => ({
      id: a.id,
      title: a.title,
      excerpt: a.excerpt,
      date: new Date(a.published_at).toLocaleDateString('id-ID'),
      published_at: a.published_at,
      cover_image: a.cover_image,
    }))
  }
}

const baseArticles = computed(() =>
  rawArticles.value.map((article) => ({
    ...article,
    image: article.cover_image || fallbackImage,
    imageAlt: article.title,
    datetime: article.published_at,
    href: `/artikel/${article.id}`,
  }))
)

const sortOptions = Object.freeze([
  { value: 'newest', label: 'Terbaru' },
  { value: 'oldest', label: 'Terlama' },
  { value: 'az', label: 'Judul A–Z' },
])

const query = ref('')
const sortOption = ref(sortOptions[0].value)

const filteredArticles = computed(() => {
  const keyword = query.value.trim().toLowerCase()
  if (!keyword) return baseArticles.value

  return baseArticles.value.filter((article) => {
    const title = article.title.toLowerCase()
    const excerpt = article.excerpt.toLowerCase()
    return title.includes(keyword) || excerpt.includes(keyword)
  })
})

const sortedArticles = computed(() => {
  const list = [...filteredArticles.value]

  if (sortOption.value === 'az') {
    return list.sort((a, b) => a.title.localeCompare(b.title, 'id-ID'))
  }

  if (sortOption.value === 'oldest') {
    return list.sort((a, b) => a.id - b.id)
  }

  return list.sort((a, b) => b.id - a.id)
})

const visibleArticles = computed(() => sortedArticles.value.slice(0, 3))

const cardsVisible = ref(false)

const artikelHeroOverlay = ref(null)
const artikelHeroTitle = ref(null)
const artikelHeroSubtitle = ref(null)
const artikelSearchBar = ref(null)
const artikelGrid = ref(null)

const handleArticlesUpdate = () => {
  loadArticles()
}

onMounted(async () => {
  loadArticles()
  
  initializeArtikelAnimations({
    heroOverlay: artikelHeroOverlay.value,
    heroTitle: artikelHeroTitle.value,
    heroSubtitle: artikelHeroSubtitle.value,
    searchBar: artikelSearchBar.value,
  })


  await nextTick()
  setTimeout(() => {
    cardsVisible.value = true
  }, 80)
})

onBeforeUnmount(() => {
  window.removeEventListener('articles-updated', handleArticlesUpdate)
  window.removeEventListener('storage', handleArticlesUpdate)
})
</script>
