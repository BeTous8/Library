const lib = document.querySelector(".library")


const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = readStatus;
}

function addBookToMyLibraryArray(title, author, pages, readStatus) {
    // do stuff here
      let book = new Book(title, author, pages, readStatus);
      myLibrary.push(book);
      displayBooks(myLibrary)
  
  }

function displayBooks(myLibrary) {
    lib.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add('book-card');
        

        const title = document.createElement("p");
        title.textContent = `Title: ${book.title}`;
        card.append(title);

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        card.append(author)

        const pages = document.createElement("p");
        pages.textContent = `pages: ${book.pages}`;
        card.append(pages);

        const readStatus = document.createElement("p");
        readStatus.textContent = `Status: ${book.read}`;
        card.append(readStatus)


        const removeBtn = document.createElement("button");
        removeBtn.textContent = `remove`;
        card.append(removeBtn)

        removeBtn.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayBooks(myLibrary);
            
            
        });

        const editReadStatus = document.createElement('button');
        editReadStatus.textContent = 'read/not read' ;
        card.append(editReadStatus);

        editReadStatus.addEventListener('click', () => {
            if (book.read === 'read') {
                book.read = 'not read';
                readStatus.textContent = 'not read';
            }
            else {
                book.read = 'read';
                readStatus.textContent = 'read';
            }
            console.log(myLibrary[index]['read'])
        })
        
        lib.appendChild(card);
        
    }); 
        
    
}

addBookToMyLibraryArray('Hobbit', 'J.R.R', 295, 'not read');
addBookToMyLibraryArray('GOT', 'J.R.R', 469, 'not read');
addBookToMyLibraryArray('LOR', 'Tolkien', 324, 'read');
console.log(myLibrary)
displayBooks(myLibrary)


// create button and dialog box and connect them
const showBtn = document.querySelector(".show-dialog");
const dialog = document.querySelector('.dialog')

showBtn.addEventListener('click', () => {
    dialog.showModal();
});

dialog.addEventListener('submit', (event) => {
    event.preventDefault();
    // alert("Form submission prevented!");
    
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;

    addBookToMyLibraryArray(title, author, pages, read);
    dialog.querySelector("form").reset();
    dialog.close();


});


