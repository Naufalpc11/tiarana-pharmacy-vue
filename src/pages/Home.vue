<template>
  <MainLayout>
    <div class="page-container flex flex-col gap-12">

      <section
        class="hero-bg-image relative min-h-[800px] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
                overflow-hidden bg-cover bg-center"
        :style="heroBackgroundStyle"
        >
        <div
            class="hero-overlay absolute inset-0 flex flex-col items-center justify-center gap-4
                bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-950/80
                px-6 py-12 text-center text-white"
            ref="heroContent"
        >
            <h1
            class="home-title text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            ref="heroTitle"
            >
            {{ hero.title }}
            </h1>

            <p
            v-if="hero.subtitlePrimary"
            class="home-subtitle text-lg text-white/85 sm:text-xl"
            ref="heroSubtitle1"
            >
            {{ hero.subtitlePrimary }}
            </p>

            <p
            v-if="hero.subtitleSecondary"
            class="home-subtitle text-lg text-white/70 sm:text-xl"
            ref="heroSubtitle2"
            >
            {{ hero.subtitleSecondary }}
            </p>
        </div>
        </section>

      <section
        class="features-grid grid gap-6 rounded-[2rem] bg-white p-6 shadow-2xl shadow-indigo-900/5 md:grid-cols-2 lg:grid-cols-3"
        ref="featuresGrid"
      >
        <FeatureHighlightCard
          v-for="feature in featureHighlights"
          :key="feature.title"
          :icon="feature.icon"
          :icon-image-url="feature.iconImageUrl"
          :title="feature.title"
          :description="feature.description"
        />
      </section>

      <section
        class="about-section rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-indigo-900/5"
        id="tentang-kami"
        ref="aboutSection"
      >
        <div class="about-content grid gap-8 lg:grid-cols-2">

          <div class="about-text space-y-5 text-slate-600" ref="aboutText">
            <h2 class="section-title text-3xl font-bold text-indigo-950">
              {{ about.title }}
            </h2>

            <p class="text-base leading-relaxed">
              {{ about.description }}
            </p>

            <div class="about-features mt-10" ref="aboutFeatures">
              <div class="flex flex-wrap items-start justify-center gap-10 md:gap-16">

                <div
                  v-for="feature in about.features"
                  :key="feature.title"
                  class="flex flex-col items-center text-center"
                >

                  <div class="mb-3 text-indigo-700">
                    <img
                      v-if="feature.iconImageUrl"
                      :src="feature.iconImageUrl"
                      :alt="`${feature.title} icon`"
                      class="h-8 w-8 object-contain md:h-9 md:w-9"
                    />
                    <i
                      v-else
                      :class="feature.icon"
                      class="text-3xl md:text-4xl leading-none"
                    ></i>
                  </div>

                  <h4 class="max-w-[11rem] text-sm md:text-base font-semibold text-slate-900 leading-snug">
                    {{ feature.title }}
                  </h4>
                </div>

              </div>
            </div>
          </div>

          <div class="about-image" ref="aboutImage">
            <div
              class="image-container h-96 rounded-[2rem] bg-cover bg-center shadow-xl shadow-indigo-900/10"
              :style="aboutImageStyle"
            ></div>
          </div>

        </div>
      </section>

      <section
        class="services-section space-y-6 rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-indigo-900/5"
        ref="servicesSection"
      >
        <h2
          class="section-title text-center text-3xl font-bold text-indigo-950"
          ref="servicesTitle"
        >
          Layanan Kami
        </h2>

        <div class="services-zigzag flex flex-col gap-8" ref="servicesContainer">
          <ServiceCard
            v-for="(service, index) in services"
            :key="service.title"
            :title="service.title"
            :icon="service.icon"
            :icon-image-url="service.iconImageUrl"
            :description="service.description"
            :items="service.items"
            :image-class="service.imageClass"
            :image-url="service.imageUrl"
            :reverse="service.reverse"
            :ref="index === 0 ? setServiceRow1 : null"
          />
        </div>
      </section>

      <PartnerLogos :logos="partnerLogos" />

      <ArticleHighlight
        :articles="latestArticles"
        :title="highlightTitle"
        :excerpt="highlightExcerpt"
        :date="highlightDate"
        :image="highlightImage"
        :primary-href="highlightPrimaryHref"
        :secondary-href="articlesIndexHref"
      />
    </div>
  </MainLayout>
</template>

<script setup>
import { initializeHomeAnimations } from '@/animation/homeAnimations';
import ArticleHighlight from '@/components/ArticleHighlight.vue';
import FeatureHighlightCard from '@/components/FeatureHighlightCard.vue';
import PartnerLogos from '@/components/PartnerLogos.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
  articlesIndexUrl: {
    type: String,
    default: '/artikel',
  },
  homeContent: {
    type: Object,
    default: () => ({}),
  },
});

const heroBanner = new URL('../assets/Images/Hero-bg.jpg', import.meta.url).href;
const interiorImage = new URL('../assets/Images/Interior.jpg', import.meta.url).href;

