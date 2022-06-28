// anotasi tipe data pada parameter fungsi

function logName(name: string) {
    /*
    fungsi hanya akan menerima parameter nama yang berupa string
    */
    console.log("hallo", name);
}

// anotasi tipe data pada output sebuah function;

function calcluatePPN(money: number) : number {
    /*
    fungsi akan mengeluarkan outuput yang berupa tipe data number
    */
    return money * 1.1;
}


// anotasi tipe data pada anonymous function
const arrOfNum : number[] = [1,2,3,4,5];

arrOfNum.forEach((num)=>{
    // typescript akan menentukan tipe dari num dan akan memberi bantuan fungsi apa saja yang bisa digunakan oleh variable num
    console.log(num.toString());
})
