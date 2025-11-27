<template>
  <div class="dropdown-wrapper" :class="{ 'w-full': fullWidth }">
    <label v-if="label" :for="inputId" class="dropdown-label block text-sm font-semibold text-gray-700 mb-2">
      {{ label }}
    </label>
    <div class="relative">
      <select
        :id="inputId"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        :disabled="disabled"
        :class="[
          'dropdown-select w-full rounded-xl border px-4 pr-10 text-sm font-medium transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-0 shadow-sm',
          sizeClasses,
          variantClasses,
          {
            'opacity-60 cursor-not-allowed': disabled,
            'cursor-pointer hover:shadow-md': !disabled
          }
        ]"
      >
        <option v-if="placeholder" value="" disabled selected>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <div class="dropdown-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 transition-transform duration-200"
           :class="{ 'rotate-180': isOpen }">
        <svg class="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array,
    required: true,
    validator: (options) => {
      return options.every(opt => 
        typeof opt === 'object' && 
        'value' in opt && 
        'label' in opt
      )
    }
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'success', 'warning', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])

const inputId = computed(() => `dropdown-${Math.random().toString(36).substr(2, 9)}`)
const isOpen = ref(false)

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'py-2 text-xs min-w-[150px]',
    md: 'py-2.5 text-sm min-w-[180px]',
    lg: 'py-3 text-base min-w-[200px]'
  }
  return sizes[props.size] || sizes.md
})

const variantClasses = computed(() => {
  const variants = {
    default: 'border-gray-300 bg-white text-gray-900 hover:border-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20',
    primary: 'border-indigo-300 bg-indigo-50 text-indigo-900 hover:bg-indigo-100 hover:border-indigo-400 focus:border-indigo-500 focus:ring-indigo-500/30',
    success: 'border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100 hover:border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/30',
    warning: 'border-yellow-300 bg-yellow-50 text-yellow-900 hover:bg-yellow-100 hover:border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500/30',
    danger: 'border-rose-300 bg-rose-50 text-rose-900 hover:bg-rose-100 hover:border-rose-400 focus:border-rose-500 focus:ring-rose-500/30'
  }
  return variants[props.variant] || variants.default
})
</script>

<style scoped>
.dropdown-select {
  appearance: none;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.dropdown-select::-ms-expand {
  display: none;
}

/* Custom styling for dropdown options */
.dropdown-select option {
  padding: 8px 12px;
  background-color: white;
  color: #111827;
  font-weight: 500;
}

.dropdown-select option:hover {
  background-color: #f3f4f6;
}

.dropdown-select option:checked {
  background-color: #3b82f6;
  color: white;
}

/* Smooth transitions */
.dropdown-select:focus + .dropdown-icon {
  color: currentColor;
}
</style>
