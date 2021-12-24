# Capstone Project CSD-010

## Web Application Pembentukan Grup Berdasarkan Kepribadian berbasis Machine Learning

### Link Deployment Aplikasi ini:
https://capstonecsd010.herokuapp.com/ 

### Untuk membuka aplikasi secara lokal:
1. Unduh/clone repository ini ke local
2. Buat environment pada  conda(anaconda).
3. Install requirement.txt
4. Jalankan npm install melalui direktory /flask-server/static
5. Jalankan app.py, yang berada pada folder flask-server

### Langkah penggunaan aplikasi:
1. Pada tampilan utama klik **Add Person** untuk menambahkan user.
2. Masukkan nama yang akan digunakan, kemudian klik **Go!**.
3. Isi semua pertanyaan yang tersedia, kemudia klik **Submit**.
4. Ulangi mulai langkah pertama untuk menambahkan user lain.
5. Jika semua user telah tercatat, klik **Create Team**.
6. Masukkan jumlah tim yang akan dibuat.
7. Apliasi akan menampilkan hasil pembagian tim.

### Penjelasan Repository
- Pada repository terdapat file notebook dengan nama ML_Model_Capstone.ipynb, yang digunakan untuk pengembangan model machine learning.
- Source code front-end berada pada folder ../static. Pada folder tersebut berisi hasil bundle modul-modul javascript yang digunakan oleh aplikasi web dengan nama bundle.js

### About Code
- File bundle.js di-gunakan langsung oleh file index.html(pada folder templates) yang dideploy oleh web server
- Pada folder flask-server terdapat file model.pkl yang di-deploy oleh file app.py untuk melakukan prediksi



**NOTE:** 
**PENGGUNAAN WEB SERVER HANYA UNTUK DEPLOYMENT MODEL ML**
