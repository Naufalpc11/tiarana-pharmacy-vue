<template>
  <div class="flex min-h-screen bg-gray-50">
    <AdminSidebar />

    
    <div class="flex-1 flex flex-col">
      
      <div class="bg-white border-b border-gray-200 px-6 py-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="flex items-center gap-2 text-sm text-gray-500 mb-1">
              <span>Artikel</span>
              <span>›</span>
              <span>List</span>
            </div>
            <h1 class="text-2xl font-bold text-gray-900">Artikel</h1>
          </div>
          <Button @click="openCreateModal" variant="success" size="md">
            New Artikel
          </Button>
        </div>
      </div>

      
      <div class="flex-1 p-6">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
          
          <div class="p-4 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search"
                class="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Judul</th>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Slug</th>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Terbit</th>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Diperbarui</th>
                  <th class="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="(article, idx) in filteredArticles" :key="article.id" class="hover:bg-gray-50">
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ article.title }}</td>
                  <td class="px-6 py-4 text-sm text-gray-600">{{ article.slug || generateSlug(article.title) }}</td>
                  <td class="px-6 py-4 text-sm text-gray-600">{{ formatDateTime(article.date) }}</td>
                  <td class="px-6 py-4 text-sm text-gray-600">{{ article.updatedAt ? formatRelative(article.updatedAt) : formatRelative(article.date) }}</td>
                  <td class="px-6 py-4 text-sm text-right">
                    <div class="flex items-center justify-end gap-2">
                      <Button @click="openEditModal(idx)" variant="primary" size="sm">Edit</Button>
                      <DangerButton @click="confirmDelete(idx)" size="sm">Delete</DangerButton>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          
          <div class="px-6 py-3 border-t border-gray-200 text-sm text-gray-600">
            Showing {{ filteredArticles.length }} of {{ articles.length }} results
          </div>
        </div>
      </div>
    </div>

    
    <div v-if="showFormModal" class="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 overflow-y-auto" @click.self="closeFormModal">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-4xl my-8">
        
        <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <div class="flex items-center gap-2 text-sm text-gray-500 mb-1">
              <span>Artikel</span>
              <span>›</span>
              <span>{{ isEditing ? 'Edit' : 'Create' }}</span>
            </div>
            <h2 class="text-xl font-bold text-gray-900">{{ isEditing ? 'Edit' : 'Create' }} Artikel</h2>
          </div>
          <button @click="closeFormModal" class="text-gray-400 hover:text-gray-600">
            <span class="text-2xl">×</span>
          </button>
        </div>

        
        <form @submit.prevent="save" class="p-6 space-y-6">
          <div class="bg-gray-50 rounded-lg p-4">
            <h3 class="text-sm font-semibold text-gray-700 mb-4">Informasi Utama</h3>
            <div class="grid grid-cols-2 gap-4">
              <InputField
                v-model="form.title"
                label="Judul"
                placeholder="Judul artikel"
                required
              />
              <div>
                <label class="block text-sm font-semibold text-indigo-950 mb-2">Slug</label>
                <input
                  type="text"
                  :value="generateSlug(form.title)"
                  readonly
                  class="w-full rounded-2xl border border-slate-200 bg-gray-100 px-4 py-3 text-base text-slate-600"
                  placeholder="Digunakan pada URL, contoh: /artikel/slug-anda"
                />
                <p class="text-xs text-slate-500 mt-1">Digunakan pada URL, contoh: /artikel/slug-anda</p>
              </div>
            </div>
            <div class="mt-4">
              <InputField
                v-model="form.content"
                label="Ringkasan"
                placeholder="Ringkasan artikel"
                textarea
                :rows="4"
                required
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-indigo-950 mb-2">Gambar Sampul</label>
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition">
                <input type="file" accept="image/*" @change="onFile" class="hidden" ref="fileInput" />
                <div v-if="!form.image" class="space-y-2">
                  <button type="button" @click="$refs.fileInput.click()" class="text-indigo-600 font-medium text-sm hover:underline">
                    Drag & Drop your files or Browse
                  </button>
                  <p class="text-xs text-gray-500">Format: jpg/png/webp, maks 10 MB. Direkomendasikan rasio 4:3.</p>
                </div>
                <div v-else class="space-y-2">
                  <img :src="form.image" class="mx-auto h-32 w-auto object-cover rounded" />
                  <button type="button" @click="removeImage" class="text-red-600 text-sm hover:underline">Hapus gambar</button>
                </div>
              </div>
            </div>
            <div>
              <InputField
                v-model="form.date"
                type="datetime-local"
                label="Tanggal Publikasi"
                required
              />
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-4">
            <h3 class="text-sm font-semibold text-gray-700 mb-4">Konten</h3>
            <InputField
              v-model="form.body"
              label="Isi Artikel"
              placeholder="Tulis konten artikel di sini..."
              textarea
              :rows="10"
              required
            />
          </div>

          
          <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <Button type="button" @click="closeFormModal" variant="primary" size="md">
              Cancel
            </Button>
            <Button type="submit" variant="success" size="md">
              {{ isEditing ? 'Update' : 'Create' }}
            </Button>
          </div>
        </form>
      </div>
    </div>

    
    <div v-if="showDeleteDialog" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" @click.self="cancelDelete">
      <FeedbackDialog
        variant="confirm"
        title="Hapus Artikel?"
        message="Artikel yang dihapus tidak dapat dikembalikan. Apakah Anda yakin?"
        primary-label="Batal"
        secondary-label="Hapus"
        @primary="cancelDelete"
        @secondary="executeDelete"
      />
    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue'
