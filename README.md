# Capstone Project CSD-010

## Web Application Pembentukan Grup Berdasarkan Kepribadian berbasis Machine Learning

### Untuk membuka aplikasi:
1. Unduh/clone repository ini ke local
2. Install requirement.txt
3. Jalankan npm install melalui direktory /flask-server/static
3. Jalankan app.py, yang berada pada folder flask-server

### Langkah penggunaan aplikasi:

### Penjelasan Repository
- Pada repository terdapat file notebook dengan nama ML_Model_Capstone.ipynb, yang digunakan untuk pengembangan model machine learning.
- Source code front-end berada pada folder ../static. Pada folder tersebut berisi hasil bundle modul-modul javascript yang digunakan oleh aplikasi web dengan nama bundle.js

### About Code
- File bundle.js di-gunakan langsung oleh file index.html(pada folder templates) yang dideploy oleh web server
- Pada folder flask-server terdapat file model.pkl yang di-deploy oleh file app.py untuk melakukan prediksi



**NOTE:**
1. APLIKASI INI TIDAK DIRANCANG UNTUK BERJALAN SECARA ONLINE. 
2. PANGGUNAAN WEB SERVER HANYA UNTUK DEPLOYMENT MODEL ML
