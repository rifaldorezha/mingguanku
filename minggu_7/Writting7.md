# Writting Test week 7

## Sequelize

1. Sequelize adalah ORM (Object Relational Mapping) Node JS yang berbasis promise. Sequelize mendukung sebagian besar relational Database seperti MySQL, PostgresQL, MariaDB, SQLite dan Miscrosoft SQL Server. Dengan fitur fitur di Sequelize, kita bisa mengelola dan mengatur data di database kita dengan cepat, dan efisien.
2. Kelebihan Menggunakan ORM

   - Menambahkan kode sql dri logic aplikasi
   - Mempermudah maintenance
   - Menghindari ketergantungan Aplikasi terhadap vendor database.

3. Instalasi Sequelize
   Dengan mengetikan `npm install -g sequelize-cli` untuk mengintstall Sequwlize-cli Dengan mengetikkan `npm install --save sequelize` lalu `npm install --save sql` untuk menginstall sequelize.
4. Generate Model
   Menggunakan generate dan kita bisa mengecek ke database sehingga dapat kita gunakan untuk penimpanan DB. Generate dalam node `npx sequelize-cli db:migrate`.

5. Generate Seed
   Seed adalah data awal yang bisa kita gunakan untuk mengisi data di database untuk keperluan awal project menggunakan sequelize. Penggunaan seed saat di generate `npx sequelize-cli seed:generate -- name demo-todo`. Ketika sudah berhasil melakukan generate maka kita dapat melakukan pengisian data seed didalam file seed generator. Terdapat 2 data yang diisi yaitu “up” untuk mengisi data di db, dan “down” untuk drop atau menghapus semua data seed di DB.
6. Basic CRUD dengan Sequelize
   Setelah Model tersedia, maka model tersebut bisa kita gunakan untuk membuat CRUD. Beberapa endpoint RESTFul : <br>
   - Get All Todos
   - Get Todo Detail By Id
   - Create New Todo
   - Update Todo By Id
   - Delete Todo

## MongoDB

1. MongoDB adalah salah satu database open source NoSQL yang cukup populer digunakan.MongoDB sering dipakai untuk aplikasi berbasis Cloud, Big Data maupun Grid COmputing. Jika SQL menyimpan data menggunakan relasi tabel, MongoDB menggunakan dokumen dengan format JSON.
2. NoSQL? NoSQL adalah Not Only SQL. Artinya kita bisa mengolah database dengan fleksibel dan tidak membutuhkan Query. Akhirnya kita memiliki skalabilitas yang tinggi sesuai dengan perkembangan data kita.
3. Kelebihan dan Kekurangan MongoDB:
   - Kelebihan
     - Sistem tidak membutuhkan Tabel.
     - Tidak perlu menggunakan Tabel yang terstruktur.
     - By Default sudah menggunakan JSON(JavaScript Object Notation), sehingga memudahkan integrasi dengan JavaScript.
     - Performa lebih cepat dengan kemampuan menampung banyak data yang bervariasi.
   - Kekurangan
     - idak mendukung transaksi.
     - Masalah konsistensi data.
     - Menggunakan banyak memory.
     - Hanya bisa menampung maksimal 16MB disetiap document.
4. Anatomi Komponen dari Database MongoDB.
   Database adalah wadah untuk menyimpan berbagai macam Collection. Collection adalah tempat kumpulan dari berbagai macam document, sehingga collection sering disamakan dengan tabel pada SQL. Document adalah unit terkecil yang berada pada MongoDB.
