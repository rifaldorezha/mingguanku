# Unix Command Line

1. <b>Shell</b> yang digunakan untuk berinteraksi antara pengguna dengan perangkat lunak / software dan sistem operasi dengan cara mengetikkan perintah ke dalam interface dan menerima respons.

2. <b>Command Line Interface</b> merupakan Interface atau antarmuka berbasis teks, CLI tersebut bisa berupa GUI atau shell. CLI memiliki contoh : <br>
                            &ensp; - bash <br> 
                            &ensp; - sh <br>
                            &ensp; - zsh <br>
                            &ensp; - cmd.exe / Command Prompt

3. <b>Cara mengakases CLI dengan menggunakan terminal </b> yang umum dipakai adalah Command Prompt, lalu ada juga yang menggunakan Bash seperti saya. Berikut adalah tampilan awal saat membuka Command Prompt atau Bash :<br> <img src="tampilan_bash.png" style="height: 200px; width: 370px; display: block; margin-left: auto; margin-right: auto;" > <br>

4. __System Structur__ dengan menyimpan semua perubahan pada directory atau file project yang dibuat oleh pengguna dan diatur dalam system tersebut. File yang sudah disimpan maka akan tersusun dengan bentuk hirarki atau tree.

5. Print working directory atau ``pwd`` digunakan untuk menampilkan current working directory.
6. Lists ``ls`` digunakan untuk melihat isi file yang ada di sebuah directory.
7. Change Directory ``cd nama_file_directory`` digunakan untuk berpindah ke directory lain. 
8. Cat ``cat nama_file`` digunakan untuk menampilkan isi dari file tersebut.
9. Head ``head nama_file`` digunakan untuk menampilkan beberapa line awal dari isi file.
10. Tail ``tail nama_file`` digunakan untuk menampilkan  beberapa line awal dari bawah isi file tersebut.
11. Touch ``touch nama_file`` digunakan untuk membuat file baru.
12. Make directory ``mkdir nama_directory`` digunakan untuk membuat directory baru.
13. Copy ``cp nama_file`` digunakan untuk menyalin file. ``cp -R nama_directory`` digunakan untuk menyalin directory.
14.  Move ``mv nama_file`` digunakan untuk memindahkan file. ``mv -R nama_directory`` digunakan untuk memindahkan directory. ``mv nama_file_lama nama_file_baru`` digunakan untuk mengubah nama file.
15. Remove ``rm nama_file`` digunakan untuk menghapus file. ``rm -R nama_directory`` digunakan untuk menghapus directory.


# Git and Github

1. __Git dan Github__ merupakan tools yang dimiliki banyak programmer yang digunakan untuk menyimpan file project yang sedang dikerjakan. __Git__ ini juga bisa digunakan untuk melacak perubahan apa saja yang terjadi dalam suatu file project. __Github__ sebagai  forum diskusi para programmer seperti halnya media sosial, dan merupakan layanan cloud yang memilik kegunaan sama untuk menyimpan dan mengelola sebuah project yang dinamakan repository (repo git).
2. Perbedaan Git dan Github :
    <table>
        <tr>
        <th></th>
        <th>Git</th>
        <th>Github</th></tr>
        <tr>
        <th>1.</th>
        <td>Meng-install software di penyimpanan lokal</td>
        <td>Host melalui layanan cloud</td></tr>
        <tr>
        <th>2.</th>
        <td>Dikelola oleh The Linux Foundation</td>
        <td>Diakuisisi oleh Microsoft pada 2018</td></tr>
        <tr>
        <th>3.</th>
        <td>Berfokus pada version control dan code sharing</td>
        <td>Berfokus pada source code hosting terpusat</td></tr>
        <tr>
        <th>4.</th>
        <td>Akses secara offline</td>
        <td>Akses secara online</td></tr>
        <tr>
        <th>5.</th>
        <td>Tidak menggunakan fitur user management</td>
        <td>Menggunakan user management</td></tr>
        <tr>
        <th>6.</th>
        <td>Menyediakan desktop interface bernama “Git GUI”</td>
        <td>Menggunakan nama desktop interface “GitHub Desktop”</td></tr>
        <tr>
        <th>7.</th>
        <td>Bersaing dengan Mercurial, Subversion, IBM, Rational Team, Concert, dan ClearCase</td>
        <td>Bersaing dengan GitLab dan Atlassian BitBucket</td></tr>
        <tr>
        <th>8.</th>
        <td>Open sourced licensed</td>
        <td>Pilihan bagi pengguna gratis dan pengguna berbayar</td></tr>
    </table><br>


3. Alur kerja Git dan Github <br> <img src="excalidraw_git_and_github.png">
4. ``git init nama_directory`` command ini akan membuat directory dan file ``.git`` sebagai tempat memori penyimpanan. Lalu jika sudah ada directory maka hanya memerlukan command ``git init .`` pada tempat directory yang sudah dibuat sebelumnya.
5. 
<!-- 
-Peserta mampu memahami kenapa Git dan Github tools yang wajib digunakan
-Peserta mampu memahami perbedaan antara Git dan Github
- Peserta mampu memahami alur kerja dari Git dan Github
- Peserta mampu memahami dan membuat Repository Git
Peserta mampu melakukan commit pada Git
Peserta mampu mempublish aplikasi ke Github
Peserta mampu melakukan cloning Github ke local -->