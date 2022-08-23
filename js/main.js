let myLibrary = []; //Array stores all book objects.

function Book(title, author, pages){

        this.title = title;
        this.author = author;
        this.pages = pages;


}

function addBookToLibrary(){

    let bookTitle = alert("Please enter the book title: "); //User enters book title.
    let bookAuthor = alert("Please enter the book's author: "); //User enters book author.
    let bookPages = alert("Please enter the number of pages the book has: "); //User enters number of pages.
    let newBook = Book(bookTitle, bookAuthor, bookPages); //Call new book function and pass user information to it.
    myLibrary.push(newBook); //Push the new book object to the library collection array.
}