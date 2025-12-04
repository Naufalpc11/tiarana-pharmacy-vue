<template>
  <MainLayout>
    <main class="bg-slate-50 text-slate-900">
      
      <header
        class="about-header hero-bg-image relative min-h-[800px] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
              overflow-hidden bg-cover bg-center"
        :style="{ backgroundImage: `url(${pageData.images.hero})` }"
      >
        
        <div class="about-header-overlay absolute inset-0 bg-slate-900/70"></div>

        <div
          class="relative z-10 mx-auto flex min-h-[600px] max-w-4xl flex-col items-center justify-center
                gap-4 px-4 pt-20 text-center text-white md:pt-24"
        >
          <h1 class="home-title text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Tentang Kami
          </h1>

          <p class="home-subtitle max-w-2xl text-lg text-white/85 sm:text-xl">
            Apotek Tiarana Farma adalah apotek terpercaya yang menyediakan layanan kesehatan berkualitas dengan dukungan tim profesional.
          </p>

          
          <div class="mt-3 flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="md"
              icon-position="left"
              @click="scrollTo('#lokasi')"
            >
              <template #icon>
                <span class="h-4 w-4" v-html="locationIcon" />
              </template>
              Lokasi
            </Button>

            <Button
              variant="white"
              size="md"
              icon-position="left"
              @click="$router.push({ name: 'contact' })"
            >
              <template #icon>
                <span class="h-4 w-4" v-html="phoneIcon" />
              </template>
              Hubungi Kami
            </Button>
          </div>
        </div>
      </header>

      <section class="vision-section bg-white py-12 md:py-16">
        <div class="mx-auto max-w-3xl px-4 text-center">
          <h2 class="text-lg font-semibold text-blue-700">Visi</h2>
          <p class="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            {{ pageData.vision }}
          </p>
        </div>
      </section>

      
      <section class="values-section bg-slate-50 py-10 md:py-14">
        <div class="mx-auto max-w-6xl px-4">
          <h2 class="mb-6 text-center text-lg font-semibold text-blue-700">
            Misi
          </h2>

          <div class="grid gap-6 md:grid-cols-3">
            <MissionCard
              v-for="(mission, index) in pageData.missions"
              :key="index"
              :title="mission.title"
              :description="mission.description"
            />
          </div>
        </div>
      </section>

      
      <section class="history-section bg-white py-12 md:py-16">
        <div class="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-start">
          <div class="history-content">
            <h2 class="text-lg font-semibold text-blue-700">Sejarah Kami</h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
              {{ pageData.history.text }}
            </p>

            
            <div class="history-stats mt-6 grid gap-4 text-sm sm:grid-cols-3">
              <HistoryStatCard
                v-for="(stat, index) in pageData.history.stats"
                :key="index"
                :icon-image-url="stat.iconImageUrl"
                :value="stat.value"
                :label="stat.label"
              />
            </div>
          </div>

          <div class="overflow-hidden rounded-2xl shadow-lg">
            <img
              :src="pageData.images.history"
              alt="Sejarah apotek"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      
      <section class="team-section bg-slate-50 py-12 md:py-16">
        <div class="mx-auto max-w-6xl px-4">
          <h2 class="text-xl font-bold text-indigo-950">Apoteker Kami</h2>
          <p class="mt-1 text-sm text-slate-500">
            Kenali apoteker yang siap membantu Anda
          </p>

          <div class="pharmacist-card mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
            <div class="flex flex-col gap-6 md:flex-row md:items-start">
              
              <img
                :src="pageData.images.pharmacist"
                alt="apoteker"
                class="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-blue-100 md:h-28 md:w-28"
              />

              
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-slate-900">
                  {{ pageData.pharmacist.name }}
                </h3>
                <p class="text-sm text-slate-600">
                  {{ pageData.pharmacist.title }}
                </p>

                
                <div class="mt-3 flex flex-wrap gap-2 text-xs">
                  <span
                    v-for="(cred, index) in pageData.pharmacist.credentials"
                    :key="index"
                    class="inline-flex items-center gap-1 rounded-full border px-3 py-1 font-medium"
                    :class="{
                      'border-emerald-200 bg-emerald-50 text-emerald-700': cred.includes('Verifikasi'),
                      'border-slate-200 bg-slate-50 text-slate-700': !cred.includes('Verifikasi')
                    }"
                  >
                    <img
                      v-if="cred.includes('Verifikasi')"
                      :src="checkIcon"
                      alt=""
                      class="h-2.5 w-2.5"
                    />
                    {{ cred }}
                  </span>
                </div>

                
                <div class="mt-4 grid gap-3 md:grid-cols-2">
                  <div
                    v-for="(detail, index) in pageData.pharmacist.details.slice(0, 2)"
                    :key="index"
                    class="rounded-xl border border-slate-200 p-3 text-sm"
                  >
                    <p class="font-semibold text-slate-900">
                      {{ detail.label }}
                    </p>
                    <p class="mt-1 text-slate-600">
                      {{ detail.value }}
                    </p>
                  </div>
                </div>

                
                <div
                  v-if="pageData.pharmacist.details[2]"
                  class="mt-3 rounded-xl border border-slate-200 p-3 text-sm"
                >
                  <p class="font-semibold text-slate-900">
                    {{ pageData.pharmacist.details[2].label }}
                  </p>
                  <p class="mt-1 text-slate-600">
                    {{ pageData.pharmacist.details[2].value }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="lokasi" class="location-section bg-slate-50 py-12 md:py-16">
        <div class="mx-auto max-w-6xl px-4">
          <h2 class="text-center text-xl font-bold text-indigo-950">
            Lokasi Kami
          </h2>

          <div class="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
            
            <div id="kontak" class="space-y-4">
              <ContactInfoCard
                title="Alamat"
                :icon-image-url="locationIcon"
                :lines="[pageData.location.address]"
                :copy-text="pageData.location.address"
                @copy="handleCopy"
              />

              <ContactInfoCard
                title="Telepon"
                :icon-image-url="phoneIcon"
                :lines="[pageData.location.phone]"
                :copy-text="pageData.location.phone"
                @copy="handleCopy"
              />

              <ContactInfoCard
                title="Jam Operasional"
                :icon-image-url="clockIcon"
                :lines="pageData.location.hours"
                :copyable="false"
              />
            </div>

            
            <div class="map-container overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-200">
              <img
                :src="pageData.images.map"
                alt="Map lokasi"
                class="h-[340px] w-full object-cover md:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>

<script setup>
import Button from "@/components/Button.vue";
import ContactInfoCard from "@/components/ContactInfoCard.vue";
import HistoryStatCard from "@/components/HistoryStatCard.vue";
import MissionCard from "@/components/MissionCard.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { onMounted, reactive } from "vue";

import { initializeAboutUsAnimations } from "@/animation/aboutUsAnimations";

import calendarIcon from "@/assets/Icon/calendar-solid.svg?raw";
import checkIcon from "@/assets/Icon/circle-check-solid-full.svg"; // badge kecil tetap <img>
import clockIcon from "@/assets/Icon/clock-solid-full.svg?raw";
import locationIcon from "@/assets/Icon/location-dot-solid-full.svg?raw";
import phoneIcon from "@/assets/Icon/phone-solid.svg?raw";
import capsulesIcon from "@/assets/Icon/pills-solid-full.svg?raw";
import usersIcon from "@/assets/Icon/user-solid.svg?raw";
import interiorImg from "@/assets/Images/HeroSection/AboutUs.jpg";

const pageData = reactive({
  vision:
    "“Menjadi apotek terpercaya berbasis komunitas yang mengutamakan pelayanan tatap muka yang aman, ramah, dan akurat bagi keluarga Indonesia.”",
  missions: [
    {
      title: "Pelayanan tatap muka yang ramah",
      description:
        "Memprioritaskan konsultasi langsung dengan apoteker, sesuai kebutuhan pasien, dan pendampingan penggunaan obat.",
    },
    {
      title: "Mutu, keaslian, dan kepatuhan",
      description:
        "Menyediakan obat ASLI dengan pengelolaan sesuai standar praktik kefarmasian dan regulasi BPOM.",
    },
    {
      title: "Pengadaan obat melalui PBF resmi",
      description:
        "Seluruh pengadaan dilakukan dari Pedagang Besar Farmasi (PBF) resmi dengan kepatuhan CDOB.",
    },
  ],
  history: {
    text:
      "Berdiri pada 2021 di Balikpapan, Tiarana Farma lahir dari misi sederhana: memudahkan akses obat yang aman dan terjangkau. Kami terus berkembang menjadi apotek modern berbasis komunitas.",
    stats: [
      { value: "2021", label: "Mulai Beroperasi", iconImageUrl: calendarIcon },
      { value: "5.000+", label: "Pelanggan Dilayani", iconImageUrl: usersIcon },
      { value: "200+", label: "Produk Tersedia", iconImageUrl: capsulesIcon },
    ],
  },
  pharmacist: {
    name: "apt. Titik Tresnowati, S.Si",
    title: "Apoteker Penanggung Jawab",
    credentials: ["STRA & SIPA Terverifikasi", "10+ tahun pengalaman"],
    details: [
      { label: "STRA", value: "19880824/STRA-YYYY/2023" },
      { label: "SIPA", value: "19880824/SIPA-XX/2023" },
      { label: "Jadwal", value: "Senin–Sabtu, 17.00–22.00" },
    ],
  },
  location: {
    address:
      "Griya Asri III Jl. Sepinggan Baru RT.18/RW.12, Sepinggan Baru, Balikpapan, Kalimantan Timur 76115",
    phone: "0812-5140-996",
    hours: [
      "Senin–Sabtu: 08.00–22.00 WITA",
      "Minggu: 08.00–21.00 WITA",
    ],
  },
  images: {
    hero: interiorImg,
    history: interiorImg,
    pharmacist: interiorImg,
    map: interiorImg,
  },
});

const scrollTo = (selector) => {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const handleCopy = async (text) => {
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
};

onMounted(() => {
  initializeAboutUsAnimations();
});
</script>