const defaultHero = {
  title: 'TIARANA FARMA',
  subtitlePrimary: 'Melayani Dengan Sepenuh Hati',
  subtitleSecondary: 'Berdiri Sejak 2021',
  backgroundImageUrl: heroBanner,
};

const defaultFeatureHighlights = [
  {
    icon: 'fas fa-pills',
    iconImageUrl: null,
    title: 'Resep & Non-Resep',
    description: 'Layanan obat resep dan non-resep dengan konsultasi farmasi profesional',
  },
  {
    icon: 'fas fa-clock',
    iconImageUrl: null,
    title: 'Jam Operasional',
    description: 'Buka setiap hari dari pukul 08:00 - 22:00 WITA',
  },
  {
    icon: 'fas fa-shield-alt',
    iconImageUrl: null,
    title: 'Produk Terjamin',
    description: 'Keaslian dan kualitas produk terjamin dengan izin resmi BPOM',
  },
];

const defaultAbout = {
  title: 'Tentang Kami',
  description:
    'Apotek Tiarana Farma telah melayani masyarakat sejak tahun 2021 dengan komitmen untuk menyediakan layanan kesehatan terbaik dan produk berkualitas. Dengan tim apoteker profesional, kami siap membantu Anda dengan konsultasi kesehatan dan informasi penggunaan obat yang tepat.',
  imageUrl: interiorImage,
  features: [
    {
      icon: 'fas fa-certificate',
      iconImageUrl: null,
      title: 'Apoteker Berpengalaman',
    },
    {
      icon: 'fas fa-check-circle',
      iconImageUrl: null,
      title: 'Produk Berkualitas',
    },
    {
      icon: 'fas fa-heart',
      iconImageUrl: null,
      title: 'Pelayanan Ramah',
    },
  ],
};

const defaultServices = [
  {
    icon: 'fas fa-prescription-bottle-alt',
    iconImageUrl: null,
    title: 'Layanan Resep',
    description:
      'Kami menyediakan layanan resep dokter dengan standar tinggi dan penuh ketelitian. Apoteker profesional kami akan memastikan setiap resep diproses dengan tepat dan aman, disertai dengan konsultasi mengenai penggunaan obat yang benar.',
    items: [
      'Pelayanan resep dokter cepat dan akurat',
      'Konsultasi penggunaan obat dengan apoteker',
      'Pemeriksaan interaksi obat',
      'Informasi efek samping dan cara penggunaan',
    ],
    imageClass: 'service-image-resep',
    imageUrl: interiorImage,
    reverse: false,
  },
  {
    icon: 'fas fa-notes-medical',
    iconImageUrl: null,
    title: 'Konsultasi Kesehatan',
    description:
      'Dapatkan konsultasi kesehatan gratis dengan apoteker berpengalaman kami. Kami siap membantu Anda dengan berbagai pertanyaan seputar kesehatan dan penggunaan obat yang tepat.',
    items: [
      'Konsultasi gratis dengan apoteker',
      'Informasi penggunaan obat yang aman',
      'Pemeriksaan kesehatan dasar',
      'Edukasi kesehatan',
    ],
    imageClass: 'service-image-konsultasi',
    imageUrl: heroBanner,
    reverse: true,
  },
  {
    icon: 'fas fa-heartbeat',
    iconImageUrl: null,
    title: 'Pemeriksaan Kesehatan',
    description:
      'Kami menyediakan layanan pemeriksaan kesehatan dasar untuk membantu Anda memantau kondisi kesehatan secara rutin. Dengan peralatan modern dan tenaga terlatih, kami siap memberikan pelayanan terbaik.',
    items: [
      'Cek tekanan darah',
      'Pemeriksaan gula darah',
      'Pemeriksaan Kolestrol dan Asam Urat',
      'Konsultasi hasil pemeriksaan',
    ],
    imageClass: 'service-image-pemeriksaan',
    imageUrl: interiorImage,
    reverse: false,
  },
];

const homeContent = computed(() => props.homeContent ?? {});

const hero = computed(() => {
  const heroContent = homeContent.value.hero ?? {};

  return {
    title: heroContent.title ?? defaultHero.title,
    subtitlePrimary:
      heroContent.subtitle_primary ??
      heroContent.subtitlePrimary ??
      defaultHero.subtitlePrimary,
    subtitleSecondary:
      heroContent.subtitle_secondary ??
      heroContent.subtitleSecondary ??
      defaultHero.subtitleSecondary,
    backgroundImageUrl:
      heroContent.background_image_url ??
      heroContent.backgroundImageUrl ??
      defaultHero.backgroundImageUrl,
  };
});

const heroBackgroundStyle = computed(() => {
  const url = hero.value.backgroundImageUrl || heroBanner;
  return { backgroundImage: `url(${url})` };
});

const featureHighlights = computed(() => {
  const highlights = homeContent.value.featureHighlights ?? [];
  if (Array.isArray(highlights) && highlights.length) {
    return highlights.map((highlight) => {
      const iconImageUrl =
        highlight.icon_image_url ?? highlight.iconImageUrl ?? null;
      const iconClass = highlight.icon ?? null;

      return {
        title: highlight.title ?? '',
        description: highlight.description ?? '',
        icon: iconClass || (iconImageUrl ? '' : 'fas fa-circle'),
        iconImageUrl,
      };
    });
  }

  return defaultFeatureHighlights.map((feature) => ({ ...feature }));
});

