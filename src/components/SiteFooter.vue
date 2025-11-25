<template>
  <footer class="main-footer mt-16 bg-slate-950 text-white">
    <div class="mx-auto grid max-w-[1200px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
      <section class="footer-section space-y-3">
        <h3 class="text-lg font-semibold">Apotek Tiarana Farma</h3>
        <p class="text-sm text-slate-200">{{ footer.tagline }}</p>
      </section>
      <section class="footer-section space-y-3">
        <h3 class="text-lg font-semibold">Kontak</h3>
        <ul class="space-y-2 text-sm text-slate-200">
          <li class="flex items-center gap-2"><span class="h-4 w-4 text-white" v-html="phoneIcon" aria-hidden="true" /> {{ footer.contact.phone }}</li>
          <li class="flex items-center gap-2"><span class="h-4 w-4 text-white" v-html="envelopeIcon" aria-hidden="true" /> {{ footer.contact.email }}</li>
          <li class="flex items-center gap-2"><span class="h-4 w-4 text-white" v-html="locationIcon" aria-hidden="true" /> {{ footer.contact.address }}</li>
          <li class="flex items-center gap-2">
            <span class="h-4 w-4 text-white" v-html="bugIcon" aria-hidden="true" />
            <RouterLink to="/report-bug" class="font-semibold text-indigo-200 transition hover:text-white">Laporkan Bug</RouterLink>
          </li>
        </ul>
      </section>
      <section class="footer-section space-y-3">
        <h3 class="text-lg font-semibold">Jam Operasional</h3>
        <ul class="space-y-2 text-sm text-slate-200">
          <li>{{ footer.hours.weekday }}</li>
          <li>{{ footer.hours.weekend }}</li>
        </ul>
      </section>
      <section class="footer-section space-y-3">
        <h3 class="text-lg font-semibold">Ikuti Kami</h3>
        <div class="social-links flex gap-3">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl text-slate-200 transition hover:bg-white/10 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            :title="social.label"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </section>
    </div>
    <div class="border-t border-white/10 py-6 text-center text-xs text-slate-300">
      &copy; {{ currentYear }} Apotek Tiarana Farma. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import bugIcon from '@/assets/Icon/bug-solid.svg?raw'
import envelopeIcon from '@/assets/Icon/envelope-solid.svg?raw'
import locationIcon from '@/assets/Icon/location-dot-solid-full.svg?raw'
import phoneIcon from '@/assets/Icon/phone-solid.svg?raw'
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()

const footer = {
  tagline: 'Farmasi terpercaya dengan layanan personal dan ketersediaan obat lengkap.',
  contact: {
    phone: '0812-3456-7890',
    email: 'halo@tiaranapharmacy.id',
    address: 'Jl. Kenangan No. 12, Bandung',
  },
  hours: {
    weekday: 'Senin - Jumat: 08.00 - 21.00',
    weekend: 'Sabtu - Minggu: 09.00 - 18.00',
  },
}

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'fab fa-facebook-f' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'fab fa-instagram' },
  { label: 'WhatsApp', href: 'https://wa.me/628125340996', icon: 'fab fa-whatsapp' },
]

</script>
