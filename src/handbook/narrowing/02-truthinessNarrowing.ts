/**
 * dalam javascript if memaksa kondisinya menjadi boolean, kemudian membuat keputusan antara true atau false
 * false dalam javascript:
 *  - 0
 *  - NaN
 *  - "" (empty string)
 *  - 0n (bigint 0)
 *  - null
 *  - undefined
 *
 * selain dari hal diatas adalah true
 * more : https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing
 */

// contoh bagus
function printAllGood(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
        console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

printAllGood("") // akan me-return ""



function printAllBad(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

printAllBad("") // tidak nge console

// membungkus dengan semua element dengan truthy check, memiliki kelemahan: salah satunya adalah string kosong tidak terhandle dengan baik