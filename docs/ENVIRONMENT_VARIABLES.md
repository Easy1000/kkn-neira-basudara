# Environment Variables - KKN Neira Basudara

Proyek web KKN Neira Basudara menggunakan environment variables untuk mengkonfigurasi dan mengamankan informasi sensitif seperti URL database. Environment variables ini disimpan dalam file `.env` yang berada di root direktori proyek.

## Environment Variables

### MONGODB_URL

- **Deskripsi**: URL koneksi ke database MongoDB yang digunakan oleh aplikasi ini.
- **Nilai Contoh**: `mongodb://localhost:27017/neira-basudara-dev`
- **Fungsi**: URL ini digunakan oleh Prisma untuk terhubung ke database MongoDB yang menyimpan data aplikasi.

## Instruksi Setup

1. **Buat File `.env`**:
   Buat file `.env` di root direktori proyek Anda jika belum ada.

2. **Salin Isi dari `.env.example`**:
   Salin isi dari file `.env.example` yang disediakan dalam proyek ini ke file `.env`.

```bash
cp .env.example .env
```
