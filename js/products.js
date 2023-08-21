//get the product container
let productContainer = document.querySelector(".products");

//combine both objects into one array
let products = [...phones, ...laptops]; //spread operator

//get liked items from local storage
products = JSON.parse(localStorage.getItem('likedItems')) || [...phones, ...laptops];

//create an empty array to store saved items
let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

let saveCounter;


//render all products

function renderProducts() {
    //clear product container
    productContainer.innerHTML = "";

    products.forEach(function (item, index) {
        //create new list item
        // The like image will be set based on the liked property of the item.
        let newProduct = `
        <div class="card" style="width: 18rem;">
            <img    class="liked" 
                    src=${item.liked ? "../assets/heart_filled.png" : "../assets/heart_outline.png"}
                    alt="like" 
                    onclick='likedItem(${JSON.stringify(item)}, ${JSON.stringify(index)})'>
           <div class='img-wrapper' > <img src=${item.images[0]} class="card-img-top" alt=${item.title}></div >
            <div class="card-body">
            <table>
                <tr>
                    <th>${item.title}</th>
                </tr>
                <tr>
                    <td>${item.description}</td>
                </tr>
            </table>

                <h3>R${item.price}</h3>
                <a class="btn btn-primary" onclick='saveItem(${JSON.stringify(item)})'>Save for later</a>
            </div>
        </div>
        `

        //add new list item to product container
        productContainer.innerHTML += newProduct;
    });
}
renderProducts()

function saveItem(item) {


    //push item to savedItems array
    savedItems.push(item);

    //save items to local storage
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    console.log('savedItems', savedItems)

    //check saved items in local storage
    saveCounter = JSON.parse(localStorage.getItem('savedItems')).length

    //alert user that item has been saved
    alert(`You have saved ${saveCounter} items`);
}



//like button
//when an item is liked, the liked property is set then changes array is saved to local storage.
//on reload/revisit, the changed array is retrieved from local storage and rendered to the page. 
function likedItem(item, index) {

    //toggle liked property
    products[index].liked = !products[index].liked;

    //update local storage
    localStorage.setItem('likedItems', JSON.stringify(products));

    //render products
    renderProducts()

}