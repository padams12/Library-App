let myLibrary = []; //Array stores all book objects.

function Book(title, author, pages){

        this.title = title;
        this.author = author;
        this.pages = pages;

}

function addBookToLibrary(){

    let bookTitle = prompt("Please enter the book title: "); //User enters book title.
    let bookAuthor = prompt("Please enter the book's author: "); //User enters book author.
    let bookPages = prompt("Please enter the number of pages the book has: "); //User enters number of pages.
    let newBook = new Book(bookTitle, bookAuthor, bookPages); //Call new book function and pass user information to it.
    myLibrary.push(newBook); //Push the new book object to the library collection array.

}

function displayLibraryCollection() {


    for (i=0; i < myLibrary.length; i++) {

        let book = myLibrary[i]; //Set book equal to current array item (Book object).
        let title = book.title; //Set title.
        let author = book.author; //Set author.
        let pages = book.pages; //Set pages.
        let message = `${title} by ${author}, ${pages} pages long.`; //Set return message.
        return message;

    }

}

const addNewBookByPromptButton = document.querySelector(".newBookPrompt"); //Select button for "Add New Book by Prompt".
addNewBookByPromptButton.addEventListener("click", () => {

    addBookToLibrary();


}); //If the user clicks the button, run the prompts to allow them to add a new book.