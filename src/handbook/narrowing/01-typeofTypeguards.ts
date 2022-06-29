/**
 * di typescript, mengecek nilai yang dikembalikan oleh typeof adalh typeguard.
 * karna ts mengencode cara 'typeof' beroperasi pada value yang berbeda, ts tau beberapa kebiasaan yang ada dalam js
 */

// contoh pengecekan

function printAll(strs: string | string[] | null) {
    // pengecekan kurang tepat
    // if (typeof strs === "object") {
    //     for (const s of strs) { // objek mungkin berisi null, karena typeof dari null adalh 'object'
    //     console.log(s);
    //     }
    // }

    // pengecekan tepat
    if(typeof strs === "object" && strs) {
        console.log(strs) // string[]
    }

    else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
}