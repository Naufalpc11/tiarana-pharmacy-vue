<template>
  <MainLayout>
    <div class="bug-report-page flex flex-col gap-10">
      <section class="bug-report-hero relative overflow-hidden rounded-[2rem] min-h-[250px] bg-gradient-to-br from-[#0d19a3] to-[#2f3df5] text-white shadow-lg shadow-indigo-500/25">
        <div class="bug-report-hero__content flex flex-col justify-center space-y-4 px-6 py-12 md:px-10 md:py-16">
          <h1 class="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">Laporkan Bug</h1>
          <p class="max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Temukan kendala saat menggunakan aplikasi? Laporkan detailnya agar tim kami dapat segera memperbaikinya.
          </p>
        </div>
      </section>

      <section class="bug-report-section rounded-[2rem] bg-white p-6 shadow-2xl shadow-indigo-900/5" aria-labelledby="bug-report-form-title">
        <div class="bug-report-card space-y-6 rounded-[2rem] border border-slate-100 p-6 shadow-xl">
          <h2 id="bug-report-form-title" class="text-3xl font-bold text-indigo-950">Formulir Laporan Bug</h2>
          <form class="bug-report-form space-y-6" @submit.prevent="handleSubmitIntent">
            <div class="bug-report-form__grid grid gap-6">
              <div class="bug-report-form__field bug-report-form__field--full flex flex-col gap-2">
                <InputField
                  label="Subjek"
                  name="subject"
                  placeholder="Tuliskan ringkasan bug"
                  v-model="form.subject"
                  :error="errors.subject"
                  required
                />
              </div>

              <div class="bug-report-form__field bug-report-form__field--full flex flex-col gap-2">
                <InputField
                  label="Email (opsional)"
                  name="email"
                  type="email"
                  autocomplete="email"
                  placeholder="contoh@email.com"
                  v-model="form.email"
                  :error="errors.email"
                />
              </div>

              <div class="bug-report-form__field bug-report-form__field--full flex flex-col gap-2">
                <InputField
                  label="Deskripsi Bug"
                  name="description"
                  placeholder="Jelaskan apa yang terjadi, langkah-langkah untuk mengulanginya, dan harapan Anda"
                  v-model="form.description"
                  :rows="8"
                  textarea
                  :error="errors.description"
                  required
                />
              </div>

              <div class="bug-report-form__field bug-report-form__field--full">
                <label class="bug-report-upload flex flex-col gap-3 rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/40 p-5 text-slate-700">
                  <span class="bug-report-upload__label font-semibold text-indigo-950">
                    Gambar Bukti
                    <span aria-hidden="true" class="bug-report-upload__required text-rose-500">*</span>
                  </span>
                  <p class="bug-report-upload__hint text-sm text-slate-500">
                    Unggah tangkapan layar atau foto bagian yang bermasalah (PNG, JPG, JPEG, WEBP - maks. 4 MB).
                  </p>

                  <div class="bug-report-upload__dropzone flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-indigo-200 bg-white/70 p-6 text-center text-slate-600" @dragover.prevent @drop.prevent="handleDrop">
                    <div class="bug-report-upload__info flex flex-col items-center gap-2">
                      <span class="bug-report-upload__icon text-3xl" aria-hidden="true">??</span>
                      <div class="bug-report-upload__text text-sm">
                        <strong>{{ screenshotName || 'Pilih atau seret gambar ke sini' }}</strong>
                        <span v-if="!screenshotName" class="block text-xs text-slate-400">Klik untuk memilih file</span>
                      </div>
                    </div>
                    <input
                      ref="screenshotInput"
                      class="bug-report-upload__input hidden"
                      type="file"
                      accept="image/png,image/jpeg,image/jpg,image/webp"
                      @change="handleFileChange"
                    />
                  </div>

                  <transition name="bug-report-fade">
                    <div v-if="screenshotPreview" class="bug-report-preview flex flex-col items-center gap-3 rounded-2xl bg-white/80 p-4 shadow-inner">
                      <img :src="screenshotPreview" alt="Pratinjau gambar laporan bug" class="max-h-64 w-full rounded-2xl object-cover" />
                      <Button type="button" variant="danger" size="sm" @click="clearScreenshot">
                        Hapus Gambar
                      </Button>
                    </div>
                  </transition>

                  <p v-if="screenshotError" class="bug-report-upload__error text-sm text-rose-500" role="alert">{{ screenshotError }}</p>
                  <p v-else class="bug-report-upload__hint bug-report-upload__hint--footer text-xs text-slate-500">
                    Pastikan informasi sensitif tidak terlihat pada gambar.
                  </p>
                </label>
              </div>
            </div>

            <div class="bug-report-form__actions flex justify-end">
              <Button type="submit" size="lg" :disabled="formProcessing">
                <template v-if="formProcessing">
                  Mengirim laporan...
                </template>
                <template v-else>
                  Kirim Laporan Bug
                </template>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>

    <Teleport to="body">
      <transition name="bug-report-dialog-fade">
        <div
          v-if="isDialogVisible"
          class="bug-report-dialog-backdrop fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4"
          role="dialog"
          aria-modal="true"
          @click.self="handleBackdropClick"
        >
          <div class="bug-report-dialog__panel w-full max-w-3xl">
            <FeedbackDialog
              v-if="isConfirmDialogOpen"
              variant="confirm"
              title="Kirim laporan bug sekarang?"
              message="Pastikan seluruh detail sudah tepat sebelum kami terima."
              primary-label="Kirim"
              secondary-label="Periksa Lagi"
              @primary="confirmSubmission"
              @secondary="closeConfirmDialog"
            />
            <FeedbackDialog
              v-else-if="isSuccessDialogOpen"
              variant="success"
              title="Laporan dikirim"
              message="Terima kasih, tim kami akan menghubungi Anda bila membutuhkan detail tambahan."
              primary-label="Selesai"
              @primary="closeSuccessDialog"
            />
            <FeedbackDialog
              v-else-if="isErrorDialogOpen"
              variant="error"
              :title="errorDialog.title"
              :message="errorDialog.message"
              primary-label="Tutup"
              @primary="closeErrorDialog"
            />
          </div>
        </div>
      </transition>
    </Teleport>
  </MainLayout>
