interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getBookDetails(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    }

    protected getAllBooks(): Book[] {
        return this.books;
    }
}

class DigitalLibrary extends Library {
    readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    public listBooks(): string[] {
        return this.getAllBooks().map(book => book.title);
    }
}

const myDigitalLib = new DigitalLibrary("www.minhabiblioteca.com");

myDigitalLib.addBook({
    title: "TypeScript Guide",
    author: "Jane Doe",
    isbn: "123-456",
    publishedYear: 2026,
    genre: "Education"
});

myDigitalLib.addBook({
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "789-012",
    publishedYear: 2008
});

console.log("Detalhes do livro:", myDigitalLib.getBookDetails("123-456"));
console.log("Lista de títulos:", myDigitalLib.listBooks());