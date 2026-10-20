# Pertemuan 3 — Narasi Tiap Slide

**Mata kuliah:** Blockchain Technology · Prodi Bisnis Digital (semester 5) · ITM Purwakarta
**Sumber:** `Pertemuan 03 - Blok, Jaringan, dan Konsensus.pptx`, `Pertemuan 03 - Blok, Jaringan, dan Konsensus.md`, dan `aset/pertemuan-03/explorer-ethereum/Panduan Demo Jaringan Nyata P3.md`
**Cara pakai:** teks dalam blok kutipan ditulis seperti dosen sedang berbicara. Untuk latihan, teks ini boleh dibaca hampir apa adanya. Saat kuliah, ringkas sambil melihat slide. Baris **Petunjuk** berisi arahan panggung: apa yang ditampilkan, diklik, atau dilakukan. Kalimat miring dalam kurung adalah catatan untuk dosen dan tidak perlu diucapkan.

**Benang merah hari ini:** satu pertanyaan yang ditinggalkan di akhir P2, *"Kalau seseorang mengubah catatan setoran kopi lalu menghitung ulang semua hash-nya, mengapa versi itu belum tentu diterima jaringan?"* Semua slide bergerak menuju jawabannya: **catatan → blok → rantai → salinan di banyak node → pemeriksaan aturan → konsensus → batas keamanan → kebutuhan bisnis koperasi.**

**Durasi:** setiap slide diberi perkiraan waktu. Perkiraan ini memakai laju bicara santai sekitar 110 kata per menit, ditambah waktu klik demo dan polling. Narasi inti sengaja dibuat lebih pendek dari jatah outline agar ada ruang untuk pertanyaan spontan dan koneksi yang lambat. Beberapa slide memiliki blok **Pendalaman bila waktu tersisa**: pakai bila waktu masih longgar, lewati bila mepet.

| Bagian | Slide | Narasi inti | + Pendalaman | Jatah outline |
|---|---|---:|---:|---:|
| Pembukaan dan polling pemantik | 1–4 | ±9,5 menit | — | 10 menit |
| Materi A: anatomi blok, rantai, dan explorer tahap 1 | 5–8 | ±15 menit | +2 menit | 20 menit |
| Demo 1: Block dan Blockchain | 9–12 | ±20 menit | — | 20 menit |
| Materi B dan Demo 2: node, jaringan, dan Distributed | 13–16 | ±14,5 menit | +2 menit | 20 menit |
| Jeda | (setelah 16) | — | — | 5 menit |
| Materi C: keabsahan, double spending, konsensus, dan explorer tahap 2 | 17–22 | ±16,5 menit | +5 menit | 25 menit |
| Materi D: fork, finality, 51%, dan explorer tahap 3 | 23–25 | ±12,5 menit | +2 menit | 15 menit |
| Materi E: trilemma dan koperasi | 26–27 | ±6 menit | +7 menit | 15 menit |
| Kuis, rangkuman, dan penutup | 28–30 | ±15 menit | — | 20 menit |

Narasi inti ditambah semua pendalaman memakan sekitar 127 menit, ditambah jeda 5 menit. Sisa ±18 menit dapat dipakai untuk tanya-jawab dan mengatasi kendala teknis. Jika waktu sempit, lewati pendalaman, lalu ringkas slide 19 (Byzantine) dan bagian PoA/PBFT di slide 22.

**Kunci polling dan kuis (ringkas):** Slide 4 → B (belum cukup). Slide 7 (opsional) → B (blok sebelumnya). Slide 12 → tidak. Slide 24 → tidak. Kuis: 1B, 2C, 3B, 4B, 5A, 6B.

