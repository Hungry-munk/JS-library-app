const Main = document.querySelector('main')
const AddBtn = document.getElementById('addBtn')
const Modal = document.querySelector('.form-div')
const Overaly = document.getElementById('overlay')
const SubmitBtn = document.getElementById('submit-btn')

// declare empty library 
let library = [];


AddBtn.addEventListener('click',()=>ShowModal())
Overaly.addEventListener('click',()=>RemoveModal())
document.addEventListener('keydown', e =>{
    if (e.key === 'Escape' && Overaly.style.visibility == 'visible')RemoveModal()
    if (e.key === '+' && Overaly.style.visibility == 'hidden')ShowModal()
});
SubmitBtn.addEventListener('click',()=>{
    const Title = document.getElementById('modal-title').value
    const Author = document.getElementById('modal-author').value
    const Pages = document.getElementById('modal-pages').value
    const Read =document.querySelector('.isRead').checked
    CreateBook(Title,Author,Pages,Read)
    CreateBooks()
    RemoveModal()

})

// book object constructor 

// changed cunstroctor function into a class
class Book {
    constructor(Title,Author,Pages,Read) {
        this.Title = Title
        this.Author = Author
        this.Pages = Pages
        this.Read = Read
    }
}

function CreateBook (Title,Author,Pages,Read) {
    let newbook = new Book(Title,Author,Pages,Read)
    library.push(newbook)
}

function CreateBookElement (tag, text, className) {
    const BookElement = document.createElement(tag)
    BookElement.innerText = text
    BookElement.classList.add(className)
    return BookElement
}

function CreateReadButton (read=false) {
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

function Renderbooks (){
    for (const book of library){
        const bookItem = document.createElement('div');
        bookItem.setAttribute('class','book-card')
        bookItem.setAttribute('data-index' , library.indexOf(book))
        bookItem.appendChild(CreateBookElement('h2',`"${book.Title}"`,'book-title'));
        bookItem.appendChild(CreateBookElement('div',`by ${book.Author}`,'book-title'));
        bookItem.appendChild(CreateBookElement('div',book.Pages,'book-pages'));
        bookItem.appendChild(CreateReadButton(book.Read))
        bookItem.appendChild(CreateBookElement('button', 'remove','remove-btn'))
        
        Main.appendChild(bookItem)
    };
};

function CreateBooks(){
    RemoveBooks()
    Renderbooks()

    const RemoveBtns = document.querySelectorAll('.remove-btn')
    const ReadBtns = document.querySelectorAll('.book-readStatus')

    ReadBtns.forEach(button => {
        button.addEventListener('click',ChangeReadStatus.bind(this,button))
    });
    
    RemoveBtns.forEach(button => {
        button.addEventListener('click',()=>{
            for (let el = 0 ; el < Main.children.length; el++) {
                if (button.parentElement.dataset.index < Main.children[el].dataset.index){
                    Main.children[el].dataset.index -= 1
                };
            };
            library.pop(button.parentElement.dataset.index)
            button.parentNode.remove()
        });
    });
};

function RemoveBooks () {
    Main.innerHTML=''
}

function RemoveModal () {
    Modal.classList.remove('div-form-open')
    Overaly.style.visibility = 'hidden'
}

function ShowModal () {
    Modal.classList.add('div-form-open')
    Overaly.style.visibility = 'visible'
}

