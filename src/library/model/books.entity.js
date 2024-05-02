export class Book {
    constructor(id, title, description, author, date, link) {
        this.id = id;
        this.title= title;
        this.description = description;
        this.author = author;
        this.date = date;
        this.link = link;
    }
    static fromDisplayableBook(displayableBook) {
        return new Book(
            displayableBook.id,
            displayableBook.title,
            displayableBook.description,
            displayableBook.author,
            displayableBook.date,
            displayableBook.link);
    }
    static toDisplayableBook(Book) {
        return {
            id: Book.id,
            title: Book.title,
            description: Book.description,
            author: Book.author,
            date: Book.date,
            link: Book.link
        };
    }
}