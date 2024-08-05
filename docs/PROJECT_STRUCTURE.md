# Project Structure - KKN Neira Basudara

Proyek web KKN Neira Basudara memiliki struktur direktori dan file yang terorganisir untuk memudahkan pengembangan, pemeliharaan, dan kolaborasi. Berikut adalah penjelasan dari setiap direktori dan file penting dalam proyek ini.

## Direktori Utama

### `docs`

Direktori ini berisi file-file Markdown yang berisi dokumentasi tentang proyek. Di dalamnya, Anda akan menemukan panduan, dokumentasi teknis, dan informasi penting lainnya.

### `prisma`

Direktori ini berisi skema dan migrasi Prisma yang digunakan sebagai ORM (Object-Relational Mapping) untuk berinteraksi dengan database MongoDB.

### `public`

Direktori ini berisi file-file statis seperti gambar, ikon, dan file lainnya yang dapat diakses langsung oleh klien. File-file dalam direktori ini akan dilayani oleh server tanpa perlu pemrosesan tambahan.

### `src`

Direktori ini berisi kode sumber utama aplikasi. Di dalamnya terdapat beberapa subdirektori penting:

- `app`: Menunjukkan route dari web Next.js ini. Direktori ini juga berisi:
  - `api`: Berisi API yang dibuat oleh developer untuk mengakses berbagai fitur dan data dalam aplikasi.
  - `components`: Berisi reusable React components yang digunakan di seluruh aplikasi.

### `utils`

Direktori ini menyimpan function-function helper yang dibutuhkan oleh komponen-komponen dalam aplikasi. Fungsi-fungsi ini membantu dalam berbagai tugas umum dan dapat digunakan kembali di berbagai tempat dalam kode.

## File Utama di Root Directory

### `README.md`

File ini berisi informasi umum tentang proyek, termasuk deskripsi proyek, cara memulai, dan informasi lainnya yang berguna bagi developer dan pengguna.

### `.env`

File ini berisi variabel-variabel lingkungan (environment variables) yang digunakan oleh aplikasi. File ini tidak dibagikan secara publik dan berisi informasi sensitif seperti kunci API dan konfigurasi database.

### `.env.example`

File ini berfungsi sebagai template untuk file `.env`. Developer dapat menyalin file ini dan mengisi nilai-nilai yang sesuai untuk konfigurasi lokal mereka.

### `package.json`

File ini berisi informasi tentang proyek dan dependencies yang dibutuhkan. File ini juga berisi script yang dapat dijalankan untuk berbagai tugas pengembangan.

### `tailwind.config.js`

File ini berisi konfigurasi untuk Tailwind CSS, yang digunakan untuk styling dalam proyek ini. Konfigurasi ini memungkinkan Anda untuk menyesuaikan berbagai aspek dari Tailwind CSS sesuai kebutuhan proyek.

### `.gitignore`

File ini berisi daftar file dan direktori yang harus diabaikan oleh Git. Ini termasuk file-file yang dihasilkan secara otomatis, file konfigurasi lokal, dan file lain yang tidak perlu disertakan dalam repository.

## Struktur Direktori Lengkap

Berikut adalah struktur direktori lengkap dari proyek ini:

```
kkn-neira-basudara/
├── docs/
├── prisma/
├── public/
├── src/
│ ├── app/
│ │ ├── api/
│ │ ├── components/
│ │ ├── page.js
│ │ └── ...
├── utils/
├── .env
├── .env.example
├── .gitignore
├── README.md
├── package.json
├── tailwind.config.js
└── ...
```
