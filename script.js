const submit = document.querySelector('.btn')
submit.addEventListener('click' ,addBooktoLibrary)
const popUpForm = document.querySelector('.grid_container')
popUpForm.style.display = 'none'
const newForm = document.querySelector('.butn')
newForm.addEventListener('click', e=>{
    popUpForm.style.display = 'block'
})
let library =[]
function Book(title,author,pages,read,notread){
    this.title = title
    this.author =author
    this.pages = pages
    this.read = read
    this.notread =notread
}
var newBook
function addBooktoLibrary(title,author,pages,read,notread){
    popUpForm.style.display = 'none'
    newBook = new Book(title,author,pages,read,notread)
    library.push(newBook)
    return library
}
