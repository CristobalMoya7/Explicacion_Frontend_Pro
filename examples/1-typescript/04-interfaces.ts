enum Brands { // Enum son un tipo de valores que forman un conjunto de datos que nunca van a cambiar
    TESLA = "asdasdqw3123asdasd123123",
    TOYOTA = "725",
    AUDI = "Audi",
    FORD = "Ford"
}

type Brand = "Tesla" | "Toyota" | "Audi" | "Ford"; // Type es igual que enum pero accedemos directamente al valor sin darle un nombre

const brand1 = Brands.TESLA;

interface Car {
    brand: Brand;
    model: string;
    year?: number;
    start: () => string;
}

const car1: Car = {
    // brand: "Tesla",
    brand: "Ford",
    model: "Model 3",
    year: 2024,
    // start: () => console.log("Tesla model 3 started")
    start: () => { return "Tesla model 3 started" }
}

const startMessage = car1.start();

console.log(JSON.stringify(car1));