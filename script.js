const Main = document.querySelector('main')

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

createBook('gggg','sdfsdf',454,false)
createBook('ggg','asd',454,false)
createBook('gg','asdsad',567,true)

for (let book of library){
    const bookBox = document.createElement('div');
    bookBox.textContent = `${book.Title}\n${book.Read}\n${book.Pages}\n${book.Author}`
    Main.appendChild(bookBox)
}