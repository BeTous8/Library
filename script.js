const lib = document.querySelector(".library")


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

function displayBooks(myLibrary) {
    lib.innerHTML = "";
    for (const book of myLibrary) {
        const card = document.createElement("div");
        card.classList.add('book-card');
        

        const title = document.createElement("p");
        // title.classList.add("title");
        title.textContent = `Title: ${book.title}`;
        card.append(title);

        const author = document.createElement("p");
        // author.classList.add("author");
        author.textContent = `Author: ${book.author}`;
        card.append(author)

        const pages = document.createElement("p");
        pages.textContent = `pages: ${book.pages}`;
        card.append(pages);

        const readStatus = document.createElement("p");
        readStatus.textContent = `Status: ${book.read}`;
        card.append(readStatus)
        
        lib.appendChild(card);
    }
}

addBookToLibrary('Hobbit', 'J.R.R', 295, 'not read');
addBookToLibrary('GOT', 'J.R.R', 469, 'not read');
addBookToLibrary('LOR', 'Tolkien', 324, 'read');
console.log(myLibrary)
displayBooks(myLibrary)


// create button and dialog box and connect them
const showBtn = document.querySelector(".show-dialog");
const dialog = document.querySelector('.dialog')

showBtn.addEventListener('click', () => {
    dialog.showModal();
})

