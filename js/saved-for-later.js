//get item container
let itemContainer = document.querySelector(".saved-items-container");

//get saved items from local storage
let savedProductItems = JSON.parse(localStorage.getItem("savedItems")) || [];
console.log('savedProductItems', savedProductItems)

//render saved items

savedProductItems.forEach(function (item, index) {
     //create new list item
     let savedItem = `
     <div class="card" style="width: 18rem;">
         <img src=${item.images[0]} class="card-img-top" alt="...">
         <div class="card-body">
             <h5 class="card-title">${item.title}</h5>
             <p class="card-text">${item.description}</p>
             <h3>R${item.price}</h3>
             <a class="btn btn-primary"'>Saved</a>
         </div>
     </div>
     `
     itemContainer.innerHTML += savedItem;
});