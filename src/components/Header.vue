<template>
  <header
    class="main-header fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur transition-all duration-300"
    :class="{ 'shadow-lg shadow-slate-900/10 bg-white/95': isScrolled }"
  >
    <nav class="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

      
      <RouterLink
        to="/"
        class="logo-link flex items-center"
        aria-label="Beranda"
        @click="closeMenu"
      >
        <img
          :src="logoWithoutText"
          alt="Logo Tiarana Farma"
          class="h-9 w-auto object-contain sm:h-10 md:h-11 lg:h-12"
        />
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
        class="nav-links absolute left-4 right-4 top-full mt-3 flex-col gap-2 rounded-lg border border-slate-300 bg-white shadow-lg p-3 transition duration-200 max-w-[calc(100vw-2rem)]
               md:static md:mt-0 md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:max-w-none"
        :class="{
          'flex': isMenuOpen,
          'hidden': !isMenuOpen
        }"
        id="primary-navigation"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link text-sm font-medium text-slate-700 transition hover:text-indigo-700 py-2 px-3 rounded-md hover:bg-slate-50
                 md:text-base md:py-0 md:px-0 md:hover:bg-transparent"
          :class="{ 'text-indigo-700 bg-indigo-50 md:bg-transparent': isActive(link.to) }"
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
  { label: 'About Me', to: '/about-me'},
]

const logoWithoutText = new URL('../assets/Images/logo/Logo_Texed.png', import.meta.url).href

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
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

watch(
  () => route.fullPath,
  () => closeMenu()
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