5. Basic CRUD menggunakan MongoDB

   - Kita bisa mulai dengan menyalakan MongoDB, lalu kita bisa mengakses dengan mengetikan mongo pada terminal.
   - Untuk melihat database yang aktif, bisa gunakan db pada MongoDB shell
   - Untuk melihat daftar database bisa menggunakan show dbs
   - Untuk masuk database baru gunakan `use .. `
   - Untuk menambahkan Collection baru kita bisa gunakan. `db.createCollections(“..”)`
   - Untuk menambahkan data pada Collection kita bisa gunakan.
     ```javascript
         db.namaCollection.insert({
         data collection
         })
     ```
   - Untuk melihat data kita gunakan. `db.namaCollection.find()`
   - Untuk mengupdate data pada Collection kita bisa gunakan.

     ```javascript
         db.namaCollection.update({'datasebelum'},
         {$set:{'datasesudah'}})
     ```

   - Untuk menghapus data pada Collection kita bisa gunakan.
     ```javascript
     db.namaCollection.remove({'datayangingindihapus'})
     ```

6. Mongoose
   Mongoose adalah library yang bisa dibilang sebagai Object Modelling MongoDB untuk NodeJS. Mongoose bisa digunakan untuk mengelola hubungan antara data, menyediakan validasi.
7. Instalasi Mongose
   `npm install mongoose`
   setelah menginstall mongoose dengan npm, directory project kita akan membuat sebuah folder baru bernama `node_module`, yang berisi folder mongoose.

8. Create Connection
   Buat sebuah file javascript dalam project directory kita, dan beri nama server.js. Setelah itu buka file server.js pada editor kesukaan anda, lalu load module mongoose, `var mongoose = require('mongoose');`
   `mongoose.connect('mongodb://localhost/mongoose_basics');`
   Baris pertama termasuk pustaka mongoose. Kemudian, Saya membuka sebuah koneksi ke database yang saya sebut mongoose_basics menggunakan fungsi connect. Fungsi connect menerima dua pilihan parameter lainnya.
9. Populate
   Populate ada kaitannya dengan relasi database. Populate adalah proses penggabungan 2 collection atau lebih menjadi satu objek JSON.

## Docker

1. Docker adalah software yang menjalankan suatu aplikasi menggunakan container. Docker men-sharing kernel dari host OS, serta meng-container-kan suatu aplikasi agar dapat dijalankan dimana saja dan kapan saja. Docker berfungsi sebagai penyedia layanan virtual bagi aplikasi yg diinstall pada sebuah host.
2. Kelebihan dalam penggunaan Docker
   - Mempermudah Pengembangan Aplikasi
     Docker bisa mempermudah pekerjaan developer ketika mengembangkan aplikasi. Alasannya, Docker lebih hemat resource dan mampu menyediakan environment yang stabil untuk dijalankan di perangkat apapun, mulai dari cloud server hingga komputer pribadi.
   - Menyederhanakan Konfigurasi
     Docker tidak memiliki overhead sehingga developer bisa menjalankan aplikasi yang diuji tanpa konfigurasi tambahan.
   - Memudahkan Pengembangan Kode Pipeline
     Developer bisa memanfaatkan Docker container sebagai tempat pengujian kode Pipeline beserta tools yang diperlukan dengan lebih mudah.
   - Bisa Digunakan untuk Debugging
     Adanya fitur debug bisa membantu developer untuk mengatasi masalah pada aplikasi tanpa perlu bersusah payah meninggalkan environment di Docker.
   - Mendukung Multitenancy
     Docker cocok digunakan untuk membuat aplikasi berstruktur multitenance seperti Software as a Service (SaaS). Anda bisa membuat lebih dari satu environment yang terisolasi dan menjalankan objek aplikasi untuk setiap tenant.
   - Meningkatkan Sumber Daya dengan Cepat
     Dengan Docker, peningkatan sumber daya perangkat dapat dilakukan dengan cepat sehingga durasi pengembangan software lebih singkat.
3. Container Vs Virtual Machine
   VM memakan banyak resource dan waktu untuk booting karena melakukan virtualisasi pada host hardware-nya. Sedangkan container kebalikannya dari vm, container melakukan virtualisasi pada host OS-nya.
4. Docker Compose
   Cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung. Caranya:
   - Buat file NAMA_FILE.yaml di dalam project yang kamu buat
   - Tulis beberapa perintah ke dalam sana
   - Jalankan menggunakan perintah
     `docker-compose NAMA_FILE.yaml up`
