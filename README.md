# Easy Pharmacy - Backend

Backend API untuk aplikasi mobile Easy Pharmacy, sebuah platform farmasi online yang memudahkan pengguna dalam membeli obat-obatan. Backend ini menyediakan API yang diperlukan untuk mendukung semua fitur aplikasi mobile seperti autentikasi, katalog obat, manajemen keranjang, dan pemrosesan pesanan.

## Teknologi yang Digunakan

- **Node.js** - Runtime environment JavaScript
- **Express.js** - Framework web untuk Node.js
- **PostgreSQL** - Database relasional untuk penyimpanan data
- **Sequelize** - ORM (Object-Relational Mapping) untuk PostgreSQL
- **JWT** - JSON Web Token untuk autentikasi
- **Jest** - Framework testing

## ERD (Entity Relationship Diagram)

Backend ini dirancang dengan model database yang tercermin dalam ERD yang telah dibuat. Entitas utama meliputi:
- User
- Product (Obat)
- Cart
- Order
- OrderItem

## Endpoint API

### Autentikasi (User)
- **POST /user/register** - Registrasi pengguna baru
- **POST /user/login** - Login pengguna

### Obat (Drug)
- **GET /drug/list** - Mendapatkan daftar obat
- **GET /drug/datalength** - Mendapatkan jumlah total data obat

### Keranjang (Cart)
- **POST /cart/add** - Menambahkan item ke keranjang
- **GET /cart/list** - Mendapatkan daftar item dalam keranjang
- **PUT /cart/updatequantity** - Mengupdate kuantitas item dalam keranjang
- **DELETE /cart/delete** - Menghapus item dari keranjang

### Pesanan (Order)
- **POST /order/placedorder** - Membuat pesanan baru (checkout)
- **GET /order/detail** - Mendapatkan detail pesanan
- **PUT /order/paid** - Menandai pesanan sebagai sudah dibayar
- **GET /order/unpaidlist** - Mendapatkan daftar pesanan yang belum dibayar
- **GET /order/paidlist** - Mendapatkan daftar pesanan yang sudah dibayar
- **PUT /order/cancel** - Membatalkan pesanan
- **GET /order/cancellist** - Mendapatkan daftar pesanan yang dibatalkan

## Cara Instalasi dan Penggunaan

### Prasyarat
- Node.js (versi >= 14.x)
- PostgreSQL (versi >= 12.x)
- npm atau yarn

### Langkah Instalasi

1. Clone repositori ini
   ```bash
   git clone https://github.com/Nicolaakmal/easy-pharmacy-backend.git
   cd easy-pharmacy-backend
   ```

2. Instal dependensi
   ```bash
   npm install
   ```

3. Buat database PostgreSQL
   ```bash
   # Buat database PostgreSQL dengan nama misalnya 'easy_pharmacy'
   # Contoh menggunakan psql:
   psql -U postgres -c "CREATE DATABASE easy_pharmacy"
   ```

4. Buat file .env untuk konfigurasi
   ```
   # Development DB config (for sequelize-cli)
   DB_USERNAME_DEV=postgres
   DB_PASSWORD_DEV=postgres
   DB_NAME_DEV=easy_pharmacy
   DB_HOST_DEV=localhost
   DB_PORT_DEV=5432
   # Optional: if you're using these elsewhere
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=easy_pharmacy
   DB_HOST=localhost
   DB_PORT=5432
   SECRET_KEY="BitHealth2024"
   PORT=3000
   SALT_ROUND="9"
   ```

5. Jalankan migrasi database
   ```bash
   npx sequelize-cli db:migrate
   ```

6. Jalankan seeder untuk data awal (opsional)
   ```bash
   npm run seeding
   ```

7. Jalankan server
   ```bash
   npm run start
   ```

## Kontributor

- M Fajrul Nugraha - Backend Developer