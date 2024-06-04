# Local Development

Ini tahapan biar bisa run projectnya di lokal

## Perequisites

Ini yang dibutuhin biar bisa run di local, ges

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- Akses Firebase Project

Download dua-duanya di [official website](https://nodejs.org/)nya, ges

**_Pastikan anda sudah mempunyai akses ke projek Firebase website KKN Banda Neira_**

Kontak project manager agar mendapatkan akses tersebut!

## Project Setup

Untuk setup projeknya, ada beberapa tahapan:

1.**Clone Projeknya**

- bisa pake web url

```bash
git clone https://github.com/Easy1000/kkn-neira-basudara.git
```

- bisa pake ssh

```bash
git clone git@github.com:Easy1000/kkn-neira-basudara.git
```

- bisa pake github cli

```bash
gh repo clone Easy1000/kkn-neira-basudara
```
terserah

2.**Install Dependencies**:

1. Install Project Dependencies

```bash
cd kkn-neira-basudara
npm install
```

2. Install Firebase CLI

```bash
npm install -g firebase-tools
```

3. Login ke Firebase

```bash
firebase login
```

3.**Konfigurasi Environment Variable**

1. Buat .env.local file

```bash
cp .env.example .env.local
```

2. Isi .env.local file dengan informasi projek yang ada di Firebase Console

    Informasi  ini ada di Project Settings.

```bash
apiKey=
authDomain=
projectId=
storageBucket=
messagingSenderId=
appId=
measurementId=
```

4.**Run Projek Secara Local**

Ada 2 cara untuk run projek secara lokal

1. Run Next.js projek saja

```bash
npm run dev
```

2. Run Firebase Service yang dipakai secara lokal, seperti hosting

    Untuk sekarang, firebase service yang dipakai hanya hosting

    *Informasi ini akan diupdate sesuai perubahan*

```bash
firebase emulators:start
```