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
        let bookImage = document.createElement("img"); //Create img element for image icon.
        bookImage.src = "./img/book.svg"; //Set image SRC attribute.
        let p1Title = document.createElement("p"); //Create p tag for book title.
        let p2Author = document.createElement("p"); //Create p tag for book author.
        let p3Pages = document.createElement("p"); //Create p tag for book pages.
        p1Title.textContent = title; //Set title to p tag.
        p2Author.textContent = author; //Set author to p tag.
        p3Pages.textContent = pages; //Set pages to p tag.
        div.appendChild(p1Title); //Append p tag to div.
        div.appendChild(p2Author); //Append p tag to div.
        div.appendChild(p3Pages); //Append p tag to div.
        div.appendChild(bookImage); //Append book image to div.
        parentDiv.appendChild(div); //Append new div to existing parent div to display results.
        itemsOnPage +=1; //Increment counter.

    }

})

function clearLibraryDisplayResults() {

    const parentDiv = document.querySelector(".libraryDisplayResults"); //Select parent div.
    parentDiv.textContent = ""; //Clear all display results.

}


const clearButton = document.querySelector("#clearLibraryCollectionResults");

clearButton.addEventListener("click", () => {

    clearLibraryDisplayResults();

 })


 function addNewBookByForm() {

    let newBookForm = document.createElement("form"); //Form for book details to be entered.
    newBookForm.setAttribute("class" , "newBookForm");

    //Create Title Input and Label.
    let newBookFormInputTitle = document.createElement("input"); //Input for form that will contain new book information.
    let newbookTitleLabel = document.createElement("label"); //Label for title of book field.
    newbookTitleLabel.textContent = "Title:";
    newbookTitleLabel.setAttribute("for", "title");
    newBookFormInputTitle.setAttribute("type" , "text");
    newBookFormInputTitle.setAttribute("id", "title");
    newBookFormInputTitle.setAttribute("value" , "");
    newBookForm.appendChild(newbookTitleLabel);
    newBookForm.appendChild(newBookFormInputTitle);
    newBookFormParentDiv.appendChild(newBookForm);

    //Create Author Input and Label.
    let newBookFormInputAuthor = document.createElement("input"); //Input for form that will contain new book information.
    let newbookAuthorLabel = document.createElement("label"); //Label for title of book field.
    newbookAuthorLabel.textContent = "Author:";
    newbookAuthorLabel.setAttribute("for", "author");
    newBookFormInputAuthor.setAttribute("type" , "text");
    newBookFormInputAuthor.setAttribute("id", "author");
    newBookFormInputAuthor.setAttribute("value" , "");
    newBookForm.appendChild(newbookAuthorLabel);
    newBookForm.appendChild(newBookFormInputAuthor);
    newBookFormParentDiv.appendChild(newBookForm);


    //Create Pages Input and Label.
    let newBookFormInputPages = document.createElement("input"); //Input for form that will contain new book information.
    let newbookPagesLabel = document.createElement("label"); //Label for title of book field.
    newbookPagesLabel.textContent = "Pages:";
    newbookPagesLabel.setAttribute("for", "pages");
    newBookFormInputPages.setAttribute("type" , "text");
    newBookFormInputPages.setAttribute("id", "pages");
    newBookFormInputPages.setAttribute("value" , "");
    newBookForm.appendChild(newbookPagesLabel);
    newBookForm.appendChild(newBookFormInputPages);
    newBookFormParentDiv.appendChild(newBookForm);

 }

 let newBookFormParentDiv = document.querySelector(".newBookForms"); //Parent div that holds the new book form.
 const addNewBookByFormButton = document.querySelector("#addNewBookByForm"); //This button will allow users to add a new book via a form.
 addNewBookByFormButton.addEventListener("click", () => {

    addNewBookByForm();

 })
 