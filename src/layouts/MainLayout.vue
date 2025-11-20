<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <Header />
    <main class="mx-auto flex min-h-screen max-w-[1440px] flex-col px-4 pb-16 pt-28 sm:px-6 lg:px-10">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import SiteFooter from '@/components/SiteFooter.vue';
</script>