const about = computed(() => {
  const aboutContent = homeContent.value.about ?? {};

  const features =
    Array.isArray(aboutContent.features) && aboutContent.features.length
      ? aboutContent.features.map((feature) => {
          const iconImageUrl =
            feature.icon_image_url ?? feature.iconImageUrl ?? null;
          const iconClass = feature.icon ?? null;

          return {
            title: feature.title ?? '',
            icon: iconClass || (iconImageUrl ? '' : 'fas fa-circle'),
            iconImageUrl,
          };
        })
      : defaultAbout.features.map((feature) => ({ ...feature }));

  return {
    title: aboutContent.title ?? defaultAbout.title,
    description: aboutContent.description ?? defaultAbout.description,
    imageUrl:
      aboutContent.image_url ??
      aboutContent.imageUrl ??
      defaultAbout.imageUrl,
    features,
  };
});

const aboutImageStyle = computed(() => {
  const url = about.value.imageUrl;
  return url ? { backgroundImage: `url(${url})` } : {};
});

const services = computed(() => {
  const source =
    Array.isArray(homeContent.value.services) &&
    homeContent.value.services.length
      ? homeContent.value.services
      : defaultServices;

  return source.map((service, index) => {
    const items = Array.isArray(service.items) ? service.items : [];
    const iconImageUrl =
      service.icon_image_url ?? service.iconImageUrl ?? null;
    const iconClass = service.icon ?? '';

    return {
      title: service.title ?? '',
      icon: iconClass || (iconImageUrl ? '' : 'fas fa-circle'),
      iconImageUrl,
      description: service.description ?? '',
      items,
      imageUrl:
        service.image_url ??
        service.imageUrl ??
        defaultServices[index]?.imageUrl ??
        interiorImage,
      imageClass: service.image_class ?? service.imageClass ?? '',
      reverse: Object.prototype.hasOwnProperty.call(service, 'reverse')
        ? Boolean(service.reverse)
        : index % 2 === 1,
    };
  });
});

const partnerLogos = computed(() => {
  const logos =
    homeContent.value.partnerLogos ?? homeContent.value.logos ?? [];
  if (!Array.isArray(logos)) {
    return [];
  }

  return logos
    .map((logo) => ({
      name: logo?.name ?? '',
      src: logo?.src ?? null,
    }))
    .filter((logo) => logo.name || logo.src);
});

// Refs for animations
const heroContent = ref(null);
const heroTitle = ref(null);
const heroSubtitle1 = ref(null);
const heroSubtitle2 = ref(null);
const featuresGrid = ref(null);
const aboutSection = ref(null);
const aboutText = ref(null);
const aboutImage = ref(null);
const aboutFeatures = ref(null);
const servicesSection = ref(null);
const servicesTitle = ref(null);
const serviceRow1 = ref(null);

const setServiceRow1 = (component) => {
  if (!component) {
    serviceRow1.value = null;
    return;
  }

  serviceRow1.value =
    component.root?.value ?? component.$el ?? component;
};

// Article highlight data
const articleImageFallback = null;
const articleExcerptFallback =
  'Antibiotik bukan untuk semua batuk-pilek. Pelajari indikasi, efek samping umum, dan mengapa harus dihabiskan sesuai resep.';
const articleTitleFallback = 'Amoksisilin: Kapan Perlu Kapan Tidak';
const articleDateFallback = '12/08/2025';

const latestArticles = computed(() => props.articles ?? []);
const firstArticle = computed(() => latestArticles.value[0] ?? null);
const highlightTitle = computed(
  () => firstArticle.value?.title ?? articleTitleFallback
);
const highlightExcerpt = computed(
  () => firstArticle.value?.excerpt ?? articleExcerptFallback
);
const highlightDate = computed(
  () =>
    firstArticle.value?.published_at ?? articleDateFallback
);
const highlightImage = computed(
  () =>
    firstArticle.value?.cover_image_url ??
    articleImageFallback
);
const highlightPrimaryHref = computed(
  () => firstArticle.value?.url ?? props.articlesIndexUrl
);
const articlesIndexHref = computed(
  () => props.articlesIndexUrl ?? '/artikel'
);

onMounted(() => {
  initializeHomeAnimations({
    heroContent: heroContent.value,
    heroTitle: heroTitle.value,
    heroSubtitle1: heroSubtitle1.value,
    heroSubtitle2: heroSubtitle2.value,
    featuresGrid: featuresGrid.value,
    aboutSection: aboutSection.value,
    aboutText: aboutText.value,
    aboutImage: aboutImage.value,
    aboutFeatures: aboutFeatures.value,
    servicesSection: servicesSection.value,
    servicesTitle: servicesTitle.value,
    serviceRow1: serviceRow1.value,
  });
});
</script>
