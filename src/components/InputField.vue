<template>
  <label :for="fieldId" :class="rootClasses">
    <span v-if="label" class="form-input__label text-sm font-semibold text-indigo-950">
      {{ label }}
      <span v-if="required" aria-hidden="true" class="form-input__required ml-1 text-rose-500">*</span>
    </span>

    <component
      :is="isTextarea ? 'textarea' : 'input'"
      :id="fieldId"
      class="form-input__control w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-60"
      :class="{ 'min-h-[180px]': isTextarea, 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20': Boolean(error) }"
      :type="isTextarea ? undefined : type"
      :placeholder="placeholder"
      :rows="isTextarea ? rows : undefined"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :name="name"
      :aria-required="required ? 'true' : undefined"
      :aria-invalid="error ? 'true' : 'false'"
      :value="stringifiedValue"
      @input="handleInput"
      @focus="forwardFocus"
      @blur="forwardBlur"
      v-bind="$attrs"
    />

    <span v-if="hint && !error" class="form-input__hint text-xs text-slate-500">{{ hint }}</span>
    <span v-if="error" class="form-input__error text-xs text-rose-500" role="alert">{{ error }}</span>
  </label>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  textarea: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 5,
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  hint: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: null,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  name: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'input'])

let autoId = 0
const generateId = () => `input-field-${++autoId}`

const internalId = ref(props.id ?? generateId())
watch(
  () => props.id,
  (newId) => {
    if (newId) {
      internalId.value = newId
    }
  }
)

const isTextarea = computed(() => props.textarea || props.type === 'textarea')
const fieldId = computed(() => internalId.value)
const stringifiedValue = computed(() =>
  props.modelValue === null || props.modelValue === undefined ? '' : String(props.modelValue)
)

const rootClasses = computed(() => [
  'form-input flex flex-col gap-2 text-slate-900',
  isTextarea.value ? 'form-input--textarea' : '',
  props.disabled ? 'opacity-70' : '',
])

const handleInput = (event) => {
  const rawValue = event.target.value
  const nextValue =
    props.type === 'number' && rawValue !== '' ? (Number.isNaN(Number(rawValue)) ? rawValue : Number(rawValue)) : rawValue

  emit('update:modelValue', nextValue)
  emit('input', event)
}

const forwardFocus = (event) => emit('focus', event)
const forwardBlur = (event) => emit('blur', event)
</script>
