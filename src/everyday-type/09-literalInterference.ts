/*
    menambahkan anotasi pada pada kode membuat kita extra dala menulisnya.
    typescript punya interference yang berarti itu bisa mengenali tipe dari variabel tanpa harus menulis tipenya
    more : https://learntypescript.dev/02/l3-type-inference
*/

// literal interference pada variable

let thisNum = 19; // typescript mengenali kalau ini tipe number
let thisStr = "najmi"; // typescript mengenali kalau ini tipe string
let isBool = true; // typescript mengenali kalau ini tipe boolean
let arrStr = ["a","b"]; // typescript mengenali kalau ini tipe string[]
let dateOfBirth = new Date(1990, 4, 7); // typescript mengenali kalau ini tipe Date


const thisIsLiteralType = "najmi"; // beda dengan yang di atas, tipe ini adalah "najmi", karena const menjadi lebih spesifik kedalam satu value
const created = new Date(2019, 11, 6); // tapi saat tipe yang bukan primitive dimasukkan ke constant, typescript menyimpulkan sama dengan tipe yang dimasukkan

// literal interference pada fungsi

function add(a: number, b: number) {
  return a + b;
}
const ten = add(5, 5); // memiliki tipe number karena typescript bisa menyimpulkan return dari fungsi add, mengapa tidak 10? karena typescript tidak mengeksekusi kode kita