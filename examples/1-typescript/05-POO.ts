interface IStudent { // Lo creamos como interface cuando lo vamos a usar en otras clases 
    name: string;
    age: number;
    grade: string;
}

interface IPerson {
    dni: string;
}

class Student implements IStudent, IPerson {
    name: string;
    age: number;
    grade: string;
    surname?: string;
    dni: string;

    constructor(
        nombre: string,
        edad: number,
        grado: string,
        surname?: string,
    ) {
        this.name = nombre;
        this.age = edad;
        this.grade = grado;
        this.surname = surname;
        this.dni = "";
    }

    get fullname(): string {
        return `${this.name} ${this.surname}`;
    }

    set fullname(fullname: string) { 
        this.name = fullname.split(' ')[0];
        this.surname = fullname.split(' ')[1];
    }

}


const student1 = new Student("Juan", 30, "ADE");
const student2 = new Student("Juan", 30, "ADE");
const student3 = new Student("Juan", 30, "ADE");
const student4 = new Student("Juan", 30, "ADE");
const student5 = new Student("Juan", 30, "ADE");
const student6 = new Student("Juan", 30, "ADE", "Perez");

student6.fullname = "Paco Perez";
console.log(student6.fullname);

class Product {
    private _price: number // 1,50€ -> 150   -> 1,50 + 1,50 -> 3,0000001
    get price(): number {
        return this._price / 100;
    }
    set price(price: number) {
        this._price = price * 100;
    }
}

const iphone = new Product();
iphone.price = 750.25; // iphone._price = 75025;