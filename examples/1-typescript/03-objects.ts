const car: {
    brand: string;
    model: string;
    year?: number;
} = {
    brand: "Toyota",
    model: "Yaris",
    year: 2023
};

const carYear: number = car.year ?? 10; // Las dos ?? significan que o car.year tiene algo o es 10

const brands: (string|number)[] = ["Toyota", "Audi", "Seat", 1];
const brands2: Array<string|number> = ["Toyota", "Audi", "Seat"];

const models: any[] = ["Model 3"]; // Any nos da cualquier cosa, no se suele utilizar. No devuelve ningun tipo.
const models2: unknown[] = ["Model 3"]; // Unknown significa que el tipo es desconocido.
