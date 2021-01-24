const submit = document.querySelector('.btn')
submit.addEventListener('click', addBooktoLibrary)
const popUpForm = document.querySelector('.grid_container')
popUpForm.style.display = 'none'
const newForm = document.querySelector('.butn')
newForm.addEventListener('click', e=>{
    popUpForm.style.display = 'block'
})
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const status = document.getElementById('select')
const content = document.querySelector('.content')



let library =[]
function Book(title,author,pages,status){
    this.title = title
    this.author =author
    this.pages = pages
    this.status = status
}
var newBook

function addBooktoLibrary(event){
    event.preventDefault()
    popUpForm.style.display = 'none'
    //differentiating between read and notread
    if(title.value === '' || author.value ==='' || pages.value === ''|| status.value===''){
        alert('Please fill in the form')
    }
    else if(status.value === 'read'){
        newBook = new Book(title.value,author.value,pages.value,status.value)
        library.push(newBook)
        console.log(library)
        //adding the form to the html elements 
        var ourHTML = '<div class="content-box"><div class="col-4">Title:<p>%title%</p></div><div class="col-4">Author:<p>%author%</p></div><div class="col-4">Status:<p>%status%</p></div></div>'
        var ournewHtml
        ournewHtml = ourHTML.replace('%title%', title.value)
        ournewHtml = ournewHtml.replace('%author%',author.value)
        ournewHtml = ournewHtml.replace('%status%', status.value)
        var htmlObject = document.createElement('div')
        htmlObject.classList.add('content-box')
        htmlObject.innerHTML=ournewHtml
        content.insertAdjacentElement('afterend',htmlObject)
        


    }else if(status.value ==='notread'){
        newBook = new Book(title.value,author.value,pages.value,status.value)
        library.push(newBook)
        //adding the form to html elements
        var ourHTML = '<div class="content-box"><div class="col-4">Title:<p>%title%</p></div><div class="col-4">Author:<p>%author%</p></div><div class="col-4">Status:<p>%status%</p></div></div>'
        var ournewHtml
        ournewHtml = ourHTML.replace('%title%', title.value)
        ournewHtml = ournewHtml.replace('%author%',author.value)
        ournewHtml = ournewHtml.replace('%status%', status.value)
        var htmlObject = document.createElement('div')
        htmlObject.classList.add('content-box')
        htmlObject.innerHTML=ournewHtml
        content.insertAdjacentElement('beforeend',htmlObject)
    }  
    
}



