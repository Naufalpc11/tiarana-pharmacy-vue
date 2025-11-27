<template>
  <div class="flex min-h-screen bg-gray-50">
    <AdminSidebar />
    
    <div class="flex-1 flex flex-col">
      <div class="bg-white border-b border-gray-200 px-6 py-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="flex items-center gap-2 text-sm text-gray-500 mb-1">
              <span>Komunikasi</span>
              <span>›</span>
              <span>Kontak Masuk</span>
            </div>
            <h1 class="text-2xl font-bold text-gray-900">Kontak Masuk</h1>
          </div>
        </div>
      </div>
      
      <div class="flex-1 p-6">
        <div class="space-y-6">
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="p-4 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari berdasarkan nama atau email..."
            class="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-80"
          />
          <div class="flex items-center gap-2">
            <Button @click="markAllAsRead" variant="primary" size="sm" :disabled="unreadCount === 0">
              Tandai Semua Dibaca
            </Button>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Nama</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Telepon</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Pesan</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Waktu</th>
              <th class="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="contact in filteredContacts" :key="contact.id" class="hover:bg-gray-50" :class="{ 'bg-blue-50/30': !contact.read }">
              <td class="px-6 py-4 text-sm">
                <span v-if="!contact.read" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Baru
                </span>
                <span v-else class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Dibaca
                </span>
              </td>
              <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ contact.name }}</td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ contact.email }}</td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ contact.phone }}</td>
              <td class="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{{ contact.message }}</td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ formatDateTime(contact.timestamp) }}</td>
              <td class="px-6 py-4 text-sm text-right">
                <div class="flex items-center justify-end gap-2">
                  <Button @click="viewDetail(contact)" variant="primary" size="sm">Detail</Button>
                  <Button v-if="!contact.read" @click="markAsRead(contact.id)" variant="success" size="sm">Tandai Dibaca</Button>
                  <DangerButton @click="confirmDelete(contact.id)" size="sm">Hapus</DangerButton>
                </div>
              </td>
            </tr>
            <tr v-if="filteredContacts.length === 0">
              <td colspan="7" class="px-6 py-12 text-center text-sm text-gray-500">
                Tidak ada kontak masuk
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="px-6 py-3 border-t border-gray-200 text-sm text-gray-600">
        Showing {{ filteredContacts.length }} of {{ contacts.length }} contacts ({{ unreadCount }} unread)
      </div>
    </div>

    
    <div v-if="showDetailModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" @click.self="closeDetailModal">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 class="text-xl font-bold text-gray-900">Detail Kontak</h2>
          <button @click="closeDetailModal" class="text-gray-400 hover:text-gray-600">
            <span class="text-2xl">×</span>
          </button>
        </div>

        <div v-if="selectedContact" class="p-6 space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Nama</label>
              <p class="text-base text-gray-900">{{ selectedContact.name }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <p class="text-base text-gray-900">{{ selectedContact.email }}</p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Telepon</label>
              <p class="text-base text-gray-900">{{ selectedContact.phone }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Waktu</label>
              <p class="text-base text-gray-900">{{ formatDateTime(selectedContact.timestamp) }}</p>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Pesan</label>
            <p class="text-base text-gray-900 whitespace-pre-wrap">{{ selectedContact.message }}</p>
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <Button type="button" @click="closeDetailModal" variant="primary" size="md">
              Tutup
            </Button>
          </div>
        </div>
      </div>
    </div>

    
    <div v-if="showDeleteDialog" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" @click.self="cancelDelete">
      <FeedbackDialog
        variant="confirm"
        title="Hapus Kontak?"
        message="Data kontak yang dihapus tidak dapat dikembalikan. Apakah Anda yakin?"
        primary-label="Batal"
        secondary-label="Hapus"
        @primary="cancelDelete"
        @secondary="executeDelete"
      />
    </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue'
import Button from '@/components/Button.vue'
import DangerButton from '@/components/DangerButton.vue'
import FeedbackDialog from '@/components/FeedbackDialog.vue'

function loadContacts() {
  try {
    const raw = localStorage.getItem('tiarana_admin_contacts')
    if (raw) return JSON.parse(raw)
  } catch (e) {}
  return []
}

function persistContacts(list) {
  try { localStorage.setItem('tiarana_admin_contacts', JSON.stringify(list)) } catch (e) {}
}

export default {
  name: 'AdminContacts',
  components: { AdminSidebar, Button, DangerButton, FeedbackDialog },
  data() {
    return {
      contacts: loadContacts(),
      searchQuery: '',
      showDetailModal: false,
      selectedContact: null,
      showDeleteDialog: false,
      deleteId: null,
    }
  },
  computed: {
    filteredContacts() {
      if (!this.searchQuery) return this.contacts
      const q = this.searchQuery.toLowerCase()
      return this.contacts.filter(c => 
        c.name.toLowerCase().includes(q) || 
        c.email.toLowerCase().includes(q) ||
        (c.phone && c.phone.toLowerCase().includes(q))
      )
    },
    unreadCount() {
      return this.contacts.filter(c => !c.read).length
    }
  },
  methods: {
    formatDateTime(timestamp) {
      try {
        return new Date(timestamp).toLocaleString('id-ID', { 
          day: '2-digit', 
          month: 'short', 
          year: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      } catch (e) { return timestamp }
    },
    viewDetail(contact) {
      this.selectedContact = contact
      this.showDetailModal = true
      if (!contact.read) {
        this.markAsRead(contact.id)
      }
    },
    closeDetailModal() {
      this.showDetailModal = false
      this.selectedContact = null
    },
    markAsRead(id) {
      const contact = this.contacts.find(c => c.id === id)
      if (contact) {
        contact.read = true
        persistContacts(this.contacts)
      }
    },
    markAllAsRead() {
      this.contacts.forEach(c => c.read = true)
      persistContacts(this.contacts)
    },
    confirmDelete(id) {
      this.deleteId = id
      this.showDeleteDialog = true
    },
    cancelDelete() {
      this.showDeleteDialog = false
      this.deleteId = null
    },
    executeDelete() {
      if (this.deleteId !== null) {
        const idx = this.contacts.findIndex(c => c.id === this.deleteId)
        if (idx !== -1) {
          this.contacts.splice(idx, 1)
          persistContacts(this.contacts)
        }
      }
      this.showDeleteDialog = false
      this.deleteId = null
    }
  }
}
</script>
