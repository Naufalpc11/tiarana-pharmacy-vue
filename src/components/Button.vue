<template>
  <component
    :is="componentTag"
    v-bind="componentAttrs"
    :class="buttonClasses"
  >
    <span
      v-if="hasIcon && iconPosition === 'left'"
      class="ui-button__icon inline-flex h-5 w-5 items-center justify-center text-current"
    >
      <slot name="icon" />
    </span>
    <span class="ui-button__label flex items-center font-semibold tracking-wide">
      <slot />
    </span>
    <span
      v-if="hasIcon && iconPosition === 'right'"
      class="ui-button__icon inline-flex h-5 w-5 items-center justify-center text-current"
    >
      <slot name="icon" />
    </span>
  </component>
</template>

<script setup>
import { computed, useSlots } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'danger', 'white', 'success'].includes(value),
  },
  href: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  iconPosition: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  target: {
    type: String,
    default: '_self',
  },
})

const slots = useSlots()
const hasIcon = computed(() => Boolean(slots.icon))

const isInternalLink = computed(() => typeof props.href === 'string' && /^\/(?!\/)/.test(props.href))

const componentTag = computed(() => {
  if (!props.href) {
    return 'button'
  }
  return isInternalLink.value ? RouterLink : 'a'
})

const componentAttrs = computed(() => {
  if (!props.href) {
    return {
      type: props.type,
      disabled: props.disabled || undefined,
    }
  }

  if (isInternalLink.value) {
    return {
      to: props.href,
      tabindex: props.disabled ? -1 : undefined,
      'aria-disabled': props.disabled ? 'true' : undefined,
    }
  }

  return {
    href: props.href,
    target: props.target,
    rel: props.target === '_blank' ? 'noopener noreferrer' : undefined,
    tabindex: props.disabled ? -1 : undefined,
    'aria-disabled': props.disabled ? 'true' : undefined,
  }
})

const variantClasses = {
  primary: 'bg-gradient-to-br from-[#0d19a3] to-[#2f3df5] text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40',
  danger: 'bg-gradient-to-br from-[#c62828] to-[#ef5350] text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40',
  white: 'border border-white/70 bg-white/10 text-white backdrop-blur hover:bg-white/20 shadow-none',
  success: 'bg-gradient-to-br from-[#0b7a1d] to-[#27b033] text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-6 py-3 text-lg',
}

const buttonClasses = computed(() => {
  const base =
    'ui-button inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

  const variant = variantClasses[props.variant] || variantClasses.primary
  const size = sizeClasses[props.size] || sizeClasses.md
  const block = props.block ? 'w-full' : 'w-fit'
  const disabled = props.disabled ? 'pointer-events-none opacity-60' : 'hover:-translate-y-0.5'

  return [base, variant, size, block, disabled].join(' ')
})
</script>
