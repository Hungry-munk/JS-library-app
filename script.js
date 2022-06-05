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

function createBookElement (tag, text, className) {
    const BookElement = document.createElement(tag)
    BookElement.innerText = text
    BookElement.classList.add(className)
    return BookElement
}

function createReadButton (read=false) {
    const ReadButton = document.createElement('button')
    ReadButton.classList.add('book-readStatus')
    if (read) {
        ReadButton.classList.add('read')
        ReadButton.textContent = 'read'
    } else {
        ReadButton.classList.add('unread')
        ReadButton.textContent = 'unread'
    }
    return ReadButton
}

createBook('gggg','sdfsdf',454,false)
createBook('ggg','asd',454,false)
createBook('gg','asdsad',567,true)
createBook('gg','asdsad',567,true)

for (const book of library){
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-card')
    bookItem.appendChild(createBookElement('h2',book.Title,'book-title'));
    bookItem.appendChild(createBookElement('div',book.Author,'book-title'));
    bookItem.appendChild(createBookElement('div',book.Pages,'book-pages'));
    bookItem.appendChild(createReadButton(book.Read))
    bookItem.appendChild(createBookElement('button', 'remove','remove-btn'))
    
    Main.appendChild(bookItem)
}