**Persiapan sebelum mulai:** buka empat tab: (1) [Block](https://andersbrownworth.com/blockchain/block), (2) [Blockchain](https://andersbrownworth.com/blockchain/blockchain), (3) [Distributed](https://andersbrownworth.com/blockchain/distributed), (4) [Etherscan blok 26167394](https://etherscan.io/block/26167394). Siapkan juga delapan screenshot di `aset/pertemuan-03/explorer-ethereum/` sebagai cadangan bila situs lambat. Polling disiapkan di Zoom/Meet atau Google Form.

---

## Slide 1 — Sampul: Blok, Rantai, Jaringan, dan Konsensus

**Petunjuk:** Tampilkan sampul sejak mahasiswa mulai masuk ruang daring. Tunggu satu sampai dua menit. Salam, doa, lalu jembatan dari P2. Pertanyaan pemanasan dari akhir P2 diucapkan di sini sebagai "pertanyaan besar" hari ini.

**Narasi (±2,5 menit):**

> Assalamu'alaikum warahmatullahi wabarakatuh. Selamat pagi, teman-teman semuanya. Selamat datang di pertemuan ketiga mata kuliah Blockchain Technology. Sebelum mulai, mari kita berdoa menurut keyakinan masing-masing, semoga ilmu hari ini mudah dipahami dan bermanfaat. Berdoa, dimulai. … Cukup, terima kasih.
>
> Seperti biasa, saya ingatkan: sesi ini tidak direkam. Slide lengkap, termasuk langkah-langkah demo dan tangkapan layarnya, akan saya unggah ke LMS setelah kuliah. Jadi tidak perlu panik kalau ada yang terlewat. Tetapi hari ini ada dua demo simulator dan satu demo explorer jaringan nyata, dan demo itu jauh lebih mudah dipahami kalau kalian melihatnya langsung. Jadi tolong simak baik-baik.
>
> Coba kita ingat sebentar. Di pertemuan pertama, kita berkenalan dengan Koperasi Kopi Tani Burangrang dan masalah catatan setoran Pak Asep: lima puluh dua kilogram yang diubah menjadi empat puluh dua kilogram. Di pertemuan kedua, kita belajar tiga alat: hash, pasangan kunci, dan tanda tangan digital. Ibaratnya, minggu lalu kita mengenal batu bata dan semen. Hari ini, sesuai judulnya, kita mulai **membangun rumahnya**: catatan dikumpulkan dalam **blok**, blok disambung menjadi **rantai**, salinan rantai disimpan di banyak komputer dalam **jaringan**, dan komputer-komputer itu harus sampai pada **konsensus**, yaitu kesepakatan tentang riwayat mana yang diterima.
>
> Di akhir pertemuan lalu, saya meninggalkan satu pertanyaan. Saya ulangi, karena pertanyaan inilah yang akan kita jawab sepanjang hari ini: *kalau seseorang mengubah catatan setoran kopi, lalu menghitung ulang semua hash-nya, mengapa versi itu belum tentu diterima oleh jaringan?* Simpan pertanyaan itu di kepala. Di setiap bagian nanti, kita akan mendapat satu potong jawabannya.
>
> Satu kabar baik: hari ini kalian tetap cukup memakai browser. Tidak ada pemasangan dompet, tidak ada pengiriman transaksi, tidak ada uang yang dikeluarkan. Kita hanya memakai simulator dan **membaca** data publik dari jaringan Ethereum yang sungguhan. Baik, kita lihat dulu target dan agendanya.

---

## Slide 2 — Tujuan dan Agenda

**Petunjuk:** Baca kalimat target, lalu tunjuk empat baris tabel agenda berurutan. Tutup dengan pita bawah tentang demo Ethereum nyata. Tekankan kata "menerima".

**Narasi (±2,5 menit):**

> Target kita hari ini hanya satu kalimat, tetapi isinya padat: **kalian dapat menjelaskan bagaimana jaringan menerima riwayat transaksi.** Perhatikan kata "menerima". Minggu lalu kita bertanya, *apakah data ini berubah?* dan *siapa yang menyetujuinya?* Hari ini pertanyaannya naik satu tingkat: *dari sekian banyak salinan catatan di banyak komputer, versi mana yang diakui bersama?*
>
> Agendanya ada empat bagian. **Pertama, blok, rantai, dan dua demo simulator, sekitar enam puluh menit.** Ini bagian terpanjang. Kita bongkar isi sebuah blok, kita lihat bagaimana blok-blok saling terkait, lalu kita coba mengubah catatan Pak Asep di simulator dan melihat akibatnya. Di bagian ini juga ada demo jaringan dengan tiga komputer tiruan.
>
> **Kedua, konsensus, finality, dan keamanan, sekitar empat puluh menit.** Di sini muncul istilah-istilah yang sering kalian dengar di berita kripto: *Proof of Work*, *Proof of Stake*, *fork*, *serangan 51 persen*. Kita bahas maknanya dengan bahasa sederhana, termasuk apa yang **tidak** bisa dilakukan oleh mekanisme itu.
>
> **Ketiga, kebutuhan bisnis koperasi, sekitar lima belas menit.** Karena kalian anak Bisnis Digital, kita tarik semua teori tadi ke pertanyaan praktis: kalau Koperasi Burangrang ingin memakai blockchain, apa yang harus diputuskan dulu?
>
> **Keempat, pembukaan, jeda, kuis, dan penutup, sekitar tiga puluh lima menit.** Ada jeda lima menit di tengah, jadi tenang saja.
>
> Lalu lihat pita di bawah: **demo Ethereum nyata, membaca blok dan transaksi tanpa dompet atau pembayaran.** Jadi selain simulator, saya akan membuka Etherscan, situs yang menampilkan isi jaringan Ethereum yang sesungguhnya. Kita cukup membaca, tidak mengirim apa pun. Baik, kita mulai dari catatan Pak Asep.

---

## Slide 3 — Catatan Pak Asep dan Hasil P2

**Petunjuk:** Tunjuk kartu "Catatan awal" lalu "Catatan berubah". Sebut satu pola hasil T1 tanpa menyebut nama mahasiswa. Jika T1 belum terkumpul, gunakan contoh dosen. Akhiri dengan pita "Pertanyaan P3".

**Narasi (±2 menit):**

> Di layar ada dua kartu yang sudah kalian kenal. Kiri, **catatan awal**: 12 Mei 2026, Pak Asep dari kelompok Tani Mukti, **lima puluh dua kilogram**. Kanan, **catatan yang berubah**: tanggal sama, nama sama, kelompok sama, tetapi beratnya **empat puluh dua kilogram**. Satu angka berbeda.
>
> Apa yang sudah kita pelajari minggu lalu tentang dua kartu ini? Lihat dua kalimat di bawahnya. **Hash mendeteksi perbedaan terhadap acuan.** Kalau kita punya hash dari catatan lima puluh dua kilogram yang tersimpan aman, lalu kita hitung hash dari catatan yang ada sekarang, hasilnya akan berbeda total. Dari situ kita tahu ada perubahan. **Tanda tangan memeriksa kecocokan pesan dengan kunci.** Kalau catatan aslinya ditandatangani petugas pencatat, lalu isinya diubah, verifikasi tanda tangannya gagal.
>
> *(Sebut satu pola T1 tanpa identitas.)* Dari Tugas 1 yang sudah masuk, ada satu pola yang hampir semua dari kalian temukan, dan ini penting: begitu teks dikembalikan **persis** seperti aslinya, termasuk huruf besar-kecil dan spasinya, hash-nya **kembali sama**. Artinya hash itu konsisten. Teks yang sama selalu menghasilkan hash yang sama, dan teks yang berbeda sedikit saja menghasilkan hash yang berbeda jauh.
>
> Tetapi ingat juga kelemahan yang kita bahas di akhir bagian hash minggu lalu: semua itu bergantung pada **acuan**. Kalau hash acuannya ikut diganti, perbandingan kita jadi tidak berguna. Maka pertanyaan hari ini tertulis di pita bawah: **bagaimana jaringan memilih riwayat yang diterima?** Sebelum menjawabnya, saya ingin tahu dulu pendapat kalian lewat polling.

---

## Slide 4 — Polling: Data dan Hash Acuan Berubah

**Petunjuk:** Buka polling, beri waktu 30–45 detik. Tampilkan hasil, baru jelaskan. Kunci: **B. Belum cukup.**

**Narasi (±2,5 menit, termasuk waktu polling):**

> Skenarionya begini. Ada pelaku yang mengubah lima puluh dua kilogram menjadi empat puluh dua kilogram. Tetapi dia cukup pintar: setelah mengubah datanya, dia juga **menghitung hash baru** dan mengganti hash acuan yang lama dengan yang baru. Pertanyaannya: **apakah memeriksa satu catatan saja cukup?** Pilihannya: A, cukup. B, belum cukup. C, belum yakin. Silakan pilih di polling. Saya beri waktu sekitar tiga puluh detik.
>
> *(Tunggu, lalu tampilkan hasil.)*
>
> Terima kasih. *(Bacakan sebaran jawaban.)* Jawaban yang tepat adalah **B, belum cukup.** Coba bayangkan posisi kita sebagai pemeriksa. Kita membuka catatan, menghitung hash-nya, lalu membandingkan dengan hash acuan. Cocok! Tetapi cocoknya karena dua-duanya sudah diganti oleh orang yang sama. Kalau yang kita periksa hanya satu catatan dan satu acuan yang dipegang oleh satu pihak, perubahan seperti ini tidak kelihatan.
>
> Yang memilih "belum yakin" juga wajar, karena memang inilah yang akan kita pelajari. Jawabannya ada dua lapis. Lapis pertama: catatan tidak berdiri sendiri. Catatan-catatan dikumpulkan dalam blok, dan blok-blok saling **merujuk** satu sama lain, sehingga mengubah satu catatan berarti mengganggu rujukan di blok-blok sesudahnya. Lapis kedua, dan ini yang lebih penting: salinannya tidak dipegang satu orang, tetapi **banyak komputer** yang memeriksa dengan aturan yang sama. Kita mulai dari lapis pertama: apa itu blok.

---

## Slide 5 — Transaksi dalam Satu Blok

**Petunjuk:** Mulai Materi A (20 menit untuk slide 5–8). Tunjuk tabel tiga catatan, lalu panah imajiner ke kotak "SATU BLOK". Tekankan bahwa ini masih data fiktif dari dataset P1.

**Narasi (±3 menit):**

> Kita mulai dari data, bukan dari istilah teknis. Di tabel kiri ada tiga catatan setoran fiktif dari dataset koperasi: **Pak Asep dari Tani Mukti lima puluh dua kilogram, Bu Euis dari Tani Mukti empat puluh tujuh kilogram, dan Pak Dadang dari kelompok Sauyunan enam puluh satu kilogram.** Setiap baris adalah satu catatan transaksi.
>
> Nah, di blockchain, catatan-catatan seperti ini tidak disimpan satu per satu secara lepas. Mereka **dikumpulkan dalam satu paket** yang disebut **blok**. Lihat kotak indigo di kanan: satu blok berisi **kumpulan catatan, ditambah informasi blok**. Informasi blok itu semacam "kop" atau "sampul" paketnya: nomor blok, waktu, rujukan ke blok sebelumnya, dan beberapa data lain yang akan kita lihat di slide berikutnya.
>
> Analogi yang mudah: bayangkan buku kas koperasi yang ditulis per halaman. Setiap halaman memuat beberapa catatan setoran hari itu. Di pojok atas halaman ada nomor halaman dan tanggal. Satu halaman itulah yang kira-kira kita sebut blok. Bedanya, di blockchain, setiap halaman juga menyimpan "sidik jari" halaman sebelumnya. Itu yang membuatnya menjadi rantai, dan itu topik dua slide lagi.
>
> Satu hal yang perlu kalian ingat, dan tertulis di bawah tabel: **blok nyata dapat memuat banyak transaksi.** Bukan tiga, tetapi bisa ratusan bahkan ribuan, tergantung sistemnya. Nanti di demo simulator, saya akan memakai **lima blok yang masing-masing hanya berisi satu catatan.** Itu sengaja disederhanakan supaya kita mudah melihat apa yang terjadi kalau satu catatan diubah. Jadi jangan bingung kalau nanti satu blok di simulator hanya berisi satu baris; itu demi kemudahan belajar, bukan gambaran blok sungguhan.
>
> Lalu, transaksi itu sebenarnya apa? Di koperasi kita, transaksi adalah catatan setoran. Di jaringan seperti Bitcoin, transaksi adalah perpindahan aset. Di Ethereum, transaksi bisa berupa transfer atau perintah ke sebuah program yang disebut *smart contract*, yang akan kita pelajari nanti. Isinya bisa berbeda-beda, tetapi polanya sama: transaksi dikumpulkan, lalu dikemas dalam blok. Sekarang mari kita lihat bagaimana sebuah blok sungguhan terlihat.

---

## Slide 6 — Anatomi Blok dan Ethereum Nyata

**Petunjuk:** Demo explorer tahap 1 dimulai (±4 menit untuk slide 6–7). Jelaskan lima bagian blok secara lisan terlebih dahulu, lalu tunjuk screenshot "1. Daftar blok" dan "2. Detail blok 26167394". Bila koneksi lancar, buka live https://etherscan.io/blocks lalu https://etherscan.io/block/26167394. Bila lambat, cukup pakai screenshot di slide.

**Narasi (±5 menit):**

> Sebelum melihat layar Etherscan, saya kenalkan dulu lima bagian yang biasanya ada dalam diagram sebuah blok. Catat ya, karena kelima istilah ini akan muncul terus.
>
> Pertama, **data transaksi**: kumpulan catatan yang dimuat, seperti tabel setoran tadi. Kedua, **timestamp** atau cap waktu: keterangan kapan blok itu dibuat. Hati-hati, ini waktu pembuatan **blok**, bukan bukti kapan Pak Asep benar-benar menyetor kopinya di gudang. Ketiga, **hash blok sebelumnya**: sidik jari dari blok pendahulunya, yang membuat blok-blok tersambung. Keempat, **nonce**: angka yang dicoba-coba untuk mendapatkan hash yang memenuhi syarat tertentu. Ini khas sistem Proof of Work, dan nanti kita lihat langsung di simulator. Kelima, **hash blok itu sendiri**: identitas atau ringkasan kriptografis blok tersebut.
>
> Satu catatan kecil: bentuk dan isi blok **berbeda antarsistem**. Bitcoin, misalnya, tidak meng-hash seluruh teks transaksi secara langsung, melainkan meringkasnya dulu menjadi satu nilai yang disebut *Merkle root*. Detail itu tidak perlu kalian hafal sekarang. Cukup ingat bahwa diagram kita adalah versi sederhana.
>
> Sekarang lihat screenshot di kiri: **daftar blok** di Etherscan, yaitu situs penjelajah atau *explorer* jaringan Ethereum. Setiap baris adalah satu blok. Blok-blok baru muncul terus, kira-kira setiap belasan detik. Kolom yang penting adalah **nomor blok** dan **jumlah transaksinya**. *(Bila live: kalau kalian buka sekarang, angkanya pasti berbeda dari screenshot, karena jaringannya terus berjalan. Itu normal.)*
>
> Lalu screenshot kanan: **detail blok 26167394**, yang saya ambil pada 11 Oktober 2026. Perhatikan tiga hal yang saya tulis di bawahnya. **Satu, nomor blok dan waktu.** Nomornya 26.167.394, artinya ini blok ke-26 juta lebih sejak jaringan Ethereum berdiri. Waktunya 06.23.47 UTC, atau 13.23.47 WIB. **Dua, 153 transaksi tingkat atas.** Jadi satu blok ini memuat 153 transaksi, bandingkan dengan simulator kita nanti yang hanya satu catatan per blok. Di sebelahnya ada tulisan **164 contract internal transactions**. Itu kategori yang berbeda: jejak interaksi di dalam program, bukan transaksi yang dikirim dan ditandatangani pengguna. Jadi **jangan dijumlahkan** menjadi 317 transaksi. **Tiga, status saat pengambilan: Unfinalized.** Artinya blok sudah tercatat, tetapi belum mencapai status final. Kata "final" ini akan kita bahas lagi di bagian finality. Untuk sekarang, cukup tandai: masuk blok belum tentu sama dengan final.
>
> Dan satu pengingat penting: kopi Pak Asep **tidak ada** di blok Ethereum ini. Data koperasi itu hanya analogi latihan kita. Yang ada di layar adalah transaksi publik milik orang lain di jaringan Ethereum. Sekarang, bagaimana blok ini terhubung dengan blok sebelumnya?

---

## Slide 7 — Parent Hash Merujuk Blok Pendahulu

**Petunjuk:** Mulai dari diagram tiga blok di atas, tunjuk panah H1 → Prev: H1, lalu H2 → Prev: H2. Setelah itu, tunjuk baris "Parent Hash" blok 26167394 dan baris "Hash" blok 26167393. Bila live: klik **More Details** → klik **Parent Hash** → buka **More Details** di blok 26167393. Polling opsional di akhir.

**Narasi (±4 menit):**

> Lihat diagram di atas. Ada tiga blok. **Blok 1** punya hash, kita sebut saja **H1**. Ini hanya simbol, bukan hash sungguhan. **Blok 2** menyimpan tulisan **Prev: H1**. "Prev" artinya *previous*, sebelumnya. Jadi blok 2 menyimpan sidik jari blok 1. Lalu blok 2 punya hash sendiri, **H2**. **Blok 3** menyimpan **Prev: H2**, dan punya hash **H3**. Begitu seterusnya.
>
> Inilah yang membuat kumpulan blok menjadi **rantai**. Setiap blok memegang "tangan" blok sebelumnya melalui hash. Dan perhatikan: yang dirujuk bukan sekadar **nomor urut**. Kalau hanya nomor, siapa pun bisa membuat blok palsu bernomor dua. Yang dirujuk adalah **sidik jari isi blok sebelumnya**. Kalau isi blok sebelumnya berubah, sidik jarinya berubah, dan rujukannya tidak cocok lagi.
>
> Sekarang kita buktikan di jaringan nyata. Lihat bagian bawah slide. Di **blok 26167394**, ada dua baris. **Hash**, yaitu sidik jari blok ini, diawali `0xc7f23c…`. Lalu **Parent Hash**, yaitu "Prev"-nya versi Ethereum, diawali **`0xd64402bd…`** dan diakhiri **`…275305`**. Ingat dua potongan itu.
>
> Sekarang lihat baris di bawahnya, **blok 26167393**, blok tepat sebelumnya. Hash blok ini diawali **`0xd64402bd…`** dan diakhiri **`…275305`**. *Sama persis* dengan Parent Hash tadi. *(Bila live: klik Parent Hash di Etherscan, situs langsung membawa kita ke blok 26167393. Buka More Details, lalu tunjukkan bahwa hash-nya identik.)*
>
> Jadi, apa yang kita lihat di diagram, Blok 2 menyimpan Prev H1, ternyata **benar-benar terjadi** di jaringan Ethereum. Saya rangkum dalam satu kalimat: **nomor menunjukkan posisi, parent hash menunjukkan rujukan kriptografis ke pendahulunya.**
>
> Lihat juga, blok 26167393 juga punya Parent Hash sendiri, diawali `0xb61a04…`. Itu merujuk ke blok 26167392, dan begitu seterusnya, mundur sampai blok pertama. Satu rantai panjang.
>
> *(Polling opsional, 20 detik: "Parent Hash menunjuk ke A. nomor rekening, B. blok sebelumnya, atau C. harga ETH?" Kunci B.)*

---

## Slide 8 — Perubahan Data dan Rujukan Penerus

**Petunjuk:** Explorer selesai, kembali ke slide. Tunjuk Blok 1 (data 42 kg, H1 baru), lalu Blok 2 yang masih menyimpan H1 lama. Baca dua kalimat, lalu pita bawah. Sebut dua salah paham yang harus dihindari.

**Narasi (±3 menit):**

> Sekarang kita masuk ke skenario jahatnya. Bayangkan blok 1 berisi catatan Pak Asep, dan seseorang mengubah **lima puluh dua kilogram menjadi empat puluh dua kilogram.** Lihat diagram: blok 1 sekarang berisi **Data: 42 kg**, dan karena isinya berubah, hash-nya juga berubah menjadi **H1 baru**. Ingat sifat hash dari minggu lalu: ubah satu karakter saja, hasilnya berubah total.
>
> Tetapi lihat blok 2. Blok 2 masih menyimpan **Prev: H1 lama**. Blok 2 tidak tahu apa-apa tentang perubahan di blok 1. Ia masih memegang sidik jari versi aslinya. Maka muncul **rujukan yang berbeda**: hash blok 1 yang sekarang tidak cocok dengan yang dicatat blok 2. Rantainya "putus" di sini, dan putusnya bisa dideteksi oleh siapa saja yang memeriksa.
>
> Baca kalimat di tengah: **perubahan isi blok 1 mengubah hash terkait. Rujukan blok penerus perlu disesuaikan agar rantai cocok kembali.** Artinya, kalau pelaku ingin rantainya terlihat rapi lagi, dia tidak cukup mengubah blok 1. Dia harus memperbarui Prev di blok 2. Begitu Prev di blok 2 berubah, hash blok 2 ikut berubah, sehingga blok 3 juga harus diperbarui, lalu blok 4, dan seterusnya sampai blok terakhir. Satu perubahan kecil merambat ke seluruh blok sesudahnya.
>
> Lalu apakah itu mustahil dilakukan? Di sinilah saya minta kalian jujur pada ilmu. **Menghitung ulang hash itu bisa dilakukan.** Komputer bisa menghitungnya. Jadi rantai hash saja **belum** membuat data mustahil diubah. Itulah mengapa pita bawah berbunyi: **penerimaan riwayat pengganti juga bergantung pada konsensus dan kondisi jaringan.** Rantai hash membuat perubahan **terlihat** dan **mahal**, tetapi yang menentukan apakah versi baru itu **diterima** adalah aturan jaringan, yang kita bahas setelah demo.
>
> Sebelum lanjut, saya luruskan dua salah paham yang sering muncul. **Pertama, hash bukan enkripsi.** Isi blok tidak disembunyikan oleh hash; kalian tadi bisa membaca 153 transaksi itu dengan bebas. Hash hanya sidik jari. **Kedua, adanya rantai hash belum membuat data mustahil diubah.** Rantai hash membuat perubahan bisa dideteksi dan harus dikerjakan berantai; selebihnya urusan konsensus. Baik, cukup teorinya. Sekarang kita buktikan sendiri di simulator.

**Pendalaman bila waktu tersisa (±2 menit):**

> Supaya makin terasa, bayangkan buku kas koperasi yang setiap halamannya ditutup dengan "kode ringkas" halaman sebelumnya, dan kode itu ikut ditulis di halaman berikutnya. Kalau seseorang mencabut halaman 3 lalu menggantinya dengan halaman palsu, kode halaman 3 berubah. Halaman 4 masih mencatat kode lama, jadi ketahuan. Supaya tidak ketahuan, ia harus menulis ulang halaman 4, lalu halaman 5, dan seterusnya sampai halaman terakhir. Kalau buku kas itu hanya ada satu dan dipegang satu orang, menulis ulang semua halaman memang melelahkan, tetapi mungkin. Kalau buku yang sama juga disalin dan dipegang oleh puluhan pengurus lain, ceritanya menjadi berbeda. Itulah yang akan kita lihat di bagian jaringan.

---

## Slide 9 — Demo Block: Data, Nonce, dan Mine

**Petunjuk:** Demo 1 dimulai (20 menit untuk slide 9–12). Buka tab https://andersbrownworth.com/blockchain/block. Jelaskan empat kolom: Block, Nonce, Data, Hash. Ketik persis `2026-05-12|Pak Asep|Tani Mukti|52 kg`. Tekan **Mine**. Lalu ubah 52 menjadi 42. **Jangan menyebut angka nonce atau hash tertentu sebelum melihatnya di layar.**

**Narasi (±6 menit):**

> Ini adalah simulator buatan Anders Brownworth, alamatnya ada di slide. Halaman ini menampilkan **satu blok**. Ada empat kolom. **Block**, nomor bloknya. **Nonce**, angka yang nanti dicoba-coba. **Data**, isi catatannya. Dan **Hash**, sidik jari dari gabungan nomor, nonce, dan data tadi.
>
> **Langkah satu: masukkan catatan.** Saya ketik di kolom Data persis seperti di slide: `2026-05-12`, garis tegak, `Pak Asep`, garis tegak, `Tani Mukti`, garis tegak, `52 kg`. *(Ketik pelan-pelan.)* Perhatikan kolom Hash. Setiap kali saya mengetik satu huruf, hash-nya langsung berubah. Ini sama dengan demo hash minggu lalu.
>
> Sekarang lihat warna bloknya. *(Kemungkinan besar merah.)* Di simulator ini, blok berwarna **hijau** kalau hash-nya diawali **empat angka nol**, dan berwarna **merah** kalau tidak. Itu "target" atau syarat yang dibuat simulator. Sekarang hash kita belum diawali empat nol, jadi bloknya merah.
>
> **Langkah dua: tekan Mine.** *(Klik Mine.)* Apa yang terjadi? Komputer mencoba nonce satu per satu: nol, satu, dua, tiga, dan seterusnya. Setiap nonce menghasilkan hash yang berbeda. Komputer terus mencoba sampai menemukan nonce yang membuat hash diawali empat nol. Lihat, sekarang bloknya **hijau**, dan nonce-nya berubah menjadi angka *(bacakan angka di layar)*. Hash-nya diawali `0000`. Proses mencoba-coba nonce inilah yang disebut **mining** atau menambang. Kita tidak menggali emas; kita hanya mencari angka yang cocok. Ini gambaran sederhana dari **Proof of Work**, yang akan kita bahas lebih dalam nanti.
>
> **Langkah tiga: ubah 52 kg menjadi 42 kg.** *(Hapus angka 5, ketik 4.)* Lihat apa yang terjadi. Hash-nya langsung berubah total, tidak lagi diawali empat nol, dan bloknya kembali **merah**. Satu angka saja cukup untuk membuat blok ini tidak memenuhi syarat lagi.
>
> Sekarang baca pita bawah, karena ini penting: **warna simulator menunjukkan syarat komputasi, bukan kejujuran berat kopi.** Hijau artinya "hash-nya diawali empat nol". Hanya itu. Hijau **tidak** berarti catatannya benar. Buktinya, kalau saya tekan Mine lagi sekarang, *(klik Mine)* blok dengan empat puluh dua kilogram ini juga bisa hijau. Komputer tidak tahu dan tidak peduli berapa berat kopi Pak Asep yang sebenarnya. Ia hanya menghitung.
>
> Satu catatan untuk yang suka detail: istilah **nonce** di simulator ini adalah nonce *mining* gaya Proof of Work. Nanti di Ethereum kalian juga akan bertemu kata nonce, tetapi di sana artinya berbeda, yaitu nomor urut transaksi dari sebuah akun. Kata sama, fungsi berbeda. Sekarang kita naik dari satu blok menjadi rantai.

---

## Slide 10 — Demo Blockchain: Lima Blok Awal

**Petunjuk:** Buka tab https://andersbrownworth.com/blockchain/blockchain. Isi kolom Data lima blok sesuai tabel dengan format `tanggal|nama|kelompok|berat`. Tekan Mine berurutan dari blok 1 sampai 5. Ambil screenshot keadaan awal (semua hijau).

**Narasi (±5,5 menit):**

> Sekarang kita pindah ke halaman **Blockchain**. Bedanya dengan halaman tadi: di sini ada **beberapa blok berderet** ke samping, dan setiap blok punya satu kolom tambahan, yaitu **Prev**. Kolom ini persis seperti di diagram kita: berisi hash dari blok sebelumnya. Blok 1 tidak punya pendahulu, jadi Prev-nya berisi deretan nol.
>
> Saya isi lima blok sesuai tabel di slide. Datanya dari dataset setoran panen koperasi, semuanya bertanggal **12 Mei 2026**. **Blok 1: Pak Asep, Tani Mukti, lima puluh dua kilogram. Blok 2: Bu Euis, Tani Mukti, empat puluh tujuh kilogram. Blok 3: Pak Dadang, Sauyunan, enam puluh satu kilogram. Blok 4: Bu Neneng, Sauyunan, tiga puluh delapan kilogram. Blok 5: Pak Ujang, Tani Mukti, lima puluh lima kilogram.** *(Ketik satu per satu. Formatnya sama dengan demo tadi.)*
>
> Setelah semua terisi, kemungkinan besar semua blok merah, karena hash-nya belum memenuhi syarat. Sekarang saya tekan **Mine** satu per satu, **dari blok 1 sampai blok 5, berurutan.** *(Klik Mine blok 1.)* Blok 1 hijau. Perhatikan: begitu hash blok 1 berubah, kolom **Prev di blok 2 langsung ikut berubah** mengikuti hash blok 1 yang baru. Itulah rantainya bekerja. *(Mine blok 2, 3, 4, 5.)* Sekarang kelima blok hijau.
>
> Kenapa harus berurutan? Karena hash setiap blok bergantung pada Prev-nya. Kalau saya me-mine blok 3 dulu, lalu blok 2, hash blok 2 berubah, Prev blok 3 ikut berubah, dan blok 3 menjadi merah lagi. Jadi kerjanya harus dari depan ke belakang.
>
> Inilah **keadaan awal** kita: lima catatan, lima blok, semuanya tersambung dan memenuhi syarat simulator. Saya simpan tangkapan layarnya dulu sebagai pembanding. *(Ambil screenshot.)* Sekarang, apa yang terjadi kalau catatan Pak Asep diubah?

---

## Slide 11 — Demo Perubahan: 52 kg Menjadi 42 kg

**Petunjuk:** Di halaman Blockchain, ubah **hanya** data blok 1 dari `52 kg` menjadi `42 kg`. Jangan mengubah blok lain. Tunjuk hash blok 1 lalu kolom Prev blok 2. Lalu kembali ke slide dan jelaskan diagram.

**Narasi (±3,5 menit):**

> **Langkah satu: ubah hanya catatan Pak Asep di blok 1.** Saya ganti lima puluh dua menjadi empat puluh dua. *(Ketik.)* Sekarang lihat layarnya. Apa yang terjadi?
>
> Bukan hanya blok 1 yang merah. **Blok 2, 3, 4, dan 5 semuanya ikut merah.** Padahal saya hanya mengubah satu angka di blok 1. Mari kita urai kenapa.
>
> **Langkah dua: bandingkan hash blok 1 dengan Prev di blok 2.** Hash blok 1 berubah karena datanya berubah. Di simulator ini, kolom Prev blok 2 **otomatis ikut diperbarui** mengikuti hash blok 1 yang baru. Karena Prev blok 2 berubah, hash blok 2 juga berubah dan tidak lagi diawali empat nol, jadi blok 2 merah. Lalu Prev blok 3 ikut berubah, hash blok 3 berubah, merah. Dan seterusnya sampai blok 5. Satu angka di depan membuat seluruh rantai di belakangnya kehilangan syarat.
>
> Sekarang lihat diagram di slide. Diagram ini menggambarkan sudut pandang yang sedikit berbeda, yaitu sudut pandang **jaringan nyata**. Di jaringan nyata, blok 2 yang sudah tersebar ke banyak komputer **tidak ikut berubah otomatis**. Blok 2 tetap menyimpan **Prev: H1 lama**. Jadi ketika blok 1 versi baru, dengan hash **H1 baru**, dibandingkan dengan blok 2, rujukannya **berbeda**. Simulator memperbarui Prev secara otomatis supaya kita bisa melihat rambatannya; diagram menunjukkan bahwa pada dasarnya rujukannya sudah tidak cocok.
>
> Dua sudut pandang itu menyampaikan pesan yang sama, seperti di pita bawah: **rantai memperlihatkan hubungan antarnilai ketika isi blok berubah.** Perubahan satu catatan tidak bisa disembunyikan di satu tempat saja; dampaknya terlihat di seluruh rantai sesudahnya.
>
> Sekarang pertanyaan berikutnya: bagaimana kalau pelakunya tidak menyerah, lalu menghitung ulang semuanya?

---

## Slide 12 — Rantai Dihitung Ulang Secara Lokal

**Petunjuk:** Tekan **Mine** pada blok 1 saja, tunjukkan blok 2–5 masih merah. Lalu Mine blok 2, 3, 4, 5 berurutan sampai semuanya hijau. Buka polling. Kunci: **tidak**.

**Narasi (±5 menit, termasuk polling):**

> Kita berperan sebagai pelaku yang gigih. **Langkah satu: Mine blok 1.** *(Klik.)* Blok 1 hijau lagi, sekarang dengan data empat puluh dua kilogram. Tetapi lihat blok sesudahnya: **blok 2 sampai 5 masih merah.** Kenapa? Karena saat blok 1 di-mine, hash-nya berubah lagi, Prev blok 2 ikut berubah lagi, dan blok-blok berikutnya tetap tidak memenuhi syarat.
>
> **Langkah dua: Mine blok 2 sampai 5 secara berurutan.** *(Klik Mine blok 2, 3, 4, 5.)* Dan lihat: **seluruh rantai kembali hijau.** Rantai versi empat puluh dua kilogram sekarang terlihat rapi, tersambung, dan memenuhi syarat simulator. Persis seperti rantai aslinya. *(Bila perlu, tampilkan screenshot keadaan awal di samping sebagai pembanding: hash-hash-nya berbeda, tetapi sama-sama hijau.)*
>
> Ini pengakuan yang jujur: **mengubah dan menghitung ulang rantai itu bisa dilakukan.** Di simulator ini, kerjanya hanya beberapa detik, karena syaratnya ringan: empat angka nol. Di jaringan Proof of Work sungguhan seperti Bitcoin, syaratnya jauh, jauh lebih berat, sehingga menghitung ulang satu blok saja membutuhkan tenaga komputasi yang sangat besar. Tetapi secara prinsip, rantai yang dihitung ulang bisa terlihat rapi.
>
> **Langkah tiga: polling.** Pertanyaannya: **seluruh blok sudah hijau. Apakah versi empat puluh dua kilogram ini otomatis menjadi riwayat yang diterima oleh semua pihak?** Jawab ya atau tidak di polling. Dua puluh detik.
>
> *(Tunggu, tampilkan hasil.)*
>
> Jawabannya: **tidak.** Lihat dua kalimat di bawah slide. **Hasil lokal menunjukkan syarat simulator terpenuhi. Aturan jaringan masih menentukan riwayat yang diterima.** Kata kuncinya **lokal**. Yang saya ubah dan hitung ulang hanyalah **satu salinan** di **satu browser** di laptop saya. Di dunia nyata, salinan rantai itu ada di ribuan komputer lain yang masih memegang versi lima puluh dua kilogram. Mereka tidak akan langsung berkata, "Oh, rantainya hijau, kami ikut." Mereka punya **aturan** untuk memilih riwayat mana yang diterima. Simulator ini belum memodelkan aturan dan persaingan itu.
>
> Jadi, potongan jawaban pertama untuk pertanyaan besar kita: **menghitung ulang rantai secara lokal berbeda dengan diterima oleh jaringan.** Untuk memahami siapa "jaringan" itu dan bagaimana mereka memeriksa, kita masuk ke bagian berikutnya.

---

## Slide 13 — Dompet, Node, dan Pembuat Blok

**Petunjuk:** Materi B dan Demo 2 dimulai (20 menit untuk slide 13–16: ±12 menit konsep, ±8 menit demo). Baca tabel baris per baris. Tekankan pita bawah.

**Narasi (±3 menit):**

> Tadi saya terus menyebut kata "jaringan". Siapa saja sebenarnya yang ada di dalam jaringan blockchain? Di tabel ini ada empat peran yang perlu kalian bedakan.
>
> **Pertama, dompet.** Tugasnya mengelola kunci, menandatangani, dan mengirim transaksi. Ingat P2: kunci privat dipakai untuk menandatangani. Dompet adalah aplikasi yang menyimpan kunci itu dan membantu kita membuat tanda tangan. Jadi kalau kalian mendengar orang berkata "dompet kripto", jangan bayangkan dompet berisi koin. Isi dompet adalah **kunci**; catatan saldonya ada di blockchain. Dompet juga tidak selalu ikut memeriksa seluruh rantai; banyak dompet hanya bertanya ke node lain.
>
> **Kedua, full node.** Ini komputer yang menjalankan perangkat lunak blockchain, menyimpan informasi rantai yang diperlukan, dan **memeriksa data menurut aturan protokol.** Protokol artinya aturan main yang disepakati semua peserta jaringan. Full node bisa diibaratkan sebagai **pemeriksa independen**. Setiap blok dan transaksi yang datang diperiksa: tanda tangannya cocok? Format dan aturannya dipenuhi? Kalau tidak, ditolak.
>
> **Ketiga, miner pada Proof of Work.** Ini yang tadi kita tiru di simulator: pihak yang **mencari blok yang memenuhi target komputasi**, dengan mencoba nonce terus-menerus. Contohnya di Bitcoin.
>
> **Keempat, proposer atau validator pada Proof of Stake.** Di jaringan seperti Ethereum saat ini, tidak ada lagi penambangan. Yang ada adalah validator yang **mengusulkan blok** saat mendapat giliran, dan validator lain yang ikut memberi pernyataan menurut aturan. Detailnya kita lihat di bagian konsensus.
>
> Nah, sekarang baca pita bawah, karena ini kunci untuk memahami keamanan blockchain: **node pemeriksa dapat menolak blok yang melanggar aturan.** Pembuat blok, entah miner atau validator, **tidak** punya kuasa mutlak. Mereka boleh mengusulkan blok, tetapi kalau isi bloknya melanggar aturan, misalnya ada transaksi dengan tanda tangan palsu, ribuan node pemeriksa akan menolaknya. Jadi kekuasaan di jaringan blockchain dibagi: ada yang mengusulkan, ada yang memeriksa.
>
> Kalau dianalogikan ke koperasi: dompet itu seperti **petani yang menandatangani slip setoran**. Pembuat blok itu seperti **petugas yang menyusun halaman buku kas**. Full node itu seperti **banyak pengurus dan anggota yang masing-masing memegang salinan buku kas dan berhak memeriksa** apakah halaman baru itu sesuai aturan. Sekarang kita lihat bagaimana sebuah transaksi bergerak di antara mereka.

---

## Slide 14 — Penyebaran Transaksi dalam Jaringan

**Petunjuk:** Ikuti diagram dua baris dari kiri ke kanan: baris atas (Pengguna → Peer/node → Pembuat blok), lalu baris bawah (Blok disebarkan → Aturan diperiksa → Riwayat diperbarui). Akhiri dengan kalimat di bawah diagram.

**Narasi (±2,5 menit):**

> Diagram ini menunjukkan perjalanan satu transaksi, dari tangan pengguna sampai tercatat di riwayat. Kita ikuti pelan-pelan.
>
> **Langkah pertama, pengguna menandatangani dan mengirim.** Misalnya seseorang ingin mengirim aset. Ia membuat transaksi di dompetnya, menandatanganinya dengan kunci privat, lalu mengirimkannya ke jaringan.
>
> **Langkah kedua, peer atau node menyebarkan dan memeriksa.** Transaksi itu diterima oleh satu node. Node itu memeriksa dulu: tanda tangannya cocok, formatnya benar. Kalau lolos, ia meneruskan transaksi ke node-node tetangganya, lalu tetangga-tetangga itu meneruskan lagi ke tetangga mereka. Seperti kabar yang menyebar dari mulut ke mulut di grup WhatsApp keluarga, tetapi setiap orang memeriksa dulu sebelum meneruskan. Inilah yang disebut jaringan **peer-to-peer**: komputer-komputer saling terhubung langsung, tanpa satu server pusat.
>
> **Langkah ketiga, pembuat blok mengusulkan kumpulan transaksi.** Miner atau proposer mengambil sejumlah transaksi yang menunggu, menyusunnya menjadi kandidat blok, lalu mengusulkannya.
>
> Sekarang baris bawah. **Langkah keempat, blok disebarkan, node menerima.** Blok usulan itu dikirim ke seluruh jaringan dengan cara yang sama: dari node ke node. **Langkah kelima, aturan diperiksa: blok sah atau ditolak.** Setiap node memeriksa blok tersebut secara mandiri. Kalau sah, diterima. Kalau melanggar aturan, ditolak. **Langkah keenam, riwayat diperbarui sesuai protokol.** Node yang menerima blok itu menambahkannya ke ujung rantai miliknya.
>
> Lihat kalimat di bawah diagram, karena ini realita jaringan: **pesan dapat terlambat. Salinan node bisa berbeda sementara.** Bayangkan ribuan komputer di berbagai negara, dengan koneksi internet yang berbeda-beda. Tidak semua node menerima blok baru pada detik yang sama. Ada node di Jakarta yang sudah menerima, ada node di tempat lain yang belum. Jadi untuk sesaat, isi salinan mereka bisa berbeda. Ini normal, bukan kerusakan. Tetapi justru karena salinan bisa berbeda, jaringan membutuhkan **aturan** untuk akhirnya sampai pada riwayat yang sama. Mari kita lihat perbedaan salinan itu di simulator.

---

## Slide 15 — Demo Distributed: Tiga Peer

**Petunjuk:** Buka tab https://andersbrownworth.com/blockchain/distributed. Tunjukkan bahwa antarmuka menampilkan **Peer A, Peer B, dan Peer C** (jangan menyebut lima peer). Siapkan isi awal yang sama di ketiga peer, Mine berurutan, lalu ambil screenshot pembanding.

**Narasi (±4,5 menit):**

> Kita buka halaman ketiga simulator: **Distributed**. Di sini ada **tiga peer**, yaitu Peer A, Peer B, dan Peer C. Anggap saja tiga komputer berbeda yang masing-masing memegang **salinan rantai yang sama**. Misalnya, salinan di kantor koperasi, salinan di ketua kelompok Tani Mukti, dan salinan di ketua kelompok Sauyunan.
>
> **Langkah satu: isi salinan awal yang sama pada Peer A, B, dan C.** Saya masukkan catatan setoran yang sama di ketiga peer, termasuk catatan Pak Asep **lima puluh dua kilogram**, lalu saya Mine berurutan sampai semua blok hijau. *(Isi dan Mine. Bila waktu terbatas, cukup isi blok pertama dengan catatan Pak Asep di ketiga peer.)*
>
> Sekarang perhatikan: karena isinya sama persis, hash blok terakhir di Peer A, Peer B, dan Peer C juga **sama persis**. *(Tunjuk hash blok terakhir di ketiga peer.)* Itu cara cepat untuk mengecek apakah tiga salinan identik: cukup bandingkan hash blok terakhirnya. Kalau hash blok terakhir sama, seluruh isi rantai di belakangnya pasti sama, karena setiap blok terkait dengan blok sebelumnya.
>
> **Langkah dua: simpan tampilan pembanding.** Saya ambil tangkapan layar keadaan awal ini, supaya nanti kita bisa membandingkan sebelum dan sesudah perubahan. *(Ambil screenshot.)*
>
> Satu catatan di pita bawah: **gunakan tiga peer sesuai antarmuka simulator.** Simulator ini memang hanya menampilkan tiga peer. Jaringan sungguhan bisa memiliki ribuan node. Tiga sudah cukup untuk menunjukkan idenya.

---

## Slide 16 — Perubahan pada Satu Peer

**Petunjuk:** Di halaman Distributed, ubah catatan Pak Asep menjadi 42 kg **hanya di Peer A**, lalu Mine berurutan sampai rantai Peer A hijau. Bandingkan dengan Peer B dan C. Kembali ke slide, baca tabel dan dua kalimat. Lalu umumkan jeda 5 menit dengan tiga pertanyaan jeda.

**Narasi (±4,5 menit, lalu jeda):**

> Sekarang kita ulangi skenario jahat, tetapi kali ini hanya di **satu komputer**. Saya ubah catatan Pak Asep menjadi empat puluh dua kilogram **hanya di Peer A**. *(Ubah.)* Peer A langsung merah dari blok yang diubah sampai ujung. Lalu saya hitung ulang: Mine berurutan. *(Mine.)* Peer A kembali hijau.
>
> Lihat tabel di slide. **Peer A: empat puluh dua kilogram, bisa konsisten secara lokal.** Rantai di Peer A rapi dan hijau. **Peer B: lima puluh dua kilogram, tetap pada versi awal. Peer C: lima puluh dua kilogram, tetap pada versi awal.** *(Di simulator, tunjuk hash blok terakhir: hash Peer A sekarang berbeda dari Peer B dan C, sedangkan Peer B dan C masih sama satu sama lain.)*
>
> Jadi sekarang ada **dua versi riwayat** di jaringan kecil kita. Satu versi di Peer A, satu versi lagi di Peer B dan Peer C. Pelaku berhasil merapikan salinannya sendiri, tetapi dua salinan lain tetap memegang versi aslinya. Inilah gunanya catatan yang **disalin ke banyak pihak**: perubahan di satu tempat langsung kelihatan berbeda dibanding tempat lain.
>
> Baca dua kalimat di bawah. **Perbedaan salinan memerlukan aturan penerimaan riwayat.** Kalau ada dua versi, harus ada aturan untuk memutuskan mana yang diterima. **Menghitung jumlah jendela browser belum menjelaskan konsensus.** Mungkin ada yang berpikir, "Ya sudah, dua lawan satu, yang menang lima puluh dua kilogram." Itu cara berpikir yang wajar, tetapi **bukan** cara kerja blockchain yang sesungguhnya. Di jaringan terbuka, siapa pun bisa membuat seribu komputer palsu dan mengaku sebagai seribu suara. Jadi voting satu komputer satu suara gampang dicurangi. Simulator ini hanya menampilkan beberapa rantai berdampingan sebagai perbandingan; ia **tidak** otomatis memilih pemenang. Aturan memilih pemenang itulah yang disebut **konsensus**, dan itu bagian kita setelah jeda.

**Pendalaman bila waktu tersisa (±2 menit):**

> Coba pikirkan: kalau suara ditentukan oleh jumlah komputer, apa yang dilakukan orang curang? Ia cukup menyewa seratus server murah di internet dan mengaku sebagai seratus peserta. Di jaringan terbuka, membuat identitas palsu itu murah. Istilahnya *Sybil attack*. Karena itu, mekanisme konsensus di jaringan terbuka tidak menghitung jumlah komputer, tetapi mengaitkan hak ikut serta dengan sesuatu yang **mahal dan sulit dipalsukan**: tenaga komputasi pada Proof of Work, atau modal yang dipertaruhkan pada Proof of Stake. Pegang dua kata itu, **kerja** dan **jaminan**, untuk bagian setelah jeda.

*(Pendalaman ini diucapkan sebelum pengumuman jeda.)*

**Pengumuman jeda:**

> Kita jeda lima menit. Selama jeda, saya tampilkan tiga pertanyaan. Coba jawab dalam hati, karena tiga pertanyaan ini adalah peta untuk bagian berikutnya. **Satu, apakah datanya berubah?** Itu tugas hash. **Dua, apakah transaksinya sah?** Itu tugas tanda tangan dan aturan. **Tiga, riwayat mana yang diterima jaringan?** Itu tugas konsensus. Silakan istirahat, minum, dan kita lanjut tepat lima menit lagi.

*(Jeda 5 menit. Tampilkan tiga pertanyaan jeda di chat atau di layar.)*

---

## Slide 17 — Keabsahan dan Urutan Riwayat

**Petunjuk:** Materi C dimulai (25 menit untuk slide 17–22, termasuk explorer tahap 2 ±3 menit). Sambut kembali mahasiswa. Bandingkan dua baris tabel. Baca dua kalimat di bawah.

**Narasi (±2 menit):**

> Baik, selamat datang kembali. Sebelum jeda, kita sampai pada satu kesimpulan: kalau ada beberapa versi riwayat, jaringan butuh aturan untuk memilih. Sekarang kita urai lebih teliti. Ternyata ada **dua jenis pemeriksaan** yang berbeda, dan banyak orang mencampuradukkan keduanya.
>
> **Pemeriksaan pertama: keabsahan transaksi atau blok.** Pertanyaannya: *tanda tangan cocok? Dana tersedia? Format dan aturan dipenuhi?* Ini pemeriksaan terhadap **satu transaksi atau satu blok**, apakah ia boleh diterima atau tidak. Misalnya, kalau tanda tangannya tidak cocok dengan kunci publik pengirim, transaksi ditolak. Kalau saldo pengirim tidak cukup, ditolak. Pemeriksaan jenis ini bisa dilakukan setiap node secara mandiri, cukup dengan aturan dan alat dari P2.
>
> **Pemeriksaan kedua: urutan dan riwayat bersama.** Pertanyaannya: *kandidat mana yang masuk riwayat ketika ada transaksi atau blok yang bersaing?* Ini pertanyaan yang lebih sulit. Bisa saja ada **dua** transaksi atau **dua** blok yang masing-masing sah, tetapi tidak bisa diterima bersama-sama. Lalu mana yang dipilih? Mana yang lebih dulu? Pemeriksaan tanda tangan saja tidak bisa menjawab pertanyaan ini.
>
> Analogi koperasi: pemeriksaan pertama itu seperti mengecek apakah slip setoran ditandatangani petugas resmi dan formatnya lengkap. Pemeriksaan kedua seperti memutuskan, kalau ada dua halaman buku kas yang berbeda untuk tanggal yang sama, halaman mana yang dianggap resmi.
>
> Baca kesimpulan di bawah: **hash dan tanda tangan membantu pemeriksaan. Aturan konsensus membantu menetapkan riwayat yang diterima.** Jadi alat-alat P2 menjawab pertanyaan pertama, dan konsensus menjawab pertanyaan kedua. Contoh paling terkenal dari pertanyaan kedua ada di slide berikutnya: *double spending*.

---

## Slide 18 — Double Spending: Dua Transaksi Bersaing

**Petunjuk:** Baca baris "Saldo latihan" terlebih dahulu, lalu kartu Transaksi A dan Transaksi B. Akhiri dengan dua kalimat di bawah.

**Narasi (±2,5 menit):**

> *Double spending* artinya **membelanjakan uang yang sama dua kali.** Di dunia fisik, ini hampir mustahil. Kalau saya punya selembar uang sepuluh ribu dan saya berikan ke penjual bakso, uang itu sudah pindah tangan. Saya tidak bisa memberikan lembar yang sama ke penjual es teh. Tetapi di dunia digital, data bisa disalin. Maka pertanyaannya: apa yang mencegah saya mengirim saldo digital yang sama ke dua orang sekaligus?
>
> Lihat contohnya. Ada **saldo latihan sepuluh unit pada sumber yang sama.** Pemilik saldo membuat dua transaksi. **Transaksi A: kirim sepuluh unit kepada B. Tanda tangannya cocok.** **Transaksi B: kirim sepuluh unit kepada C. Tanda tangannya juga cocok.** Kenapa dua-duanya cocok? Karena dua-duanya memang ditandatangani oleh pemilik kunci yang sah. Secara kriptografi, tidak ada yang salah.
>
> Tetapi baca pita bawah: **kedua pengeluaran tidak dapat diterima bersama dari dana sepuluh unit yang sama.** Saldonya hanya sepuluh. Kalau dua-duanya diterima, berarti dua puluh unit keluar dari dompet yang isinya sepuluh. Uang muncul dari udara. Itu tidak boleh terjadi.
>
> Jadi bagaimana jaringan memutuskan? Lihat kalimat di atas pita: **aturan dana dan urutan transaksi tetap diperlukan.** Jaringan harus sepakat transaksi mana yang masuk riwayat lebih dulu. Kalau Transaksi A masuk lebih dulu, saldonya habis, dan Transaksi B otomatis menjadi tidak sah karena dananya sudah terpakai. Atau sebaliknya. Yang penting: **semua node harus sepakat pada urutan yang sama.** Kalau node di Jakarta menganggap A yang lebih dulu, sementara node di Bandung menganggap B yang lebih dulu, kekacauan.
>
> Di sinilah terlihat jelas: **tanda tangan yang cocok belum cukup.** Tanda tangan menjawab "siapa yang menyetujui", tetapi tidak menjawab "mana yang lebih dulu". Detail bagaimana Bitcoin melacak sumber dana, yang disebut UTXO, akan kita bahas di Pertemuan 4. Sekarang kita lihat mengapa menyepakati urutan itu sulit.

---

## Slide 19 — Koordinasi dalam Kondisi Byzantine

**Petunjuk:** Ceritakan analogi para jenderal secara singkat, tanpa role play. Tunjuk tiga kartu peserta. Baca kalimat besar dan pita bawah.

**Narasi (±2,5 menit):**

> Kenapa sepakat itu sulit? Ilmuwan komputer punya cerita terkenal untuk menjelaskannya: **masalah para jenderal Bizantium**, atau *Byzantine Generals Problem*.
>
> Ceritanya begini. Beberapa jenderal mengepung sebuah kota dari arah yang berbeda. Mereka harus memutuskan bersama: serang atau mundur. Kalau semua menyerang serentak, mereka menang. Kalau hanya sebagian yang menyerang, mereka kalah. Masalahnya, mereka hanya bisa berkomunikasi lewat kurir yang membawa pesan. Pesan bisa **terlambat**. Pesan bisa **dicegat dan diubah**. Dan yang paling berat: mungkin ada **jenderal pengkhianat** yang sengaja mengirim pesan "serang" ke satu jenderal dan "mundur" ke jenderal lain, supaya kacau.
>
> Lihat tiga kartu di slide. **Peserta A: pesan datang lebih dahulu.** **Peserta B: pesan terlambat atau berbeda.** **Peserta C: sebagian pihak dapat menipu.** Ini persis kondisi jaringan blockchain: ribuan node, koneksi internet yang tidak sama cepat, dan tidak ada jaminan semua peserta jujur.
>
> Baca kalimat di tengah: **peserta perlu mengambil keputusan bersama meskipun informasi dan perilaku pihak lain berbeda.** Di blockchain, keputusan bersama itu adalah "riwayat mana yang diterima". Dan itu harus bisa diambil **tanpa** ada satu komandan pusat yang dipercaya semua orang.
>
> Pita bawah: **protokol membutuhkan aturan serta asumsi keamanan yang jelas.** Perhatikan kata *asumsi*. Tidak ada protokol yang bisa bekerja kalau **semua** pihak menipu. Setiap protokol bekerja dengan asumsi tertentu, misalnya "sebagian besar sumber daya dipegang pihak yang jujur". Selama asumsi itu terpenuhi, jaringan bisa sepakat. Kalau asumsinya dilanggar, jaminannya melemah. Jadi blockchain **tidak** menjamin semua orang jujur, dan **tidak** menjamin semua pesan sampai bersamaan. Yang dijamin adalah: dalam asumsi tertentu, peserta yang jujur akan sampai pada riwayat yang sama. Mekanisme untuk mencapai itu yang paling terkenal ada dua: Proof of Work dan Proof of Stake.

---

## Slide 20 — Konsensus dan Proof of Work

**Petunjuk:** Ikuti diagram dari kiri ke kanan: Miner → Node pemeriksa → Riwayat Bitcoin. Baca dua poin bernomor. Tekankan frasa "kerja terbesar", bukan sekadar "paling panjang".

**Narasi (±3 menit):**

> Pertama, kita definisikan dulu. **Konsensus** adalah rangkaian aturan yang memungkinkan peserta jaringan memeriksa dan menyepakati riwayat yang diterima, dalam asumsi keamanan tertentu. Proof of Work dan Proof of Stake adalah **bagian** dari mekanisme konsensus, bukan seluruhnya.
>
> Kita mulai dari **Proof of Work**, yang dipakai Bitcoin. Lihat diagram. **Miner mencoba nonce untuk target hash.** Ini persis yang kita lakukan dengan tombol Mine tadi, hanya saja targetnya jauh lebih sulit. Di simulator, kita cukup mencari hash yang diawali empat nol, dan selesai dalam hitungan detik. Di Bitcoin, mencari satu blok membutuhkan mesin khusus yang bekerja bersama-sama, menghabiskan listrik yang sangat besar.
>
> Lalu **node pemeriksa memeriksa blok dan transaksi.** Ingat, miner yang berhasil menemukan nonce **tidak** otomatis diterima. Blok usulannya tetap diperiksa: transaksinya sah? Formatnya benar? Hash-nya memenuhi target? Kalau ada pelanggaran, ditolak, dan semua listrik yang sudah dipakai miner itu terbuang percuma.
>
> Lalu **riwayat Bitcoin: rantai valid dengan kerja terbesar.** Ini aturan pemilihannya. Kalau ada beberapa versi rantai yang sama-sama valid, node memilih rantai yang **akumulasi pekerjaannya paling besar**. Sering kalian mendengar istilah "rantai terpanjang". Itu penyederhanaan. Yang lebih tepat: rantai dengan **total kerja komputasi terbesar**. Biasanya itu memang rantai terpanjang, tetapi ukurannya adalah kerja, bukan jumlah blok.
>
> Sekarang baca dua poin bernomor. **Satu: keamanan melibatkan biaya komputasi dan persaingan pekerjaan.** Kembali ke Peer A tadi. Kalau pelaku ingin versi empat puluh dua kilogramnya diterima di Bitcoin, ia harus menghitung ulang blok yang diubah **dan** semua blok sesudahnya, **lalu** menyusul dan melampaui seluruh pekerjaan jaringan yang terus bertambah. Ia berlomba melawan seluruh miner di dunia. Mahal sekali. **Dua: akumulasi pekerjaan menentukan pilihan di antara rantai valid.** Itulah aturannya.
>
> Pita bawah: **PoW membutuhkan aturan transaksi dan pemeriksaan blok selain pekerjaan komputasi.** Kerja komputasi saja tidak cukup. Blok yang dihasilkan dengan kerja raksasa tetapi berisi transaksi palsu tetap ditolak. Jadi inilah potongan kedua jawaban pertanyaan besar kita: versi pelaku belum tentu diterima karena ia harus mengalahkan kerja seluruh jaringan **dan** tetap lolos pemeriksaan aturan.

**Pendalaman bila waktu tersisa (±2 menit):**

> Kenapa miner mau repot menghabiskan listrik? Karena ada **insentif**. Miner yang berhasil membuat blok yang diterima jaringan mendapat imbalan berupa koin baru dan biaya transaksi. Jadi sistemnya dirancang supaya **jujur lebih menguntungkan daripada curang**. Kalau seorang miner berbuat curang, bloknya ditolak dan listriknya terbuang. Kalau ia jujur, ia dibayar. Pelajaran bisnisnya: keamanan blockchain publik tidak hanya bergantung pada matematika, tetapi juga pada **desain insentif ekonomi**. Tema ini akan sering muncul lagi di pertemuan-pertemuan berikutnya.

---

## Slide 21 — Proof of Stake pada Ethereum

**Petunjuk:** Demo explorer tahap 2 (±3 menit). Tunjuk screenshot Consensus Info: Slot, Epoch, Proposer Index. Bila live: buka https://etherscan.io/block/26167394 → tab **Consensus Info**. Lalu baca tabel tiga baris.

**Narasi (±4 menit):**

> Sekarang kita ke **Proof of Stake**, yang dipakai Ethereum saat ini. Lihat kalimat di atas: **validator mengikuti aturan stake, usulan blok, dan attestations.** Mari kita urai satu per satu.
>
> **Stake** artinya jaminan. Untuk menjadi validator di Ethereum, seseorang harus **menaruh sejumlah ETH sebagai jaminan**. Analoginya seperti uang jaminan yang harus disetor petugas sebelum dipercaya memegang kas. Kalau ia jujur, ia mendapat imbalan. Kalau ia curang, sebagian jaminannya bisa dipotong. Jadi yang dipertaruhkan di sini bukan listrik, melainkan **modal**.
>
> Sekarang lihat screenshot dari blok yang sama, 26167394, bagian **Consensus Info**. Ada tiga kolom. **Slot: 15406317.** Waktu di Ethereum dibagi ke dalam slot-slot pendek, dan setiap slot adalah kesempatan untuk satu blok. **Epoch: 481447.** Epoch adalah kumpulan beberapa slot. **Proposer Index: 1542054.** Ini nomor indeks validator yang mendapat giliran mengusulkan blok ini. Kalian **tidak perlu menghafal angka-angka ini**. Cukup pahami bahwa explorer mencatat **siapa yang mengusulkan blok dan pada slot berapa**, dan itu jejak nyata dari mekanisme Proof of Stake.
>
> Tabel di bawah menjelaskan tiga istilah. **Proposer: validator yang mendapat giliran mengusulkan blok.** Bukan yang paling cepat menghitung, seperti di PoW, tetapi yang mendapat giliran menurut aturan protokol. **Attestations: pernyataan validator sesuai aturan protokol.** Validator lain memeriksa blok usulan lalu memberikan semacam "suara" atau kesaksian bahwa blok itu sah. **Insentif dan penalti: imbalan serta konsekuensi sesuai perilaku validator.** Yang jujur diberi imbalan, yang melanggar dikenai penalti.
>
> Tiga catatan supaya tidak salah tafsir. **Pertama**, PoS **bukan** berarti "pemilik saldo terbesar menentukan semua transaksi". Aturannya jauh lebih rinci dari itu. **Kedua**, di halaman Overview Etherscan, kalian mungkin masih melihat kolom **Nonce** berisi nol. Itu sisa format lama; **bukan** bukti Ethereum masih ditambang. Tombol Mine di simulator tadi menggambarkan PoW, bukan Ethereum hari ini. **Ketiga**, lihat catatan kecil di slide: **Fee Recipient belum tentu validator proposer.** Di Etherscan ada kolom penerima biaya, dan itu bisa pihak lain. Jangan langsung menyimpulkan itu validatornya.
>
> Explorer membantu kita **membaca hasil** yang tercatat. Ia tidak memperlihatkan seluruh proses komunikasi dan pemungutan suara di jaringan. Sekarang kita bandingkan dua mekanisme ini berdampingan.

---

## Slide 22 — PoW, PoS, dan Mekanisme Lain

**Petunjuk:** Baca tabel per baris (aspek), bandingkan kolom PoW dan PoS. Lalu tiga kalimat di bawah tentang PoA dan PBFT. Jika waktu sempit, bagian PoA/PBFT cukup dibaca singkat.

**Narasi (±2,5 menit):**

> Tabel ini merangkum perbandingannya. Kita baca per baris.
>
> **Dasar partisipasi.** PoW: **kerja komputasi**. Siapa yang mau ikut harus menyediakan mesin dan listrik. PoS: **stake dan aturan validator**. Siapa yang mau ikut harus menaruh modal jaminan dan mengikuti aturan.
>
> **Pelaku.** PoW: **miner**. PoS: **proposer dan validator**. Di kedua sistem, node-node lain tetap memeriksa aturan.
>
> **Biaya dan keamanan.** PoW: **energi, perangkat, dan persaingan kerja**. Untuk menyerang, penyerang harus membeli dan menjalankan mesin dalam jumlah besar. PoS: **stake, insentif, penalti, dan tata kelola**. Untuk menyerang, penyerang harus menguasai modal dalam jumlah besar dan siap kehilangannya karena penalti.
>
> **Contoh.** PoW: **Bitcoin**. PoS: **Ethereum**.
>
> Dari sisi bisnis, ini penting. Kalau sebuah organisasi memilih jaringan PoW, pertanyaannya terkait energi dan perangkat. Kalau memilih PoS, pertanyaannya terkait siapa yang memegang stake, siapa validatornya, dan bagaimana tata kelolanya. Tidak ada yang "lebih baik" secara mutlak; masing-masing membawa asumsi berbeda.
>
> Di bawah tabel ada dua mekanisme lain yang cukup kalian kenali namanya. **PoA, Proof of Authority: validator yang mendapat izin.** Jadi yang boleh membuat blok hanya pihak-pihak tertentu yang sudah ditunjuk. Cocok untuk jaringan tertutup, misalnya antar beberapa perusahaan. **PBFT, Practical Byzantine Fault Tolerance: toleransi kesalahan Byzantine melalui pertukaran pesan.** Ini keluarga pendekatan di mana sekelompok peserta yang sudah saling kenal bertukar pesan beberapa putaran sampai sepakat, dan tetap bisa sepakat walaupun sebagian kecil peserta curang. Ingat masalah jenderal tadi, nah, PBFT adalah salah satu jawaban langsungnya.
>
> Kalimat terakhir: **pilihan mekanisme membawa asumsi dan tata kelola berbeda.** Untuk koperasi, PoA mungkin terdengar menarik: validatornya koperasi, gudang, dan pembeli. Tetapi itu berarti kita kembali bergantung pada kepercayaan kepada pihak-pihak yang diberi izin. Perbandingan jaringan konsorsium seperti ini akan kita bahas lebih dalam di Pertemuan 9.

**Pendalaman bila waktu tersisa (±3 menit):**

> Mari kita latih cara berpikir bisnisnya. Saya beri tiga situasi; jawab dalam hati, mekanisme mana yang terasa paling cocok, dan apa risikonya.
>
> **Situasi satu:** mata uang digital yang ingin dipakai siapa saja di dunia, tanpa izin dari siapa pun. Biasanya jaringan publik seperti PoW atau PoS, karena siapa pun boleh ikut. Risikonya: biaya, kecepatan, dan data terbuka untuk umum.
>
> **Situasi dua:** lima bank yang ingin berbagi catatan transfer antarbank. Mereka saling kenal dan terikat kontrak hukum. Biasanya PoA atau keluarga PBFT lebih cocok, karena pesertanya terbatas dan identitasnya jelas. Risikonya: kalau kelima bank itu sepakat curang, tidak ada pihak luar yang menahan.
>
> **Situasi tiga:** Koperasi Burangrang dengan satu pengurus yang dipercaya penuh oleh semua anggota. Mungkin tidak perlu konsensus antarbanyak pihak sama sekali; basis data biasa bisa cukup. Kita kembali ke pertanyaan ini di akhir sesi.
>
> Jadi, memilih mekanisme konsensus sebenarnya adalah memilih **siapa yang dipercaya dan dengan jaminan apa.**

---

## Slide 23 — Fork Riwayat dan Perubahan Aturan

**Petunjuk:** Materi D dimulai (15 menit untuk slide 23–25, termasuk explorer tahap 3 ±5 menit). Tunjuk Blok pendahulu → dua panah ke Kandidat A dan Kandidat B. Lalu dua kalimat di bawah tentang soft fork / hard fork.

**Narasi (±3 menit):**

> Kata **fork** sering muncul di berita kripto. Secara harfiah artinya **garpu** atau **percabangan**. Di blockchain, kata ini dipakai untuk **dua hal yang berbeda**, dan kita harus bisa membedakannya.
>
> **Arti pertama: cabang riwayat sementara.** Lihat diagram. Ada satu **blok pendahulu**. Lalu, hampir bersamaan, muncul **dua kandidat blok penerus**: Kandidat A dan Kandidat B. Bagaimana bisa? Ingat slide penyebaran transaksi: pesan bisa terlambat. Bisa saja dua pembuat blok di tempat berbeda sama-sama berhasil membuat blok pada waktu yang hampir sama. Sebagian node menerima Kandidat A lebih dulu, sebagian lagi menerima Kandidat B lebih dulu. Untuk sesaat, jaringan punya dua cabang.
>
> Lihat tulisan di kanan: **cabang sementara, aturan memilih riwayat yang diterima.** Ini bukan serangan dan bukan kerusakan; ini kejadian alami di jaringan yang tersebar. Yang penting, jaringan punya aturan untuk menyelesaikannya. Pada PoW, misalnya, begitu salah satu cabang mendapat blok baru di atasnya dan pekerjaannya lebih besar, node-node akan pindah ke cabang itu, dan cabang yang lain ditinggalkan. Transaksi di cabang yang ditinggalkan biasanya kembali menunggu untuk dimasukkan ke blok berikutnya.
>
> **Arti kedua: perubahan aturan protokol.** Baca kalimat di bawah: **soft fork dan hard fork membahas perubahan aturan protokol.** Ini terjadi ketika aturan main jaringan diperbarui, misalnya ada fitur baru atau perbaikan keamanan. Kalau perubahan aturannya masih bisa diterima oleh node versi lama, disebut *soft fork*. Kalau node versi lama tidak bisa menerima aturan baru, sehingga semua harus memperbarui perangkat lunak, disebut *hard fork*. Kalau sebagian peserta menolak, jaringannya bisa terpecah menjadi dua jaringan yang berjalan sendiri-sendiri.
>
> Jadi seperti tertulis di slide: **kategorinya berbeda dari dua kandidat sementara.** Yang satu adalah percabangan sesaat karena keterlambatan pesan; yang lain adalah perubahan aturan. Kalau kalian membaca berita "Ethereum melakukan hard fork", artinya ada pembaruan aturan, bukan dua blok yang bersaing. Nah, karena cabang sementara bisa terjadi, muncul pertanyaan bisnis: kapan sebuah transaksi bisa dianggap pasti?

---

## Slide 24 — Success, Konfirmasi, dan Finality

**Petunjuk:** Demo explorer tahap 3 (±5 menit). Tampilkan bertahap: (1) daftar transaksi dalam blok, (2) detail transaksi `0x63a06bf9…`, (3) pembanding blok 20000000. Bila live: dari blok 26167394 klik **153 transactions** → buka transaksi https://etherscan.io/tx/0x63a06bf97a138b288ae6b78ff6c40ab5e53cd7901c85fefb17afb3b69dcc581e → lalu https://etherscan.io/block/20000000. Akhiri dengan polling. Kunci: **tidak**.

**Narasi (±6 menit, termasuk polling):**

> Kita kembali ke Etherscan untuk terakhir kalinya. Dari blok 26167394, saya klik **153 transactions**. *(Tunjuk screenshot "Daftar transaksi dalam blok" di kanan.)* Muncul daftar semua transaksi di blok itu. Saya pilih satu, yaitu transfer ETH biasa, dan saya buka detailnya.
>
> Lihat screenshot besar di kiri. Kita baca dari atas. **Transaction Hash**, diawali `0x63a06bf9…`. Ini sidik jari **transaksi**, berbeda dengan sidik jari **blok** yang tadi kita lihat. Setiap transaksi punya identitasnya sendiri. **Status: Success.** **Block: 26167394**, jadi transaksi ini memang anggota blok yang kita pelajari dari tadi, dan di sebelahnya tertulis **14 Block Confirmations**. Lalu **From** dan **To**, yaitu alamat pengirim dan penerima. Ingat P2: alamat adalah pengenal akun. Kita **tidak** menebak siapa orang di baliknya. **Value**: sekitar 0,0278 ETH yang dipindahkan. **Transaction Fee**: biaya yang dibayar pengirim, sangat kecil, sekitar 0,0000019 ETH. Ini transaksi publik milik orang lain yang hanya kita baca. Kita tidak mengirim apa pun.
>
> Sekarang bagian terpenting slide ini: tiga kata yang sering dianggap sama, padahal **berbeda**. Baca tiga baris di bawah.
>
> **Success: eksekusi berhasil.** Artinya, ketika transaksi ini diproses, perintahnya berjalan tanpa gagal. Hanya itu.
>
> **Konfirmasi: posisi dalam riwayat.** Empat belas konfirmasi artinya sudah ada sekitar empat belas blok yang menumpuk di atas blok transaksi ini, termasuk bloknya sendiri. Semakin banyak blok di atasnya, semakin kecil kemungkinan riwayatnya berubah. Ibarat halaman buku kas yang sudah tertimpa banyak halaman baru: makin sulit dicabut.
>
> **Finalized: status finalisasi blok.** Di Ethereum, ada mekanisme yang secara eksplisit menandai blok sebagai **final**, artinya menurut aturan protokol blok itu tidak akan dibatalkan kecuali ada pelanggaran yang sangat besar dan sangat mahal. Ingat slide 6: blok 26167394 saat diambil statusnya **Unfinalized**. Jadi transaksinya Success, sudah empat belas konfirmasi, tetapi bloknya **belum** final.
>
> Sebagai pembanding, lihat screenshot kecil di kanan bawah: **blok 20000000**, blok lama dari Juni 2024, statusnya **Finalized**. Perhatikan, ini **dua blok yang berbeda**. Saya tidak sedang menunjukkan blok yang sama sebelum dan sesudah final. Saya menunjukkan bahwa label status itu ada dan berbeda antara blok yang baru dan blok yang sudah lama. Lihat juga catatan kecil: **status dan konfirmasi dapat berubah.** Kalau kalian membuka blok 26167394 hari ini, kemungkinan besar statusnya sudah berubah menjadi Finalized. Itu karena jaringannya terus berjalan.
>
> **Polling:** *Apakah status Success otomatis berarti blok sudah Finalized?* Ya atau tidak? Dua puluh detik.
>
> *(Tunggu, tampilkan hasil.)*
>
> Jawabannya **tidak**. Success menjawab "apakah perintahnya berhasil dijalankan". Finalized menjawab "apakah riwayatnya sudah pasti". Dua pertanyaan berbeda. Dalam bisnis, ini sangat praktis. Kalau kalian menjual barang murah, mungkin cukup menunggu beberapa konfirmasi. Kalau menjual barang mahal, misalnya mobil, sebaiknya menunggu sampai benar-benar final. **Kebijakan menunggu disesuaikan dengan risikonya.**

---

## Slide 25 — Serangan 51% dan Batas Kemampuan

**Petunjuk:** Baca kartu kiri "Pada contoh PoW", lalu kartu kanan "Batas kemampuan". Tekankan bahwa 51% adalah **daya hashing**, bukan jumlah orang. Akhiri dengan dua kalimat di bawah dan contoh koperasi.

**Narasi (±3,5 menit):**

> Kalian mungkin pernah mendengar istilah **serangan 51 persen**. Biasanya dibicarakan dengan nada menakutkan, seolah-olah siapa pun yang menguasai 51 persen bisa berbuat apa saja. Mari kita luruskan.
>
> Pertama, **51 persen dari apa?** Pada contoh Proof of Work, artinya **mayoritas daya hashing**, yaitu mayoritas tenaga komputasi seluruh jaringan. **Bukan** 51 persen jumlah orang, bukan 51 persen jumlah akun, bukan 51 persen jumlah dompet.
>
> Lihat kartu kiri: **pada contoh PoW, mayoritas daya hashing dapat mengganggu urutan, menyensor transaksi, atau mereorganisasi riwayat.** Kenapa? Ingat aturan PoW: rantai dengan kerja terbesar yang dipilih. Kalau penyerang punya tenaga lebih besar dari gabungan semua miner lain, ia bisa membuat rantai tandingan secara diam-diam yang lebih cepat bertambah, lalu memunculkannya. Dengan begitu ia bisa **menyensor** transaksi tertentu, yaitu menolak memasukkannya ke blok, atau **mereorganisasi** riwayat. Contohnya, ia membayar ke toko, menunggu barang dikirim, lalu memunculkan rantai tandingan di mana pembayaran itu tidak pernah terjadi. Itu *double spending* yang kita bahas tadi.
>
> Tetapi lihat kartu kanan, **batas kemampuan**: **penguasaan hashing tidak otomatis memberi kunci privat orang lain atau membuat node jujur menerima pelanggaran aturan.** Artinya, penyerang 51 persen **tidak bisa** mencuri saldo kalian, karena untuk memindahkan saldo kalian ia butuh tanda tangan dari kunci privat kalian, dan itu tidak didapat dari tenaga komputasi. Ia juga **tidak bisa** membuat transaksi yang melanggar aturan, misalnya mencetak koin dari udara, karena node-node pemeriksa akan menolak blok itu, sebesar apa pun kerjanya. Ingat slide 20: kerja saja tidak cukup, aturan tetap diperiksa.
>
> Baca baris di bawah kartu: **PoW: kepastian probabilistik. Ethereum PoS: finalisasi eksplisit.** Di PoW, kepastian bertambah sedikit demi sedikit seiring bertambahnya konfirmasi; makin banyak blok di atasnya, makin mahal untuk dibatalkan, tetapi secara teori tidak pernah seratus persen. Di Ethereum PoS, ada titik di mana blok dinyatakan final. Lalu pita bawah: **ambang dan konsekuensi serangan berbeda pada protokol PoS.** Angka 51 persen tidak berlaku sama untuk semua sistem. Di Ethereum PoS ada ambang yang berbeda untuk jenis gangguan yang berbeda, dan penyerang berisiko kehilangan stake-nya. Kalian tidak perlu menghafal angka rincinya sekarang.
>
> Contoh di koperasi: kalau ada petugas yang menguasai **satu** komputer, ia belum otomatis menguasai riwayat seluruh jaringan; kita sudah lihat itu di demo Peer A. Tetapi sebaliknya, kalau **semua** pengelola validator sepakat untuk curang bersama-sama, jaminan sistemnya melemah. Teknologi tidak bisa menggantikan tata kelola yang baik.

**Pendalaman bila waktu tersisa (±2 menit):**

> Serangan 51 persen bukan sekadar teori. Beberapa jaringan PoW kecil pernah mengalaminya: karena total daya hashing jaringannya kecil, penyerang cukup menyewa mesin dalam jumlah besar untuk sementara, lalu mereorganisasi riwayat dan melakukan *double spending*. Pelajarannya untuk bisnis: **keamanan PoW sebanding dengan besarnya kerja seluruh jaringan.** Jaringan yang besar dan ramai jauh lebih mahal untuk diserang daripada jaringan kecil yang sepi. Karena itu, bursa dan toko biasanya menetapkan jumlah konfirmasi yang berbeda untuk jaringan yang berbeda. Jaringan kecil, tunggu lebih lama.

---

## Slide 26 — Desentralisasi, Keamanan, Skalabilitas

**Petunjuk:** Materi E dimulai (15 menit untuk slide 26–27). Tunjuk tiga sudut segitiga satu per satu: Desentralisasi (atas), Keamanan (kiri), Skalabilitas (kanan). Akhiri dengan kalimat di bawah.

**Narasi (±2,5 menit):**

> Kita sudah mempelajari mesinnya. Sekarang kita mundur selangkah dan melihat dari sudut pandang desain. Segitiga ini sering disebut **trilemma blockchain**: tiga tujuan yang semuanya diinginkan, tetapi sulit dicapai sekaligus secara maksimal.
>
> **Sudut atas, desentralisasi: pengendalian dan pemeriksaan tersebar.** Semakin banyak pihak yang bisa ikut memeriksa dan membuat blok, semakin terdesentralisasi. Tidak ada satu pihak yang bisa mengendalikan semuanya.
>
> **Sudut kiri, keamanan: aturan dan riwayat tahan gangguan.** Seberapa sulit bagi penyerang untuk membatalkan riwayat atau melanggar aturan, dalam asumsi tertentu.
>
> **Sudut kanan, skalabilitas: transaksi bertambah dengan waktu dan biaya yang layak.** Kalau penggunanya bertambah dari seribu menjadi sejuta, apakah transaksi tetap cepat dan murah?
>
> Kenapa sulit dicapai bersamaan? Contohnya begini. Kalau kita ingin sangat terdesentralisasi, ribuan node di seluruh dunia harus menerima dan memeriksa setiap blok. Itu butuh waktu, sehingga jumlah transaksi per detik terbatas, dan skalabilitas tertekan. Sebaliknya, kalau kita ingin sangat cepat, cara paling mudah adalah mengurangi jumlah pemeriksa menjadi sedikit pihak yang kuat. Transaksi jadi cepat, tetapi desentralisasinya berkurang, dan kita kembali bergantung pada sedikit pihak itu.
>
> Baca kalimat di bawah: **kerangka trade-off desain. Pilihan solusi membawa asumsi dan kompleksitas.** Ini bukan rumus mati bahwa sebuah sistem hanya boleh punya dua dari tiga. Banyak insinyur terus mencari cara memperbaiki kompromi ini. Tetapi setiap solusi biasanya membawa asumsi baru atau kerumitan baru. Sebagai calon pebisnis digital, sikap yang tepat adalah: setiap kali ada yang menawarkan blockchain yang "paling cepat, paling aman, paling terdesentralisasi", tanyakan, *apa yang dikorbankan, dan apa yang diasumsikan?* Sekarang kita terapkan cara berpikir ini ke koperasi kita.

**Pendalaman bila waktu tersisa (±3 menit):**

> Kita pakai segitiga ini untuk membaca tiga contoh. **Bitcoin** sangat menekankan desentralisasi dan keamanan; konsekuensinya, jumlah transaksi per blok terbatas dan biaya bisa naik saat ramai. **Ethereum** juga menekankan desentralisasi dan keamanan, lalu berupaya menambah kapasitas dengan solusi tambahan yang dibangun di atasnya, yang membawa kerumitan dan asumsi baru. **Jaringan konsorsium**, misalnya beberapa perusahaan dengan validator yang ditunjuk, biasanya cepat dan murah, tetapi desentralisasinya terbatas pada beberapa pihak itu.
>
> Tidak ada yang salah dari tiga pilihan itu. Yang salah adalah memilih tanpa tahu apa yang dikorbankan. Coba bayangkan koperasi: apa yang paling penting bagi petani, kecepatan saat menyetor, biaya serendah mungkin, atau jaminan bahwa tidak ada satu pengurus pun yang bisa mengubah catatan sendirian? Jawaban atas pertanyaan itu yang menentukan posisi koperasi di segitiga ini.

---

## Slide 27 — Kebutuhan Koperasi Burangrang

**Petunjuk:** Baca tabel baris per baris: kebutuhan di kiri, pertanyaan bisnis di kanan. Akhiri dengan dua kalimat di bawah dan refleksi amanah singkat. Jangan memutuskan platform; itu P9.

**Narasi (±3,5 menit):**

> Seandainya pengurus Koperasi Kopi Tani Burangrang datang kepada kalian dan berkata, "Kami ingin pakai blockchain", apa yang harus kalian tanyakan dulu? Bukan "pakai Bitcoin atau Ethereum?", tetapi pertanyaan bisnis. Tabel ini memasangkan empat kebutuhan dengan pertanyaannya.
>
> **Kebutuhan pertama: petani dapat memeriksa setoran.** Pertanyaannya: **siapa boleh membaca dan memeriksa?** Apakah semua anggota bisa melihat semua setoran, atau hanya setorannya sendiri? Apakah pembeli kopi juga boleh melihat?
>
> **Kebutuhan kedua: banyak organisasi mencatat kopi.** Koperasi, gudang, pengolah, pembeli. Pertanyaannya: **siapa berwenang menerima catatan?** Ini langsung terkait konsensus. Apakah siapa pun boleh membuat blok seperti di jaringan publik, atau hanya beberapa pihak yang ditunjuk seperti PoA?
>
> **Kebutuhan ketiga: kasir memproses cepat.** Pertanyaannya: **berapa lama menunggu kepastian dan berapa biayanya?** Ingat slide 24: Success, konfirmasi, dan final itu butuh waktu. Kalau petani harus menunggu lama hanya untuk mendapat bukti setoran, atau setiap catatan dikenai biaya transaksi, itu bisa jadi masalah operasional.
>
> **Kebutuhan keempat: privasi anggota.** Pertanyaannya: **data apa yang dibagikan atau disimpan di luar blockchain?** Di jaringan publik, apa yang dicatat bisa dibaca siapa saja, seperti tadi kita membaca transaksi orang lain di Etherscan. Apakah pantas nama dan pendapatan petani terbuka untuk dunia? Mungkin yang dicatat di blockchain cukup hash-nya saja, sedangkan datanya disimpan di tempat lain.
>
> Lalu baca dua kalimat di bawah. **Basis data biasa tetap menjadi pembanding yang layak.** Ini jujur dan penting. Kalau koperasi hanya punya satu pengelola yang sudah dipercaya semua anggota, dan kebutuhannya sederhana, aplikasi basis data biasa dengan pencatatan log yang baik mungkin sudah cukup, lebih murah, dan lebih cepat. Blockchain bukan jawaban untuk semua masalah. Keputusan platform dan kelayakannya akan kita bahas di Pertemuan 9.
>
> **Amanah pencatatan membutuhkan fakta dan bukti penimbangan.** Ini pesan yang sudah kita ulang sejak P2, dan sekarang lebih tajam. Hari ini kita lihat bahwa ribuan komputer bisa **sepakat** tentang sebuah catatan. Tetapi kesepakatan digital itu **tidak** membuktikan berat kopi di timbangan. Kalau sejak awal petugas menulis empat puluh dua kilogram padahal kopinya lima puluh dua, seluruh jaringan akan dengan rapi menjaga catatan yang salah itu. Dalam Al-Qur'an, surah Al-Muthaffifin dibuka dengan ancaman bagi orang-orang yang curang dalam takaran dan timbangan, yang minta dicukupkan saat menerima tetapi mengurangi saat menimbang untuk orang lain. Teknologi membantu akuntabilitas, tetapi **amanah** tetap ada pada manusia: memasukkan fakta yang benar, menjaga kewenangan, dan tidak memanipulasi catatan.

**Pendalaman bila waktu tersisa (±4 menit):**

> Supaya lebih konkret, kita bayangkan satu alur bersama-sama. Pak Asep datang ke gudang membawa kopi. Kopi ditimbang: lima puluh dua kilogram. Di titik ini, **bukan blockchain** yang menentukan kebenaran, melainkan timbangan yang terkalibrasi, petugas yang jujur, dan Pak Asep sendiri yang ikut menyaksikan angka di layar timbangan. Lalu petugas mencatat dan menandatangani secara digital; itu materi P2. Catatan itu masuk blok; itu materi hari ini. Salinan blok dipegang koperasi, gudang, dan pembeli, sehingga tidak ada satu pihak pun yang bisa mengubahnya diam-diam.
>
> Jadi blockchain menjaga catatan **setelah** fakta dicatat. Untuk memperkuat **sebelum** fakta dicatat, koperasi tetap butuh prosedur: kalibrasi timbangan, saksi, foto bukti, atau slip yang ditandatangani petani. Kalau suatu saat ditanya, "Apakah blockchain menyelesaikan kecurangan timbangan?", jawaban yang matang adalah: *blockchain membantu mencegah catatan diubah sesudahnya dan memperjelas siapa yang mencatat, tetapi kebenaran timbangan tetap bergantung pada prosedur dan amanah manusia.*

---

## Slide 28 — Kuis Pemahaman: Soal 1–3

**Petunjuk:** Bagian kuis dan penutup (20 menit untuk slide 28–30: kuis 6, pembahasan 8, rangkuman 4, pengantar P4 dan penutup 2). Jalankan polling per soal, ±40 detik per soal. **Jangan tampilkan kunci sebelum polling ditutup.** Kunci: **1B, 2C, 3B.**

**Narasi (±5 menit, termasuk polling dan pembahasan):**

> Baik, sekarang saatnya menguji pemahaman. Ada enam soal, tiga di slide ini dan tiga di slide berikutnya. Jawab lewat polling, satu soal sekitar empat puluh detik. Tidak ada nilai; ini untuk memastikan konsep utamanya sudah tertangkap.
>
> **Soal satu: apa fungsi hash blok sebelumnya?** A, menyembunyikan nama. B, merujuk pendahulu. C, menjamin timbangan. Silakan.
>
> *(Tutup polling, bacakan hasil.)* Jawabannya **B, merujuk pendahulu.** Ingat Parent Hash di Etherscan, yang sama persis dengan hash blok 26167393. Hash itulah yang menyambung blok menjadi rantai. Bukan A, karena hash bukan enkripsi; data tidak disembunyikan. Bukan C, karena tidak ada hash yang bisa menimbang kopi.
>
> **Soal dua: rantai perubahan kembali hijau di simulator. Kesimpulannya?** A, jaringan pasti menerima. B, berat benar. C, syarat lokal terpenuhi. Silakan.
>
> *(Tutup polling.)* Jawabannya **C, syarat lokal terpenuhi.** Hijau di simulator hanya berarti hash-nya diawali empat nol di satu browser. Bukan A, karena jaringan punya aturan konsensus sendiri; ingat Peer A yang hijau tetapi berbeda dari Peer B dan C. Bukan B, karena simulator tidak tahu berat kopi yang sebenarnya.
>
> **Soal tiga: dua transaksi bersaing memiliki tanda tangan cocok. Apakah keduanya pasti dapat diterima?** A, ya. B, tidak. Silakan.
>
> *(Tutup polling.)* Jawabannya **B, tidak.** Ini kasus *double spending*. Dua-duanya sah tanda tangannya, tetapi dananya hanya sepuluh unit. Aturan dana dan urutan tetap diperiksa, dan jaringan harus sepakat mana yang masuk lebih dulu. Tanda tangan cocok itu syarat perlu, tetapi belum cukup.

---

## Slide 29 — Kuis Lanjutan dan Rangkuman

**Petunjuk:** Lanjutkan polling soal 4–6. Kunci: **4B, 5A, 6B.** Setelah pembahasan, sampaikan rangkuman lima pesan secara lisan, lalu tunjuk pita bawah.

**Narasi (±6,5 menit, termasuk polling dan pembahasan):**

> **Soal empat: angka 51 persen dalam contoh PoW mengacu pada …?** A, jumlah manusia. B, daya hashing. C, jumlah akun. Silakan.
>
> *(Tutup polling.)* Jawabannya **B, daya hashing.** Mayoritas tenaga komputasi jaringan. Bukan jumlah orang, bukan jumlah akun. Satu orang dengan pabrik mesin bisa punya daya hashing lebih besar dari sejuta orang dengan laptop.
>
> **Soal lima: perbandingan mana yang tepat?** A, PoW memakai kerja, PoS memakai stake dan aturan validator. B, PoS tanpa aturan. C, PoW tanpa hash. Silakan.
>
> *(Tutup polling.)* Jawabannya **A.** PoW memakai kerja komputasi, PoS memakai stake dan aturan validator. Bukan B, karena PoS justru penuh aturan: proposer, attestations, insentif, dan penalti. Bukan C, karena PoW justru bekerja dengan mencari hash yang memenuhi target.
>
> **Soal enam: transaksi final menjamin berat kopi benar?** A, ya. B, tidak. Silakan.
>
> *(Tutup polling.)* Jawabannya **B, tidak.** Ini soal yang paling penting menurut saya. Final artinya riwayatnya sudah pasti menurut aturan protokol. Tetapi protokol tidak pernah melihat timbangan di gudang koperasi. Kalau yang dicatat salah sejak awal, yang final adalah catatan yang salah.
>
> Sekarang saya rangkum seluruh pertemuan hari ini dalam **lima pesan**.
>
> **Satu, transaksi dikelompokkan menjadi blok yang terkait melalui hash.** Setiap blok menyimpan hash pendahulunya, seperti Parent Hash di Etherscan.
>
> **Dua, mengubah data dan menghitung ulang rantai secara lokal belum membuatnya diterima jaringan.** Kita lihat sendiri: rantai empat puluh dua kilogram bisa hijau di simulator dan di Peer A, tetapi Peer B dan C tetap memegang versi aslinya.
>
> **Tiga, node memeriksa aturan, dan mekanisme konsensus membantu menetapkan riwayat bersama.** Keabsahan diperiksa dengan tanda tangan dan aturan; urutan dan riwayat ditetapkan dengan konsensus, seperti PoW dan PoS.
>
> **Empat, kepastian transaksi dan keamanan bergantung pada mekanisme, kondisi jaringan, dan tata kelola.** Success, konfirmasi, dan Finalized adalah tiga hal berbeda; serangan 51 persen punya batas.
>
> **Lima, teknologi pencatatan tetap membutuhkan data awal yang benar serta prosedur bisnis yang bertanggung jawab.**
>
> Dan sekarang kita bisa menjawab pertanyaan besar dari awal kuliah: *kalau seseorang mengubah catatan setoran lalu menghitung ulang semua hash, mengapa versi itu belum tentu diterima jaringan?* Karena **salinannya ada di banyak node yang memeriksa sendiri, dan untuk diterima, versi itu harus lolos aturan dan memenangkan mekanisme konsensus, misalnya mengalahkan kerja seluruh jaringan pada PoW, bukan sekadar hijau di satu komputer.** Pita bawah merangkumnya: **rantai terkait hash, node memeriksa aturan, fakta awal tetap perlu bukti.**

---

## Slide 30 — Latihan Mandiri dan Pertemuan Berikutnya

**Petunjuk:** Jelaskan latihan opsional (tidak dinilai, tidak menambah bobot tugas). Sebut sumber belajar, lalu pengantar P4. Buka tanya-jawab, tutup dengan doa kafaratul majelis.

**Narasi (±3,5 menit, ditambah tanya-jawab):**

> Kita sampai di slide terakhir. Hari ini **tidak ada tugas berbobot baru.** Tugas 1 dari minggu lalu tetap berjalan, dan Tugas 2 baru dimulai di Pertemuan 5. Tetapi saya sediakan **latihan opsional, tanpa bobot nilai**, bagi yang ingin memperkuat pemahaman.
>
> Pilih **salah satu** dari dua latihan. **Pilihan pertama, simulator perubahan data.** Buka halaman Blockchain di simulator Anders Brownworth, isi dengan transaksi fiktif buatan kalian sendiri, simpan satu tangkapan layar keadaan awal dan satu sesudah perubahan, lalu tulis tiga sampai lima kalimat: blok mana saja yang terdampak, dan mengapa rantai yang dihitung ulang belum tentu diterima jaringan. **Pilihan kedua, pembacaan explorer.** Buka blok dan transaksi Ethereum yang saya contohkan tadi, catat nomor blok, cocokkan Parent Hash dengan hash blok pendahulunya, dan jelaskan perbedaan Success dan Finalized, juga dalam tiga sampai lima kalimat. Kalau situsnya tidak bisa dibuka, pakai screenshot di slide yang saya unggah.
>
> Ingat, **P3 cukup browser, tanpa dompet dan biaya transaksi.** Tidak perlu membuat akun Etherscan, tidak perlu memasang dompet, dan jangan pernah memasukkan kunci privat atau frasa pemulihan di situs mana pun untuk latihan ini.
>
> Sumber belajarnya tertulis di slide: simulator **Anders Brownworth**, **Bitcoin Developer Guide** untuk struktur blok dan Proof of Work, dokumentasi **Ethereum.org** untuk Proof of Stake, dan **panduan screenshot Etherscan P3** yang akan saya unggah bersama slide.
>
> Lalu kotak di bawah: **Pertemuan 4: Bitcoin, transaksi, biaya, mempool, dan konfirmasi.** Hari ini kita melihat blok dari luar. Minggu depan kita masuk lebih dekat ke dalam satu transaksi Bitcoin: dari mana dananya berasal, ke mana perginya, berapa biayanya, di mana transaksi menunggu sebelum masuk blok, yaitu *mempool*, dan bagaimana konfirmasinya bertambah. Ingat soal *double spending* tadi? Minggu depan kita lihat cara Bitcoin mencegahnya dengan konsep yang disebut UTXO.
>
> Kalau ada pertanyaan, silakan sampaikan sekarang, lewat mikrofon atau chat. Kalau baru terpikir nanti, gunakan forum LMS. *(Beri waktu untuk tanya-jawab.)*
>
> Baik, terima kasih atas perhatian dan partisipasi kalian hari ini. Semoga ilmu yang kita pelajari bermanfaat, dan semoga kita semua menjadi orang yang amanah, jujur dalam mencatat dan jujur dalam menimbang. Mari kita tutup dengan doa kafaratul majelis: *Subhanakallahumma wa bihamdika, asyhadu an laa ilaaha illaa anta, astaghfiruka wa atuubu ilaik.* Sampai jumpa di Pertemuan 4. Wassalamu'alaikum warahmatullahi wabarakatuh.
