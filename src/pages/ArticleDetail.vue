<template>
  <MainLayout>
    <div class="article-detail-page flex flex-col gap-10">
      <template v-if="article">
        <!-- Full-width hero -->
        <header
          class="article-hero relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-cover bg-center"
          :style="heroStyle"
        >
          <div class="absolute inset-0 bg-slate-900/70"></div>
          <div
            ref="heroOverlay"
            class="relative z-10 mx-auto flex min-h-[420px] max-w-5xl flex-col justify-end gap-5 px-6 py-12 sm:px-8"
          >
            <div ref="heroBackButton" class="flex flex-wrap items-center gap-4">
              <Button variant="white" size="sm" href="/artikel" icon-position="left">
                <template #icon><i class="fa-solid fa-arrow-left" /></template>
                Kembali
              </Button>
              <span class="inline-flex items-center rounded-full border border-white/30 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">Artikel</span>
            </div>
            <h1 ref="heroTitle" class="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {{ article.title }}
            </h1>
            <p ref="heroDate" class="text-sm font-medium tracking-wide text-white/70">
              {{ formattedDate }}
            </p>
          </div>
        </header>

        <!-- Content -->
        <section class="mx-auto w-full max-w-5xl px-6 sm:px-8">
          <article ref="contentCard" class="space-y-10 rounded-3xl bg-white p-8 shadow-2xl shadow-slate-900/10">
            <div v-if="article.excerpt" class="rounded-2xl bg-indigo-50/70 p-6">
              <p class="text-base leading-relaxed text-slate-700">{{ article.excerpt }}</p>
            </div>
            <div
              v-if="bodyHtml"
              class="article-detail-body prose prose-slate max-w-none"
              v-html="bodyHtml"
            ></div>
          </article>
        </section>
      </template>

      <section v-else class="mx-auto w-full max-w-3xl rounded-3xl bg-white p-10 text-center shadow-2xl">
        <h1 class="text-3xl font-bold text-indigo-950">Artikel tidak ditemukan</h1>
        <p class="mt-3 text-slate-500">Maaf, artikel yang Anda cari belum tersedia. Silakan kembali ke daftar artikel untuk membaca materi lainnya.</p>
        <div class="mt-6">
          <Button variant="primary" href="/artikel" icon-position="left" size="md">
            <template #icon><i class="fa-solid fa-arrow-left" /></template>
            Kembali ke Artikel
          </Button>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script setup>
import { initializeArticleDetailAnimations } from '@/animation/articleDetailAnimations'
import Button from '@/components/Button.vue'
import { getArticleById } from '@/data/articles'
import MainLayout from '@/layouts/MainLayout.vue'
import { computed, nextTick, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// Route param id
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

<style scoped>
.article-detail-body {
  line-height: 1.7;
  font-size: 1rem;
}
.article-detail-body p {
  margin: 0 0 1rem;
}
.article-detail-body p:last-child { margin-bottom: 0; }
.article-detail-body h3 {
  margin: 2rem 0 0.75rem;
  font-size: 1.25rem; /* slightly larger for section headings */
  font-weight: 600;
  color: #0f172a;
  line-height: 1.3;
}
.article-detail-body h3:first-child { margin-top: 0; }
.article-detail-body ul,
.article-detail-body ol {
  margin: 0 0 1rem 1.25rem;
  padding: 0;
}
.article-detail-body li {
  margin: 0 0 0.4rem;
}
.article-detail-body ol { list-style: decimal; }
.article-detail-body ul { list-style: disc; }
/* Bold labels at paragraph starts (e.g., "Dosis dan interval tepat:") */
.article-detail-body p strong:first-child {
  display: inline-block;
  font-weight: 600;
  color: #0f172a;
  margin-right: 0.25rem;
}
/* Avoid huge gap when heading directly followed by list */
.article-detail-body h3 + ul,
.article-detail-body h3 + ol { margin-top: 0; }
/* Tighten final block */
.article-detail-body > :last-child { margin-bottom: 0; }
</style>

