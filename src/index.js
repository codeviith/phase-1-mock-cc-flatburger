fetch("http://localhost:3500/burgers")
.then(response => response.json())
.then(data => {
    displayMenuDetails(data[0]);
    data.forEach(food => {
        createMenu(food);
    })
})

const menuList = document.getElementById("restaurant-menu");
const foodImage = document.getElementById("image");
const foodName = document.getElementById("name");
const cartForm = document.getElementById("add-to-cart-form");
const totalInCart = document.getElementById("number-in-cart-count");
const cartInput = document.getElementById("number-to-add");


function displayMenuDetails(food) {
    foodImage.src = food.image;
    foodName.textContent = food.name;
    totalInCart.textContent = food.number_in_cart;
}


function createMenu(food) {
    const createSpanTag = document.createElement("span");
    createSpanTag.textContent = food.name;

    createSpanTag.addEventListener("click", () => {
        displayMenuDetails(food);
    })

    menuList.appendChild(createSpanTag);
}



cartForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let totalInCartInt = parseInt(totalInCart.textContent);

    totalInCart.textContent = parseInt(cartInput.value) + totalInCartInt;


    cartForm.reset();
})



