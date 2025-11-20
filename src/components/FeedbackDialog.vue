<template>
  <div
    class="feedback-dialog w-full max-w-3xl rounded-[32px] border bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-10"
    :class="tone.panel"
  >
    <div
      class="feedback-dialog__body flex flex-col gap-6 md:flex-row md:items-center"
    >
    <div
      class="feedback-dialog__icon flex h-24 w-24 items-center justify-center rounded-full border-2"
      :class="tone.icon"
      aria-hidden="true"
    >
      <template v-if="variant === 'success'">
        <svg
          width="64"
          height="64"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-14 w-14"
        >
          <circle cx="44" cy="44" r="41.5" stroke="currentColor" stroke-width="5" />
          <path
            d="M61.3333 33.3334L38.5 56.1667L26.6666 44.3334"
            stroke="currentColor"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
      <template v-else-if="variant === 'error'">
        <svg
          width="64"
          height="64"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-14 w-14"
        >
          <circle cx="44" cy="44" r="41.5" stroke="currentColor" stroke-width="5" />
          <path d="M55 33L33 55M33 33L55 55" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
        </svg>
      </template>
      <template v-else>
        <svg
          width="64"
          height="64"
          viewBox="0 0 640 640"
          xmlns="http://www.w3.org/2000/svg"
          class="h-14 w-14"
        >
          <path
            fill="currentColor"
            d="M224 224C224 171 267 128 320 128C373 128 416 171 416 224C416 266.7 388.1 302.9 349.5 315.4C321.1 324.6 288 350.7 288 392V416C288 433.7 302.3 448 320 448C337.7 448 352 433.7 352 416V392C352 390.3 352.6 387.9 355.5 384.7C358.5 381.4 363.4 378.2 369.2 376.3C433.5 355.6 480 295.3 480 224C480 135.6 408.4 64 320 64C231.6 64 160 135.6 160 224C160 241.7 174.3 256 192 256C209.7 256 224 241.7 224 224zM320 576C342.1 576 360 558.1 360 536C360 513.9 342.1 496 320 496C297.9 496 280 513.9 280 536C280 558.1 297.9 576 320 576z"
          />
        </svg>
      </template>
    </div>

      <div class="feedback-dialog__content flex-1 space-y-4 text-center md:text-left">
        <h3 class="feedback-dialog__title text-2xl font-extrabold tracking-tight text-slate-900">{{ title }}</h3>
        <p class="feedback-dialog__message text-base leading-relaxed text-slate-600">{{ message }}</p>
      </div>
    </div>

    <div class="feedback-dialog__actions mt-6 flex flex-wrap justify-center gap-3 md:justify-end">
      <Button :variant="primaryButtonVariant" size="lg" @click="$emit('primary')">
        {{ primaryLabel }}
      </Button>
      <Button
        v-if="variant === 'confirm'"
        variant="danger"
        size="lg"
        @click="$emit('secondary')"
      >
        {{ secondaryLabel }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Button from './Button.vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'confirm', 'error'].includes(value),
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  primaryLabel: {
    type: String,
    default: 'Oke',
  },
  secondaryLabel: {
    type: String,
    default: 'Batal',
  },
})

const toneMap = {
  success: {
    panel: 'border-emerald-100 shadow-emerald-500/10',
    icon: 'border-emerald-200 bg-emerald-50 text-emerald-600',
  },
  confirm: {
    panel: 'border-indigo-100 shadow-indigo-500/10',
    icon: 'border-indigo-200 bg-indigo-50 text-indigo-600',
  },
  error: {
    panel: 'border-rose-100 shadow-rose-500/10',
    icon: 'border-rose-200 bg-rose-50 text-rose-600',
  },
}

const tone = computed(() => toneMap[props.variant] ?? toneMap.success)

const primaryButtonVariant = computed(() => {
  if (props.variant === 'error') {
    return 'danger'
  }
  if (props.variant === 'success') {
    return 'success'
  }
  return 'primary'
})

defineEmits(['primary', 'secondary'])
</script>
