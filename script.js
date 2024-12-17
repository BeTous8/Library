const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
  // do stuff here
    let book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
    console.log(book)

}

addBookToLibrary('Hobbit', 'J.R.R', 295, 'not yet read');
addBookToLibrary('Hobbit', 'J.R.R', 295, 'not yet read');
addBookToLibrary('Hobbit', 'J.R.R', 295, 'not yet read');
console.log(myLibrary)