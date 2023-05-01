const myLibrary = [];


// function Book(title, author, page) {
//     this.title = title;
//     this.author = author;
//     this.page = page;

//     this.index = undefined;
//     this.selected = false;
//     this.favorite = false;
// }


class Book{
    constructor(title, author, page){
        this.title = title;
        this.author = author;
        this.page = page;
        this._favorite = false;
    }

    set index(num){
        this._index = num;
    }
    get index(){
        return this._index;
    }

    set favorite(val){
        this._favorite = val;
    }
    get favorite(){
        return this._favorite;
    }
}


function displayCard (book){

    const cardContainer = document.querySelector("#card-container");
    const card = `
    <div class="card" data-index="${book.index}">
        <div class="card-info">
        <div class="card-text">
            <h3 class="card-title">${book.title}</h3>
            <p>${book.author}</p>
        </div>
        <div class="card-footer">
            <div class="button">
                <svg data-index="${book.index}" class="card-delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
            </div>
            <div class="card-pages">Pages: ${book.page}</div>
            <div class="button">
                <svg data-index="${book.index}" class="card-favorite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>
            </div>
        </div>
        </div>
    </div>
    `;

    cardContainer.insertAdjacentHTML("beforeend", card);
}


function addBookToLibrary(book) {
    book.index = myLibrary.push(book) - 1;

    displayCard(book);

    const deleteButton = document.querySelector("#card-container").lastElementChild.querySelector(".card-delete");
    deleteButton.addEventListener("click", () => {
        const index = deleteButton.getAttribute("data-index");

        myLibrary.splice(index, 1);
        const card = document.querySelector(`[data-index="${index}"]`);
        card.remove();
    })

    const favoriteButton = document.querySelector("#card-container").lastElementChild.querySelector(".card-favorite");
    favoriteButton.addEventListener("click", () => {
        const index = favoriteButton.getAttribute("data-index");
        const favoriteStatus = myLibrary[index].favorite;
        
        if(favoriteStatus === false){
            myLibrary[index].favorite = true;
            favoriteButton.classList.add("active")
        }
        else{
            myLibrary[index].favorite = false;
            favoriteButton.classList.remove("active")
        }

    })
}


const form = document.querySelector(".submit-button");
form.addEventListener("click", (e)=> {
    e.preventDefault();
    const arr = document.querySelectorAll("input");
    const bookObj = new Book(arr[1].value, arr[2].value, arr[3].value);
    addBookToLibrary(bookObj);
});


const toggleForm = document.querySelector("#header-buttons>.add-button");
toggleForm.addEventListener("click", () => {
    const formContainer = document.querySelector(".form-container");

    if(formContainer.style["z-index"] === "-1"){
        formContainer.style["z-index"] = "0";
        formContainer.style.position = "fixed";
    }
    else{
        formContainer.style["z-index"] = "-1";
        formContainer.style.position = "absolute";
    }
})
