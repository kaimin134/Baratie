let list = document.querySelector(".list");
let servers = document.querySelector(".servers");
let bartenders = document.querySelector(".bartenders");
let busboys = document.querySelector(".busboys");
let chefs = document.querySelector(".chefs");
let body = document.querySelector("body");
let infoList = document.querySelector(".infoList");
let earnings = document.querySelector(".earnings");
let closeShopping = document.querySelector(".closeShopping");

let serverList = [
  {
    firstName: "Theresa",
    lastName: "Wright",
    employeeID: "1653",
  },
  {
    firstName: "Bryan",
    lastName: "Kim",
    employeeID: "3350",
  },
  {
    firstName: "Alexandra",
    lastName: "Ramirez",
    employeeID: "5373",
  },
  {
    firstName: "Mary",
    lastName: "Mejia",
    employeeID: "5501",
  },
  {
    firstName: "Gabriella",
    lastName: "White",
    employeeID: "7912",
  },
];

let bartenderList = [
  {
    firstName: "Leroy",
    lastName: "Lewis",
    employeeID: "7208",
  },
  {
    firstName: "Mark",
    lastName: "Farmer",
    employeeID: "7310",
  },
  {
    firstName: "Kimberly",
    lastName: "Kirk",
    employeeID: "8615",
  },
];

let chefList = [
  {
    firstName: "Anthony",
    lastName: "Moran",
    employeeID: "1405",
  },
  {
    firstName: "Dawn",
    lastName: "Pittman",
    employeeID: "4872",
  },
  {
    firstName: "Jodi",
    lastName: "Benson",
    employeeID: "6528",
  },
  {
    firstName: "Gary",
    lastName: "Hill",
    employeeID: "7283",
  },
  {
    firstName: "Rachel",
    lastName: "Ibarra",
    employeeID: "8555",
  },
  {
    firstName: "Bryce",
    lastName: "Pham",
    employeeID: "8739",
  },
  {
    firstName: "Christopher",
    lastName: "Buck",
    employeeID: "8894",
  },
];

let busboyList = [
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

let employeeList = serverList.concat(bartenderList, busboyList, chefList);

function initServers() {
  serverList.forEach((value) => {
    let server = document.createElement("div");
    server.classList.add("employee");
    server.innerHTML = `
            <img src="image/server.PNG">
            <h2 class="name">${value.firstName} ${value.lastName}</h2>
            <p class="employeeID">Employee ID: ${value.employeeID.toLocaleString()}</p>
            <button onclick="seeInfo(${value.employeeID})">Get Info</button>`;
    servers.appendChild(server);
  });
}
initServers();

function initBartenders() {
  bartenderList.forEach((value) => {
    let bartender = document.createElement("div");
    bartender.classList.add("employee");
    bartender.innerHTML = `
            <img src="image/bartender.PNG">
            <h2 class="name">${value.firstName} ${value.lastName}</h2>
            <p class="employeeID">Employee ID: ${value.employeeID.toLocaleString()}</p>
            <button onclick="seeInfo(${value.employeeID})">Get Info</button>`;
    bartenders.appendChild(bartender);
  });
}
initBartenders();

function initBusboys() {
  busboyList.forEach((value) => {
    let busboy = document.createElement("div");
    busboy.classList.add("employee");
    busboy.innerHTML = `
            <img src="image/busboy.PNG">
            <h2 class="name">${value.firstName} ${value.lastName}</h2>
            <p class="employeeID">Employee ID: ${value.employeeID.toLocaleString()}</p>
            <button onclick="seeInfo(${value.employeeID})">Get Info</button>`;
    busboys.appendChild(busboy);
  });
}
initBusboys();

function initChefs() {
  chefList.forEach((value) => {
    let chef = document.createElement("div");
    chef.classList.add("employee");
    chef.innerHTML = `
            <img src="image/chef.PNG">
            <h2 class="name">${value.firstName} ${value.lastName}</h2>
            <p class="employeeID">Employee ID: ${value.employeeID.toLocaleString()}</p>
            <button onclick="seeInfo(${value.employeeID})">Get Info</button>`;
    chefs.appendChild(chef);
  });
}
initChefs();

function seeInfo(employeeID) {
  body.classList.add("active");
  initInfo(employeeID);
}

function initInfo(employeeID) {
  let employee = employeeList.find((x) => x.employeeID == employeeID);

  // Initialize worked hours, minutes, and seconds with random values
  let workedHours = Math.floor(Math.random() * (100 - 2 + 1)) + 2;
  let minutes = Math.floor(Math.random() * 60);
  let seconds = Math.floor(Math.random() * 60);

  // Function to update the timer every second
  function updateTimer() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        workedHours++;
      }
    }

    // Display the timer
    document.getElementById(
      "workedHours"
    ).textContent = `${workedHours}h ${minutes}m ${seconds}s`;
  }

  // Set up a timer interval
  let timerInterval = setInterval(updateTimer, 1000);

  // Display the employee information
  infoList.innerHTML = `
    <h1>Employee Info</h1>
    <p>Full Name: ${employee.firstName} ${employee.lastName}</p>
    <p>Phone Number: ${employee.firstName} ${employee.lastName}</p>
    <p>Email Address: ${employee.firstName} ${employee.lastName}</p>
    <p>Hire Date: ${employee.firstName} ${employee.lastName}</p>
    <p>Wage: $7.25</p>
    <p class="workedHours">Worked Hours: <span id="workedHours">${workedHours}h ${minutes}m ${seconds}s</span></p>
  `;

  // Clear the timer interval when closing the employee information
  closeShopping.addEventListener("click", () => {
    clearInterval(timerInterval);
    body.classList.remove("active");
  });
  earnings.addEventListener("click", () =>
    checkEarnings(employeeID, workedHours)
  );
}

function checkEarnings(employeeID, workedHours) {
  let employee = serverList.find((x) => x.employeeID == employeeID);
  let wage = 7.25; // Change this to the actual wage

  // Calculate earnings
  let earnings = wage * workedHours;

  // Display earnings

  Swal.fire({
    title: "Good job!",
    text: `Congrats ${employee.firstName} ${
      employee.lastName
    }!\nYou have earned $${earnings.toFixed(2)} in this month.`,
    icon: "success",
  });
}

let searchInput = document.getElementById("searchInput");

function searchEmployee() {
  let searchQuery = searchInput.value.toLowerCase();
  let employees = document.querySelectorAll(".employee");

  employees.forEach((employee) => {
    let employeeName = employee
      .querySelector(".name")
      .textContent.toLowerCase();
    if (employeeName.includes(searchQuery)) {
      employee.style.display = "block";
    } else {
      employee.style.display = "none";
    }
  });
}

// Call the searchProducts function on page load to display all products initially
searchEmployee();
