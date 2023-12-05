let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let cartList = document.querySelector(".cartList");
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
let cartListArray = [];
function initApp() {
  products.forEach((value, key) => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
            <img src="image/${value.image}">
            <br></br>
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key}); body.classList.add('active')">Add To Cart</button>`;
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
            <button onclick="addToCart(${key}); body.classList.add('active')">Add To Cart</button>`;
    list.appendChild(item);
  });
}

// Call the searchProducts function on page load to display all products initially
searchProducts();

function toggleShellfishButton() {
  let shellfishButton = document.getElementById("shellfishButton");
  let shellfishItemIndex = products.findIndex(
    (product) => product.name === "Sushi Platter"
  );
  let shellfishItem =
    document.querySelector(".list").children[shellfishItemIndex];

  if (shellfishButton.classList.contains("selected")) {
    // Unselect the button
    shellfishButton.classList.remove("selected");
    shellfishItem.style.backgroundColor = ""; // Set to the original color or remove the style
  } else {
    // Select the button
    shellfishButton.classList.add("selected");
    shellfishItem.style.backgroundColor = "red"; // Set the background color to red
  }
}
let isShellfishSelected = false;
let isFishSelected = false;
let isWheatSelected = false;
let isSoySelected = false;
let isDairySelected = false;
let isEggSelected = false;
let isSesameSelected = false;
let isPeanutSelected = false;

function toggle(allergic) {
  let allergicButton = document.getElementById(`${allergic}Button`);
  // Get the indices of the items related to sushi
  let isAllergySelected = false;
  let indices = [];
  const shellfishIndices = [0, 2, 4];
  const fishIndices = [0, 1, 4];
  const wheatIndices = [2, 6];
  const soyIndices = [4, 6];
  const dairyIndices = [3, 5];
  const eggIndices = [2, 6];
  const sesameIndices = [4];
  const peanutIndices = [0, 6];

  switch (allergic) {
    case "shellfish":
      indices = shellfishIndices;
      isShellfishSelected = !isShellfishSelected;
      isAllergySelected = isShellfishSelected;
      break;
    case "fish":
      indices = fishIndices;
      isFishSelected = !isFishSelected;
      isAllergySelected = isFishSelected;
      break;
    case "wheat":
      indices = wheatIndices;
      isWheatSelected = !isWheatSelected;
      isAllergySelected = isWheatSelected;
      break;
    case "soy":
      indices = soyIndices;
      isSoySelected = !isSoySelected;
      isAllergySelected = isSoySelected;
      break;
    case "dairy":
      indices = dairyIndices;
      isDairySelected = !isDairySelected;
      isAllergySelected = isDairySelected;
      break;
    case "egg":
      indices = eggIndices;
      isEggSelected = !isEggSelected;
      isAllergySelected = isEggSelected;
      break;
    case "sesame":
      indices = sesameIndices;
      isSesameSelected = !isSesameSelected;
      isAllergySelected = isSesameSelected;

      break;
    case "peanut":
      indices = peanutIndices;
      isPeanutSelected = !isPeanutSelected;
      isAllergySelected = isPeanutSelected;
      break;
    default:
      indices = [];
  }
  // Toggle background color for each sushi item
  indices.forEach((index) => {
    const item = document.querySelector(`.item:nth-child(${index + 1})`);
    const button = item.querySelector("button");
    if (isAllergySelected) {
      allergicButton.classList.add("selected");
      item.style.backgroundColor = "red";
      button.style.backgroundColor = "darkred";
    } else {
      allergicButton.classList.remove("selected");
      item.style.backgroundColor = ""; // Reset to the original color
      button.style.backgroundColor = ""; // Reset button color
    }
  });
}

function addToCart(key) {
  if (cartListArray[key]) {
    // If the item is already in the cart, increase its quantity
    cartListArray[key].quantity += 1;
  } else {
    // If the item is not in the cart, copy it from the products list
    cartListArray[key] = JSON.parse(JSON.stringify(products[key]));
    cartListArray[key].quantity = 1;
  }
  reloadCart();
}
function reloadCart() {
  cartList.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  cartListArray.forEach((value, key) => {
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
      cartList.appendChild(newDiv);
    }
  });
  total.innerText = "$" + totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete cartListArray[key];
  } else {
    cartListArray[key].quantity = quantity;
    cartListArray[key].price = quantity * products[key].price;
  }
  reloadCart();
}

function handleCashPayment() {
  let amountGiven = prompt("Enter the amount customer gives:");

  if (amountGiven) {
    let changeAmount = calculateChange(amountGiven);
    alert(`Change amount: $${changeAmount.toLocaleString()}`);
    resetTotal();
  }
}

function handleCreditCardPayment() {
  resetTotal();
}

function calculateChange(amountGiven) {
  let totalAmount = parseFloat(
    total.innerText.replace("$", "").replace(/,/g, "")
  );
  let amountGivenFloat = parseFloat(amountGiven);

  if (!isNaN(amountGivenFloat)) {
    return amountGivenFloat - totalAmount;
  } else {
    alert("Invalid amount. Please enter a valid number.");
    return 0;
  }
}

function resetTotal() {
  cartListArray = [];
  reloadCart();
}
