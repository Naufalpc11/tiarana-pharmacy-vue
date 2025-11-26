<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="w-full max-w-md bg-white shadow-sm rounded-xl p-6">
      <h1 class="text-2xl font-semibold text-gray-900 mb-1">Admin Login</h1>
      <p class="text-sm text-gray-500 mb-6">Masuk untuk mengelola artikel.</p>

      <form @submit.prevent="onSubmit" class="space-y-4">
        <InputField
          v-model="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          required
          :error="error"
        />
        <InputField
          v-model="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          required
        />
        <Button type="submit" variant="primary" size="lg" block>
          Masuk
        </Button>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import InputField from '@/components/InputField.vue';

export default {
  name: 'AdminLogin',
  components: { InputField, Button },
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    onSubmit() {
      const validEmail = 'tiaranafarma@gmail.com'
      const validPass = 'Admin123!'
      if (this.email === validEmail && this.password === validPass) {
        try {
          localStorage.setItem('tiarana_admin_token', 'ok')
        } catch (e) {}
        const redirect = this.$route.query.redirect || { name: 'admin-dashboard' }
        this.$router.replace(redirect)
      } else {
        this.error = 'Email atau password salah.'
      }
    }
  }
}
</script>
