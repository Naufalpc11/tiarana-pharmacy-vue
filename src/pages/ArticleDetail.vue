<template>
  <MainLayout>
    <div class="article-detail-page flex flex-col gap-10">
      <template v-if="article">
        
        <header
          class="article-hero relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${article.cover_image})`, backgroundAttachment: 'fixed' }"
        >
          <div class="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/70 to-slate-900/60"></div>
          <div
            ref="heroOverlay"
            class="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end gap-6 px-6 py-16 sm:px-8 lg:py-20"
          >
            <div ref="heroBackButton" class="flex flex-wrap items-center gap-4">
              <Button variant="white" size="sm" href="/artikel" icon-position="left" class="hover:scale-105 transition-transform">
                <template #icon><span class="inline-block h-4 w-4" v-html="arrowLeftSvg" /></template>
                Kembali
              </Button>
              <span class="inline-flex items-center rounded-full border border-white/40 bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold tracking-wide text-white/90">Artikel Farmasi</span>
            </div>
            <div class="space-y-4">
              <h1 ref="heroTitle" class="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
                {{ article.title }}
              </h1>
              <p ref="heroDate" class="text-sm sm:text-base font-semibold tracking-wide text-white/80 drop-shadow">
                {{ formattedDate }}
              </p>
            </div>
          </div>
        </header>

        
        <section class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-12">
          <article ref="contentCard" class="space-y-6 bg-white p-8 sm:p-10 lg:p-12 rounded-lg shadow-lg">
            
            <div v-if="article.excerpt" class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p class="text-base leading-relaxed text-gray-800">{{ article.excerpt }}</p>
            </div>

            <div
              class="article-content prose prose-lg max-w-none w-full
                     prose-headings:font-bold prose-headings:text-gray-900
                     prose-h1:text-2xl prose-h1:mb-4 prose-h1:mt-8
                     prose-h2:text-xl prose-h2:mb-4 prose-h2:mt-7 prose-h2:font-bold
                     prose-h3:text-lg prose-h3:mb-3 prose-h3:mt-6 prose-h3:font-bold
                     prose-h4:text-base prose-h4:mb-2 prose-h4:mt-5 prose-h4:font-semibold
                     prose-p:text-base prose-p:text-gray-700 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-justify prose-p:w-full
                     prose-strong:font-semibold prose-strong:text-gray-900
                     prose-ul:my-4 prose-ul:pl-6 prose-ul:list-disc prose-ul:w-full
                     prose-ol:my-4 prose-ol:pl-6 prose-ol:list-decimal prose-ol:w-full
                     prose-li:text-base prose-li:text-gray-700 prose-li:leading-[1.8] prose-li:mb-2 prose-li:text-justify
                     prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800
                     *:w-full [&>div]:w-full [&>section]:w-full"
              v-html="bodyHtml"
            ></div>

            <div class="mt-12 pt-8 border-t-2 border-slate-200 flex flex-wrap gap-4 justify-between items-center">
              <div class="space-y-1">
                <p class="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest">Artikel Selanjutnya</p>
                <p class="text-sm sm:text-base font-bold text-slate-900">Baca artikel farmasi lainnya</p>
              </div>
              <Button variant="primary" href="/artikel" icon-position="right" size="md" class="hover:scale-105 transition-transform">
                Kembali ke Daftar Artikel
                <template #icon><span class="inline-block h-4 w-4" v-html="arrowRightSvg" /></template>
              </Button>
            </div>
          </article>
        </section>
      </template>

      <section v-else class="mx-auto w-full max-w-3xl rounded-3xl bg-white p-10 sm:p-12 text-center shadow-2xl">
        <div class="space-y-6">
          <h1 class="text-3xl sm:text-4xl font-black text-indigo-950">Artikel tidak ditemukan</h1>
          <p class="text-lg text-slate-600">Maaf, artikel yang Anda cari tidak tersedia atau telah dihapus. Silakan kembali ke daftar artikel untuk membaca materi farmasi lainnya.</p>
          <div class="pt-4">
            <Button variant="primary" href="/artikel" icon-position="left" size="lg">
              <template #icon><span class="inline-block h-4 w-4" v-html="arrowLeftSvg" /></template>
              Kembali ke Artikel
            </Button>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script setup>
import { initializeArticleDetailAnimations } from '@/animation/articleDetailAnimations'
import arrowLeftSvg from '@/assets/Icon/arrow-left-solid.svg?raw'
import arrowRightSvg from '@/assets/Icon/arrow-right-solid.svg?raw'
import Button from '@/components/Button.vue'
import { getArticleById } from '@/data/articles'
import MainLayout from '@/layouts/MainLayout.vue'
import { computed, nextTick, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const heroOverlay = ref(null)
const heroBackButton = ref(null)
const heroTitle = ref(null)
const heroDate = ref(null)
const contentCard = ref(null)

const fallbackHeroImage = new URL('../assets/Images/Hero-bg.jpg', import.meta.url).href

const article = computed(() => {
  const a = getArticleById(route.params.id)
  if (!a) return null
  return {
    ...a,
    cover_image: a.cover_image || fallbackHeroImage,
  }
})

const formattedDate = computed(() => {
  if (!article.value) {
    return ''
  }

  if (article.value.formatted_published_at) {
    return article.value.formatted_published_at
  }

  const source = article.value.published_at
  if (!source) {
    return ''
  }

  const date = new Date(source)
  if (Number.isNaN(date.getTime())) {
    return source
  }

  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)
})

const heroStyle = computed(() => ({
  '--hero-image': `url(${article.value?.cover_image || fallbackHeroImage})`,
}))

const bodyHtml = computed(() => article.value?.body ?? '')

onMounted(() => {
  if (!article.value) {
    return
  }

  nextTick(() => {
    initializeArticleDetailAnimations({
      heroOverlay: heroOverlay.value,
      heroTitle: heroTitle.value,
      heroDate: heroDate.value,
      heroBackButton: heroBackButton.value,
      contentCard: contentCard.value,
    })
  })
})
</script>



