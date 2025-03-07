const myLibrary = [];

// using object constructor:
// function Book(title, author, pages, readStatus) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = readStatus;
// }

// using class:
class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = readStatus;
    }
}

function addBookToMyLibraryArray(title, author, pages, readStatus) {
    // do stuff here
      let book = new Book(title, author, pages, readStatus);
      myLibrary.push(book);
      displayBooks(myLibrary)
  
  }

function displayBooks(myLibrary) {
    const lib = document.querySelector(".library");
    // lib.innerHTML = "";
    const cards = lib.querySelectorAll(".book-card");
    cards.forEach(card => card.remove())

    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add('book-card');
        
        const cardHeading = document.createElement('div');
        cardHeading.classList.add('cardHeading')

        const title = document.createElement("p");
        title.textContent = `Title: ${book.title}`;
        cardHeading.append(title);
        

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('closeBtn')
        cardHeading.append(closeBtn);

        const closeSign = document.createElement('img');
        closeSign.src = 'close.svg';
        closeSign.alt = 'Close';
        closeBtn.append(closeSign);

        card.append(cardHeading);

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        card.append(author)

        const pages = document.createElement("p");
        pages.textContent = `pages: ${book.pages}`;
        card.append(pages);

        const readStatus = document.createElement("p");
        readStatus.textContent = `Status: ${book.read}`;
        card.append(readStatus)

        const card_buttons = document.createElement('div');
        card_buttons.classList.add('card-buttons')

       

        closeBtn.addEventListener("click", () => {
            card.classList.add("fade-out");
            setTimeout(() => {
                myLibrary.splice(index, 1);
                card.remove();
            }, 500);
        });

        const editReadStatus = document.createElement('button');
        editReadStatus.textContent = 'read/not read' ;
        card_buttons.append(editReadStatus)
        card.append(card_buttons);

        editReadStatus.addEventListener('click', () => {
            if (book.read === 'read') {
                book.read = 'not read';
                readStatus.textContent = `Status: ${book.read}`;
            }
            else {
                book.read = 'read';
                readStatus.textContent = `Status: ${book.read}`;
            }
            console.log(myLibrary[index]['read'])
        })
        const addBtn = document.querySelector(".show-dialog")
        // lib.appendChild(card);
        lib.insertBefore(card, addBtn)


        
        
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
const dialogContainer = document.querySelector('.dialog-container');
const cancel = document.querySelector('#dialog-close')


const form = document.querySelector("form");
const titleContainer = document.querySelector('.title-container')
const fieldError = document.querySelector(".error");
const fieldTitle = document.querySelector('#title');

// Function to show error message
function showError() {
    if (fieldTitle.validity.valueMissing) {
        fieldError.textContent = 'Type the title';
        fieldError.classList.add('active');
    } else if (fieldTitle.validity.tooShort) {
        fieldError.textContent = `must be at least ${fieldTitle.minLength} characters`
    } else {
        fieldError.textContent = ''; // Clear error message if valid
        fieldError.classList.remove('active');
    }
}

// Event listener for input event
fieldTitle.addEventListener('input', showError);

// Event listener for blur event (when the field loses focus)
fieldTitle.addEventListener('blur', showError);

// Event listener for form submission
form.addEventListener('submit', (event) => {
    if (!fieldTitle.validity.valid) {
        showError();
        event.preventDefault(); // Prevent form submission if invalid
    }
});





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



    
dialog.addEventListener("click", (event) => {
    if (!dialogContainer.contains(event.target)) dialog.close();
    });


cancel.addEventListener('click', () => {
    dialog.close();
});











