/**
 * based on : https://www.typescriptlang.org/docs/handbook/enums.html
 *
 * Enum memungkinkan pengembang untuk mendefinisikan satu set const.
 * Menggunakan enum dapat mempermudah mendokumentasikan maksud, atau membuat kumpulan kasus yang berbeda.
 * TypeScript menyediakan enum numerik dan berbasis string
 */

// enum numeric

enum Direction {
    /**
     * kita menginisialisasi up dengan angka 1, kemudian secara otomatis down = 2, left = 3, right = 4
     */
    Up = 1,
    Down,
    Left,
    Right,
}

console.log(Direction.Down); // memanggil enum

enum UserResponse {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
    console.log(recipient, "answer", message);
}

respond("Princess Caroline", UserResponse.Yes);


// enum string
enum Jawaban {
    mau = "wess guaspoll mase",
    tidak = "ga, dulu mase. saya ada maag"
}

function tawarinNgopi(orang : string, jawaban : Jawaban) : void {
    console.log(orang,"ngomong",`'${jawaban}'`);
}

tawarinNgopi("najmi", Jawaban.tidak);