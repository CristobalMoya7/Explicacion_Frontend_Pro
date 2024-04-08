function formatUser(name: string, age?: number): string { // Se pone la interrogacion a age para que sea opcional
    return `Name: ${name}, Age: ${age}`;
}

function printUser(name: string, age?: number): void { // void significa que la funcion no va a devolver nada
    console.log(`Name: ${name}, Age: ${age}`);
}

const user1: string = formatUser("John Doe", 30);
const user2: string = formatUser("John Doe");
// const user2: string = printUser("John Doe"); // Devuelve un error.

console.log(user1);
console.log(user2);

