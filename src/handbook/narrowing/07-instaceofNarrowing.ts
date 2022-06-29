/*
 * javascript punya operator untuk mengecek apakah sebuah value adalah instance dari value lain
 * instanceof juga merupakan type guard
 */

function logValue(x : Date | string) {
    if(x instanceof Date){
        // Date
        console.log(x.toUTCString());
    }else{
        // string
        console.log(x);
    }
}