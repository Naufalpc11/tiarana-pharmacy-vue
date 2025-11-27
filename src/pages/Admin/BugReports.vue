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
              <span>Laporan Bug</span>
            </div>
            <h1 class="text-2xl font-bold text-gray-900">Laporan Bug</h1>
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
            placeholder="Cari berdasarkan subjek atau email..."
            class="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-80"
          />
          <div class="flex items-center gap-2">
            <Dropdown
              v-model="statusFilter"
              :options="statusOptions"
              size="md"
              variant="default"
            />
          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Subjek</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Deskripsi</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Waktu</th>
              <th class="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="report in filteredReports" :key="report.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 text-sm">
                <Dropdown
                  v-model="report.status"
                  @update:modelValue="updateStatus(report.id, $event)"
                  :options="[
                    { value: 'new', label: 'Baru' },
                    { value: 'in-progress', label: 'Sedang Dikerjakan' },
                    { value: 'resolved', label: 'Selesai' }
                  ]"
                  size="sm"
                  :variant="report.status === 'new' ? 'warning' : report.status === 'in-progress' ? 'primary' : 'success'"
                />
              </td>
              <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ report.subject }}</td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ report.email || '-' }}</td>
              <td class="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{{ report.description }}</td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ formatDateTime(report.timestamp) }}</td>
              <td class="px-6 py-4 text-sm text-right">
                <div class="flex items-center justify-end gap-2">
                  <Button @click="viewDetail(report)" variant="primary" size="sm">Detail</Button>
                  <DangerButton @click="confirmDelete(report.id)" size="sm">Hapus</DangerButton>
                </div>
              </td>
            </tr>
            <tr v-if="filteredReports.length === 0">
              <td colspan="6" class="px-6 py-12 text-center text-sm text-gray-500">
                Tidak ada laporan bug
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="px-6 py-3 border-t border-gray-200 text-sm text-gray-600">
        Showing {{ filteredReports.length }} of {{ reports.length }} reports
      </div>
    </div>

    
    <div v-if="showDetailModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto" @click.self="closeDetailModal">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl my-8">
        <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 class="text-xl font-bold text-gray-900">Detail Laporan Bug</h2>
          <button @click="closeDetailModal" class="text-gray-400 hover:text-gray-600">
            <span class="text-2xl">×</span>
          </button>
        </div>

        <div v-if="selectedReport" class="p-6 space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Subjek</label>
              <p class="text-base text-gray-900">{{ selectedReport.subject }}</p>
            </div>
            <div>
              <Dropdown
                v-model="selectedReport.status"
                @update:modelValue="updateStatus(selectedReport.id, $event)"
                :options="[
                  { value: 'new', label: 'Baru' },
                  { value: 'in-progress', label: 'Sedang Dikerjakan' },
                  { value: 'resolved', label: 'Selesai' }
                ]"
                label="Status"
                size="md"
                :variant="selectedReport.status === 'new' ? 'warning' : selectedReport.status === 'in-progress' ? 'primary' : 'success'"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <p class="text-base text-gray-900">{{ selectedReport.email || '-' }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Waktu</label>
              <p class="text-base text-gray-900">{{ formatDateTime(selectedReport.timestamp) }}</p>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Deskripsi Bug</label>
            <p class="text-base text-gray-900 whitespace-pre-wrap">{{ selectedReport.description }}</p>
          </div>

          <div v-if="selectedReport.screenshot">
            <label class="block text-sm font-semibold text-gray-700 mb-2">Screenshot</label>
            <img :src="selectedReport.screenshot" alt="Bug screenshot" class="w-full rounded-lg border border-gray-200" />
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
        title="Hapus Laporan Bug?"
        message="Data laporan yang dihapus tidak dapat dikembalikan. Apakah Anda yakin?"
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
import Dropdown from '@/components/Dropdown.vue'
import FeedbackDialog from '@/components/FeedbackDialog.vue'

function loadReports() {
  try {
    const raw = localStorage.getItem('tiarana_admin_bug_reports')
    if (raw) return JSON.parse(raw)
  } catch (e) {}
  return []
}

function persistReports(list) {
  try { localStorage.setItem('tiarana_admin_bug_reports', JSON.stringify(list)) } catch (e) {}
}

export default {
  name: 'AdminBugReports',
  components: { AdminSidebar, Button, DangerButton, Dropdown, FeedbackDialog },
  data() {
    return {
      reports: loadReports(),
      searchQuery: '',
      statusFilter: '',
      statusOptions: [
        { value: '', label: 'Semua Status' },
        { value: 'new', label: 'Baru' },
        { value: 'in-progress', label: 'Sedang Dikerjakan' },
        { value: 'resolved', label: 'Selesai' }
      ],
      showDetailModal: false,
      selectedReport: null,
      showDeleteDialog: false,
      deleteId: null,
    }
  },
  computed: {
    filteredReports() {
      let filtered = this.reports
      
      if (this.statusFilter) {
        filtered = filtered.filter(r => r.status === this.statusFilter)
      }
      
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase()
        filtered = filtered.filter(r => 
          r.subject.toLowerCase().includes(q) || 
          (r.email && r.email.toLowerCase().includes(q)) ||
          r.description.toLowerCase().includes(q)
        )
      }
      
      return filtered
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
    viewDetail(report) {
      this.selectedReport = report
      this.showDetailModal = true
    },
    closeDetailModal() {
      this.showDetailModal = false
      this.selectedReport = null
    },
    updateStatus(id, status) {
      const report = this.reports.find(r => r.id === id)
      if (report) {
        report.status = status
        persistReports(this.reports)
      }
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
        const idx = this.reports.findIndex(r => r.id === this.deleteId)
        if (idx !== -1) {
          this.reports.splice(idx, 1)
          persistReports(this.reports)
        }
      }
      this.showDeleteDialog = false
      this.deleteId = null
    }
  }
}
</script>
