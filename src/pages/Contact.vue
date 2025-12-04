<template>
  <MainLayout>
    <div class="contact-page flex flex-col gap-10">
      <header
        class="hero-bg-image relative min-h-[480px] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
                overflow-hidden bg-cover bg-center"
        role="banner"
        :style="heroStyle"
      >
        <div class="absolute inset-0 bg-slate-900/55"></div>

        <div class="relative mx-auto flex max-w-6xl flex-col items-start text-left gap-6 px-4 py-16 sm:px-6 lg:px-8 min-h-[480px] pt-70" ref="contactHeroOverlay">
          <div class="space-y-4">
            <h1
              id="contact-title"
              class="home-title text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white"
              ref="contactHeroTitle"
            >
              Kontak
            </h1>

            <p
              class="home-subtitle max-w-2xl text-lg text-white/85 sm:text-xl"
              ref="contactHeroSubtitle"
            >
              Butuh bantuan cek ketersediaan obat atau konsultasi? Hubungi kami melalui WhatsApp atau isi formulir di bawah.
            </p>
          </div>
        </div>
      </header>

      <section class="contact-section mx-auto mt-6 w-full max-w-6xl px-4 sm:px-6 lg:px-8" aria-labelledby="contact-form-title">
        <div class="contact-form-card space-y-6 rounded-4xl border border-slate-100 p-8 shadow-xl" ref="contactFormCard">
          <h2 id="contact-form-title" class="section-title text-3xl font-bold text-indigo-950">Kirim Pesan</h2>
          <form class="contact-form space-y-6" @submit.prevent="handleSubmitIntent">
            <div class="contact-form__grid grid gap-6 grid-cols-1 sm:grid-cols-2">
              <div class="contact-form__field flex flex-col gap-2">
                <InputField
                  label="Nama"
                  name="name"
                  autocomplete="name"
                  placeholder="Masukkan nama Anda"
                  v-model="form.name"
                  :error="errors.name"
                  required
                />
              </div>
              <div class="contact-form__field flex flex-col gap-2">
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  placeholder="contoh@email.com"
                  v-model="form.email"
                  :error="errors.email"
                  required
                />
              </div>
              <div class="contact-form__field flex flex-col gap-2">
                <InputField
                  label="Telepon"
                  name="phone"
                  type="tel"
                  autocomplete="tel"
                  placeholder="08xx xxxx xxxx"
                  v-model="form.phone"
                  :error="errors.phone"
                />
              </div>
              <div class="contact-form__field flex flex-col gap-2">
                <InputField
                  label="Subjek"
                  name="subject"
                  placeholder="Tuliskan subjek pesan"
                  v-model="form.subject"
                  :error="errors.subject"
                />
              </div>

              <div class="contact-form__field sm:col-span-2 flex flex-col gap-2">
                <InputField
                  label="Pesan"
                  name="message"
                  placeholder="Ceritakan kebutuhan atau pertanyaan Anda di sini"
                  v-model="form.message"
                  :rows="7"
                  textarea
                  :error="errors.message"
                  required
                />
              </div>
            </div>
            <div class="contact-form__actions flex justify-end">
              <Button type="submit" size="lg" :disabled="formProcessing">
                <template v-if="formProcessing">
                  Mengirim...
                </template>
                <template v-else>
                  Kirim
                </template>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>

    <Teleport to="body">
      <transition name="contact-dialog-fade">
        <div
          v-if="isDialogVisible"
          class="contact-dialog-backdrop fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4"
          role="dialog"
          aria-modal="true"
          @click.self="handleBackdropClick"
        >
          <div class="contact-dialog__panel w-full max-w-3xl">
            <FeedbackDialog
              v-if="isConfirmDialogOpen"
              variant="confirm"
              title="Kirim pesan sekarang?"
              message="Pesan Anda akan langsung diteruskan ke tim apotek kami. Pastikan data sudah benar sebelum melanjutkan."
              primary-label="Kirim Sekarang"
              secondary-label="Periksa Lagi"
              @primary="confirmSubmission"
              @secondary="closeConfirmDialog"
            />
            <FeedbackDialog
              v-else-if="isSuccessDialogOpen"
              variant="success"
              title="Pesan berhasil dikirim"
              message="Terima kasih! Tim kami akan segera menghubungi Anda melalui kontak yang diberikan."
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
import { initializeContactAnimations } from '@/animation/contactAnimations'
import Button from '@/components/Button.vue'
import FeedbackDialog from '@/components/FeedbackDialog.vue'
import InputField from '@/components/InputField.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const heroImage = new URL('../assets/Images/HeroSection/Contact.jpg', import.meta.url).href

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const formProcessing = ref(false)
const isConfirmDialogOpen = ref(false)
const isSuccessDialogOpen = ref(false)
const isErrorDialogOpen = ref(false)
const errorDialog = ref({ title: '', message: '' })

const heroStyle = computed(() => ({
  backgroundImage: `url(${heroImage})`,
}))

const contactHeroOverlay = ref(null)
const contactHeroTitle = ref(null)
const contactHeroSubtitle = ref(null)
const contactFormCard = ref(null)

const isDialogVisible = computed(
  () => isConfirmDialogOpen.value || isSuccessDialogOpen.value || isErrorDialogOpen.value
)

const clearErrors = () => {
  errors.name = ''
  errors.email = ''
  errors.phone = ''
  errors.subject = ''
  errors.message = ''
}

const validateForm = () => {
  let hasError = false
  const trimmedName = form.name.trim()
  const trimmedEmail = form.email.trim()
  const trimmedPhone = form.phone.trim()
  const trimmedSubject = form.subject.trim()
  const trimmedMessage = form.message.trim()

  form.name = trimmedName
  form.email = trimmedEmail
  form.phone = trimmedPhone
  form.subject = trimmedSubject
  form.message = trimmedMessage

  if (!trimmedName) {
    errors.name = 'Nama wajib diisi.'
    hasError = true
  }

  if (!trimmedEmail) {
    errors.email = 'Email wajib diisi.'
    hasError = true
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = 'Format email tidak valid.'
    hasError = true
  }

  if (!trimmedMessage) {
    errors.message = 'Pesan wajib diisi.'
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
    setTimeout(resolve, 1200)
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
      const contacts = JSON.parse(localStorage.getItem('tiarana_admin_contacts') || '[]')
      contacts.unshift({
        id: Date.now().toString(),
        name: form.name,
        email: form.email,
        phone: form.phone || '-',
        message: `${form.subject ? `[${form.subject}] ` : ''}${form.message}`,
        timestamp: new Date().toISOString(),
        read: false
      })
      localStorage.setItem('tiarana_admin_contacts', JSON.stringify(contacts))
    } catch (e) {}
    
    form.name = ''
    form.email = ''
    form.phone = ''
    form.subject = ''
    form.message = ''
    clearErrors()
    isSuccessDialogOpen.value = true
  } catch (error) {
    errorDialog.value = {
      title: 'Gagal mengirim pesan',
      message: 'Sistem sedang mengalami kendala. Silakan coba kembali dalam beberapa saat.',
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
  initializeContactAnimations({
    heroOverlay: contactHeroOverlay.value,
    heroTitle: contactHeroTitle.value,
    heroSubtitle: contactHeroSubtitle.value,
    formCard: contactFormCard.value,
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
