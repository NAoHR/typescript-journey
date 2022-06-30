/**
 * sebagian besar dari software engineering tidak hanya membuat komponen yang terdefinisi dengan baik tetapi membuat komponen yang reusable
 * didalam bahasa seperti C# dan java, salah satu alat untuk membuat komponen yang dapat digunakan kembali adalah generic, yang bisa bekerja di berbagai macap tipe daripada satu
 */


// hello world of generic ===============================
function identitiyOneType(arg: number) : number {
    return arg;
}

function identityCertainType(arg: any) : any {
    /**
     * ketika menggunakan any, ini terbilang generic. namun, kita sebenarnya kehilangan informasi tentang tipe apa itu ketika fungsi tersebut return
     */
    return arg
}
let output1 = identityCertainType(2) // akan mereturn any, tipe dari output1 adalah any

// generic
function identityGenerics<Type>(arg: Type) : Type {
    /**
     * daripada "any" seperti pada fungsi diatas, kita lebih baik kita mengambil tipe dari argument kemudian membuat itu menjadi tipe yang akan di return
     */
    return arg
}

let output2 = identityGenerics<string>("a"); // akan mereturn string, tipe dari output2 adalah string

// Working with Generic Type Variables ===============================

function identityLoggerFailed<Type>(arg: Type) : Type {
    // console.log(arg.length); // error
    /**
     * ketika kita melakukan log, compiler akan memberikan pessan error, karena ada kemungkinan bahwa fungsi ini akan dipanggil dengan tipe number sebagai parameternya
     */
    return arg;
}

function identityLoggerSuccess<Type>(arg: Type[]) : Type[] {
    console.log(arg.length); // lancar
    return arg
}
function identityLoggerSuccessAlternative<Type>(arg: Array<Type>) : Array<Type> {
    return arg;
}

// practice

function bubbleSort<Type>(arg: Array<Type>) : Array<Type> {
    const argLength = arg.length;
    for (let i = 0; i< argLength; i++){
      for(let j = i+1; j< argLength; j++) {
        if(arg[i] < arg[j]) {
          [arg[i],arg[j]] = [arg[j],arg[i]];
        }
      }
    }
    return arg;
}

console.log(bubbleSort<any>([3,2,"a",[],1,2,1,2,3,4,1,{}])); // any
console.log(bubbleSort<string | number>([1,2,3,4,"16"])) // string | number