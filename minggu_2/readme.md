# Writing And Presentation Week 2

## Looping

1. Looping merupakan statement yang mengulang sebuah instruksi hingga kondisi terpenuhi atau jika kondisi stop/berhenti tercapai.

2. Alur kerja atau proses kerja dari Looping sebagai gambar dibawah ini : <br> <img src="img/excalidraw looping.png" style="width: 800px; height: 200px;"> <br> Saat ada kasus ketika sedang haus maka yang diharuskan adalah minum. Lalu kita melalui beberapa proses yaitu ketika saat minum terus masih haus maka minum, lalu saat sesudah minum masih haus maka kita minum lagi, dan saat sudah kenyang maka berhenti / stop proses. <br>

3. Ada beberapa cara untuk melakukan looping / perulangan dengan cara : <br> 
    * For loop : merupakan instruksi pengulangan yang dapat kita berikan pada program yang kita kembangkan.
    * While Loop : akan menjalankan instruksi pengulangan kondisi bernilai TRUE.
    * Do While : menjalankan pengulangan 1 kali sebelum dilakukan pengecekan kondisi


4. beberapa contoh penggunaan perulangan 
    * For Loop :
        ```javascript
        for(let a = 1; a <= 10; a++){
        console.log(a); // 1 2 3 4 5 6 7 8 9 10
        } 
        
        ```
    * While Loop:
        ```javascript
        let i = 1
        let isKetemu = false

        while (!isKetemu) {
          if (
            i % 2 == 0 && 
            i % 3 == 0 && 
            i % 4 == 0 && 
            i % 5 == 0 &&
            i % 6 == 0 
            ) {
              console.log(i);
              isKetemu = true
            }
              i++
        } 
        ```
    * Do WHile :
        ```javascript
            let  i = 1
            let isKetemu = false

                do {
                  if (
                    i % 2 == 0 && 
                    i % 3 == 0 && 
                    i % 4 == 0 && 
                    i % 5 == 0 &&
                    i % 6 == 0 
                    ) {
                       console.log(i);
                       isKetemu = true
                    }

                        i++
                } while (!isKetemu)
        
        ```
    <br>
5. Pembahasan contoh perulangan.
    * For Loop : <br>
                a memilki nilai 1, lalu kondisi a lebih kecil sama dengan 10, maka a ditambah 1 jadi 2. Lalu kasus pertama ``True`` maka ditampilkan nilai a tersebut yaitu 1. Lanjut a jadi 2 karena ditambah nilai nya, nilai a lebih kecil sama dengan 10, maka ``True`` terus ditambah 1 jadi 3. Nilai 2 tadi ditampilkan dan nilai 3 diproses selanjutnya sampai nilai jadi 11 maka ``False`` dan tidak di tampilkan karena salah, dan cukup sampai di nilai 10.
    * While    :<br>
                Variable i memiliki nilai 1 dan variable isKetemu nilai ``False``. Selama ``(!isKetemu)`` berarti kebalikan dari nilai ``False`` yaitu ``True``. Sekarang nilai isKetemu jadi ``True``. Lanjut ke ``IF``, jika ``i % 2 == 0`` i akan mencari nilai yang bisa dibagi nilai 2 yang memiliki hasil 0, maka ditampilkan nilai i.
    * Do While : <br>
                Do ini memliki ``If`` yang akan dilakukan proses terdahulu dan kondisi setelah proses ``If``. Memiliki proses cara kerja kasus yang sama dengan ``While``. Tapi ada perbedaan di proses sama kondisi di akhir. Jika saat variable i yaitu 1 maka tidak bisa dibagi 2, lalu i tambah 1 sampai jadi ``i = 10`` dan bisa ``% 2 == 0``, maka nilai ``i = 10`` dan lanjut ke statement selanjutnya ``% 3 == 0`` sampai ke nilai yang bisa dapat ``% 6 == 0``. Jadi nilai semua yang awalnya false menjadi true karena  nilai sudah ketemu dan ditampilkan. Lalu kondisi While memastikan ``(!isKetemu)`` bahwa benar varibel telah berubah dari kebalikan false yang di deklarasi di atas.
                

## Function

1. ``Function`` merupakan sebuah blok kode dalam sebuah grup untuk menyelesaikan 1 task/1 fitur. Saat kita membutuhkan fitur tersebut nantinya, kita bisa kembali menggunakannya.

2. Contoh sederhana menggunakan Function dan memanggil function.
     ```javascript
     function name(){
        console.log("Rifaldo Rezha Saputra");
    }

    name(); // output : Rifaldo Rezha Saputra
    ``` 
 <br>

3. Menggunakan Function Argumen dan Parameter
    ```javascript
    function luasPersegi(s){
    return s * s;
    }

    console.log(luasPersegi(2)); // output : 4
    ```

4. Menggunakan Arrow Function <br>
    ```javascript
    let greeting = (name) => `Halo ${name}`;

    console.log(greeting('Rifaldo')); // output : Halo Rifaldo
    ```

5. Penjelasan dari beberapa function diatas : <br>
    * Function sederhana : <br>
                            Membuat fungsi bernama ``name`` lalu dalam fungsi tersebut kita pasang blok kode dengan argumen ``console.log("Rifaldo Rezha Saputra");``. Lalu setelah itu diluar blok kode kita panggil fungsi tersebut untuk mendapatkan output hasilnya dengan cara ``name();`` maka setelah disimpan hasil di konsol akan keluar.
    * Function Argumen dan Parameter : <br>
                                        Membuat Function bernama ``luasPersegi`` lalu suatu nilai di dalam kurung itu dinamakan parameter. Dan kita lakukan blok kode dengan argumen ``return s * s;`` yang berarti ``return`` mengembalikan nilai parameter ``s`` dengan kondisi ``s * s``. Setelah itu diluar blok kode kita panggil fungsi ``console.log(luasPersegi(2));``. Jadi saat memanggil dengan cara ada ``console.log()`` lalu nama fungsi dan nilai parameternya. Maka nilai parameter akan masuk ke fungsi dan di proses perkalian dengan output hasil ``4``.
    * Function Arrow Function : <br>
                                 Variable ``let greeting`` dengan nilai fungsi yang memiliki tanda ``(name)`` dalam kurung sebagai function dan ``name`` adalah nama sebuah function. Setelah itu ``=>`` yang menandakan ``return`` lalu diikuti argumen ``Halo ${name};``. Ketika memanggil nya dengan cara ``console.log(greeting('Rifaldo'));`` yang menghasilkan output ``Halo Rifaldo``.<br>


## DOM
