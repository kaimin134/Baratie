let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: "FD00000",
    name: "Fried Seafood Platter",
    image: "1.PNG",
    price: 14.5,
  },
  {
    id: "FD00001",
    name: "Salmon Fillet",
    image: "2.PNG",
    price: 9.5,
  },
  {
    id: "FD00002",
    name: "Crab Cake",
    image: "3.PNG",
    price: 12,
  },
  {
    id: "FD00003",
    name: "Sea Food Rice",
    image: "4.PNG",
    price: 10,
  },
  {
    id: "FD00004",
    name: "Sushi Platter",
    image: "5.PNG",
    price: 20,
  },
  {
    id: "FD00005",
    name: "Beef Steak",
    image: "6.PNG",
    price: 18.5,
  },
  {
    id: "FD00006",
    name: "Wonton",
    image: "7.PNG",
    price: 9,
  },
  {
    id: "DK0000",
    name: "Water",
    image: "8.PNG",
    price: 0,
  },
  {
    id: "DK00001",
    name: "Soda Pop",
    image: "9.PNG",
    price: 2,
  },
  {
    id: "DK00002",
    name: "Green Tea",
    image: "10.PNG",
    price: 3.5,
  },
  {
    id: "DK00003",
    name: "Bloody Mary",
    image: "11.PNG",
    price: 8,
  },
  {
    id: "DK00004",
    name: "Strawhat Cocktail",
    image: "12.PNG",
    price: 11.5,
  },
  {
    id: "DK00005",
    name: "Beer",
    image: "13.PNG",
    price: 4.5,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
            <img src="image/${value.image}">
            <br></br>
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key}); body.classList.add('active')">Add To Card</button>`;
    list.appendChild(item);
  });
}
initApp();

let searchInput = document.getElementById("searchInput");

function searchProducts() {
  let searchTerm = searchInput.value.toLowerCase();

  // Filter products based on the search term
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  // Clear existing items in the list
  list.innerHTML = "";

  // Display the filtered products
  filteredProducts.forEach((value, key) => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
            <img src="image/${value.image}">
            <br></br>
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key}); body.classList.add('active')">Add To Card</button>`;
    list.appendChild(item);
  });
}

// Call the searchProducts function on page load to display all products initially
searchProducts();

function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = "$" + totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
