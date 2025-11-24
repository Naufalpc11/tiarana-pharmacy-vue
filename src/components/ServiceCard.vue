<template>
  <div
    class="service-row service-card flex flex-col overflow-hidden rounded-3xl border border-slate-100 shadow-2xl shadow-slate-900/5 lg:flex-row"
    :class="reverse ? 'bg-slate-50 lg:flex-row-reverse' : 'bg-white'"
    ref="root"
  >
    <div
      class="service-image h-64 w-full bg-cover bg-center bg-no-repeat lg:h-auto lg:w-1/2"
      :class="imageClass"
      :style="imageStyles"
    ></div>
    <div class="service-content flex w-full flex-col gap-5 p-8 lg:w-1/2 lg:p-10">
      <div
        class="service-icon flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-white"
        :class="{ 'bg-indigo-950': Boolean(iconImageUrl) }"
      >
        <img v-if="iconImageUrl" :src="iconImageUrl" :alt="`${title} icon`" class="h-12 w-12 object-contain invert brightness-0" />
        <i v-else :class="icon" class="text-3xl" />
      </div>
      <div class="space-y-4">
        <h3 class="text-3xl font-semibold text-indigo-950">{{ title }}</h3>
        <p class="text-base leading-relaxed text-slate-600">{{ description }}</p>
      </div>
      <ul class="space-y-3">
        <li
          v-for="item in items"
          :key="item"
          class="flex items-start gap-3 text-base text-slate-700"
        >
          <span class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-sm text-indigo-700">&#10003;</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
  iconImageUrl: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    default: () => [],
  },
  imageClass: {
    type: String,
    default: '',
  },
  imageUrl: {
    type: String,
    default: null,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
})

const imageStyles = computed(() => {
  if (!props.imageUrl) {
    return {}
  }

  return {
    backgroundImage: `url(${props.imageUrl})`,
  }
})

const root = ref(null)

defineExpose({
  root,
})
</script>
