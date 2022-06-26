/*
    javascript punya dua primitive value untuk menandakan nilai yang tidak ada; null dan undefined.
    ts memiliki dua tipe yang sesuai dengan nama yang sama, perilaku dua ini tergantung pada opsi "strictNullChecks" pada tsconfig.

    jika off
        nilai yang mungkin null atau undefined masih dapat diakses secara normal, dan nilai null dan undefined dapat ditetapkan ke properti jenis apa pun

    jika on
        kita harus test value null atau undefined dengan narrowing
*/

function doSomething(x: string | null) {
    if (x === null) { // check apakah null
      // do nothing
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
}

