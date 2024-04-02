enum Brands {
    TESLA = "asdasdqw3123asdasd123123",
    TOYOTA = "725",
    AUDI = "Audi",
    FORD = "Ford"
}

type Brand = "Tesla" | "Toyota" | "Audi" | "Ford";

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