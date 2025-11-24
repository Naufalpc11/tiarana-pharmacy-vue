// Simple static articles dataset
export const articles = [
  {
    id: 1,
    title: 'Amoksisilin: Kapan Perlu, Kapan Tidak',
    excerpt: 'Antibiotik bukan untuk semua batuk pilek. Kenali indikasi, efek samping, dan mengapa harus dihabiskan sesuai resep.',
    published_at: '2025-08-12',
    cover_image: new URL('../assets/Images/Interior.jpg', import.meta.url).href,
    body: `
      <p>Amoksisilin adalah antibiotik golongan penisilin yang efektif melawan banyak infeksi bakteri. Tapi—dan ini penting—antibiotik tidak bekerja untuk penyakit yang disebabkan virus seperti flu, pilek, atau sebagian besar sakit tenggorokan. Menggunakan antibiotik saat tidak perlu tidak akan mempercepat sembuh dan justru bisa menimbulkan efek samping serta mempercepat terjadinya resistensi antibiotik.</p>
      <h3>Mengapa bijak memakai antibiotik itu penting?</h3>
      <p>WHO baru-baru ini menegaskan bahwa 1 dari 6 infeksi bakteri di dunia sudah resisten terhadap pengobatan antibiotik. Penyalahgunaan dan penggunaan berlebihan antibiotik adalah pemicunya.</p>
      <h3>Amoksisilin dapat diresepkan dokter untuk infeksi bakteri tertentu, misalnya:</h3>
      <ol>
        <li>Radang tenggorok bakteri (strep throat) setelah tes cepat/radang tenggorok kultur positif. Antibiotik memang diperlukan bila hasil tes positif; jangan mengobati sakit tenggorok virus dengan antibiotik.</li>
        <li>Sinusitis bakteri akut dengan ciri khas: gejala >10 hari tanpa membaik, demam tinggi & nyeri wajah purulen ≥ 3 hari, atau "double-sickening" (awal membaik lalu memburuk lagi). Kriteria ini membantu membedakan dari sinusitis virus yang tidak butuh antibiotik.</li>
        <li>Otitis media (infeksi telinga tengah), infeksi saluran napas bawah bakteri, infeksi kulit tertentu, atau infeksi gigi—sesuai penilaian klinis dokter dan hasil pemeriksaan.</li>
      </ol>
      <h3>Tanda-tanda yang Perlu Dievaluasi Dokter</h3>
      <ol>
        <li>Demam tinggi, sesak napas, nyeri telinga hebat, nyeri wajah purulen, atau gejala >10 hari tanpa membaik.</li>
        <li>Radang tenggorok disertai pembesaran kelenjar leher, demam, tidak ada batuk—dokter dapat menilai dan melakukan tes strep bila perlu.</li>
      </ol>
      <h3>Cara Pakai yang Benar</h3>
      <ol>
        <li>Gunakan hanya dengan resep dokter dan ikuti aturan pakai dengan tepat. Di Indonesia, amoksisilin termasuk obat keras—pembeliannya harus di apotek dengan resep.</li>
        <li>Habiskan sesuai durasi resep (jangan berhenti mendadak tanpa saran tenaga kesehatan), meski gejala terasa membaik. Ini membantu mencegah kambuh dan resistensi.</li>
        <li>Jangan berbagi obat, menyimpan sisa untuk sakit lain, atau mengulang resep lama tanpa evaluasi.</li>
      </ol>
      <h3>Efek Samping yang Perlu Diwaspadai</h3>
      <p>Efek yang umum: mual, diare, ruam, pusing, infeksi jamur. Efek yang jarang tetapi serius: alergi berat (anafilaksis) dan infeksi Clostridioides difficile yang menimbulkan diare berat—butuh pertolongan medis segera. Bila Anda mengalami diare berat atau darah/lendir pada tinja selama atau setelah minum antibiotik, segera hubungi tenaga kesehatan.</p>
      <h3>Peringatan & Interaksi Obat</h3>
      <ol>
        <li>Sebelum minum amoksisilin, beri tahu dokter/apoteker bila Anda alergi penisilin atau pernah mengalami reaksi alergi obat.</li>
        <li>Memiliki penyakit ginjal atau sedang hamil/menyusui (umumnya aman bila diresepkan, tetapi tetap perlu penilaian).</li>
        <li>Mengonsumsi obat tertentu—misalnya methotrexate (risiko peningkatan toksisitas) atau pengencer darah seperti warfarin (kadang dapat memengaruhi INR, perlu pemantauan).</li>
      </ol>
    `,
  },
  {
    id: 2,
    title: 'Panduan Swamedikasi yang Aman',
    excerpt: '5 langkah sederhana agar penggunaan obat bebas tetap aman: baca etiket, dosis tepat, dan konsultasi bila gejala tak membaik.',
    published_at: '2025-08-11',
    cover_image: new URL('../assets/Images/Interior.jpg', import.meta.url).href,
    body: `
      <p>Swamedikasi adalah penggunaan obat oleh masyarakat untuk keluhan kesehatan ringan tanpa resep dokter, misalnya untuk demam, batuk, nyeri otot, atau gangguan pencernaan ringan. Dilakukan dengan benar, swamedikasi membantu efisiensi waktu dan biaya. Namun jika sembarangan, risiko penyalahgunaan, interaksi obat, dan keterlambatan diagnosis penyakit serius dapat terjadi.</p>
      <h3>Prinsip Utama Swamedikasi Aman</h3>
      <ol>
        <li><strong>Identifikasi keluhan dengan jelas:</strong> Pastikan keluhan memang termasuk kategori ringan (misal demam ringan, sakit kepala tegang, batuk pilek biasa). Bila terdapat tanda bahaya seperti sesak napas, nyeri dada, demam tinggi &gt; 3 hari, atau perdarahan, segera konsultasi tenaga kesehatan.</li>
        <li><strong>Pilih obat yang sesuai:</strong> Baca etiket dan brosur obat. Cocokkan indikasi dengan keluhan. Hindari menggunakan kombinasi multi-gejala bila tidak diperlukan.</li>
        <li><strong>Perhatikan kontraindikasi:</strong> Cek apakah Anda memiliki alergi, gangguan ginjal/hati, atau sedang hamil/menyusui. Jika ragu—tanya apoteker.</li>
        <li><strong>Dosis dan interval tepat:</strong> Gunakan alat takar asli (sendok takar, pipet) untuk obat cair. Jangan menebak-nebak dosis anak.</li>
        <li><strong>Evaluasi respon:</strong> Jika keluhan tidak membaik dalam 3 hari atau malah memburuk, hentikan swamedikasi dan konsultasikan ke fasilitas kesehatan.</li>
      </ol>
      <h3>Contoh Keluhan yang Umum Diswadikan</h3>
      <ul>
        <li>Sakit kepala tegang: analgesik sederhana (parasetamol) sesuai dosis.</li>
        <li>Demam ringan: parasetamol; hindari ibuprofen bila ada riwayat tukak lambung aktif atau alergi.</li>
        <li>Batuk pilek biasa: cukup istirahat, cairan, larutan saline hidung; obat kombinasi hanya bila gejala mengganggu.</li>
        <li>Diare akut tanpa dehidrasi berat: oralit, zink (anak), hindari antibiotik tanpa indikasi bakteri.</li>
        <li>Nyeri otot ringan: kompres hangat/dingin, analgetik topikal atau oral bila perlu.</li>
      </ul>
      <h3>Kesalahan Swamedikasi yang Sering Terjadi</h3>
      <ol>
        <li>Menggunakan <em>antibiotik</em> untuk batuk pilek atau demam tanpa evaluasi—sebagian besar disebabkan virus.</li>
        <li>Memakai beberapa obat dengan bahan aktif sama (misal parasetamol ganda) sehingga risiko overdosis hati meningkat.</li>
        <li>Mengonsumsi obat flu kombinasi saat hanya satu gejala muncul (misal hanya hidung tersumbat).</li>
        <li>Menghentikan terapi terlalu cepat (misal antasida sebelum pola makan diperbaiki).</li>
        <li>Memberikan obat dewasa langsung ke anak tanpa penyesuaian dosis.</li>
      </ol>
      <h3>Tanda Bahaya: Hentikan Swamedikasi & Konsultasi</h3>
      <ul>
        <li>Demam tinggi &gt; 39°C atau demam &gt; 3 hari.</li>
        <li>Sesak napas, nyeri dada, kebingungan, kejang.</li>
        <li>Diare berdarah atau dehidrasi (mulut kering, BAK sangat sedikit).</li>
        <li>Nyeri perut hebat, muntah berulang.</li>
        <li>Terjadi reaksi alergi obat: ruam luas, bengkak wajah, sesak.</li>
      </ul>
      <h3>Peran Apoteker</h3>
      <p>Apoteker membantu menilai keluhan, memilih obat yang tepat, menjelaskan cara pakai, lama pemakaian, efek samping, dan kapan harus ke dokter. Manfaatkan konsultasi singkat di apotek sebelum membeli obat bebas.</p>
      <h3>Catatan</h3>
      <p>Informasi ini bersifat edukasi umum dan tidak menggantikan konsultasi langsung dengan tenaga kesehatan. Selalu baca etiket dan tanyakan bila ada keraguan.</p>
    `,
  },
  {
    id: 3,
    title: 'Cara Menyimpan Obat yang Benar di Iklim Tropis',
    excerpt: 'Panas dan lembap bisa merusak obat. Simpan pada suhu yang dianjurkan, hindari kamar mandi/dapur, dan gunakan kotak obat tertutup.',
    published_at: '2025-08-11',
    cover_image: new URL('../assets/Images/Interior.jpg', import.meta.url).href,
    body: `
      <p>Iklim tropis Indonesia dengan suhu tinggi dan kelembapan dapat mempercepat kerusakan obat: penurunan potensi, perubahan warna, bau, hingga kontaminasi mikroba. Penyimpanan yang benar membantu menjaga kemanjuran dan keamanan obat sampai tanggal kedaluwarsa.</p>
      <h3>Prinsip Umum Penyimpanan Obat</h3>
      <ol>
        <li><strong>Suhu sesuai etiket:</strong> Kebanyakan obat oral stabil pada suhu ruang kering (25–30°C). Obat yang perlu dingin (misal insulin tertentu, vaksin, probiotik) disimpan di lemari es 2–8°C, bukan freezer.</li>
        <li><strong>Hindari kelembapan:</strong> Jangan simpan obat di kamar mandi atau dekat kompor. Kelembapan mempercepat degradasi tablet/kapsul dan menumbuhkan jamur pada produk topikal.</li>
        <li><strong>Jauhkan dari sinar matahari langsung:</strong> UV dapat memecah struktur kimia beberapa obat (misal riboflavin, beberapa antibiotik fotosensitif).</li>
        <li><strong>Tutup rapat kemasan asli:</strong> Botol kaca/HDPE dan blister dirancang melindungi dari udara & kelembapan. Pindahkan obat ke wadah lain hanya bila perlu (misal obat puyer anak) dan beri etiket jelas.</li>
        <li><strong>Jauhkan dari jangkauan anak:</strong> Gunakan kotak obat terkunci atau rak tinggi. Edukasi keluarga tentang bahaya konsumsi obat sembarangan.</li>
      </ol>
      <h3>Tips Khusus</h3>
      <ul>
        <li><strong>Sirup kering (dry syrup):</strong> Setelah rekonstitusi, catat tanggal dan simpan sesuai petunjuk (biasanya di suhu ruang atau lemari es) serta habiskan dalam periode yang ditentukan.</li>
        <li><strong>Salep / krim:</strong> Tutup rapat, hindari kontaminasi ujung tube. Jangan gunakan jari kotor—pakai spatula bersih bila perlu.</li>
        <li><strong>Obat tetes mata:</strong> Simpan tertutup, hindari menyentuh ujung penetes ke permukaan. Buang bila berubah warna atau keruh sebelum tanggal kedaluwarsa.</li>
        <li><strong>Insulin:</strong> Pena atau vial yang sedang dipakai biasanya boleh di suhu ruang (cek merek) selama periode tertentu (misal 28 hari), sisanya tetap di lemari es.</li>
      </ul>
      <h3>Tanda Obat Perlu Dibuang</h3>
      <ul>
        <li>Perubahan warna, bau menyengat, atau tekstur aneh.</li>
        <li>Tablet lembek, retak, berjamur.</li>
        <li>Sirup keruh yang sebelumnya jernih.</li>
        <li>Kemasan rusak atau label tidak terbaca.</li>
        <li>Kedaluwarsa (expired) – jangan digunakan meski tampak normal.</li>
      </ul>
      <h3>Cara Membuang Obat yang Tidak Terpakai</h3>
      <p>Jangan dibuang sembarang ke saluran air (risiko kontaminasi lingkungan). Hancurkan tablet, campur dengan bahan tidak menarik (ampas kopi/pasir kucing) sebelum dibuang. Tanyakan apotek apakah tersedia program pengembalian obat kedaluwarsa.</p>
      <h3>Catatan</h3>
      <p>Informasi ini untuk edukasi umum. Bila ragu terhadap stabilitas obat tertentu (misal obat khusus sediaan biologis), konsultasikan ke apoteker.</p>
    `,
  },
];

export function getArticleById(id) {
  return articles.find(a => String(a.id) === String(id)) || null;
}
