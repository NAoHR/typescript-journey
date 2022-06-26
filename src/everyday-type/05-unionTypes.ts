// typescript memumngkinkan untuk menggabungkan tipe data

function parsePN(pn : string | number) {
    if(typeof pn === "string"){
        console.log("begin to proces string type of pn", pn);
    }else{
        console.log("begin to proces number type of pn", pn);
    }
}

parsePN(62123456);
parsePN("08123456");


function greetToPeople(people : string | string[]) : string{
    return `hello ${Array.isArray(people) ? people.join(", ") : people}.Welcome aboard`;
}

console.log(greetToPeople(["a","b"]));
console.log(greetToPeople("a"));