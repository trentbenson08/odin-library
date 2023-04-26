/**
 * - Take form input 
 * - create a new card object
 * - input the proper data into the text feilds
 * - add it to the DOM
 * - clear the form
 */

const myLibrary = [];

function Book(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;

    this.favorite = false;
}

function addBookToLibrary(book) {

    myLibrary.push(book);

    
    const cardContainer = document.querySelector("#card-container");
    const card = `
    <div class="card">
        <div class="card-info">
        <div class="card-text">
            <h3 class="card-title">${book.title}</h3>
            <p>${book.author}</p>
        </div>
        <div class="card-footer">
            <div class="button"><img class="card-menu" src="./icns/menu.svg" alt="Menu"></div>
            <div class="card-pages">Pages: ${book.page}</div>
            <div class="button"><img class="card-favorite" src="./icns/star-outline.svg" alt="Favorite"></div>
        </div>
        </div>
    </div>
    `;

    cardContainer.insertAdjacentHTML("beforeend", card);
}






// function updateCards(book) {
// const cardContainer = document.querySelector("#card-container");
  
//     const card = `
//       <div class="card">
//         <div class="card-info">
//           <div class="card-text">
//             <h3 class="card-title">${book.title}</h3>
//             <p>${book.author}</p>
//           </div>
//           <div class="card-footer">
//             <div class="button"><img class="card-menu" src="./icns/menu.svg" alt="Menu"></div>
//             <div class="card-pages">Pages: ${book.page}</div>
//             <div class="button"><img class="card-favorite" src="./icns/star-outline.svg" alt="Favorite"></div>
//           </div>
//         </div>
//       </div>
//     `;
  
//     cardContainer.insertAdjacentHTML("beforeend", card);
// }




const form = document.querySelector(".submit-button");


form.addEventListener("click", (e)=> {
    e.preventDefault();

    const arr = document.querySelectorAll("input");
    
    const bookObj = new Book(arr[1].value, arr[2].value, arr[3].value);
    
    console.log(bookObj);

    addBookToLibrary(bookObj);


})
