/**
 * typescript juga menggunakan "switch" statement dan equality check seperti "===", "!==", "==", "!="
 * more : https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing
 */

 function example(x: string | number, y: string | boolean) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        // ^?
        y.toLowerCase();
        // ^?
    } else {
        console.log(x);
        //          ^?
        console.log(y);
        //          ^?
    }
    /**
     * typescript tau tipe mereka harus sama, yaitu string sejak string adalah tipe yang kedua argumen dapat ambil
     * 
     */
}
