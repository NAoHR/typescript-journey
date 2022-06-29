/**
 * javascript punya operator "in" untuk menentukan apakah sebuah objek mempunyai properti tertentu
 */

type Fish = { swim : () => void };
type Bird = { fly: () => void };

function move(animal : Fish | Bird) {
    if( "swim" in animal) {
        // animal merepresentasikan fish
        return animal.swim();
    }
    // animal merepresentasikan fish bird
    return animal.fly();
}

type Hmn = {
    fly? : () => void,
    swim : () => void
}

function move2(creature: Fish | Bird | Hmn) {
    if("swim" in creature) {
        // bisa jadi fish dan hmn
    }
    // bisa jadi bird dan hmn
}