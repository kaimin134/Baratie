let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let busboy = document.querySelector(".busboy");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let currentTable = 0;

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});
let availableBusboyList = [
  {
    firstName: "Donald",
    lastName: "Trujillo",
    employeeID: "3324",
  },
  {
    firstName: "Barbara",
    lastName: "Le",
    employeeID: "3385",
  },
  {
    firstName: "Jessica",
    lastName: "David",
    employeeID: "4470",
  },
];
let unavailableBusboyList = [];

function initTables() {
  for (let i = 1; i < 51; i++) {
    let table = document.createElement("div");
    table.classList.add("table");
    table.innerHTML = `
            <img src="image/table.PNG">
            </br>
            <div class="tableID">${i}</div>
            <button class="orderButton" onclick="window.location='../order/index.html'">Order</button>
            <button onclick="callBusboy(${i})">Call Busboy</button>`;

    list.appendChild(table);
  }
}
initTables();

function callBusboy(tableID) {
  currentTable = tableID;
  body.classList.add("active");
  initBusboys();
}

function initBusboys() {
  let availableBusboyContainer = document.querySelector(".availableBusboy");
  let unavailableBusboyContainer = document.querySelector(".unavailableBusboy");

  // Clear previous content
  availableBusboyContainer.innerHTML = `<h1>Table ${currentTable}:</h1><h2>Available Busboys:</h2>`;
  unavailableBusboyContainer.innerHTML = "<h2>Unavailable Busboys:</h2>";

  availableBusboyList.forEach((value, index) => {
    let availableBusboy = document.createElement("div");
    availableBusboy.innerHTML = `<button id="available" onclick="moveToUnavailable(${index})">${value.firstName} ${value.lastName}</button>`;
    availableBusboyContainer.appendChild(availableBusboy);
  });

  unavailableBusboyList.forEach((value, index) => {
    let unavailableBusboy = document.createElement("div");
    let timerId = `timer_${index}`;
    unavailableBusboy.innerHTML = `
      <div class="cleaning">
        <button id="unavailable">${value.firstName} ${value.lastName}</button>
        <span id="${timerId}"></span>
      </div>`;
    unavailableBusboyContainer.appendChild(unavailableBusboy);

    // Start the timer for each unavailable busboy
    startTimer(timerId, 10); // 10 seconds
  });
}

// Function to move a busboy from available to unavailable list
function moveToUnavailable(index) {
  let selectedBusboy = availableBusboyList[index];
  availableBusboyList.splice(index, 1);
  unavailableBusboyList.push(selectedBusboy);

  // Update the display
  initBusboys();

  // Schedule the undo operation after 10 seconds
  setTimeout(() => {
    // Move the busboy back to the available list
    availableBusboyList.push(selectedBusboy);
    unavailableBusboyList.splice(
      unavailableBusboyList.indexOf(selectedBusboy),
      1
    );

    // Update the display again
    initBusboys();
  }, 10000); // 10 seconds in milliseconds
}

// Function to start the timer for an unavailable busboy
function startTimer(timerId, seconds) {
  let timerElement = document.getElementById(timerId);
  let remainingTime = seconds;

  function updateTimer() {
    timerElement.textContent = `${remainingTime}s`;
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(timerInterval);
      timerElement.textContent = ""; // Hide the timer when it reaches 0
    }
  }

  updateTimer(); // Update immediately to avoid a delay in the initial display
  let timerInterval = setInterval(updateTimer, 1000); // Update every second
}

let searchInput = document.getElementById("searchInput");

function searchTable() {
  let searchQuery = searchInput.value.toLowerCase();
  let tables = document.querySelectorAll(".table");

  tables.forEach((table) => {
    let tableID = table.querySelector(".tableID").textContent.toLowerCase();
    if (tableID.includes(searchQuery)) {
      table.style.display = "block";
    } else {
      table.style.display = "none";
    }
  });
}

// Call the searchProducts function on page load to display all products initially
searchTable();
