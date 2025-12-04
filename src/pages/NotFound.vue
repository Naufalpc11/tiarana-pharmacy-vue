<template>
  <MainLayout>
    <section class="not-found flex min-h-[calc(100vh-6rem)] items-center justify-center bg-linear-to-br from-indigo-50 to-white px-4 py-10 text-center">
      <div class="not-found__content w-full max-w-xl space-y-4 rounded-4xl border border-indigo-100 bg-white p-8 shadow-2xl shadow-indigo-900/10">
        <p class="not-found__code text-5xl font-extrabold text-indigo-600 sm:text-6xl">404</p>
        <h1 class="text-3xl font-bold text-indigo-950">Halaman tidak ditemukan</h1>
        <p class="not-found__description text-base leading-relaxed text-slate-600">
          Jalur yang Anda buka tidak tersedia atau sudah dipindahkan. Pastikan alamat sudah benar atau kembali ke halaman
          utama untuk melanjutkan navigasi.
        </p>
        <div class="not-found__actions flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">
            Kembali ke Beranda
          </Button>
          <Button variant="white" size="lg" @click="handleBack">
            Halaman Sebelumnya
          </Button>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import Button from '@/components/Button.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleBack = () => {
  if (window.history.length > 1) {
    window.history.back()
    return
  }
  router.push('/')
}
</script>
