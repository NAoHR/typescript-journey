/*
    sebagai tambahan pada tipe general (string,number). kita bisa mereferensikan ke string atau number yang lebih spesifik
*/

let changingString = "Hello World";
changingString = "Olá Mundo";

// karena changing string mereferensikan string,
// maka kita bisa memasukkan string apapun kedalamnya

const constantString = "thisIsAconstantString";
// karena 'constantString' hanya bisa merepresentasikan satu string "thisIsAconstantString"
// maka ini adalah representasi literal-type


// menggabungkan literal dengan union merupakan cara yang lebih berguna

function alignGivenText(text: string, alignment : "left" | "right" | "center") {
    console.log(text, "is now on", alignment, "position");
}

alignGivenText("najmi","left");

// numeric literal type
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

// bisa digabung dengan non literal type
interface Option {
    width : number;
}

function configure(config : Option | "auto") {
    if(config === "auto") {
        console.log("run with auto")
    }else{
        console.log("run with",config);
    }
}

configure("auto");
configure({width : 100});