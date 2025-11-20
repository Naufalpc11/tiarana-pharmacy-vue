<template>
  <header
    class="main-header fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur transition-all duration-300"
    :class="{ 'shadow-lg shadow-slate-900/10 bg-white/95': isScrolled }"
  >
    <nav class="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
      <RouterLink to="/" class="logo-link flex items-center gap-3" aria-label="Beranda" @click="closeMenu">
        <img :src="logoWithoutText" alt="Logo Tiarana" class="h-11 w-11" />
        <div class="hidden flex-col text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 sm:flex">
          <span>Tiarana</span>
          <span>Pharmacy</span>
        </div>
      </RouterLink>

      <button
        type="button"
        class="menu-toggle flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-slate-200 text-slate-900 transition hover:border-indigo-500 hover:text-indigo-600 md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-navigation"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span
          class="block h-0.5 w-6 bg-current transition"
          :class="{ 'translate-y-1.5 rotate-45': isMenuOpen }"
        ></span>
        <span
          class="block h-0.5 w-6 bg-current transition"
          :class="{ 'opacity-0': isMenuOpen }"
        ></span>
        <span
          class="block h-0.5 w-6 bg-current transition"
          :class="{ '-translate-y-1.5 -rotate-45': isMenuOpen }"
        ></span>
      </button>

      <div
  class="nav-links absolute left-4 right-4 top-full mt-3 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/95 p-4
         opacity-0 shadow-2xl shadow-slate-900/10 transition duration-200
         pointer-events-none -translate-y-2
         md:static md:mt-0 md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0
         md:opacity-100 md:shadow-none md:pointer-events-auto md:translate-y-0"
  :class="{
    'pointer-events-auto translate-y-0 opacity-100': isMenuOpen
  }"
  id="primary-navigation"
>
  <RouterLink
    v-for="link in navLinks"
    :key="link.to"
    :to="link.to"
    class="nav-link text-base font-medium text-slate-700 transition hover:text-indigo-700"
    :class="{ 'text-indigo-700': isActive(link.to) }"
    @click="closeMenu"
  >
    {{ link.label }}
  </RouterLink>

</div>

    </nav>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const route = useRoute()

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Tentang Kami', to: '/about-us' },
  { label: 'Artikel', to: '/artikel' },
  { label: 'Kontak', to: '/contact' },
]

const logoWithoutText = new URL('../assets/Icon/tiarana_b_icon.svg', import.meta.url).href

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleResize = () => {
  if (window.innerWidth >= 768) {
    isMenuOpen.value = false
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>
