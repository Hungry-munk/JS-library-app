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
};

function ChangeReadStatus(button) {
    if (library[button.parentElement.dataset.index].Read) {
        library[button.parentElement.dataset.index].Read = false
        button.textContent = 'unread'
        button.classList.remove('read')
        button.classList.add('unread')
    }
    else if (!library[button.parentElement.dataset.index].Read) {
        library[button.parentElement.dataset.index].Read = true
        button.textContent = 'read'
        button.classList.remove('unread')
        button.classList.add('read')
    };
};

function displayBooks(){
    RemoveBooks()
    for (const book of library){
        const bookItem = document.createElement('div');
        bookItem.setAttribute('class','book-card')
        bookItem.setAttribute('data-index' , library.indexOf(book))
        bookItem.appendChild(createBookElement('h2',book.Title,'book-title'));
        bookItem.appendChild(createBookElement('div',book.Author,'book-title'));
        bookItem.appendChild(createBookElement('div',book.Pages,'book-pages'));
        bookItem.appendChild(createReadButton(book.Read))
        bookItem.appendChild(createBookElement('button', 'remove','remove-btn'))
        
        Main.appendChild(bookItem)
    };

    const RemoveBtns = document.querySelectorAll('.remove-btn')
    const ReadBtns = document.querySelectorAll('.book-readStatus')

    ReadBtns.forEach(button => {
        button.addEventListener('click',()=>ChangeReadStatus(button))
    })
    
    RemoveBtns.forEach(button => {
        button.addEventListener('click',()=>{
            button.parentNode.remove()
            library.pop(button.parentElement.dataset.index)
        });
    });


};

function RemoveBooks () {
    Main.innerHTML=''
}

createBook('gggg','sdfsdf',454,false)
createBook('ggg','asd',454,false)
createBook('gg','asdsad',567,true)
createBook('gg','asdsad',567,true)

displayBooks()

