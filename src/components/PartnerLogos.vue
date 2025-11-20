<template>
  <section
    class="partners-section mx-auto w-full max-w-[1440px] space-y-6 rounded-3xl bg-white px-6 py-10 opacity-0 shadow-2xl shadow-indigo-900/5 transition duration-500"
    :class="{ 'opacity-100 translate-y-0': isVisible, 'translate-y-5': !isVisible }"
    ref="sectionRef"
  >
    <h2 class="text-center text-2xl font-bold text-indigo-950">Bekerjasama dengan berbagai PBF</h2>

    <div
      class="partners-marquee relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 py-6"
      @mouseenter="paused = true"
      @mouseleave="paused = false"
    >
      <div
        class="marquee-track flex w-max items-center gap-5"
        :style="trackStyle"
        ref="trackRef"
      >
        <div
          v-for="(logo, index) in marqueeLogos"
          :key="`${logo.name}-${index}`"
          class="partner-item flex h-24 w-48 items-center justify-center rounded-2xl bg-white p-4 shadow-md"
          :title="logo.name"
        >
          <img v-if="logo.src" :src="logo.src" :alt="logo.name" class="max-h-16 w-full object-contain" />
          <div v-else class="partner-fallback text-center text-sm font-semibold text-indigo-900">{{ logo.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const defaultLogos = [
  { name: 'AJM', src: new URL('../assets/PBFLogo/AJM.png', import.meta.url).href },
  { name: 'APL', src: new URL('../assets/PBFLogo/APL.png', import.meta.url).href },
  { name: 'BSP', src: new URL('../assets/PBFLogo/BSP.png', import.meta.url).href },
  { name: 'CSF', src: new URL('../assets/PBFLogo/CSF.png', import.meta.url).href },
  { name: 'Edi Hari Syam', src: new URL('../assets/PBFLogo/EdiHariSyam.png', import.meta.url).href },
  { name: 'Elka Alkesindo', src: new URL('../assets/PBFLogo/ElkaAlkesindo.png', import.meta.url).href },
  { name: 'Ferto Mulia Pratama', src: new URL('../assets/PBFLogo/FertoMuliaPratama.png', import.meta.url).href },
  { name: 'Hidup Bahagia', src: new URL('../assets/PBFLogo/HidupBahagia.png', import.meta.url).href },
  { name: 'Kimia Farma', src: new URL('../assets/PBFLogo/KimiaFarma.png', import.meta.url).href },
  { name: 'Lenko Surya Perkasa', src: new URL('../assets/PBFLogo/LenkoSuryaPerkasa.png', import.meta.url).href },
  { name: 'Marga Nusantara Jaya', src: new URL('../assets/PBFLogo/MargaNusantaraJaya.png', import.meta.url).href },
  { name: 'MPI', src: new URL('../assets/PBFLogo/MPI.png', import.meta.url).href },
  { name: 'PIM', src: new URL('../assets/PBFLogo/PIM.png', import.meta.url).href },
  { name: 'Sapta Sari', src: new URL('../assets/PBFLogo/SaptaSari.png', import.meta.url).href },
  { name: 'Satrindo Multi Sukses', src: new URL('../assets/PBFLogo/SatrindoMultiSukses.png', import.meta.url).href },
  { name: 'Tempo Scan', src: new URL('../assets/PBFLogo/TempoScan.png', import.meta.url).href },
]

const props = defineProps({
  logos: {
    type: Array,
    default: () => [],
  },
})

const paused = ref(false)
const sectionRef = ref(null)
const trackRef = ref(null)
const isVisible = ref(false)
const offset = ref(0)
const trackWidth = ref(0)
let observer = null
let frame = null
let lastTime = 0

const displayLogos = computed(() => {
  const source = Array.isArray(props.logos) && props.logos.length ? props.logos : defaultLogos

  return source.map((logo) => ({
    name: logo?.name ?? '',
    src: logo?.src ?? null,
  }))
})

const marqueeLogos = computed(() => [...displayLogos.value, ...displayLogos.value])

const trackStyle = computed(() => ({
  transform: `translateX(-${offset.value}px)`,
}))

const updateTrackWidth = () => {
  if (trackRef.value) {
    trackWidth.value = trackRef.value.scrollWidth / 2
  }
}

const animate = (timestamp) => {
  if (!lastTime) {
    lastTime = timestamp
  }

  const delta = timestamp - lastTime
  if (!paused.value && trackWidth.value > 0) {
    const distance = (delta / 16.67) * 1.5
    offset.value = (offset.value + distance) % trackWidth.value
  }

  lastTime = timestamp
  frame = requestAnimationFrame(animate)
}

onMounted(() => {
  const el = sectionRef.value
  if (el) {
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
          observer = null
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
  }

  updateTrackWidth()
  frame = requestAnimationFrame(animate)
  window.addEventListener('resize', updateTrackWidth)
})

watch(displayLogos, () => {
  updateTrackWidth()
})

onUnmounted(() => {
  observer?.disconnect()
  observer = null
  if (frame) {
    cancelAnimationFrame(frame)
    frame = null
  }
  window.removeEventListener('resize', updateTrackWidth)
})
</script>
