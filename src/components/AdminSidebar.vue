<template>
  <aside class="w-64 bg-white border-r border-gray-200 flex-shrink-0">
    <nav class="p-4 space-y-1">
      <div class="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Konten</div>
      <router-link 
        to="/admin/articles" 
        class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors"
        :class="isActive('admin-articles') || isActive('admin-dashboard') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'"
      >
        <span>Artikel</span>
      </router-link>
      
      <div class="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-4">Komunikasi</div>
      <router-link 
        to="/admin/contacts" 
        class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors"
        :class="isActive('admin-contacts') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'"
      >
        <span>Kontak Masuk</span>
      </router-link>
      <router-link 
        to="/admin/bug-reports" 
        class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors"
        :class="isActive('admin-bug-reports') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'"
      >
        <span>Laporan Bug</span>
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'AdminSidebar',
  methods: {
    isActive(routeName) {
      return this.$route.name === routeName
    }
  }
}
</script>
