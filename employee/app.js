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
    email: "khoward@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 15,
  },
  {
    firstName: "Bryan",
    lastName: "Kim",
    employeeID: "3350",
    email: "vnzcvngn@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 13,
  },
  {
    firstName: "Alexandra",
    lastName: "Ramirez",
    employeeID: "5373",
    email: "nzdfbv@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 15,
  },
  {
    firstName: "Mary",
    lastName: "Mejia",
    employeeID: "5501",
    email: "zfdnzv@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 13,
  },
  {
    firstName: "Gabriella",
    lastName: "White",
    employeeID: "7912",
    email: "zvnzcv@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 12,
  },
];

let bartenderList = [
  {
    firstName: "Leroy",
    lastName: "Lewis",
    employeeID: "7208",
    email: "zcvbznf@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 13,
  },
  {
    firstName: "Mark",
    lastName: "Farmer",
    employeeID: "7310",
    email: "vcznvcng@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 14,
  },
  {
    firstName: "Kimberly",
    lastName: "Kirk",
    employeeID: "8615",
    email: "nzvnzn@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 15,
  },
];

let chefList = [
  {
    firstName: "Anthony",
    lastName: "Moran",
    employeeID: "1405",
    email: "vnzcxnvcz@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 15,
  },
  {
    firstName: "Dawn",
    lastName: "Pittman",
    employeeID: "4872",
    email: "vczxbnzhfd@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 12,
  },
  {
    firstName: "Jodi",
    lastName: "Benson",
    employeeID: "6528",
    email: "ndhfdbxh@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 14,
  },
  {
    firstName: "Gary",
    lastName: "Hill",
    employeeID: "7283",
    email: "nccfbcb@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 15,
  },
  {
    firstName: "Rachel",
    lastName: "Ibarra",
    employeeID: "8555",
    email: "nsFxzvC@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 15,
  },
  {
    firstName: "Bryce",
    lastName: "Pham",
    employeeID: "8739",
    email: "bvctd@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 15,
  },
  {
    firstName: "Christopher",
    lastName: "Buck",
    employeeID: "8894",
    email: "jfadfg@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 15,
  },
];

let busboyList = [
  {
    firstName: "Donald",
    lastName: "Trujillo",
    employeeID: "3324",
    email: "hsdfhsdfh@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 12,
  },
  {
    firstName: "Barbara",
    lastName: "Le",
    employeeID: "3385",
    email: "rayhfdh@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 12,
  },
  {
    firstName: "Jessica",
    lastName: "David",
    employeeID: "4470",
    email: "hafhdhfadh@example.org",
    dob: "1996-10-25",
    hireDate: "2020-03-19",
    phoneNumber: "4532995438",
    wage: 13,
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
    <p>Phone Number: ${employee.phoneNumber}</p>
    <p>Email Address: ${employee.email}</p>
    <p>Date of Birth: ${employee.dob}</p>
    <p>Hire Date: ${employee.hireDate} </p>
    <p>Wage: $${employee.wage} per hour</p>
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
  let employee = employeeList.find((x) => x.employeeID == employeeID);
  let wage = employee.wage; // Change this to the actual wage

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

  // alert(
  //   `Congrats ${employee.firstName} ${
  //     employee.lastName
  //   }!\nYou have earned $${earnings.toFixed(2)} in this month.`
  // );
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
