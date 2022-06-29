/**
 * cara menggunakan ini adalah dengan mendefinisikan fungsi yang mengeluarkan output "type predicate"
 */

interface BasicCred {
    name : string,
    age : number,
    type : "admin" | "user"
}

interface Admin extends BasicCred {
    role : string
}

interface User extends BasicCred {
    occupation : string
}

type Person = Admin | User;

const people: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
]

function isAdmin(person : Person): person is Admin{
    /**
     * "person is Admin" merupakan "type predicate", 
     * typescript akan merujuk (mempersempit) variable (parameter person) ke "Type" yang spesifik
     */
    return person.type === "admin";
}

function isUser(person: Person) : person is User {
    /**
     * "person is User merupakan" "type predicate", 
     * typescript akan merujuk (mempersempit) variable (parameter person) ke "Type" yang spesifik
     */
    return person.type === "user";
}

function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
people.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
people.filter(isUser).forEach(logPerson);