import Button from '@/components/Button.vue'
import DangerButton from '@/components/DangerButton.vue'
import FeedbackDialog from '@/components/FeedbackDialog.vue'
import InputField from '@/components/InputField.vue'
import { articles as baseArticles } from '@/data/articles.js'

function loadArticles() {
  try {
    const raw = localStorage.getItem('tiarana_admin_articles')
    if (raw) return JSON.parse(raw)
  } catch (e) {}
  // map base articles to editable structure
  return baseArticles.map((a, i) => ({
    id: a.slug || String(i+1),
    title: a.title || a.judul || `Artikel ${i+1}`,
    date: a.date || a.tanggal || new Date().toISOString().slice(0,10),
    content: a.content || a.deskripsi || '',
    image: a.image || a.thumbnail || null
  }))
}

function persistArticles(list) {
  try { localStorage.setItem('tiarana_admin_articles', JSON.stringify(list)) } catch (e) {}
}

export default {
  name: 'AdminArticles',
  components: { AdminSidebar, InputField, Button, DangerButton, FeedbackDialog },
  data() {
    return {
      articles: loadArticles(),
      form: { id: null, title: '', date: new Date().toISOString().slice(0,16), content: '', body: '', image: null, slug: '' },
      editingIndex: null,
      showDeleteDialog: false,
      deleteIndex: null,
      showFormModal: false,
      searchQuery: '',
    }
  },
  computed: {
    filteredArticles() {
      if (!this.searchQuery) return this.articles
      const q = this.searchQuery.toLowerCase()
      return this.articles.filter(a => 
        a.title.toLowerCase().includes(q) || 
        (a.content && a.content.toLowerCase().includes(q))
      )
    },
    isEditing() {
      return this.editingIndex !== null
    }
  },
  methods: {
    formatDateTime(d) {
      try {
        return new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
      } catch (e) { return d }
    },
    formatRelative(d) {
      try {
        const now = new Date()
        const date = new Date(d)
        const diffMs = now - date
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
        const diffMonths = Math.floor(diffDays / 30)
        
        if (diffDays === 0) return 'today'
        if (diffDays === 1) return '1 day ago'
        if (diffDays < 30) return `${diffDays} days ago`
        if (diffMonths === 1) return '1 month ago'
        return `${diffMonths} months ago`
      } catch (e) { return d }
    },
    generateSlug(title) {
      if (!title) return ''
      return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    },
    openCreateModal() {
      this.resetForm()
      this.showFormModal = true
    },
    openEditModal(idx) {
      const a = this.articles[idx]
      this.form = { ...a, body: a.body || a.content }
      this.editingIndex = idx
      this.showFormModal = true
    },
    closeFormModal() {
      this.showFormModal = false
      this.resetForm()
    },
    onFile(e) {
      const file = e.target.files && e.target.files[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = () => { this.form.image = reader.result }
      reader.readAsDataURL(file)
    },
    save() {
      if (!this.form.title || !this.form.date || !this.form.content) return
      const slug = this.generateSlug(this.form.title)
      const now = new Date().toISOString()
      
      if (this.editingIndex !== null) {
        this.articles.splice(this.editingIndex, 1, { 
          ...this.articles[this.editingIndex], 
          ...this.form, 
          slug,
          updatedAt: now
        })
      } else {
        const id = this.form.id || Math.random().toString(36).slice(2,9)
        this.articles.unshift({ id, ...this.form, slug, updatedAt: now })
      }
      persistArticles(this.articles)
      this.closeFormModal()
    },
    removeImage() {
      this.form.image = null
    },
    confirmDelete(idx) {
      this.deleteIndex = idx
      this.showDeleteDialog = true
    },
    cancelDelete() {
      this.showDeleteDialog = false
      this.deleteIndex = null
    },
    executeDelete() {
      if (this.deleteIndex !== null) {
        this.articles.splice(this.deleteIndex, 1)
        persistArticles(this.articles)
        if (this.editingIndex === this.deleteIndex) this.resetForm()
      }
      this.showDeleteDialog = false
      this.deleteIndex = null
    },
    resetForm() {
      this.form = { id: null, title: '', date: new Date().toISOString().slice(0,16), content: '', body: '', image: null, slug: '' }
      this.editingIndex = null
    }
  }
}
</script>
