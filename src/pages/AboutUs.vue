<template>
  <MainLayout>
    <main class="bg-slate-50 text-slate-900">
      <!-- HERO -->
      <header
        class="relative h-[420px] md:h-[480px] bg-cover bg-center"
        :style="{ backgroundImage: `url(${heroImg})` }"
      >
        <div class="absolute inset-0 bg-slate-900/70"></div>

        <div class="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Tentang Kami
          </h1>
          <p class="mt-4 max-w-2xl text-sm md:text-base text-slate-100">
            Apotek Tiarana Farma adalah apotek terpercaya yang menyediakan layanan kesehatan berkualitas dengan dukungan tim profesional.
          </p>

          <div class="mt-6 flex flex-wrap justify-center gap-4">
            <Button size="md" icon-position="left" @click="scrollTo('#lokasi')">
              <template #icon><i class="fa-solid fa-location-dot" /></template>
              Lokasi
            </Button>

            <Button variant="secondary" size="md" icon-position="left" @click="scrollTo('#kontak')">
              <template #icon><i class="fa-solid fa-phone" /></template>
              Hubungi Kami
            </Button>
          </div>
        </div>
      </header>

      <!-- VISI -->
      <section class="bg-white py-12 md:py-16">
        <div class="mx-auto max-w-3xl px-4 text-center">
          <h2 class="text-lg font-semibold text-blue-700">Visi</h2>
          <p class="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            “Menjadi apotek terpercaya berbasis komunitas yang mengutamakan pelayanan tatap muka yang aman, ramah, dan akurat bagi keluarga Indonesia.”
          </p>
        </div>
      </section>

      <!-- MISI -->
      <section class="bg-slate-50 py-10 md:py-14">
        <div class="mx-auto max-w-6xl px-4">
          <h2 class="mb-6 text-center text-lg font-semibold text-blue-700">
            Misi
          </h2>

          <div class="grid gap-6 md:grid-cols-3">
            <MissionCard
              title="Pelayanan tatap muka yang ramah"
              description="Memprioritaskan konsultasi langsung dengan apoteker, sesuai kebutuhan pasien, dan pendampingan penggunaan obat."
            />
            <MissionCard
              title="Mutu, keaslian, dan kepatuhan"
              description="Menyediakan obat ASLI dengan pengelolaan sesuai standar praktik kefarmasian dan regulasi BPOM."
            />
            <MissionCard
              title="Pengadaan obat melalui PBF resmi"
              description="Seluruh pengadaan dilakukan dari Pedagang Besar Farmasi (PBF) resmi dengan kepatuhan CDOB."
            />
          </div>
        </div>
      </section>

      <!-- SEJARAH -->
      <section class="bg-white py-12 md:py-16">
        <div class="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 class="text-lg font-semibold text-blue-700">Sejarah Kami</h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
              Berdiri pada 2021 di Balikpapan, Tiarana Farma lahir dari misi sederhana:
              memudahkan akses obat yang aman dan terjangkau. Kami terus berkembang
              menjadi apotek modern berbasis komunitas.
            </p>

            <div class="mt-6 grid gap-4 text-sm md:grid-cols-3">
              <div class="rounded-xl border bg-white p-3 shadow-sm text-center">
                <p class="font-bold text-blue-700 text-lg">2021</p>
                <p class="text-xs text-slate-600">Mulai beroperasi</p>
              </div>
              <div class="rounded-xl border bg-white p-3 shadow-sm text-center">
                <p class="font-bold text-blue-700 text-lg">5.000+</p>
                <p class="text-xs text-slate-600">Pelanggan</p>
              </div>
              <div class="rounded-xl border bg-white p-3 shadow-sm text-center">
                <p class="font-bold text-blue-700 text-lg">200+</p>
                <p class="text-xs text-slate-600">Jenis produk</p>
              </div>
            </div>
          </div>

          <div class="overflow-hidden rounded-2xl shadow-lg">
            <img :src="sejarahImg" alt="Sejarah apotek" class="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <!-- APOTEKER -->
      <section class="bg-slate-50 py-12 md:py-16">
        <div class="mx-auto max-w-6xl px-4">
          <h2 class="text-lg font-semibold text-blue-700">Apoteker Kami</h2>

          <div class="mt-6 rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div class="flex flex-col gap-6 md:flex-row md:items-center">
              <img
                :src="apotekerImg"
                alt="apoteker"
                class="h-28 w-28 rounded-full object-cover ring-4 ring-blue-100"
              />

              <div class="flex-1 space-y-3">
                <div>
                  <h3 class="text-lg font-semibold">apt. Titik Tresnowati, S.Si</h3>
                  <p class="text-xs text-slate-500">Apoteker Penanggung Jawab</p>
                </div>

                <div class="flex flex-wrap gap-2 text-xs">
                  <span class="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
                    STRA &amp; SIPA Terverifikasi
                  </span>
                  <span class="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
                    10+ tahun pengalaman
                  </span>
                </div>

                <div class="grid gap-3 text-xs md:grid-cols-3">
                  <div class="rounded-xl border p-3">
                    <p class="font-semibold">STRA</p>
                    <p class="text-slate-600 mt-1">19880824/STRA-YYYY/2023</p>
                  </div>
                  <div class="rounded-xl border p-3">
                    <p class="font-semibold">SIPA</p>
                    <p class="text-slate-600 mt-1">19880824/SIPA-XX/2023</p>
                  </div>
                  <div class="rounded-xl border p-3">
                    <p class="font-semibold">Jadwal</p>
                    <p class="text-slate-600 mt-1">Senin–Sabtu, 17.00–22.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- LOKASI -->
      <section id="lokasi" class="bg-white py-12 md:py-16">
        <div class="mx-auto max-w-6xl px-4">
          <h2 class="text-center text-lg font-semibold text-blue-700">Lokasi Kami</h2>

          <div class="mt-8 grid gap-8 lg:grid-cols-2">
            <div id="kontak" class="space-y-4 text-sm">
              <div class="rounded-xl border bg-white p-4 shadow-sm">
                <p class="font-semibold text-slate-800">Alamat</p>
                <p class="mt-1 text-slate-600">
                  Griya Asri III Jl. Sepinggan Baru RT.18/RW.12, Sepinggan Baru,
                  Balikpapan, Kalimantan Timur 76115
                </p>
              </div>

              <div class="rounded-xl border bg-white p-4 shadow-sm">
                <p class="font-semibold text-slate-800">Telepon</p>
                <p class="mt-1 text-slate-600">0812-5140-996</p>
              </div>

              <div class="rounded-xl border bg-white p-4 shadow-sm">
                <p class="font-semibold text-slate-800">Jam Operasional</p>
                <p class="mt-1 text-slate-600">
                  Senin–Sabtu: 08.00–22.00 WITA<br />
                  Minggu: 08.00–21.00 WITA
                </p>
              </div>
            </div>

            <div class="overflow-hidden rounded-2xl border shadow-md">
              <img :src="mapImg" alt="Map lokasi" class="h-[320px] w-full object-cover md:h-[380px]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>

<script setup>
import Button from "@/components/Button.vue";
import MissionCard from "@/components/MissionCard.vue";
import MainLayout from "@/layouts/MainLayout.vue";

import interiorImg from "@/assets/Images/Interior.jpg";

const heroImg = interiorImg;
const sejarahImg = interiorImg;
const apotekerImg = interiorImg;
const mapImg = interiorImg;

const scrollTo = (selector) => {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>
