/**
 * ketika narrowing, kita bisa mengurangi opsi dari union ke titik dimana kita telah menghapus semua dan tidak ada yang tersisa.
 * Kita bisa menggunakan "never" untuk merepresentasikan state yang seharusnya tidak ada
 * more: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
 */


/**
 * Exhaustiveness checking
 *
 * tipe never bisa dimasukkan ke tipe apapun, namun tidak ada tipe yang bisa dimasukkan ke never
 * Ini berarti kita dapat mengandalkan "never" untuk melakukan pemeriksaan menyeluruh dalam "switch case"
 * more: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
 */

interface Circle {
    kind : "circle";
    radius : number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape1 = Circle | Square;

function getArea1(shape: Shape1) : number {
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            /**
             * menambahkan tipe baru ke Shape1 akan menimbulkan error
             * karna kita hanya menghandle circle dan square
             */
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}