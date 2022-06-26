// menganotasikan tipe data yang dapat diterima oleh properti sebuah objek

function userData(user : {
    name : string,
    phoneNum : number,
    age : number,
    email : string
}){
    /*
    fungsi ini akan menerima sebuah objek yang setiap properti harus ada
    dan sesuai pada anotasi yang sudah diberikan sebelumnya
    */
    const {age, email, name, phoneNum} = user;
    console.log(age,email, name, phoneNum)
}

userData({
    name : "najmi",
    phoneNum : 12345678,
    age: 17,
    email : "email@gmail.com"
});


// properti opsional
function logUserName(name : {first : string, last?: string}){
    const {first, last} = name;
    if(last){
        console.log(last.toUpperCase());
    }
    console.log(first.toUpperCase());
}

logUserName({first : "najmi"});