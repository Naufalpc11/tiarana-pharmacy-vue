<template>
  <MainLayout>
    <div class="article-detail-page space-y-8">
      <template v-if="article">
        <section class="article-detail-hero relative overflow-hidden rounded-[2.5rem] bg-cover bg-center text-white shadow-2xl" :style="heroStyle">
        <div class="article-detail-hero__overlay flex flex-col gap-4 bg-slate-900/70 px-6 py-10 backdrop-blur" ref="heroOverlay">
          <div class="article-detail-hero__content space-y-4">
            <RouterLink
              to="/artikel"
              class="article-detail-back inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm uppercase tracking-wide text-white/80 transition hover:border-white hover:text-white"
              ref="heroBackButton"
            >
              <i class="fa-solid fa-arrow-left"></i>
              <span>Kembali</span>
            </RouterLink>
            <h1 class="article-detail-title text-3xl font-bold leading-tight md:text-4xl" ref="heroTitle">
              {{ article.title }}
            </h1>
            <p class="article-detail-date text-sm uppercase tracking-[0.4em] text-white/70" ref="heroDate">
              {{ formattedDate }}
            </p>
          </div>
        </div>
      </section>

      <section class="article-detail-content">
        <article class="article-detail-card space-y-6 rounded-[2rem] bg-white p-6 shadow-2xl shadow-indigo-900/10" ref="contentCard">
          <div v-if="article.excerpt" class="article-detail-intro rounded-2xl bg-indigo-50/80 p-5">
            <p class="article-detail-paragraph text-base leading-relaxed text-slate-600">
              {{ article.excerpt }}
            </p>
          </div>

          <div
            v-if="bodyHtml"
            class="article-detail-body prose prose-slate max-w-none"
            v-html="bodyHtml"
          ></div>
        </article>
      </section>
      </template>
      <section v-else class="article-detail-missing rounded-[2.5rem] bg-white p-8 text-center shadow-2xl">
        <div class="article-detail-missing__card space-y-4">
          <h1 class="text-3xl font-bold text-indigo-950">Artikel tidak ditemukan</h1>
          <p class="text-slate-500">
            Maaf, artikel yang Anda cari belum tersedia. Silakan kembali ke daftar artikel untuk membaca materi lainnya.
          </p>
          <RouterLink to="/artikel" class="article-detail-back inline-flex items-center justify-center gap-2 rounded-full border border-indigo-600 px-5 py-2 text-indigo-700 transition hover:bg-indigo-50">
            <i class="fa-solid fa-arrow-left"></i>
            <span>Kembali ke Artikel</span>
          </RouterLink>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { initializeArticleDetailAnimations } from '@/animation/articleDetailAnimations'
import MainLayout from '@/layouts/MainLayout.vue'

const props = defineProps({
  article: {
    type: Object,
    default: null,
  },
})

const heroOverlay = ref(null)
const heroBackButton = ref(null)
const heroTitle = ref(null)
const heroDate = ref(null)
const contentCard = ref(null)

const fallbackHeroImage = new URL('../assets/Images/Hero-bg.jpg', import.meta.url).href

const article = computed(() => {
  if (!props.article) {
    return null
  }

  return {
    ...props.article,
    cover_image: props.article.cover_image || fallbackHeroImage,
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

