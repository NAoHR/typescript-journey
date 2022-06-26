/*
    interface merupakan cara lain untuk menamakan suatu tipe,
    fungsi interface sama seperti "Type Aliases", namun memiliki perbedaan pada
    "Type Aliases" tidak bisa dibuka kembali untuk menambahkan properti baru, namun interface selalu bisa di extend.

    more : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
*/

interface Coordinate {
    x : number,
    y : number
}

function printUserCoordinate(cr : Coordinate) {
    const {x,y} = cr;
    console.log(`user coordinate is (${x},${y})`);
}

printUserCoordinate({x : 2, y: 3});