</template>

<script setup>
import Button from '@/components/Button.vue'
import FeedbackDialog from '@/components/FeedbackDialog.vue'
import InputField from '@/components/InputField.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const form = reactive({
  subject: '',
  email: '',
  description: '',
})

const errors = reactive({
  subject: '',
  email: '',
  description: '',
})

const screenshotInput = ref(null)
const screenshotFile = ref(null)
const screenshotPreview = ref('')
const screenshotName = ref('')
const screenshotError = ref('')

const formProcessing = ref(false)
const isConfirmDialogOpen = ref(false)
const isSuccessDialogOpen = ref(false)
const isErrorDialogOpen = ref(false)
const errorDialog = ref({ title: '', message: '' })

const isDialogVisible = computed(
  () => isConfirmDialogOpen.value || isSuccessDialogOpen.value || isErrorDialogOpen.value
)

const clearErrors = () => {
  errors.subject = ''
  errors.email = ''
  errors.description = ''
  screenshotError.value = ''
}

const validateForm = () => {
  let hasError = false
  form.subject = form.subject.trim()
  form.email = form.email.trim()
  form.description = form.description.trim()

  if (!form.subject) {
    errors.subject = 'Subjek wajib diisi.'
    hasError = true
  }

  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Format email tidak valid.'
    hasError = true
  }

  if (!form.description) {
    errors.description = 'Deskripsi wajib diisi.'
    hasError = true
  }

  if (!screenshotFile.value) {
    screenshotError.value = 'Gambar bukti wajib diunggah.'
    hasError = true
  }

  return hasError
}

const handleSubmitIntent = () => {
  clearErrors()
  if (!validateForm()) {
    isConfirmDialogOpen.value = true
  }
}

const closeConfirmDialog = () => {
  isConfirmDialogOpen.value = false
}

const simulateSubmission = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1400)
  })

const confirmSubmission = async () => {
  if (formProcessing.value) {
    return
  }

  formProcessing.value = true
  isConfirmDialogOpen.value = false

  try {
    await simulateSubmission()
    
    try {
      const reports = JSON.parse(localStorage.getItem('tiarana_admin_bug_reports') || '[]')
      reports.unshift({
        id: Date.now().toString(),
        subject: form.subject,
        email: form.email || null,
        description: form.description,
        screenshot: screenshotPreview.value || null,
        timestamp: new Date().toISOString(),
        status: 'new'
      })
      localStorage.setItem('tiarana_admin_bug_reports', JSON.stringify(reports))
    } catch (e) {}
    
    form.subject = ''
    form.email = ''
    form.description = ''
    clearScreenshot()
    clearErrors()
    isSuccessDialogOpen.value = true
  } catch (error) {
    errorDialog.value = {
      title: 'Gagal mengirim laporan',
      message: 'Silakan coba beberapa saat lagi.',
    }
    isErrorDialogOpen.value = true
  } finally {
    formProcessing.value = false
  }
}

const closeSuccessDialog = () => {
  isSuccessDialogOpen.value = false
}

const closeErrorDialog = () => {
  isErrorDialogOpen.value = false
}

const handleFileChange = (event) => {
  const file = event?.target?.files?.[0]
  if (!file) {
    return
  }

  const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
  const maxSize = 4 * 1024 * 1024

  if (!validTypes.includes(file.type)) {
    screenshotError.value = 'Format gambar tidak didukung.'
    return
  }

  if (file.size > maxSize) {
    screenshotError.value = 'Ukuran gambar melebihi 4 MB.'
    return
  }

  screenshotFile.value = file
  screenshotName.value = file.name
  screenshotError.value = ''

  if (screenshotPreview.value) {
    URL.revokeObjectURL(screenshotPreview.value)
  }
  screenshotPreview.value = URL.createObjectURL(file)
}

const handleDrop = (event) => {
  const file = event.dataTransfer?.files?.[0]
  if (!file) {
    return
  }

  if (screenshotInput.value) {
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(file)
    screenshotInput.value.files = dataTransfer.files
  }

  handleFileChange({ target: { files: [file] } })
}

const clearScreenshot = () => {
  screenshotFile.value = null
  screenshotName.value = ''
  if (screenshotPreview.value) {
    URL.revokeObjectURL(screenshotPreview.value)
  }
  screenshotPreview.value = ''
  screenshotError.value = ''
  if (screenshotInput.value) {
    screenshotInput.value.value = ''
  }
}

const handleBackdropClick = () => {
  if (isSuccessDialogOpen.value) {
    closeSuccessDialog()
  } else if (isErrorDialogOpen.value) {
    closeErrorDialog()
  } else if (isConfirmDialogOpen.value) {
    closeConfirmDialog()
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && isDialogVisible.value) {
    handleBackdropClick()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (screenshotPreview.value) {
    URL.revokeObjectURL(screenshotPreview.value)
  }
})
</script>
