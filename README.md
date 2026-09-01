# SMK PINTAR RUN — SMK 17 MUNCAR

Game runner 3D mobile-first: kumpulkan berlian untuk menyelesaikan tiap level, lalu jawab kuis jurusan. Dibuat dengan HTML, CSS, JavaScript, Three.js, dan opsi SQL/Google Sheets.

## Jalankan lokal

Buka `index.html` dengan server statis (misalnya VS Code Live Server). Untuk menguji fungsi API Vercel gunakan `npx vercel dev`.

## Deploy GitHub + Vercel

1. Buat repositori GitHub, lalu unggah semua berkas proyek ini.
2. Di Vercel pilih **Add New → Project**, import repositori tersebut, lalu deploy. Tidak diperlukan build command.
3. Buat Google Sheet dan Apps Script, salin isi `google-apps-script.js`, masukkan ID spreadsheet, lalu deploy sebagai Web App.
4. Di Vercel → Project Settings → Environment Variables, tambah `GOOGLE_SHEETS_WEBHOOK` dengan URL Apps Script hasil deploy, kemudian redeploy.

Tanpa webhook pun game dapat dimainkan; leaderboard tersimpan lokal pada browser perangkat.

## Privasi

Nomor WhatsApp hanya digunakan untuk menandai skor. Untuk penggunaan publik, minta persetujuan peserta dan batasi akses Google Sheet.
