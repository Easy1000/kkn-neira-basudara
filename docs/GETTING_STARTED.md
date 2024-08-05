# Getting Started

Selamat datang di bagian Getting Started dari proyek web KKN Neira Basudara. Bagian ini akan membantu Anda untuk mengatur proyek ini di mesin lokal Anda. Ikuti langkah-langkah berikut untuk memulai.

## Perequisites

Sebelum memulai, pastikan sistem Anda memenuhi persyaratan berikut:

- **Node.js** (versi 14.x atau lebih baru)
- **npm** (versi 6.x atau lebih baru) atau **yarn** (versi 1.22.x atau lebih baru)
- **Git** (untuk mengkloning repository)
- **MongoDB** (tersedia secara lokal atau melalui layanan cloud)

## Tech Stack

Proyek ini menggunakan teknologi berikut:

- **Next.js**: Framework untuk pengembangan front-end dan API
- **MongoDB**: Database yang digunakan
- **Prisma**: ORM (Object-Relational Mapping) yang digunakan
- **Tailwind CSS**: Untuk styling

## Instalasi

Ikuti langkah-langkah di bawah ini untuk mengatur proyek di mesin lokal Anda.

### 1. Clone Repository

Pertama, kloning repository ini ke mesin lokal Anda.

```bash
git clone https://github.com/Easy1000/kkn-neira-basudara.git
cd neira-basudara
```

### 2. Install Dependencies

Setelah repository berhasil dikloning, instal semua dependencies yang diperlukan.

Menggunakan npm:

```bash
npm install
```

Atau menggunakan yarn:

```bash
yarn install
```

### 3. Konfigurasi Environment Variables

Buat file .env di root direktori proyek dan tambahkan variabel environment yang diperlukan. Anda dapat menyalin isi dari file .env.example yang disediakan.

```bash
cp .env.example .env
```

Pastikan untuk mengatur variabel environment yang sesuai, seperti URL MongoDB Anda.

### 4. Migrasi Database

Gunakan Prisma untuk mengatur skema database dan melakukan migrasi.

```bash
npx prisma db push
```

### 5. Menjalankan Server pengembangan

Setelah semua langkah di atas selesai, Anda dapat menjalankan server pengembangan.

Menggunakan npm:

```bash
npm install
```

Atau menggunakan yarn:

```bash
yarn install
```

Server pengembangan sekarang akan berjalan di <http://localhost:3000>.
