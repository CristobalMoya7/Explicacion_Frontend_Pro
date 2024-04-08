/**
 * Exercise 1
 * Define una interfaz `Product` con las siguientes propiedades:
 * - `name` de tipo `string`
 * - `price` de tipo `number`
 * - `description` de tipo `string`
 * - `category` de tipo `string`
 * 
 * Define un array con 3 productos distintos.
 * 
 * Define una función `findCheap` que reciba un array de tipo genérico y devuelva el elemento más barato.
 */

interface MinimalProduct {
    price: number;
}

interface Product extends MinimalProduct {
    name: string;
    description: string;
    category: string;
}

const products: Product[] = [
    {
        name: "Laptop",
        price: 1000,
        description: "A laptop",
        category: "Electronics"
    },
    {
        name: "Shirt",
        price: 20,
        description: "A shirt",
        category: "Clothing"
    },
    {
        name: "Book",
        price: 10,
        description: "A book",
        category: "Books"
    }
];

type FinderProduct = <T extends MinimalProduct>(producst: T[]) => T; // Sabemos que T extiende de MinimalProduct ya que sabemos que es un price

const findCheapProduct: <T extends MinimalProduct>(producst: T[]) => T = <T extends MinimalProduct>(products: T[]): T => {
    return products.reduce((prev, current) => prev.price < current.price ? prev : current);
}

interface Book {
    price: number
}

findCheapProduct<Book>(
    [
        {
            price: 10
        },
        {
            price: 100,
        }
    ]
);