
const staticArticles = [
  {
    id: 1,
    title: 'Amoksisilin: Kapan Perlu, Kapan Tidak',
    excerpt: 'Antibiotik bukan untuk semua batuk pilek. Kenali indikasi, efek samping, dan mengapa harus dihabiskan sesuai resep.',
    published_at: '27/11/2025',
    datetime: '2025-11-27',
    cover_image: new URL('../assets/Images/HeroSection/Interior.jpg', import.meta.url).href,
    body: `
      <div class="mb-8 rounded-xl border-l-4 border-indigo-600 bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 p-6 shadow-sm">
        <p class="text-lg leading-relaxed"><strong class="text-indigo-900">Amoksisilin</strong> adalah antibiotik golongan penisilin yang efektif melawan banyak infeksi bakteri. Tapi—dan ini penting—antibiotik tidak bekerja untuk penyakit yang disebabkan virus seperti flu, pilek, atau sebagian besar sakit tenggorokan. Menggunakan antibiotik saat tidak perlu tidak akan mempercepat sembuh dan justru bisa menimbulkan efek samping serta mempercepat terjadinya resistensi antibiotik.</p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-indigo-200">Mengapa Bijak Memakai Antibiotik itu Penting?</h2>
      
      <div class="bg-amber-50 border-l-4 border-amber-500 p-5 mb-6 rounded-r-lg">
        <p class="text-base leading-relaxed mb-3">Organisasi Kesehatan Dunia (WHO) baru-baru ini menegaskan bahwa <strong class="text-amber-900">1 dari 6 infeksi bakteri di dunia</strong> sudah resisten terhadap pengobatan antibiotik. Penyalahgunaan dan penggunaan berlebihan antibiotik adalah pemicu utamanya.</p>
      </div>

      <p class="mb-4">Ketika bakteri resisten, obat tidak lagi efektif, berakibat pada:</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-red-50 border border-red-200 rounded-lg p-4">
          <p class="font-semibold text-red-900 mb-1">Infeksi Lebih Lama</p>
          <p class="text-sm text-red-700">Bakteri resisten menyebabkan infeksi yang sulit disembuhkan dan berlangsung lebih lama</p>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-lg p-4">
          <p class="font-semibold text-red-900 mb-1">Komplikasi Serius</p>
          <p class="text-sm text-red-700">Risiko komplikasi meningkat karena bakteri semakin sulit dikendalikan</p>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-lg p-4">
          <p class="font-semibold text-red-900 mb-1">Biaya Tinggi</p>
          <p class="text-sm text-red-700">Membutuhkan perawatan lebih intensif dan obat-obatan yang lebih mahal</p>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-lg p-4">
          <p class="font-semibold text-red-900 mb-1">Angka Kematian Meningkat</p>
          <p class="text-sm text-red-700">Infeksi yang tidak dapat diobati dapat berakibat fatal</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-indigo-200">Kapan Amoksisilin Diresepkan?</h2>
      <p class="mb-6 text-base leading-relaxed">Amoksisilin dapat diresepkan dokter untuk infeksi bakteri spesifik berikut:</p>
      
      <div class="bg-white border-2 border-indigo-100 rounded-xl p-6 mb-5 shadow-sm hover:shadow-md transition-shadow">
        <h3 class="text-xl font-bold text-indigo-900 mb-3 flex items-center">
          <span class="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">1</span>
          Radang Tenggorok Bakteri (Strep Throat)
        </h3>
        <div class="bg-indigo-50 rounded-lg p-4 space-y-2">
          <div class="flex items-start">
            <span class="text-indigo-600 mr-2 font-bold">✓</span>
            <p class="text-gray-700">Hanya setelah tes cepat atau kultur positif memastikan infeksi bakteri</p>
          </div>
          <div class="flex items-start">
            <span class="text-red-600 mr-2 font-bold">✗</span>
            <p class="text-gray-700">Jangan mengobati sakit tenggorok virus dengan antibiotik</p>
          </div>
          <div class="flex items-start">
            <span class="text-indigo-600 mr-2 font-bold">⚠</span>
            <p class="text-gray-700"><strong>Gejala:</strong> demam tinggi, nyeri parah saat menelan, kelenjar membengkak</p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-indigo-100 rounded-xl p-6 mb-5 shadow-sm hover:shadow-md transition-shadow">
        <h3 class="text-xl font-bold text-indigo-900 mb-3 flex items-center">
          <span class="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">2</span>
          Sinusitis Bakteri Akut
        </h3>
        <div class="bg-indigo-50 rounded-lg p-4 space-y-2">
          <div class="flex items-start">
            <span class="text-indigo-600 mr-2 font-bold">•</span>
            <p class="text-gray-700">Gejala berlangsung lebih dari 10 hari tanpa perbaikan</p>
          </div>
          <div class="flex items-start">
            <span class="text-indigo-600 mr-2 font-bold">•</span>
            <p class="text-gray-700">Demam tinggi dengan nyeri wajah yang parah selama minimal 3 hari</p>
          </div>
          <div class="flex items-start">
            <span class="text-indigo-600 mr-2 font-bold">•</span>
            <p class="text-gray-700"><strong>"Double-sickening":</strong> awal membaik lalu memburuk kembali</p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-indigo-100 rounded-xl p-6 mb-5 shadow-sm hover:shadow-md transition-shadow">
        <h3 class="text-xl font-bold text-indigo-900 mb-3 flex items-center">
          <span class="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">3</span>
          Infeksi Telinga Tengah (Otitis Media)
        </h3>
        <p class="text-gray-700 bg-indigo-50 rounded-lg p-4">Terutama pada anak-anak dengan gejala nyeri telinga, demam, dan cairan dari telinga.</p>
      </div>

      <div class="bg-white border-2 border-indigo-100 rounded-xl p-6 mb-5 shadow-sm hover:shadow-md transition-shadow">
        <h3 class="text-xl font-bold text-indigo-900 mb-3 flex items-center">
          <span class="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">4</span>
          Infeksi Saluran Napas Bawah
        </h3>
        <p class="text-gray-700 bg-indigo-50 rounded-lg p-4">Bronkitis bakteri atau pneumonia yang dikonfirmasi melalui pemeriksaan klinis dan pencitraan.</p>
      </div>

      <div class="bg-white border-2 border-indigo-100 rounded-xl p-6 mb-5 shadow-sm hover:shadow-md transition-shadow">
        <h3 class="text-xl font-bold text-indigo-900 mb-3 flex items-center">
          <span class="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">5</span>
          Infeksi Kulit dan Jaringan Lunak
        </h3>
        <p class="text-gray-700 bg-indigo-50 rounded-lg p-4">Impetigo, selulitis, dan infeksi luka terbuka yang disebabkan bakteri sensitif terhadap penisilin.</p>
      </div>

      <div class="bg-white border-2 border-indigo-100 rounded-xl p-6 mb-5 shadow-sm hover:shadow-md transition-shadow">
        <h3 class="text-xl font-bold text-indigo-900 mb-3 flex items-center">
          <span class="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">6</span>
          Infeksi Gigi dan Gusi
        </h3>
        <p class="text-gray-700 bg-indigo-50 rounded-lg p-4">Abses gigi dan periodontitis bakteri yang memerlukan antibiotik sistemik.</p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-red-200">Tanda-Tanda Bahaya yang Perlu Evaluasi Dokter</h2>
      
      <div class="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-6 mb-6">
        <p class="text-red-900 font-bold text-lg mb-4">Segera konsultasikan dengan dokter jika mengalami:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="flex items-start bg-white rounded-lg p-3 shadow-sm">
            <span class="text-red-600 text-2xl mr-3">⚠</span>
            <div>
              <p class="font-semibold text-red-900">Demam Tinggi</p>
              <p class="text-sm text-gray-700">≥ 38.5°C yang tidak turun dengan antipiretik</p>
            </div>
          </div>
          <div class="flex items-start bg-white rounded-lg p-3 shadow-sm">
            <span class="text-red-600 text-2xl mr-3">⚠</span>
            <div>
              <p class="font-semibold text-red-900">Sesak Napas</p>
              <p class="text-sm text-gray-700">Kesulitan bernapas atau menelan</p>
            </div>
          </div>
          <div class="flex items-start bg-white rounded-lg p-3 shadow-sm">
            <span class="text-red-600 text-2xl mr-3">⚠</span>
            <div>
              <p class="font-semibold text-red-900">Nyeri Telinga Hebat</p>
              <p class="text-sm text-gray-700">Disertai cairan dari telinga</p>
            </div>
          </div>
          <div class="flex items-start bg-white rounded-lg p-3 shadow-sm">
            <span class="text-red-600 text-2xl mr-3">⚠</span>
            <div>
              <p class="font-semibold text-red-900">Gejala Bertahan Lama</p>
              <p class="text-sm text-gray-700">> 7 hari tanpa perbaikan signifikan</p>
            </div>
          </div>
          <div class="flex items-start bg-white rounded-lg p-3 shadow-sm">
            <span class="text-red-600 text-2xl mr-3">⚠</span>
            <div>
              <p class="font-semibold text-red-900">Tanda Dehidrasi</p>
              <p class="text-sm text-gray-700">Mulut kering, urin gelap, pusing</p>
            </div>
          </div>
          <div class="flex items-start bg-white rounded-lg p-3 shadow-sm">
            <span class="text-red-600 text-2xl mr-3">⚠</span>
            <div>
              <p class="font-semibold text-red-900">Kelenjar Bengkak</p>
              <p class="text-sm text-gray-700">Pembengkakan getah bening tidak biasa</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-green-200">Cara Penggunaan yang Benar</h2>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-5 mb-6 rounded-r-lg">
        <h3 class="text-lg font-bold text-green-900 mb-3">Panduan Dasar Penggunaan Amoksisilin</h3>
        <div class="space-y-4">
          <div class="flex items-start bg-white rounded-lg p-4 shadow-sm">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold flex-shrink-0">1</span>
            <div>
              <p class="font-semibold text-gray-900 mb-1">Hanya dengan Resep Dokter</p>
              <p class="text-sm text-gray-700">Di Indonesia, amoksisilin adalah obat keras yang hanya boleh dibeli dengan resep dokter</p>
            </div>
          </div>
          <div class="flex items-start bg-white rounded-lg p-4 shadow-sm">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold flex-shrink-0">2</span>
            <div>
              <p class="font-semibold text-gray-900 mb-1">Dosis yang Tepat</p>
              <p class="text-sm text-gray-700">Ikuti dosis yang diresepkan sesuai usia dan berat badan Anda</p>
            </div>
          </div>
          <div class="flex items-start bg-white rounded-lg p-4 shadow-sm">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold flex-shrink-0">3</span>
            <div>
              <p class="font-semibold text-gray-900 mb-1">Frekuensi Rutin</p>
              <p class="text-sm text-gray-700">Minum pada jam yang sama setiap hari untuk efektivitas maksimal</p>
            </div>
          </div>
          <div class="flex items-start bg-white rounded-lg p-4 shadow-sm">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold flex-shrink-0">4</span>
            <div>
              <p class="font-semibold text-gray-900 mb-1">Habiskan Seluruh Durasi</p>
              <p class="text-sm text-gray-700">Jangan berhenti meski gejala hilang, untuk mencegah resistensi bakteri</p>
            </div>
          </div>
          <div class="flex items-start bg-white rounded-lg p-4 shadow-sm">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold flex-shrink-0">5</span>
            <div>
              <p class="font-semibold text-gray-900 mb-1">Jangan Berbagi Obat</p>
              <p class="text-sm text-gray-700">Dengan orang lain, bahkan jika mereka memiliki gejala serupa</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-blue-50 rounded-lg p-5 mb-6">
        <h3 class="text-lg font-bold text-blue-900 mb-3">Tips Penting</h3>
        <ul class="space-y-2">
          <li class="flex items-start">
            <span class="text-blue-600 mr-2">✓</span>
            <p class="text-gray-700">Amoksisilin dapat diminum dengan atau tanpa makanan, namun makan sedikit dapat mengurangi mual</p>
          </li>
          <li class="flex items-start">
            <span class="text-blue-600 mr-2">✓</span>
            <p class="text-gray-700">Untuk anak-anak, gunakan pipet takar yang disediakan, bukan sendok makan</p>
          </li>
          <li class="flex items-start">
            <span class="text-blue-600 mr-2">✓</span>
            <p class="text-gray-700">Jangan menambah atau mengurangi dosis tanpa berkonsultasi dengan dokter</p>
          </li>
          <li class="flex items-start">
            <span class="text-blue-600 mr-2">✓</span>
            <p class="text-gray-700">Simpan pada suhu ruangan, jauh dari lembap dan panas</p>
          </li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-purple-200">Efek Samping yang Perlu Diwaspadai</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        <div class="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-5">
          <h3 class="text-lg font-bold text-yellow-900 mb-3 flex items-center">
            <span class="text-2xl mr-2">⚠️</span>
            Efek Samping Umum (Ringan)
          </h3>
          <p class="text-sm text-yellow-800 mb-3">Biasanya ringan dan akan hilang dengan sendirinya:</p>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-yellow-600 mr-2">•</span>
              <p class="text-sm text-gray-700">Mual dan muntah</p>
            </li>
            <li class="flex items-start">
              <span class="text-yellow-600 mr-2">•</span>
              <p class="text-sm text-gray-700">Diare atau perut kembung</p>
            </li>
            <li class="flex items-start">
              <span class="text-yellow-600 mr-2">•</span>
              <p class="text-sm text-gray-700">Ruam ringan atau gatal</p>
            </li>
            <li class="flex items-start">
              <span class="text-yellow-600 mr-2">•</span>
              <p class="text-sm text-gray-700">Pusing atau sakit kepala</p>
            </li>
            <li class="flex items-start">
              <span class="text-yellow-600 mr-2">•</span>
              <p class="text-sm text-gray-700">Infeksi jamur (oral thrush atau diaper rash pada bayi)</p>
            </li>
          </ul>
        </div>

        <div class="bg-red-50 border-2 border-red-400 rounded-xl p-5">
          <h3 class="text-lg font-bold text-red-900 mb-3 flex items-center">
            <span class="text-2xl mr-2">🚨</span>
            Efek Samping Serius
          </h3>
          <p class="text-sm text-red-800 mb-3 font-semibold">Jarang terjadi tapi butuh perhatian medis segera:</p>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-red-600 mr-2">⚠</span>
              <p class="text-sm text-gray-700"><strong>Reaksi alergi berat (anafilaksis):</strong> bengkak wajah/lidah, sesak napas, detak jantung cepat</p>
            </li>
            <li class="flex items-start">
              <span class="text-red-600 mr-2">⚠</span>
              <p class="text-sm text-gray-700"><strong>Stevens-Johnson Syndrome:</strong> ruam parah, lepuh pada kulit dan mulut</p>
            </li>
            <li class="flex items-start">
              <span class="text-red-600 mr-2">⚠</span>
              <p class="text-sm text-gray-700"><strong>Diare berat berdarah:</strong> mungkin tanda infeksi Clostridioides difficile</p>
            </li>
            <li class="flex items-start">
              <span class="text-red-600 mr-2">⚠</span>
              <p class="text-sm text-gray-700"><strong>Nyeri kuning (hepatitis):</strong> kulit dan mata menguning</p>
            </li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-orange-200">Peringatan Khusus & Interaksi Obat</h2>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6 mb-5">
        <h3 class="text-lg font-bold text-orange-900 mb-4">Beri Tahu Dokter Jika Anda Memiliki:</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="bg-white rounded-lg p-3 shadow-sm">
            <p class="text-sm text-gray-700">• Alergi terhadap penisilin atau sefalosporin</p>
          </div>
          <div class="bg-white rounded-lg p-3 shadow-sm">
            <p class="text-sm text-gray-700">• Penyakit ginjal atau hati</p>
          </div>
          <div class="bg-white rounded-lg p-3 shadow-sm">
            <p class="text-sm text-gray-700">• Riwayat diare berat atau colitis</p>
          </div>
          <div class="bg-white rounded-lg p-3 shadow-sm">
            <p class="text-sm text-gray-700">• Sedang hamil atau menyusui</p>
          </div>
          <div class="bg-white rounded-lg p-3 shadow-sm col-span-1 md:col-span-2">
            <p class="text-sm text-gray-700">• Mengonsumsi kontrasepsi oral (amoksisilin dapat menurunkan efektivitasnya)</p>
          </div>
        </div>
      </div>

      <div class="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-5">
        <h3 class="text-lg font-bold text-purple-900 mb-4">Interaksi Obat Penting</h3>
        <div class="space-y-3">
          <div class="bg-white border-l-4 border-purple-400 rounded p-3">
            <p class="font-semibold text-purple-900 mb-1">Methotrexate</p>
            <p class="text-sm text-gray-700">Risiko peningkatan toksisitas, perlu pemantauan ketat</p>
          </div>
          <div class="bg-white border-l-4 border-purple-400 rounded p-3">
            <p class="font-semibold text-purple-900 mb-1">Warfarin (pengencer darah)</p>
            <p class="text-sm text-gray-700">Dapat memengaruhi INR, perlu monitoring lab</p>
          </div>
          <div class="bg-white border-l-4 border-purple-400 rounded p-3">
            <p class="font-semibold text-purple-900 mb-1">Probenesid</p>
            <p class="text-sm text-gray-700">Dapat meningkatkan kadar amoksisilin dalam darah</p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">Kapan Harus Menghubungi Tenaga Kesehatan</h2>
      
      <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6 mb-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <div class="flex items-center mb-2">
              <span class="text-blue-600 text-xl mr-2">📞</span>
              <p class="font-semibold text-blue-900">Gejala Tidak Membaik</p>
            </div>
            <p class="text-sm text-gray-700">Setelah 3 hari pengobatan</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <div class="flex items-center mb-2">
              <span class="text-red-600 text-xl mr-2">⚠️</span>
              <p class="font-semibold text-blue-900">Reaksi Alergi</p>
            </div>
            <p class="text-sm text-gray-700">Terjadi saat minum amoksisilin</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <div class="flex items-center mb-2">
              <span class="text-orange-600 text-xl mr-2">🩺</span>
              <p class="font-semibold text-blue-900">Diare Berat</p>
            </div>
            <p class="text-sm text-gray-700">Atau tinja berdarah muncul</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <div class="flex items-center mb-2">
              <span class="text-red-600 text-xl mr-2">🌡️</span>
              <p class="font-semibold text-blue-900">Demam Meningkat</p>
            </div>
            <p class="text-sm text-gray-700">Atau muncul gejala baru</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-sm col-span-1 md:col-span-2">
            <div class="flex items-center mb-2">
              <span class="text-purple-600 text-xl mr-2">❓</span>
              <p class="font-semibold text-blue-900">Pertanyaan Interaksi</p>
            </div>
            <p class="text-sm text-gray-700">Tentang interaksi dengan obat lain yang Anda konsumsi</p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kesimpulan</h2>
      <p class="text-base leading-relaxed mb-4">Amoksisilin adalah antibiotik yang sangat berguna untuk infeksi bakteri, namun <strong>penggunaan yang bijak adalah kunci</strong>. Dengan mengikuti petunjuk dokter dengan ketat, kami tidak hanya menyembuhkan infeksi tetapi juga berkontribusi dalam memerangi resistensi antibiotik global. Selalu konsultasikan dengan tenaga kesehatan sebelum memulai antibiotik dan jangan ragu bertanya.</p>

      <div class="mt-8 rounded-xl border-2 border-indigo-400 bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 p-6 shadow-lg">
        <div class="flex items-start">
          <span class="text-4xl mr-4">💡</span>
          <div>
            <p class="text-lg font-bold text-indigo-900 mb-2">Ingat Selalu:</p>
            <p class="text-base text-gray-800">Antibiotik hanya untuk infeksi bakteri, bukan virus. Penggunaan yang tepat menyelamatkan nyawa dan mencegah resistensi antibiotik!</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 2,
    title: 'Panduan Swamedikasi yang Aman',
    excerpt: '5 langkah sederhana agar penggunaan obat bebas tetap aman: baca etiket, dosis tepat, dan konsultasi bila gejala tak membaik.',
    published_at: '5/12/2025',
    datetime: '2025-12-05',
    cover_image: new URL('../assets/Images/HeroSection/Interior.jpg', import.meta.url).href,
    body: `
      <div class="mb-8 rounded-xl border-l-4 border-teal-600 bg-gradient-to-r from-teal-50 via-green-50 to-teal-50 p-6 shadow-sm">
        <p class="text-lg leading-relaxed"><strong class="text-teal-900">Swamedikasi</strong> adalah penggunaan obat oleh masyarakat untuk keluhan kesehatan ringan tanpa resep dokter, seperti demam, batuk, nyeri otot, atau gangguan pencernaan ringan. Ketika dilakukan dengan benar, swamedikasi membantu efisiensi waktu dan biaya. Namun jika sembarangan, risiko penyalahgunaan, interaksi obat, dan keterlambatan diagnosis penyakit serius dapat terjadi.</p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-teal-200">Apa Itu Swamedikasi?</h2>
      
      <p class="mb-4 text-base leading-relaxed">Swamedikasi adalah tindakan mengobati diri sendiri dengan obat-obatan yang tersedia tanpa resep dokter (over-the-counter atau OTC drugs). Di Indonesia, kategori obat bebas dan obat bebas terbatas adalah yang paling umum digunakan untuk swamedikasi.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300 rounded-xl p-5 shadow-sm">
          <h3 class="font-bold text-teal-900 mb-2 text-lg">💊 Swamedikasi</h3>
          <p class="text-sm text-gray-700">Menggunakan obat bebas/bebas terbatas untuk keluhan ringan yang bisa sembuh sendiri (self-limiting diseases)</p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-5 shadow-sm">
          <h3 class="font-bold text-blue-900 mb-2 text-lg">🏥 Pengobatan Resep</h3>
          <p class="text-sm text-gray-700">Menggunakan obat keras yang hanya bisa diperoleh melalui resep dokter karena memerlukan diagnosis dan pemantauan medis</p>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-5 shadow-sm">
          <h3 class="font-bold text-green-900 mb-2 text-lg">🌿 Pengobatan Tradisional</h3>
          <p class="text-sm text-gray-700">Menggunakan bahan alami atau jamu, yang meskipun lebih aman, tetap perlu kehati-hatian terkait interaksi dan efek samping</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-amber-200">Mengapa Swamedikasi Perlu Dilakukan dengan Hati-hati?</h2>
      
      <div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 mb-6">
        <div class="flex items-start mb-4">
          <span class="text-5xl mr-4">📊</span>
          <div>
            <p class="text-lg font-bold text-amber-900 mb-2">Data dari Badan POM RI</p>
            <p class="text-base text-gray-700 leading-relaxed">Kesalahan penggunaan obat tanpa resep menyumbang sekitar <strong class="text-amber-900">25%</strong> dari kasus efek samping obat yang dilaporkan.</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div class="bg-green-50 border-2 border-green-300 rounded-xl p-5">
          <h3 class="font-bold text-green-900 mb-3 text-lg flex items-center">
            <span class="text-2xl mr-2">✅</span>
            Manfaat Swamedikasi yang Benar
          </h3>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <p class="text-sm text-gray-700">Menghemat waktu dan biaya</p>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <p class="text-sm text-gray-700">Mengurangi beban fasilitas kesehatan</p>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <p class="text-sm text-gray-700">Mengatasi keluhan ringan dengan cepat</p>
            </li>
          </ul>
        </div>
        <div class="bg-red-50 border-2 border-red-300 rounded-xl p-5">
          <h3 class="font-bold text-red-900 mb-3 text-lg flex items-center">
            <span class="text-2xl mr-2">⚠️</span>
            Risiko Swamedikasi Sembarangan
          </h3>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-red-600 mr-2">✗</span>
              <p class="text-sm text-gray-700">Keterlambatan diagnosis penyakit serius</p>
            </li>
            <li class="flex items-start">
              <span class="text-red-600 mr-2">✗</span>
              <p class="text-sm text-gray-700">Interaksi obat yang berbahaya</p>
            </li>
            <li class="flex items-start">
              <span class="text-red-600 mr-2">✗</span>
              <p class="text-sm text-gray-700">Overdosis dan resistensi obat</p>
            </li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-6 pb-2 border-b-2 border-teal-200">5 Langkah Aman Melakukan Swamedikasi</h2>

      <div class="bg-white border-2 border-teal-200 rounded-xl p-6 mb-6 shadow-md hover:shadow-lg transition-shadow">
        <div class="flex items-start mb-4">
          <span class="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold text-xl flex-shrink-0">1</span>
          <div>
            <h3 class="text-xl font-bold text-teal-900 mb-3">Kenali Gejala dengan Tepat</h3>
            <p class="text-base text-gray-700 leading-relaxed mb-3">Langkah pertama dalam swamedikasi adalah memahami gejala yang Anda alami dengan baik. Apakah ini keluhan ringan yang umum terjadi, ataukah gejala yang memerlukan evaluasi medis lebih lanjut?</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ml-16">
          <div class="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-4">
            <p class="font-semibold text-green-900 mb-2 flex items-center">
              <span class="mr-2">✓</span> Keluhan Ringan
            </p>
            <p class="text-sm text-gray-700">Sakit kepala setelah kurang tidur → Parasetamol</p>
            <p class="text-sm text-gray-700">Demam ringan (<38.5°C) → Istirahat + obat penurun panas</p>
          </div>
          <div class="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <p class="font-semibold text-red-900 mb-2 flex items-center">
              <span class="mr-2">⚠</span> Perlu Evaluasi Medis
            </p>
            <p class="text-sm text-gray-700">Sakit kepala + demam tinggi + kaku kuduk</p>
            <p class="text-sm text-gray-700">Demam >3 hari + sesak napas + nyeri dada</p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-teal-200 rounded-xl p-6 mb-6 shadow-md hover:shadow-lg transition-shadow">
        <div class="flex items-start mb-4">
          <span class="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold text-xl flex-shrink-0">2</span>
          <div>
            <h3 class="text-xl font-bold text-teal-900 mb-3">Pilih Obat yang Tepat</h3>
            <p class="text-base text-gray-700 leading-relaxed mb-4">Setelah mengenali gejala, langkah selanjutnya adalah memilih obat yang sesuai. Banyak orang terjebak dalam kesalahan memilih obat berdasarkan iklan atau rekomendasi teman tanpa mempertimbangkan kondisi kesehatan pribadi mereka.</p>
          </div>
        </div>
        <div class="ml-16">
          <div class="bg-blue-50 rounded-xl p-5 mb-4">
            <h4 class="font-bold text-blue-900 mb-3">Contoh: Parasetamol vs Ibuprofen</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white border-2 border-blue-300 rounded-lg p-4">
                <p class="font-semibold text-blue-900 mb-2">💊 Parasetamol</p>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>✓ Lebih aman untuk lambung</li>
                  <li>✓ Bisa untuk ibu hamil</li>
                  <li>⚠ Dosis berlebih merusak hati</li>
                </ul>
              </div>
              <div class="bg-white border-2 border-blue-300 rounded-lg p-4">
                <p class="font-semibold text-blue-900 mb-2">💊 Ibuprofen</p>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>✓ Efektif untuk nyeri inflamasi</li>
                  <li>✓ Bagus untuk nyeri gigi/haid</li>
                  <li>⚠ Hindari jika ada tukak lambung</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4">
            <p class="font-semibold text-amber-900 mb-2">⚠️ Perhatian Obat Kombinasi!</p>
            <p class="text-sm text-gray-700">Obat flu sering mengandung parasetamol + dekongestan + antihistamin. Jika sudah minum parasetamol terpisah, bisa terjadi overdosis!</p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-teal-200 rounded-xl p-6 mb-6 shadow-md hover:shadow-lg transition-shadow">
        <div class="flex items-start mb-4">
          <span class="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold text-xl flex-shrink-0">3</span>
          <div>
            <h3 class="text-xl font-bold text-teal-900 mb-3">Baca dan Pahami Etiket Obat</h3>
            <p class="text-base text-gray-700 leading-relaxed mb-4">Etiket atau label obat adalah sumber informasi paling penting dalam swamedikasi. Sayangnya, banyak orang yang melewatkan langkah ini dan langsung mengonsumsi obat tanpa membaca petunjuk.</p>
          </div>
        </div>
        <div class="ml-16 space-y-3">
          <div class="bg-purple-50 border-l-4 border-purple-500 rounded-r-lg p-4">
            <p class="font-semibold text-purple-900 mb-2">📋 Bagian Penting di Etiket:</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              <div class="bg-white rounded-lg p-3">
                <p class="font-semibold text-sm text-purple-900 mb-1">Indikasi</p>
                <p class="text-xs text-gray-700">Untuk gejala apa obat ini?</p>
              </div>
              <div class="bg-white rounded-lg p-3">
                <p class="font-semibold text-sm text-purple-900 mb-1">Kontraindikasi</p>
                <p class="text-xs text-gray-700">Siapa yang tidak boleh pakai?</p>
              </div>
              <div class="bg-white rounded-lg p-3">
                <p class="font-semibold text-sm text-purple-900 mb-1">Dosis & Cara Pakai</p>
                <p class="text-xs text-gray-700">Berapa banyak dan kapan?</p>
              </div>
            </div>
          </div>
          <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4">
            <p class="font-semibold text-red-900 mb-2 flex items-center">
              <span class="mr-2">⚠️</span> Contoh Penting:
            </p>
            <p class="text-sm text-gray-700">Aspirin tidak boleh untuk anak-anak dengan infeksi virus → Risiko Reye's syndrome (menyerang hati dan otak)</p>
          </div>
          <div class="bg-blue-50 rounded-lg p-4">
            <p class="font-semibold text-blue-900 mb-2">💡 Mengapa Ada Aturan Khusus?</p>
            <div class="space-y-2 text-sm text-gray-700">
              <p>• "Diminum setelah makan" → Obat bisa iritasi lambung</p>
              <p>• "Jangan dengan susu" → Kalsium ganggu penyerapan obat</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-teal-200 rounded-xl p-6 mb-6 shadow-md hover:shadow-lg transition-shadow">
        <div class="flex items-start mb-4">
          <span class="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold text-xl flex-shrink-0">4</span>
          <div>
            <h3 class="text-xl font-bold text-teal-900 mb-3">Gunakan Dosis yang Tepat</h3>
            <p class="text-base text-gray-700 leading-relaxed mb-4">Dosis yang tepat adalah kunci keamanan dan efektivitas obat. Terlalu sedikit tidak bekerja optimal, terlalu banyak risiko keracunan meningkat.</p>
          </div>
        </div>
        <div class="ml-16">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="bg-pink-50 border-2 border-pink-300 rounded-lg p-4">
              <p class="font-semibold text-pink-900 mb-2 flex items-center">
                <span class="text-xl mr-2">👶</span> Untuk Anak-anak
              </p>
              <ul class="space-y-1 text-sm text-gray-700">
                <li>✗ Jangan "potong" dosis dewasa</li>
                <li>✓ Gunakan sediaan khusus anak</li>
                <li>✓ Pakai alat takar (pipet/sendok ukur)</li>
                <li>✗ Hindari sendok makan rumah tangga</li>
              </ul>
            </div>
            <div class="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
              <p class="font-semibold text-orange-900 mb-2 flex items-center">
                <span class="text-xl mr-2">👴</span> Untuk Lansia (>65 tahun)
              </p>
              <ul class="space-y-1 text-sm text-gray-700">
                <li>⚠ Metabolisme lebih lambat</li>
                <li>⚠ Obat bertahan lebih lama</li>
                <li>⚠ Risiko akumulasi tinggi</li>
                <li>✓ Konsultasi dengan apoteker/dokter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-teal-200 rounded-xl p-6 mb-6 shadow-md hover:shadow-lg transition-shadow">
        <div class="flex items-start mb-4">
          <span class="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold text-xl flex-shrink-0">5</span>
          <div>
            <h3 class="text-xl font-bold text-teal-900 mb-3">Evaluasi Respon Obat</h3>
            <p class="text-base text-gray-700 leading-relaxed mb-4">Setelah mengonsumsi obat, penting untuk memantau respon tubuh Anda. Apakah gejala membaik? Apakah muncul efek samping?</p>
          </div>
        </div>
        <div class="ml-16">
          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-lg p-5">
            <p class="font-semibold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">⏰</span> Timeline Evaluasi:
            </p>
            <div class="space-y-2">
              <div class="bg-white rounded p-3 flex items-start">
                <span class="font-bold text-yellow-700 mr-3">24-48 jam:</span>
                <p class="text-sm text-gray-700">Jika tidak ada perbaikan sama sekali → Hubungi dokter</p>
              </div>
              <div class="bg-white rounded p-3 flex items-start">
                <span class="font-bold text-red-700 mr-3">Kapan saja:</span>
                <p class="text-sm text-gray-700">Jika gejala memburuk atau muncul efek samping serius → Segera ke dokter</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-5 mb-6">
        <h4 class="font-semibold text-amber-900 mb-3 flex items-center">
          <span class="text-2xl mr-2">💡</span> Contoh Kasus Nyata:
        </h4>
        <div class="space-y-3">
          <div class="bg-white border-l-4 border-green-500 rounded-r p-3">
            <p class="text-sm text-gray-700"><strong class="text-green-900">Batuk 3 hari memburuk</strong> + dahak hijau + demam tinggi → <span class="font-semibold">Kemungkinan infeksi bakteri, perlu antibiotik dokter</span></p>
          </div>
          <div class="bg-white border-l-4 border-red-500 rounded-r p-3">
            <p class="text-sm text-gray-700"><strong class="text-red-900">Diare >2 hari</strong> + darah/lendir + dehidrasi + demam → <span class="font-semibold">Segera ke dokter!</span></p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-green-200">Keluhan yang Aman untuk Diswamedikasi</h2>
      
      <p class="mb-4 text-base leading-relaxed">Tidak semua keluhan kesehatan cocok untuk swamedikasi. Keluhan yang aman untuk diobati sendiri adalah yang bersifat ringan, self-limiting (dapat sembuh sendiri), dan tidak disertai gejala bahaya:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-white border-2 border-green-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center mb-3">
            <span class="text-3xl mr-3">🧘</span>
            <h3 class="font-bold text-green-900 text-lg">Sakit Kepala Tegang</h3>
          </div>
          <p class="text-sm text-gray-700">Disebabkan stres, kurang tidur, atau ketegangan otot leher</p>
          <p class="text-xs text-green-700 mt-2">✓ Parasetamol/ibuprofen + istirahat + relaksasi</p>
        </div>
        
        <div class="bg-white border-2 border-green-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center mb-3">
            <span class="text-3xl mr-3">🌡️</span>
            <h3 class="font-bold text-green-900 text-lg">Demam Ringan</h3>
          </div>
          <p class="text-sm text-gray-700">Demam <38.5°C pada orang dewasa sehat dengan gejala flu ringan</p>
          <p class="text-xs text-green-700 mt-2">✓ Antipiretik + istirahat + hidrasi</p>
        </div>
        
        <div class="bg-white border-2 border-green-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center mb-3">
            <span class="text-3xl mr-3">🤧</span>
            <h3 class="font-bold text-green-900 text-lg">Batuk & Pilek Ringan</h3>
          </div>
          <p class="text-sm text-gray-700">Batuk kering/berdahak ringan tanpa sesak napas, ingus jernih</p>
          <p class="text-xs text-green-700 mt-2">✓ Obat simptomatik, sembuh 7-10 hari</p>
        </div>
        
        <div class="bg-white border-2 border-green-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center mb-3">
            <span class="text-3xl mr-3">🪧</span>
            <h3 class="font-bold text-green-900 text-lg">Diare Akut Ringan</h3>
          </div>
          <p class="text-sm text-gray-700">Diare cair tanpa darah/lendir, tidak disertai demam tinggi</p>
          <p class="text-xs text-green-700 mt-2">✓ Oralit + jaga asupan makanan</p>
        </div>
        
        <div class="bg-white border-2 border-green-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center mb-3">
            <span class="text-3xl mr-3">💪</span>
            <h3 class="font-bold text-green-900 text-lg">Nyeri Otot Ringan</h3>
          </div>
          <p class="text-sm text-gray-700">Akibat aktivitas fisik berlebihan atau postur buruk</p>
          <p class="text-xs text-green-700 mt-2">✓ Istirahat + kompres + analgetik</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-red-200">Kapan Harus Menghentikan Swamedikasi dan Konsultasi Dokter?</h2>
      
      <div class="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-6 mb-6">
        <p class="text-base text-gray-700 mb-4 leading-relaxed">Meskipun swamedikasi dapat efektif untuk keluhan ringan, ada situasi tertentu di mana Anda harus segera menghentikan pengobatan sendiri dan mencari bantuan medis profesional:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <div class="flex items-center mb-2">
              <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">1</span>
              <p class="font-semibold text-red-900">Gejala Tidak Membaik</p>
            </div>
            <p class="text-sm text-gray-700">Setelah 3-5 hari pengobatan atau justru memburuk</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <div class="flex items-center mb-2">
              <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">2</span>
              <p class="font-semibold text-red-900">Gejala Baru Muncul</p>
            </div>
            <p class="text-sm text-gray-700">Ruam menyebar, sesak napas, bengkak wajah/bibir, dada berat</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <div class="flex items-center mb-2">
              <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">3</span>
              <p class="font-semibold text-red-900">Kondisi Kronis</p>
            </div>
            <p class="text-sm text-gray-700">Diabetes, hipertensi, jantung, ginjal, hati → Konsultasi dulu</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <div class="flex items-center mb-2">
              <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">4</span>
              <p class="font-semibold text-red-900">Ibu Hamil & Menyusui</p>
            </div>
            <p class="text-sm text-gray-700">Sangat hati-hati! Konsultasi dokter/apoteker sebelum minum obat</p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-amber-200">Kesalahan Umum dalam Swamedikasi</h2>
      
      <div class="space-y-4 mb-6">
        <div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5">
          <div class="flex items-start">
            <span class="text-3xl mr-4">🚨</span>
            <div>
              <h3 class="font-bold text-red-900 mb-2 text-lg">Menggunakan Antibiotik Tanpa Resep</h3>
              <p class="text-sm text-gray-700 mb-2">Kesalahan paling umum dan berbahaya! Antibiotik hanya untuk infeksi bakteri, tidak berguna untuk flu/pilek (virus).</p>
              <div class="bg-white rounded-lg p-3 mt-2">
                <p class="text-xs text-red-800"><strong>Dampak:</strong> Tidak efektif + mempercepat resistensi antibiotik → Infeksi jadi lebih sulit diobati</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-5">
          <div class="flex items-start">
            <span class="text-3xl mr-4">⚠️</span>
            <div>
              <h3 class="font-bold text-orange-900 mb-2 text-lg">Kombinasi Obat Tanpa Tahu Interaksi</h3>
              <p class="text-sm text-gray-700 mb-2">Menggunakan obat flu kombinasi (sudah ada parasetamol) + tablet parasetamol terpisah</p>
              <div class="bg-white rounded-lg p-3 mt-2">
                <p class="text-xs text-orange-800"><strong>Dampak:</strong> Overdosis parasetamol → Kerusakan hati irreversible (permanen)</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-5">
          <div class="flex items-start">
            <span class="text-3xl mr-4">⏱️</span>
            <div>
              <h3 class="font-bold text-yellow-900 mb-2 text-lg">Durasi Penggunaan Tidak Tepat</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                <div class="bg-white rounded-lg p-3">
                  <p class="text-xs font-semibold text-yellow-900 mb-1">✗ Berhenti Terlalu Cepat</p>
                  <p class="text-xs text-gray-700">Gejala membaik tapi obat dihentikan → Kekambuhan</p>
                </div>
                <div class="bg-white rounded-lg p-3">
                  <p class="text-xs font-semibold text-yellow-900 mb-1">✗ Terlalu Lama Tanpa Evaluasi</p>
                  <p class="text-xs text-gray-700">Efek samping kronis, ketergantungan (dekongestan, laksatif)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kesimpulan</h2>
      
      <p class="text-base text-gray-700 leading-relaxed mb-6">Swamedikasi adalah praktik yang bermanfaat jika dilakukan dengan benar: mengenali gejala dengan tepat, memilih obat yang sesuai, membaca etiket dengan teliti, menggunakan dosis yang tepat, dan mengevaluasi respon tubuh secara berkala. Namun, penting untuk menyadari batasan swamedikasi dan tidak ragu untuk mencari bantuan profesional ketika diperlukan.</p>
      
      <p class="text-base text-gray-700 leading-relaxed mb-6">Dengan pengetahuan yang tepat dan sikap yang bijaksana, swamedikasi dapat menjadi bagian dari gaya hidup sehat yang mandiri, sekaligus mengurangi beban sistem kesehatan untuk kasus-kasus yang memang dapat ditangani sendiri.</p>

      <div class="mt-8 rounded-xl border-2 border-teal-400 bg-gradient-to-br from-teal-100 via-green-50 to-teal-100 p-6 shadow-lg">
        <div class="flex items-start">
          <span class="text-4xl mr-4">💊</span>
          <div>
            <p class="text-lg font-bold text-teal-900 mb-3">Prinsip Utama Swamedikasi:</p>
            <div class="space-y-2">
              <div class="flex items-start">
                <span class="text-teal-600 mr-2 font-bold">✓</span>
                <p class="text-base text-gray-800">Lakukan dengan informasi yang cukup</p>
              </div>
              <div class="flex items-start">
                <span class="text-teal-600 mr-2 font-bold">✓</span>
                <p class="text-base text-gray-800">Gunakan hanya untuk keluhan ringan</p>
              </div>
              <div class="flex items-start">
                <span class="text-teal-600 mr-2 font-bold">✓</span>
                <p class="text-base text-gray-800">Segera konsultasi jika tidak membaik dalam 3 hari atau muncul gejala bahaya</p>
              </div>
              <div class="flex items-start">
                <span class="text-teal-600 mr-2 font-bold">✓</span>
                <p class="text-base text-gray-800">Apoteker adalah sumber informasi berharga – jangan ragu bertanya!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 3,
    title: 'Cara Menyimpan Obat yang Benar di Iklim Tropis',
    excerpt: 'Panas dan lembap bisa merusak obat. Simpan pada suhu yang dianjurkan, hindari kamar mandi/dapur, dan gunakan kotak obat tertutup.',
    published_at: '4/12/2025',
    datetime: '2025-12-04',
    cover_image: new URL('../assets/Images/HeroSection/Interior.jpg', import.meta.url).href,
    body: `
      <div class="mb-8 rounded-xl border-l-4 border-purple-600 bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 p-6 shadow-sm">
        <p class="text-lg leading-relaxed"><strong class="text-purple-900">Iklim tropis Indonesia</strong> dengan suhu tinggi dan kelembapan relatif dapat mempercepat kerusakan obat melalui berbagai mekanisme: penurunan potensi zat aktif, perubahan warna, bau tidak sedap, hingga kontaminasi mikroba. Penyimpanan yang benar membantu menjaga kemanjuran dan keamanan obat sampai tanggal kedaluwarsa tercapai.</p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-purple-200">Mengapa Penyimpanan Obat Penting?</h2>
      
      <p class="mb-6">Obat yang disimpan tidak tepat dapat mengalami:</p>
      <ul>
        <li><strong>Degradasi zat aktif:</strong> Efektivitas obat menurun</li>
        <li><strong>Perubahan fisik:</strong> Tablet lembek, warna berubah, bau aneh</li>
        <li><strong>Kontaminasi:</strong> Jamur dan bakteri berkembang biak</li>
        <li><strong>Reaksi kimia:</strong> Terbentuk metabolit beracun</li>
        <li><strong>Potensi terapi hilang:</strong> Pengobatan tidak efektif</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-purple-200">Faktor-Faktor yang Merusak Obat</h2>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">1. Suhu Tinggi</h3>
      <ul>
        <li>Mempercepat reaksi kimia dan degradasi</li>
        <li>Aktivitas enzim meningkat (untuk produk biologis)</li>
        <li>Indonesia rata-rata 28-32°C, sangat tinggi untuk obat</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">2. Kelembapan Tinggi (Humidity)</h3>
      <ul>
        <li>Menyebabkan tablet/kapsul menjadi lembek</li>
        <li>Memicu pertumbuhan jamur pada sediaan topikal</li>
        <li>Mempercepat hidrolisis bahan aktif</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">3. Sinar Ultraviolet (UV)</h3>
      <ul>
        <li>Memecah ikatan kimia beberapa obat</li>
        <li>Terutama sensitif: riboflavin, tetrasiklin, nitrokuinolin</li>
        <li>Dapat menghasilkan radikal bebas berbahaya</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">4. Oksigen dan Udara</h3>
      <ul>
        <li>Oksidasi pada bahan aktif tertentu</li>
        <li>Vitamin dan minyak atsiri mudah teroksidasi</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-purple-200">Prinsip Umum Penyimpanan Obat</h2>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">Suhu Sesuai Etiket</h3>
      <ul>
        <li><strong>Suhu ruang (25-30°C):</strong> Obat oral standar seperti tablet, kapsul, sirup</li>
        <li><strong>Dingin (2-8°C):</strong> Insulin tertentu, vaksin, probiotik, injeksi tertentu</li>
        <li><strong>Beku (-20°C atau lebih rendah):</strong> Hanya obat-obatan khusus yang diperintahkan</li>
        <li><strong>Hindari freezer untuk lemari es:</strong> Embun air dapat merusak obat</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">Hindari Kelembapan</h3>
      <ul>
        <li><strong>JANGAN simpan di kamar mandi:</strong> Uap air dari shower merusak obat</li>
        <li><strong>JANGAN simpan di dapur:</strong> Panas dari kompor dan kelembapan uap</li>
        <li><strong>JANGAN simpan dekat wastafel atau jendela</strong></li>
        <li><strong>Pilih lokasi:</strong> Lemari ruang tamu, rak di sudut ruangan yang kering</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">Jauhkan dari Sinar Matahari Langsung</h3>
      <ul>
        <li>Simpan di tempat gelap atau semi-gelap</li>
        <li>Gunakan kotak/lemari yang tertutup rapat</li>
        <li>Jangan letakkan di dekat jendela yang terang</li>
        <li>Pilih wadah berwarna gelap (cokelat atau biru tua)</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">Tutup Rapat Kemasan Asli</h3>
      <ul>
        <li>Botol kaca dan plastik HDPE dirancang khusus untuk melindungi</li>
        <li>Blister (packaging tablet) juga melindungi dari udara dan kelembapan</li>
        <li>Hanya pindahkan ke wadah lain jika benar-benar perlu (misal obat puyer anak)</li>
        <li>Jika dipindahkan, beri etiket jelas: nama obat, dosis, tanggal</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">Jauhkan dari Jangkauan Anak dan Hewan</h3>
      <ul>
        <li>Gunakan kotak obat terkunci atau dengan pengaman anak</li>
        <li>Letakkan di rak tinggi yang tidak bisa dijangkau</li>
        <li>Edukasi keluarga tentang bahaya konsumsi obat sembarangan</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-purple-200">Tips Spesifik untuk Berbagai Sediaan Obat</h2>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">Sirup (Obat Cair)</h3>
      <ul>
        <li>Simpan pada suhu ruang sesuai label (biasanya 15-25°C)</li>
        <li>Beberapa sirup memerlukan pendinginan setelah dibuka</li>
        <li>Kocok sebelum pakai</li>
        <li>Cek tanggal kedaluwarsa setelah diencerkan (biasanya 2 minggu)</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">Sirup Kering (Dry Syrup) Hasil Rekonstitusi</h3>
      <ul>
        <li>Setelah dicampur air, simpan sesuai petunjuk produsen</li>
        <li>Catat tanggal rekonstitusi</li>
        <li>Habiskan dalam periode yang ditentukan (biasanya 7-10 hari)</li>
        <li>Simpan di lemari es jika diminta</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">Salep dan Krim Topikal</h3>
      <ul>
        <li>Tutup rapat setelah setiap penggunaan</li>
        <li>Hindari kontaminasi ujung tube/kemasan dengan benda kotor</li>
        <li>Jangan gunakan jari langsung—pakai spatula bersih atau cotton bud</li>
        <li>Cek adanya jamur atau perubahan warna</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">Tetes Mata (Oftalmik)</h3>
      <ul>
        <li>Simpan dalam wadah tertutup dengan baik</li>
        <li>Hindari menyentuh ujung penetes ke permukaan</li>
        <li>Buang jika berubah warna atau keruh sebelum tanggal kedaluwarsa</li>
        <li>Jangan gunakan lebih dari 4 minggu setelah dibuka</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">Insulin dan Injeksi Biologis</h3>
      <ul>
        <li><strong>Sebelum pakai pertama kali:</strong> Simpan di lemari es (2-8°C)</li>
        <li><strong>Pena/vial yang sedang dipakai:</strong> Boleh di suhu ruang untuk periode tertentu (lihat merek, biasanya 28 hari)</li>
        <li><strong>Sisa:</strong> Kembalikan ke lemari es</li>
        <li>Jangan freeze atau letakkan di freezer</li>
        <li>Cek secara teratur untuk kristal atau perubahan warna</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">Suplemen dan Vitamin</h3>
      <ul>
        <li>Vitamin mudah teroksidasi—simpan di tempat gelap</li>
        <li>Gunakan kemasan yang tahan udara</li>
        <li>Hindari cahaya dan kelembapan ekstrem</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-purple-200">Kapan Obat Harus Dibuang?</h2>

      <div class="my-6 rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
        <h3 class="text-lg font-semibold text-purple-800 mt-5 mb-2">Tanda Obat Rusak dan Perlu Dibuang:</h3>
        <ul>
          <li><strong>Perubahan warna:</strong> Tablet/kapsul berubah dari warna asli</li>
          <li><strong>Bau menyengat atau aneh:</strong> Bukan bau asli obat</li>
          <li><strong>Tekstur berbeda:</strong> Tablet lembek, retak, atau kapsul jebol</li>
          <li><strong>Jamur atau noda:</strong> Terutama pada salep atau krim</li>
          <li><strong>Sirup keruh atau berendapan:</strong> Yang sebelumnya jernih</li>
          <li><strong>Kemasan rusak atau label tidak terbaca</strong></li>
          <li><strong>Sudah melewati tanggal kedaluwarsa (expired)</strong> – jangan digunakan meski tampak normal</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-purple-200">Cara Membuang Obat yang Tidak Terpakai</h2>
      
      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">❌ Jangan Buang Sembarangan</h3>
      <ul>
        <li>Jangan buang ke saluran air/toilet (risiko kontaminasi air tanah)</li>
        <li>Jangan buang ke tempat sampah biasa jika bisa diambil anak/hewan</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-900 mt-6 mb-3">✅ Cara yang Benar:</h3>
      <ol>
        <li><strong>Hancurkan tablet/kapsul:</strong> Pestle atau sendok, lalu campurkan dengan bahan tidak menarik</li>
        <li><strong>Campuran:</strong> Ampas kopi, pasir kucing, tanah, atau abu rokok</li>
        <li><strong>Masukkan ke kantong:</strong> Plastik buram atau wadah tertutup</li>
        <li><strong>Buang ke sampah:</strong> Sampah rumah biasa (tidak terlihat)</li>
        <li><strong>Program pengembalian:</strong> Tanyakan ke apotek terdekat apakah ada program take-back obat kedaluwarsa</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-purple-200">Checklist Penyimpanan Obat yang Benar</h2>
      
      <div class="my-6 rounded-lg border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
        <ul>
          <li>Obat tersimpan di tempat sejuk, kering, dan gelap</li>
          <li>Jauh dari kamar mandi, dapur, dan sinar matahari</li>
          <li>Dalam kemasan asli dengan label yang jelas</li>
          <li>Terkunci atau di tempat tinggi (jauh dari anak dan hewan)</li>
          <li>Dipisahkan dari makanan dan minuman</li>
          <li>Tidak ada tanda kerusakan atau perubahan</li>
          <li>Tanggal kedaluwarsa masih berlaku</li>
          <li>Instruksi khusus (dingin, segera minum, dll) diikuti</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kesimpulan</h2>
      <p>Di iklim tropis Indonesia, penyimpanan obat yang benar adalah investasi untuk kesehatan. Obat yang disimpan dengan baik akan tetap efektif sampai masa berlakunya, sedangkan penyimpanan yang salah dapat mengurangi atau bahkan menghilangkan manfaat obat. Ikuti prinsip-prinsip di atas, dan pastikan obat keluarga Anda selalu dalam kondisi terbaik untuk memberikan perlindungan kesehatan yang optimal.</p>

      <p><strong>Ingat:</strong> Obat yang rusak tidak hanya tidak berguna, tetapi juga bisa berbahaya. Selalu perhatikan kondisi obat dan lingkungan penyimpanannya!</p>
    `,
  },
  {
    id: 4,
    title: 'Interaksi Obat: Apa Saja yang Perlu Diketahui',
    excerpt: 'Dua atau lebih obat bisa bereaksi dan mengubah efektivitas satu sama lain. Pelajari cara menghindari interaksi obat yang berbahaya.',
    published_at: '4/12/2025',
    datetime: '2025-12-04',
    cover_image: new URL('../assets/Images/HeroSection/Interior.jpg', import.meta.url).href,
    body: `
      <section class="my-6 rounded-lg border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 p-6">
        <p><strong>Interaksi obat</strong> terjadi ketika dua atau lebih obat bereaksi satu sama lain, mengubah cara kerja salah satu atau keduanya. Beberapa interaksi tidak berbahaya, tetapi yang lain dapat mengurangi efektivitas obat atau menyebabkan efek samping serius. Memahami interaksi obat adalah kunci untuk pengobatan yang aman dan efektif.</p>
      </section>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">Jenis-Jenis Interaksi Obat</h2>

      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">1. Interaksi Farmakokinetik</h3>
      <p>Salah satu obat mengubah penyerapan, distribusi, metabolisme, atau ekskresi obat lain:</p>
      
      <h4>a) Pengaruh Penyerapan (Absorption)</h4>
      <ul>
        <li><strong>Antasida + Antibiotic:</strong> Antasida dapat mengurangi penyerapan antibiotik seperti fluoroquinolone</li>
        <li><strong>Makanan + Obat tertentu:</strong> Makanan berlemak mengurangi penyerapan beberapa obat</li>
        <li><strong>Solusi:</strong> Berikan jarak 2 jam antara obat dan antasida</li>
      </ul>

      <h4>b) Pengaruh Metabolisme (Metabolism)</h4>
      <ul>
        <li><strong>Inducer:</strong> Obat yang mempercepat metabolisme (misal rifampin mempercepat metabolisme warfarin)</li>
        <li><strong>Inhibitor:</strong> Obat yang menghambat metabolisme (misal ketokonazol menghambat metabolisme terfenadine)</li>
        <li><strong>Hasil:</strong> Kadar obat berubah, bisa terlalu rendah (tidak efektif) atau terlalu tinggi (toksik)</li>
      </ul>

      <h4>c) Pengaruh Ekskresi (Excretion)</h4>
      <ul>
        <li>Beberapa obat mengurangi kemampuan ginjal untuk mengeluarkan obat lain</li>
        <li>Contoh: Probenesid mengurangi ekskresi penisilin, meningkatkan kadar penisilin</li>
      </ul>

      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">2. Interaksi Farmakodinamik</h3>
      <p>Obat bekerja pada organ/sistem yang sama, memperkuat atau melemahkan efek satu sama lain:</p>

      <h4>a) Sinergis (Memperkuat)</h4>
      <ul>
        <li><strong>Aspirin + Ibuprofen:</strong> Keduanya NSAID, risiko ulkus lambung meningkat drastis</li>
        <li><strong>Alkohol + Benzodiazepine:</strong> Keduanya depresan SSP, meningkatkan risiko pusing dan gangguan kesadaran</li>
      </ul>

      <h4>b) Antagonis (Melemahkan)</h4>
      <ul>
        <li><strong>Antagonis efek:</strong> Stimulan (seperti kafein) melawan efek benzodiazepin</li>
        <li><strong>Hasil:</strong> Salah satu obat tidak bekerja optimal</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">Contoh Interaksi Obat Umum dan Berbahaya</h2>

      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">Interaksi Sangat Serius (Kontraindikasi Absolut)</h3>
      
      <h4>Warfarin + NSAID (Aspirin, Ibuprofen)</h4>
      <ul>
        <li><strong>Risiko:</strong> Perdarahan internal serius</li>
        <li><strong>Mengapa:</strong> Keduanya mengganggu pembekuan darah</li>
        <li><strong>Solusi:</strong> Hindari NSAID, gunakan parasetamol sebagai pengganti</li>
      </ul>

      <h4>Metformin + Kontras Radiologi</h4>
      <ul>
        <li><strong>Risiko:</strong> Kerusakan ginjal akut</li>
        <li><strong>Mengapa:</strong> Kontras dapat mengganggu fungsi ginjal, metformin terakumulasi</li>
        <li><strong>Solusi:</strong> Hentikan metformin saat prosedur, lanjutkan 48 jam setelahnya setelah fungsi ginjal stabil</li>
      </ul>

      <h4>Statin + Fibrat</h4>
      <ul>
        <li><strong>Risiko:</strong> Rabdomiolisis (kerusakan otot parah)</li>
        <li><strong>Mengapa:</strong> Keduanya metabolit via hati, meningkatkan kadar masing-masing</li>
        <li><strong>Solusi:</strong> Gunakan secara hati-hati, monitor CK (creatine kinase)</li>
      </ul>

      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">Interaksi Moderat (Butuh Perhatian dan Monitoring)</h3>
      
      <h4>ACE Inhibitor + Potassium-sparing Diuretics</h4>
      <ul>
        <li><strong>Risiko:</strong> Hiperkalemia (kalium tinggi) berbahaya untuk jantung</li>
        <li><strong>Solusi:</strong> Monitoring kalium darah berkala</li>
      </ul>

      <h4>Antidepresan SSRI + Tramadol</h4>
      <ul>
        <li><strong>Risiko:</strong> Serotonin syndrome (kesadaran berubah, kejang, demam)</li>
        <li><strong>Solusi:</strong> Hindari jika mungkin, atau gunakan dosis terendah dengan monitoring ketat</li>
      </ul>

      <h4>Theophylline + Quinolone Antibiotics</h4>
      <ul>
        <li><strong>Risiko:</strong> Kadar theophylline meningkat, toksisitas (mual, takikardia)</li>
        <li><strong>Solusi:</strong> Monitor kadar theophylline, kurangi dosis jika perlu</li>
      </ul>

      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">Interaksi Ringan (Tapi Tetap Perlu Diperhatikan)</h3>
      
      <h4>Parasetamol + Kafein</h4>
      <ul>
        <li><strong>Interaksi:</strong> Kafein meningkatkan penyerapan parasetamol</li>
        <li><strong>Risiko:</strong> Ringan, jarang berbahaya</li>
      </ul>

      <h4>Vitamin C + Aspirin</h4>
      <ul>
        <li><strong>Interaksi:</strong> Vitamin C meningkatkan ekskresi ginjal aspirin</li>
        <li><strong>Risiko:</strong> Efektivitas aspirin berkurang</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">Interaksi Obat dengan Makanan</h2>

      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">Makanan yang Perlu Dihindari</h3>
      
      <h4>Warfarin + Vitamin K (Sayuran Hijau)</h4>
      <ul>
        <li><strong>Interaksi:</strong> Vitamin K mengurangi efektivitas warfarin</li>
        <li><strong>Solusi:</strong> Konsumsi vitamin K konsisten (sama setiap hari), bukan dihindari</li>
      </ul>

      <h4>Statin + Jus Grapefruit</h4>
      <ul>
        <li><strong>Interaksi:</strong> Grapefruit menghambat CYP3A4, meningkatkan kadar statin</li>
        <li><strong>Risiko:</strong> Miopati (kerusakan otot)</li>
        <li><strong>Solusi:</strong> Hindari grapefruit atau jus grapefruit selama terapi statin</li>
      </ul>

      <h4>MAO Inhibitor + Makanan Tinggi Tyramine</h4>
      <ul>
        <li><strong>Makanan tinggi tyramine:</strong> Keju lama, daging asap, kedelai fermentasi</li>
        <li><strong>Risiko:</strong> Krisis hipertensi (tekanan darah sangat tinggi)</li>
        <li><strong>Solusi:</strong> Hindari makanan ini selama terapi MAO inhibitor</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">Interaksi Obat dengan Alkohol</h2>
      
      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">Obat yang Berbahaya Bersama Alkohol</h3>
      
      <h4>Sedatif/Hipnotik (Benzodiazepine, Zolpidem)</h4>
      <ul>
        <li><strong>Efek:</strong> Pusing, kantuk ekstrem, pernapasan melambat</li>
      </ul>

      <h4>Antidepresan SSRI</h4>
      <ul>
        <li><strong>Efek:</strong> Pusing, koordinasi terganggu</li>
      </ul>

      <h4>Antihistamin (Loratadin, Cetirizin)</h4>
      <ul>
        <li><strong>Efek:</strong> Kantuk berlebihan</li>
      </ul>

      <h4>NSAID (Ibuprofen, Naproxen)</h4>
      <ul>
        <li><strong>Efek:</strong> Risiko perdarahan lambung meningkat</li>
      </ul>

      <h4>Metformin</h4>
      <ul>
        <li><strong>Efek:</strong> Risiko asidosis laktat</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">Cara Menghindari Interaksi Obat</h2>

      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">1. Selalu Beri Tahu Dokter/Apoteker</h3>
      <ul>
        <li>Semua obat resep yang sedang diminum</li>
        <li>Obat bebas yang sering digunakan</li>
        <li>Suplemen dan vitamin</li>
        <li>Produk herbal atau jamu</li>
      </ul>

      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">2. Baca Label dan Brosur Obat</h3>
      <ul>
        <li>Cek bagian "Interaksi Obat" atau "Drug Interactions"</li>
        <li>Tanyakan ke apoteker jika ada hal yang tidak jelas</li>
      </ul>

      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">3. Gunakan Satu Apoteker</h3>
      <ul>
        <li>Apoteker akan mencatat riwayat obat Anda (pharmacy profile)</li>
        <li>Mereka dapat mendeteksi interaksi potensial</li>
      </ul>

      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">4. Tanyakan Tentang Timing</h3>
      <ul>
        <li>Kapan harus minum obat (pagi, malam, dengan makanan)?</li>
        <li>Jarak berapa jam antara obat berbeda?</li>
      </ul>

      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">5. Pantau Efek Samping Baru</h3>
      <ul>
        <li>Jika mulai minum obat baru dan terjadi efek samping aneh, hubungi dokter/apoteker</li>
        <li>Mungkin merupakan tanda interaksi</li>
      </ul>

      <h3 class="text-xl font-bold text-blue-900 mt-6 mb-3">6. Gunakan Aplikasi atau Database Interaksi Obat</h3>
      <ul>
        <li>MedicinePlus, Drugs.com, atau aplikasi lokal</li>
        <li>Cek interaksi sebelum membeli obat bebas</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">Tanda-Tanda Interaksi Obat Serius</h2>

      <div class="my-6 rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
        <h3 class="text-lg font-semibold text-blue-800 mt-5 mb-2">Hubungi Dokter/Apotek Segera Jika:</h3>
        <ul>
          <li><strong>Perdarahan abnormal</strong> (tinja/urin berdarah, memar mudah)</li>
          <li><strong>Perubahan tekanan darah drastis</strong> (pusing, pandangan kabur)</li>
          <li><strong>Aritmia jantung</strong> (detak jantung tidak teratur)</li>
          <li><strong>Gangguan kesadaran</strong> atau kebingungan mendadak</li>
          <li><strong>Hipoglikemia</strong> (jika diabetesi, gula darah mendadak turun)</li>
          <li><strong>Reaksi alergi</strong> (ruam, bengkak, sesak)</li>
          <li><strong>Efek samping baru</strong> setelah mulai obat baru</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kesimpulan</h2>
      <p>Interaksi obat adalah bagian penting dari terapi yang aman. Dengan komunikasi terbuka dengan tim kesehatan Anda, membaca label obat, dan memantau efek samping, Anda dapat menghindari interaksi berbahaya dan memastikan pengobatan berjalan optimal. <strong>Ingat: jangan malu bertanya kepada dokter atau apoteker tentang obat Anda!</strong></p>

      <div class="my-6 rounded-lg border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
        <p><strong>Checklist Keamanan Obat:</strong></p>
        <ul>
          <li>Beri tahu dokter semua obat/suplemen</li>
          <li>Baca brosur obat</li>
          <li>Gunakan satu apoteker untuk farmasi profile</li>
          <li>Pantau efek samping baru</li>
          <li>Tanyakan timing dan jarak antar obat</li>
        </ul>
      </div>
    `,
  },
  {
    id: 5,
    title: 'Efek Samping Obat: Kapan Berbahaya, Kapan Normal',
    excerpt: 'Tidak semua efek samping memerlukan perhatian medis darurat. Pelajari perbedaan antara efek samping ringan dan yang memerlukan pertolongan segera.',
    published_at: '5/12/2025',
    datetime: '2025-12-05',
    cover_image: new URL('../assets/Images/HeroSection/Interior.jpg', import.meta.url).href,
    body: `
      <section class="my-6 rounded-lg border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 p-6">
        <p>Hampir semua obat memiliki efek samping (side effects) potensial. Namun, tidak semua efek samping berbahaya atau memerlukan penghentian obat. Memahami perbedaan antara efek samping yang dapat ditoleransi, yang memerlukan pengelolaan, dan yang memerlukan pertolongan medis darurat adalah kunci untuk terapi obat yang aman dan efektif.</p>
      </section>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-orange-200">Apa Itu Efek Samping Obat?</h2>
      <p><strong>Efek samping</strong> adalah reaksi yang tidak diinginkan terhadap obat yang terjadi dengan dosis terapeutik normal. Berbeda dengan:</p>
      <ul>
        <li><strong>Efek samping:</strong> Reaksi unwanted tapi tidak fatal</li>
        <li><strong>Adverse reaction:</strong> Reaksi berbahaya atau mengancam nyawa</li>
        <li><strong>Overdosis:</strong> Efek dari melebihi dosis yang disarankan</li>
        <li><strong>Alergi obat:</strong> Reaksi imunologis terhadap obat</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-orange-200">Faktor-Faktor yang Mempengaruhi Efek Samping</h2>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">1. Dosis dan Frekuensi</h3>
      <ul>
        <li>Dosis lebih tinggi → efek samping lebih berat</li>
        <li>Frekuensi lebih sering → akumulasi efek samping</li>
      </ul>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">2. Usia</h3>
      <ul>
        <li><strong>Lansia (>65 tahun):</strong> Lebih peka karena metabolisme melambat</li>
        <li><strong>Anak-anak:</strong> Organ belum matang, dosis harus berbeda</li>
      </ul>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">3. Jenis Kelamin</h3>
      <ul>
        <li>Beberapa obat lebih banyak efek samping pada perempuan (atau sebaliknya)</li>
        <li>Perubahan hormonal mempengaruhi metabolisme</li>
      </ul>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">4. Penyakit Hati atau Ginjal</h3>
      <ul>
        <li>Obat tidak dapat dieliminasi dengan baik → akumulasi → efek samping parah</li>
      </ul>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">5. Genetika</h3>
      <ul>
        <li>Beberapa orang memiliki enzim metabolisme yang berbeda</li>
        <li>Hasilnya: beberapa orang sangat peka terhadap obat tertentu</li>
      </ul>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">6. Interaksi Obat</h3>
      <ul>
        <li>Obat lain dapat meningkatkan/menurunkan kadar obat → efek samping berubah</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-orange-200">Klasifikasi Efek Samping Berdasarkan Tingkat Keparahan</h2>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">Efek Samping Ringan (Mild)</h3>
      <p>Tidak memerlukan penghentian obat, biasanya hilang dengan sendirinya dalam beberapa hari/minggu:</p>
      
      <ul>
        <li><strong>Mual:</strong> Terutama pada obat antibiotik, pereda nyeri</li>
        <li><strong>Pusing ringan:</strong> Jika tidak menganggu aktivitas</li>
        <li><strong>Sakit kepala ringan</strong></li>
        <li><strong>Diare/konstipasi ringan</strong></li>
        <li><strong>Ruam ringan atau gatal:</strong> Tanpa pembengkakan</li>
        <li><strong>Mulut kering</strong></li>
        <li><strong>Insomnia ringan</strong></li>
        <li><strong>Penurunan nafsu makan</strong></li>
      </ul>

      <h4>Cara Mengatasi Efek Samping Ringan:</h4>
      <ul>
        <li>Makan sebelum minum obat (untuk mual)</li>
        <li>Minum banyak air</li>
        <li>Istirahat cukup</li>
        <li>Modifikasi gaya hidup (misal tidur lebih awal untuk insomnia)</li>
        <li>Hubungi apoteker jika berlangsung >1 minggu</li>
      </ul>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">Efek Samping Moderat (Moderate)</h3>
      <p>Mengganggu aktivitas atau persisten, memerlukan perhatian medis tetapi tidak darurat:</p>
      
      <ul>
        <li><strong>Pusing berat</strong> yang menganggu aktivitas harian</li>
        <li><strong>Diare/muntah persisten</strong> menyebabkan dehidrasi ringan</li>
        <li><strong>Ruam luas</strong> tanpa pembengkakan anaphylactic</li>
        <li><strong>Gangguan tidur signifikan</strong> mempengaruhi kerja/sekolah</li>
        <li><strong>Perubahan mood</strong> (depresi ringan, cemas)</li>
        <li><strong>Tremor atau kejang ringan</strong></li>
        <li><strong>Fotosensitivitas</strong> (kulit sangat sensitif terhadap matahari)</li>
        <li><strong>Perubahan berat badan signifikan</strong></li>
      </ul>

      <h4>Apa yang Harus Dilakukan:</h4>
      <ol>
        <li>Hubungi dokter dalam 24 jam (jangan segera berhenti obat)</li>
        <li>Diskusikan opsi: mengurangi dosis, mengubah waktu minum, atau mengganti obat</li>
        <li>Dokter akan mempertimbangkan benefit vs risk</li>
        <li>Jangan hentikan sendiri tanpa persetujuan dokter</li>
      </ol>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">Efek Samping Serius (Severe/Adverse Reactions)</h3>
      <p>Memerlukan pertolongan medis segera, potentially life-threatening:</p>
      
      <ul>
        <li><strong>Reaksi alergi:</strong>
          <ul>
            <li>Bengkak wajah, lidah, bibir (angioedema)</li>
            <li>Sesak napas atau kesulitan bernapas</li>
            <li>Ruam luas (terutama jika bersisik atau melepuh)</li>
            <li>Anafilaksis (tekanan darah jatuh, kehilangan kesadaran)</li>
          </ul>
        </li>
        <li><strong>Gejala GI serius:</strong>
          <ul>
            <li>Diare berdarah atau berat dengan dehidrasi</li>
            <li>Muntah yang tidak berhenti</li>
            <li>Nyeri perut hebat</li>
          </ul>
        </li>
        <li><strong>Gejala hepatik (hati):</strong>
          <ul>
            <li>Kulit/mata menguning (jaundice)</li>
            <li>Urin gelap</li>
            <li>Nyeri perut kanan atas</li>
          </ul>
        </li>
        <li><strong>Gejala ginjal:</strong>
          <ul>
            <li>Berkurangnya produksi urin</li>
            <li>Nyeri atau terbakar saat buang air kecil</li>
            <li>Edema (pembengkakan) kaki/wajah</li>
          </ul>
        </li>
        <li><strong>Gejala hematologi:</strong>
          <ul>
            <li>Perdarahan spontan (gusi berdarah, mimisan)</li>
            <li>Memar mudah tanpa trauma</li>
            <li>Tinja/urin berdarah</li>
          </ul>
        </li>
        <li><strong>Gejala SSP:</strong>
          <ul>
            <li>Kesadaran berubah atau kebingungan</li>
            <li>Kejang</li>
            <li>Halusinasi</li>
          </ul>
        </li>
        <li><strong>Gejala kardiovaskular:</strong>
          <ul>
            <li>Nyeri dada</li>
            <li>Detak jantung tidak teratur atau sangat cepat</li>
            <li>Tekanan darah sangat tinggi/rendah</li>
          </ul>
        </li>
        <li><strong>Demam tinggi (>39°C) yang tiba-tiba</strong></li>
        <li><strong>Nyeri sendi/otot parah tanpa sebab jelas</strong></li>
      </ul>

      <h4>HUBUNGI PUSKESMAS/RS/UGD SEGERA ATAU TELEPON 118/112:</h4>
      <ul>
        <li>Jangan menunggu appointment dokter</li>
        <li>Bawa semua obat yang diminum</li>
        <li>Pastikan sudah berhenti minum obat sebelum ke UGD (kecuali untuk obat penyelamat nyawa)</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-orange-200">Efek Samping yang Umum Berdasarkan Kelas Obat</h2>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">Antibiotik</h3>
      <ul>
        <li><strong>Umum ringan:</strong> Mual, diare, ruam ringan</li>
        <li><strong>Serius:</strong> Alergi berat, diare berat (C. difficile), steven johnson syndrome</li>
      </ul>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">Statin (Penurun Kolesterol)</h3>
      <ul>
        <li><strong>Umum ringan:</strong> Nyeri otot ringan, perut kembung</li>
        <li><strong>Serius:</strong> Miopati berat (kerusakan otot), kerusakan hati</li>
      </ul>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">Antihipertensi (Penurun Tekanan Darah)</h3>
      <ul>
        <li><strong>Umum ringan:</strong> Pusing, batuk kering (ACE inhibitor), pembengkakan pergelangan kaki (CCB)</li>
        <li><strong>Serius:</strong> Hipotensi berat, sinkop (pingsan)</li>
      </ul>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">Antidepresan SSRI</h3>
      <ul>
        <li><strong>Umum ringan:</strong> Mual, insomnia, gangguan seksual</li>
        <li><strong>Serius:</strong> Serotonin syndrome, perdarahan GI, hiponatremia</li>
      </ul>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">NSAID (Pereda Nyeri)</h3>
      <ul>
        <li><strong>Umum ringan:</strong> Mual, perut tidak nyaman</li>
        <li><strong>Serius:</strong> Ulkus lambung, perdarahan GI, kerusakan ginjal</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-orange-200">Efek Samping Spesifik yang Perlu Dimonitor</h2>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">Gejala Hipersensitivity Delayed (Muncul Hari ke 3-5 atau Lebih Lama)</h3>
      <p>Terutama dengan antibiotik, antikonvulsan:</p>
      <ul>
        <li>Ruam yang bermula dari wajah/leher</li>
        <li>Demam</li>
        <li>Pembengkakan kelenjar getah bening</li>
        <li>Nyeri sendi</li>
        <li>Bisa berkembang menjadi Stevens-Johnson Syndrome (SJS) atau DRESS Syndrome</li>
      </ul>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">Hiponatremia (Kadar Natrium Rendah)</h3>
      <p>Terjadi dengan SSRI, carbamazepine, vincristine:</p>
      <ul>
        <li>Gejala: Mual, sakit kepala, kebingungan, kejang</li>
        <li>Biasanya dalam 1-2 minggu pertama penggunaan</li>
      </ul>

      <h3 class="text-xl font-bold text-orange-900 mt-6 mb-3">Hepatotoksisitas (Kerusakan Hati)</h3>
      <p>Obat-obatan seperti amoxicillin-clavulanate, azathioprine, isoniazid:</p>
      <ul>
        <li>Gejala: Kuning, urin gelap, feses pucat, nyeri perut kanan</li>
        <li>Monitor: LFT (liver function test) sebelum dan selama terapi</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-orange-200">Kapan Efek Samping Biasanya Hilang?</h2>
      
      <div class="my-6 rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6">
        <h3 class="text-lg font-semibold text-orange-800 mt-5 mb-2">Timeline Efek Samping yang Umum:</h3>
        <ul>
          <li><strong>Hari 1-3:</strong> Mual, pusing, ruam awal (segera hubungi jika parah)</li>
          <li><strong>Hari 3-7:</strong> Adaptasi tubuh mulai, banyak efek ringan menghilang</li>
          <li><strong>Minggu 1-2:</strong> Sebagian besar efek samping ringan hilang</li>
          <li><strong>Minggu 2-4:</strong> Efek samping moderat biasanya stabil atau menghilang</li>
          <li><strong>Setelah 4 minggu:</strong> Jika masih ada, konsultasi dokter untuk opsi lain</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-orange-200">Checklist: Kapan Hubungi Dokter</h2>

      <div class="my-6 rounded-lg border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
        <h3 class="text-lg font-semibold text-orange-800 mt-5 mb-2">Hubungi Dokter dalam 24 Jam (Bukan Darurat, tapi Perlu Tindak Lanjut):</h3>
        <ul>
          <li>Efek samping moderat yang mengganggu aktivitas</li>
          <li>Efek samping ringan >1 minggu tidak membaik</li>
          <li>Munculnya efek samping baru yang mencurigakan</li>
          <li>Pertanyaan tentang interaksi atau cara pakai</li>
        </ul>

        <h3 class="text-lg font-semibold text-orange-800 mt-5 mb-2">Hubungi UGD/Ambulans (Darurat):</h3>
        <ul>
          <li>Reaksi alergi apapun (bengkak, sesak, ruam)</li>
          <li>Perdarahan spontan atau nyeri dada</li>
          <li>Kesadaran berubah atau kejang</li>
          <li>Diare/muntah berat dengan dehidrasi</li>
          <li>Demam tinggi tiba-tiba setelah mulai obat</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-orange-200">Pencegahan Efek Samping Obat</h2>
      
      <ol>
        <li><strong>Minum obat sesuai dosis dan jadwal:</strong> Lebih banyak bukan lebih baik</li>
        <li><strong>Beri tahu dokter tentang alergi/sensitivitas:</strong> Mencegah obat yang akan menyebabkan reaksi</li>
        <li><strong>Pantau gejala awal:</strong> Segera laporkan perubahan</li>
        <li><strong>Jangan mencampurkan alkohol/obat lain tanpa tahu:</strong> Tanyakan ke apoteker</li>
        <li><strong>Baca brosur obat:</strong> Ketahui efek samping yang mungkin</li>
        <li><strong>Jangan hentikan obat tiba-tiba</strong> (kecuali alergi berat)</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kesimpulan</h2>
      <p>Efek samping adalah bagian normal dari pengobatan, tetapi tidak semua memerlukan perhatian segera. Dengan memahami perbedaan antara efek samping ringan, moderat, dan serius, Anda dapat membuat keputusan yang tepat dan berkomunikasi lebih efektif dengan tim kesehatan Anda. <strong>Jika ragu, selalu lebih baik bertanya daripada menunggu dan berharap efek samping hilang sendiri.</strong></p>

      <p><strong>Ingat:</strong> Tujuan pengobatan adalah meningkatkan kesehatan, bukan memperburuk. Jika efek samping tidak tertahankan, ada selalu alternatif lain yang dapat dipertimbangkan bersama dokter Anda.</p>
    `,
  },
];

export const articles = staticArticles;

export function getArticleById(id) {
  return articles.find(a => String(a.id) === String(id)) || null;
}
