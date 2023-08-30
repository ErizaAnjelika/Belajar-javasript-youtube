/** Object oriented programing
 * - oop adalah sudut pandang bahasa pemrograman yang berkonsep "objek"
 * - ada banyak sudut pandang bahasa pemnrograman, namun OOP adalah yang sangat populer saat ini.
 * - istilah dalam oop yaitu object dan class
 * - object adlah data berisi field/properti/atribut dan method/ function/behavior
 * Class adalah
 * - bluprint, prototype atau cetakan untuk membuat objek
 * - berisi deklarasi semua property dan function yang dimiliki oleh objek
 * - setiap objek selalu dibuat dari class
 * - sebuah class bisa membuat objek tanpa batas
 * 
 * contoh :
 * class : person
 * property : string firstName, string lastName
 * function : string sayHello(string name), string sayGOddBye(string name)
 * object : eko {firsName : "eko", lastName: "eko"}
 */

/** Membuat constructor function
 * - sebelum EcmaScript versi 6, pembuatan class biasanya menguunakan function.
 * - karena javascript bukanlah bahasa pemrograman yang fokus ke OOP
 * - untuk membuat clas di javascript lama, kita bisa membuat function.
 * 
 */

//constructor function
//nama function awal kata harus Huruf besar 
//menggunakan kata kunci new diikuti nama constructor function
//menggunakan kata kunci this untuk menambah property di dalam suatu objek
/*function Person() {
    this.firstName = ""; //property
    this.lastName = "";
}

const eko = new Person();
eko.firstName = "eko";
eko.lastName = "aa"
const budi = new Person();
budi.firstName = "Budi";
budi.lastName = "bb"

console.log(eko);
console.log(budi);
*/

//method di constructor function
//jika ditambahkan method di constructor function, secara otomatis object yang dibuat memiliki method tersebut

/*function Person() {
    this.firstName = ""; //property
    this.lastName = "";
    this.sayHello = function (name) {
        console.log(`hello ${name}, my name is ${this.firstName}`);
    }
}

const eko = new Person();
eko.firstName = "eko";
eko.lastName = "aa"
eko.sayHello("lala")
const budi = new Person();
budi.firstName = "Budi";
budi.lastName = "bb";
budi.sayHello("lulu");

console.log(eko);
console.log(budi);
*/

//parameter di constructor function
//saat membuat objek data dapat dikirimkan lewat parameter diconstructor function.

/*function Person(firsName, lastName) {
    this.firstName = firsName; //property
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.log(`hello ${name}, my name is ${this.firstName}`);
    }
}

const eko = new Person("eko", "aa");
eko.sayHello("lala")
const budi = new Person();
budi.sayHello("lulu");

console.log(eko);
console.log(budi);
*/

//constructor Inheritance
//dalam constructor dapat memanggil constructor lain, dengan begitu dapat mewarisi semua propery yang dibuat di constructor tersebut
//memanggil constructor lain dengan menggunakan NamaConstructor.call(this.parameter)

/*function Employee(firsName) {
    this.firstName = firsName;
    this.sayHello = function (name) {
        console.log(`hello ${name}, my name is ${this.firstName}`);
    }
}

function Manager(firsName, lastName) {
    this.lastName = lastName; 
    Employee.call(this,firsName)
}

const eko = new Manager("Eko", 'aa');
console.log(eko);
*/

//prototype Inharitance
//membuat object dari constructor function, object tersebut disebut instance
//semua property (baik value atua method), akan berada di dalam instance objectnya
//secara otomatis akan dibuatkan prototype
//untuk mengkakses prototype, menggunakan _proto_

function Person(firsName, lastName) {
    this.firstName = firsName; //property
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.log(`hello ${name}, my name is ${this.firstName}`);
    }
}
const eko = new Person("eko", "aa");
const budi = new Person("budi", "bb");

console.log(eko);
console.log(budi);

//menambahkan property ke prototype
