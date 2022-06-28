// anotasi tipe data yang bisa ditampung oleh array
let hanyaAngka : number[];
let hanyaString : string[];
let hanyaBoolean : boolean[];
let apaSaja: any[];

hanyaAngka = [1,2,3,4,5]; // aman
hanyaString = ["1","2"]; // aman
hanyaBoolean = [true, false]; // aman
apaSaja = [[],"1",1,true,undefined,null,{}]; // aman