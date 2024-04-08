interface IBook {
    title: string;
    author: string;
    year: number;
    isbn: string;
}

interface IMagazine {
    name: string;
    topic: string;
    date: Date;
    barcode: number;
}

class Library<T> { // El T es como un generico
    private items: T[] = [];

    add(item: T) {
        this.items.push(item);
    }

    list(): T[] {
        return this.items;
    }
}

const booksLibrary = new Library<IBook>(); // Aqui solo accetaremos interfaces como las de IBook
booksLibrary.add({
    title: "The lord of the rings",
    author: "Rowling",
    year: 2001,
    isbn: "Abcd1234"
});
console.log(booksLibrary.list());

const stringLibrary = new Library<string>();
stringLibrary.add("test");
console.log(stringLibrary.list());
