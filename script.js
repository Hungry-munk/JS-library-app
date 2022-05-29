// declare empty library 
let library = [];

// book object constructor 
function Book (Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read

}


function createBook (Title,Author,Pages,Read) {
    let newbook = new Book(Title,Author,Pages,Read)
    library.push(newbook)
}