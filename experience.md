# USER INTERVIEW

## BEDA ID DAN CLASS PADA HTML TAG
### Perbedaan antara keduanya adalah:
- atribut id dipanggil menggunakan # pada css, kalo class menggunakan .
- atribut id bersifat unik, nama id tidak boleh dipakai lebih dari satu kali di dalam satu halaman HTML, sedangkan nilai dari atribut class bisa digunakan berkali-kali.
- atribut id tidak boleh memiliki karakter putih seperti spasi, sedangkan atribut class boleh menggunakan spasi jika satu element memiliki lebih dari satu class
- Selain itu, atribut id pada dokumen HTML berfungsi sebagai fragment identifier. Artinya, browser bisa menemukan suatu elemen dengan id tertentu jika URL ditambahkan dengan tanda #<nama-id>.
ex: /web/html/dasar/id-dan-class/#mengenal-atribut-global-id. Ketika diklik, browser akan melakukan scroll otomatis ke elemen dengan id yang sesuai.



## NORMALIZE CSS
### Apa itu normalize css => 
Normalize.css adalah CSS file yang membuat browser seluruh elemen HTML lebih konsisten dengan default styling yang diberika dan sesuai dengan standar modern, yaitu sudah mendukung HTML 5 serta merupakan alternatif dari tradisional CSS reset yang lama.

### Beda reset css dan normalize css
Reset CSS bertujuan untuk menghapus semua gaya browser bawaan. Elemen standar seperti H1-6, p, strong, em, dan sebagainya akhirnya tampak persis sama, tidak memiliki hiasan sama sekali. Anda seharusnya menambahkan semua hiasan sendiri.
Normalisasi CSS bertujuan untuk membuat styling peramban bawaan konsisten di seluruh peramban. Elemen-elemen seperti H1-6 akan muncul dengan huruf tebal, lebih besar dan lain-lain dengan cara yang konsisten di seluruh browser. Anda kemudian seharusnya menambahkan hanya perbedaan dalam dekorasi yang dibutuhkan desain Anda.

### Does Tailwind use normalize CSS?
Tailwind CSS comes with a great CSS Reset, called Preflight. It starts with the awesome Normalize. css project, and then nukes all default margins, styling, and borders for every HTML element.



## contoh asyncronous di javascript
`const printTimeout = () => {
    console.log(1)

    setTimeout(() => {
        console.log(2)
    }, 1000);

    setTimeout(() => {
        console.log(3)
    }, 2000);

    setTimeout(() => {
        console.log(4)
    }, 0);

    console.log(5)

    var start = new Date()
    while (true) {
        var now = new Date()
        if (now - start > 500) {
            break
        }
    }

    console.log(6)
}

1
5
6
4
2
3
`


## callback, promise, async await
### callback
Callback disebut juga dengan high-order function. Callback sebenarnya adalah function, bedanya dengan function pada umumnya adalah di cara eksekusinya. Jika function pada umumnya di eksekusi secara langsung sedangkan callback di eksekusi dalam function lain melalui parameter.

contoh penggunaan callback :
`
function kuadrat(nilai, callback) {
    let hasil = nilai * nilai;
    let error = null;
    
    if (hasil === 0)
        error = 'ngawur! error lagi!';

    callback(error, hasil);
}

let nilai = 5;

kuadrat(nilai, function(error, hasil) {
    if (error)
        console.error(error);
    else 
        console.log(hasil);
});
`

### promise
Promise suatu fungsi pada javascript, dia menjanjikan bahwa fungsi asynchronous berhasil dijalankan, apakah diterima atau ditolak/error
`
let promise = false;

const myFunction = new Promise((resolve, reject) => {
	if(promise){
		resolve('promises has been kept')
	}else{
		reject('promise not kept')
	}
})

myFunction
.then(res => console.log(`Ok ${res} !`))
.catch(res => console.log(`Its Ok ! ${res}`))
`



## pwa itu apa
[Ref](https://codesyariah122.github.io/javascript-promise/#:~:text=Sooo%20jadi%20promise%20adalah%20Sebuah,tetapi%20diharapkan%20di%20masa%20mendatang.)
PWA adalah singkatan dari Progressive Web App, sebuah aplikasi yang dibangun dengan melakukan optimasi pada sebuah website. Optimasi yang dilakukan tidak hanya akan membuat website menjadi lebih cepat namun juga mampu memberikan pengalaman layaknya menggunakan aplikasi mobile. Selain itu, Anda juga tidak perlu membuat aplikasi mobile secara terpisah. PWA merupakan aplikasi hybrid yang terinspirasi dari kemudahan penggunaan browser di berbagai platform dan kenyamanan menggunakan aplikasi mobile di ponsel atau tablet. 

Keunggulan menggunakan PWA:
- Kemudahan Digunakan di Berbagai Perangkat
- Tidak Bergantung App Store
tidak lagi bergantung kepada AppStore seperti Google Play Store, Apple Store, dan Windows Store ketika akan mempublikasikan aplikasi, lebih leluasa untuk mengembangkan aplikasi tersebut tanpa terjerat oleh persyaratan minimal yang harus dipenuhi. Jadi, Anda cukup fokus pada tampilan dan fungsi aplikasi yang optimal.
- Instalasi Cepat
tidak perlu melalui proses instalasi yang didahului dengan proses unduh, install, dan pemberian hak akses yang berbelit layaknya aplikasi mobile. cukup menambahkan website ke HomeScreen. Maka, aplikasi akan terpasang otomatis.
- Berfungsi Layaknya Aplikasi Mobile
- Kinerja Apik
Sebuah PWA memiliki service workers yang bertugas mengelola cache aset website dengan efisien. Hasilnya, aplikasi berjalan dengan cepat sehingga meningkatkan kenyamaman pengguna. \
- Update Otomatis
Saat menggunakan PWA, pengguna tidak perlu pusing tentang update aplikasi. Alasannya, PWA melakukan update secara otomatis tiap kali pengguna mengakses aplikasi. Pengguna tentu akan merasa senang karena tidak direpotkan dengan update manual seperti pada aplikasi mobile. 
- Bisa Berjalan Tanpa Jaringan Internet (Offilne mode)
- Ramah Storage
progressive web app berukuran sangat kecil jika dibandingkan dengan aplikasi mobile.
- Keamanan yang Terjamin
Kelebihan lain PWA adalah tingkat keamanan yang tinggi berkat protokol jaringan HTTPS yang digunakan. 


## fungsi setiap react hooks
useState
useEffect
useCallback
useMemo
useRef
useContext
useReducer


agile, scrum, sdlc?
sdlc > agile > scrum
