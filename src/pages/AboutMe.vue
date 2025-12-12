<template>
  <MainLayout>
    <main class="bg-slate-50 text-slate-900">
      
      <header>
      </header>
      
      <section class="history-section bg-white py-12 md:py-16">
        <div class="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-start">
          <div class="history-content">
            <strong class="text-lg font-extrabold text-black-700">Naufal Tiarana Putra</strong>
            <h2>11231071 - Informatika - Institut Teknologi Kalimantan</h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
              {{ pageData.history.text }}
            </p>
          </div>

          <div class="shadow-lg grid text-sm sm:grid-cols-1">
            <img
              :src="pageData.images.history"
              alt="Foto Profil"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section class="values-section bg-slate-50 py-10 md:py-14">
        <div class="mx-auto max-w-6xl px-4">
          <h2 class="mb-6 text-center text-lg font-semibold text-blue-700">
          </h2>

          <div class="grid gap-6 md:grid-cols-3 sm:col-span-2 flex flex-col gap-2">
            <MissionCard
              v-for="(skills, index) in pageData.skils"
              :key="index"
              :title="skills.title"
              :description="skills.description"
            />
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>

<script setup>

import MissionCard from "@/components/MissionCard.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { onMounted, reactive } from "vue";

import { initializeAboutUsAnimations } from "@/animation/aboutUsAnimations";

import calendarIcon from "@/assets/Icon/calendar-solid.svg?raw";
import capsulesIcon from "@/assets/Icon/pills-solid-full.svg?raw";
import usersIcon from "@/assets/Icon/user-solid.svg?raw";
import interiorImg from "@/assets/Images/HeroSection/AboutUs.jpg";

const pageData = reactive({
  skils: [
    {
      title: "Ngoding",
      description:
        "Vue.js, Next.js",
    },
    {
      title: "Memasak",
      description:
        "Nasi Goreng, Indomie, Sarden, Sayur",
    },
    {
      title: "Mandiri",
      description:
        "Ngekost dengan uang jajan 300.000 per bulan",
    },
  ],
  history: {
    text:
      "Saya adalah mahaisiwa Informatika angkatan 2023.Saya adalah mahaisiwa Informatika angkatan 2023.Saya adalah mahaisiwa Informatika angkatan 2023.Saya adalah mahaisiwa Informatika angkatan 2023.Saya adalah mahaisiwa Informatika angkatan 2023.Saya adalah mahaisiwa Informatika angkatan 2023.Saya adalah mahaisiwa Informatika angkatan 2023.Saya adalah mahaisiwa Informatika angkatan 2023.Saya adalah mahaisiwa Informatika angkatan 2023.Saya adalah mahaisiwa Informatika angkatan 2023. Saya adalah mahaisiwa Informatika angkatan 2023. Saya adalah mahaisiwa Informatika angkatan 2023. Saya adalah mahaisiwa Informatika angkatan 2023. Saya adalah mahaisiwa Informatika angkatan 2023. Saya adalah mahaisiwa Informatika angkatan 2023. Saya adalah mahaisiwa Informatika angkatan 2023. Saya adalah mahaisiwa Informatika angkatan 2023. Saya adalah mahaisiwa Informatika angkatan 2023",
    stats: [
      { value: "2021", label: "Mulai Beroperasi", iconImageUrl: calendarIcon },
      { value: "5.000+", label: "Pelanggan Dilayani", iconImageUrl: usersIcon },
      { value: "200+", label: "Produk Tersedia", iconImageUrl: capsulesIcon },
    ],
  },
  images: {
    history: interiorImg,
  },
});

onMounted(() => {
  initializeAboutUsAnimations();
});
</script>
