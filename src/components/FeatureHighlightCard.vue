<template>
  <article :class="cardClass">
    <div :class="iconWrapperClass" aria-hidden="true">
      <img
        v-if="iconImageUrl"
        :src="iconImageUrl"
        :alt="`${title} icon`"
        :class="imgClass"
      />
      <i
        v-else
        :class="[fallbackIcon, iconFontClass]"
      />
    </div>

    <h3 :class="titleClass">
      {{ title }}
    </h3>

    
    <p v-if="!compact" class="text-base text-slate-600">
      {{ description }}
    </p>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  icon: { type: String, default: "" },
  iconImageUrl: { type: String, default: null },
  title: { type: String, required: true },
  description: { type: String, default: "" },

  compact: { type: Boolean, default: false },
});

const fallbackIcon = computed(
  () => props.icon || ''
);

const cardClass = computed(() =>
  props.compact
    ? "group grid place-items-center gap-2 bg-transparent p-0 text-center shadow-none border-0 rounded-none"
    : "group grid place-items-center gap-5 rounded-3xl border border-indigo-950/10 bg-white p-8 text-center shadow-lg shadow-indigo-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-indigo-900/20"
);

const iconWrapperClass = computed(() => {
  if (props.compact) {
    return "flex items-center justify-center text-indigo-900";
  }
  let cls =
    "flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-indigo-900";
  if (props.iconImageUrl) {
    cls = "flex h-20 w-20 items-center justify-center rounded-full bg-transparent text-indigo-900";
  }
  return cls;
});

const imgClass = computed(() =>
  props.compact ? "h-6 w-6 object-contain" : "h-12 w-12 object-contain"
);

const iconFontClass = computed(() =>
  props.compact ? "text-2xl leading-none" : "text-3xl leading-none"
);

const titleClass = computed(() =>
  props.compact
    ? "text-sm font-semibold text-slate-900"
    : "text-xl font-semibold text-slate-900"
);
</script>
