<template>
  <div class="min-h-screen bg-gray-50">
    <header class="sticky top-0 z-10 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <h1 class="text-lg font-semibold">Panel Admin</h1>
        </div>
        <div class="flex items-center gap-2">
          <Button @click="logout" variant="white" size="sm" class="!bg-gray-100 !text-gray-700 hover:!bg-gray-200 !shadow-none">Keluar</Button>
        </div>
      </div>
    </header>
    <main class="max-w-7xl mx-auto px-4 py-6">
      <router-view />
    </main>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'AdminIndex',
  components: { Button },
  methods: {
    logout() {
      try { localStorage.removeItem('tiarana_admin_token') } catch (e) {}
      this.$router.replace({ name: 'admin-login' })
    }
  }
}
</script>
