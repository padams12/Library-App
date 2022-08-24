let myLibrary = []; //Array stores all book objects.
itemsOnPage = 0; //Keeps track of items displayed in library collection.

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

//Element selector collection.

const addNewBookByPromptButton = document.querySelector(".newBookPrompt"); //Select button for "Add New Book by Prompt".
addNewBookByPromptButton.addEventListener("click", () => {

    addBookToLibrary();


}); //If the user clicks the button, run the prompts to allow them to add a new book.

const displayLibraryCollectionButton = document.querySelector(".displayLibraryCollection"); //Select button for displaying library collection.
displayLibraryCollectionButton.addEventListener("click", () => { 

    let parentDiv = document.querySelector(".libraryDisplayResults"); //Select parent div.

    const newBooks = document.querySelectorAll(".newBook"); //Select all books in library collection.
    newBooks.forEach(newBook =>{

        newBook.remove(); //Remove previous results so that when user presses button again, duplicate results are not displayed.


    })
    
    for (i=0; i < myLibrary.length; i++) {

        let book = myLibrary[i]; //Set book equal to current array item (Book object).
        let title = book.title; //Set title.
        let author = book.author; //Set author.
        let pages = book.pages; //Set pages.
        let div = document.createElement("div"); //Create new Div for book result.
        div.classList.add("newBook");
        let p1Title = document.createElement("p"); //Create p tag for book title.
        let p2Author = document.createElement("p"); //Create p tag for book author.
        let p3Pages = document.createElement("p"); //Create p tag for book pages.
        p1Title.textContent = title; //Set title to p tag.
        p2Author.textContent = author; //Set author to p tag.
        p3Pages.textContent = pages; //Set pages to p tag.
        div.appendChild(p1Title); //Append p tag to div.
        div.appendChild(p2Author); //Append p tag to div.
        div.appendChild(p3Pages); //Append p tag to div.
        parentDiv.appendChild(div); //Append new div to existing parent div to display results.
        itemsOnPage +=1; //Increment counter.

    }

})
