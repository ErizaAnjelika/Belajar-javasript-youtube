// let namaSiswa ="Eriza Anjelika Vega";
// let umurSiswa = 20;
// let lulus = true;
// let nilaiRaport =[90,86,98,87,98,87];

// let siswa ={

//variabel yang ada didalam objek namanya properti
//     nama: "Eriza Anjelika",
//     umur : 20,
//     lulus : true,
//     nilaiRaport :[90,86,98,87,98,87],
//function didalam objek disebut method
//     totalNilai : function () {
//         let total = 0;
//         let nilai = this.nilaiRaport;
//         for (let i = 0; i < nilai.length; i++) {
//             total += nilai[i];
//         }
//             return total/nilai.length;
//     }
// }
// console.log(siswa.totalNilai());

//membuat objek literal
// let mahasiswa ={
//     nama : "nafa",
//     umur : 21,
//     ips :[3.00, 2.50, 3.20],
//     alamat:{
//         jalan :"jln.abc",
//         kota :"malang",
//         provinsi :"jawa timur"
//     }
// }
// console.log(mahasiswa.nama);
// console.log(mahasiswa["alamat"]["kota"]);

/** Membuat objek
 * - objek literal
 * - function declaration
 * - constructor function (keyword new)
 * - menggunakan method object.create()
 */

//membuat objek literal
// let mhs ={
//     nama :"lala",
//     nomor :"12",
//     email : "lala@gmail.com",
//     jurusan :"teknik nuklir"
// }
// let mhs1 ={
//     nama :"iii",
//     nomor :"12",
//     email : "ii@gmail.com",
//     jurusan :"teknik kimia"
// }
// console.log(mhs);
// console.log(mhs1);

//membuat objek dengan nama function declaration
//deklarasi dan return harus ada
// function objekMahasiswa(name,number,gmail,teknik) {
//     let siswa ={}
//     siswa.name = name;
//     siswa.number = number;
//     siswa.gmail = gmail;
//     siswa.teknik = teknik;
//     return siswa;
// }

// let siswa1 = objekMahasiswa('eriza','33','abc@gmail.com','teknik perikanan');
// console.log(siswa1);

//menggunakan constructor function (keyword new)
//new harus ditulis
// function Mhsiswa(nama,nrp,email,jurusan){
//     this.nama = nama;
//     this.nrp = nrp;
//     this.email = email;
//     this.jurusan = jurusan;
// }

// let mhs = new Mhsiswa ('nafa','12','nafa@gmail.com','teknik listrik');
// console.log(mhs);


//konsep this => sebuah keyword special yang secara otomatis didefinisikan dalam function
//konteks atau keadaan yang berbeda
//setiap kita membuat variabel di scope global sama saja dengan property atau method dari objek this
console.log();

