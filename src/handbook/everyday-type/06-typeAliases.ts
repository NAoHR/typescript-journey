/*
penulisan tipe secara langsung kedalam sebuah variabel ataupun fungsi merupakan hal yang bagus,
namun biasanya penulisan diwakili oleh suatu nama
*/

type HumanType = {
    name : string,
    ethnicity : string,
    age : number
}

function printHumanDetail(human : HumanType) {
    const {ethnicity,age, name} = human;
    console.log(ethnicity, age, name);
}

printHumanDetail({name : "najmi", ethnicity : "asian", age : 17})