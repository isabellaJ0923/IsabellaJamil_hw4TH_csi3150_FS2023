const carList = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
    image: "images/silver_toyota_camry.jpg",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
    image: "images/white_honda_civic.jpg",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
    image: "images/black_ford_fusion.jpg",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
    image: "",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
    image: "red_chevy_malibu.jpg",
  },
  // Additional entries:
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
    image: "gray_passat_volkswagen.jpg",
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
    image: "silver_elantra_hyundai.jpg",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
    image: "green_outback_subaru.jpg",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
    image: "blue_cx5_mazda.jpg",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
    image: "white_sorento_kia.jpg",
  },
  // Five more entries:
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
    image: "black_challenger_dodge.jpg",
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
    image: "red_xt5_cadillac.jpg",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
    image: "blue_fpace_jaguar.jpg",
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
    image: "black_models_tesla.jpg",
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
    image: "white_cayenne_porsche.jpg",
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
    image: "white_es_lexus.jpg",
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
    image: "black_5series_bmw.jpg",
  },
];
function searchCar() {
  const year = document.querySelector('[name="year"]').value;
  const make = document.querySelector('[name="make"]').value;
  const mileage = document.querySelector('[name="mileage"]').value;
  const color = document.querySelector('[name="color"]').value;
  const price = document.querySelector('[name="price"]').value;

  const cars = document.querySelectorAll(".product-card");
  cars.forEach((car) => {
    if (
      (year === "" || car.getAttribute("data-year") === year) &&
      (make === "" || car.getAttribute("data-make") === make) &&
      (mileage === "" || car.getAttribute("data-mileage") === mileage) &&
      (color === "" || car.getAttribute("data-color") === color) &&
      (price === "" || car.getAttribute("data-price") === price)
    ) {
      car.style.display = "block";
    } else {
      car.style.display = "none";
    }
  });
}

function filterCars() {
  const year = document.getElementById("year").value;
  const make = document.getElementById("make").value;
  const mileage = document.getElementById("mileage").value;
  const color = document.getElementById("color").value;
  const price = document.getElementById("price").value;

  const cards = document.querySelectorAll(".product-card");

  let carsFound = false;

  cards.forEach((card) => {
    const cardYear = card.getAttribute("data-year");
    const cardMake = card.getAttribute("data-make");
    const cardMileage = card.getAttribute("data-mileage");
    const cardColor = card.getAttribute("data-color");
    const cardPrice = card.getAttribute("data-price");

    if (
      (year === "" || year === cardYear) &&
      (make === "" || make === cardMake) &&
      (mileage === "" || mileage === cardMileage) &&
      (color === "" || color === cardColor) &&
      (price === "" || price === cardPrice)
    ) {
      card.style.display = "block";
      carsFound = true;
    } else {
      card.style.display = "none";
    }
  });

  // Check if no cars met the criteria
  if (!carsFound) {
    alert("No cars found matching your criteria. Please try again.");
  }
}

function displayCars() {
  const carList = document.querySelector(".car-list");

  // Clear out any existing cars
  carList.innerHTML = "";

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.classList.add("product-card");
    carCard.setAttribute("data-year", car.year);
    carCard.setAttribute("data-make", car.make);
    carCard.setAttribute("data-mileage", car.mileage);
    carCard.setAttribute("data-color", car.color);
    carCard.setAttribute("data-price", car.price);

    const carContent = `
            <h2>${car.make} ${car.model}</h2>
            <img src="${car.image}" alt="${car.make} ${car.model} Image">
            <p>Year: ${car.year}</p>
            <p>Mileage: ${car.mileage}</p>
            <p>Price: $${car.price}</p>
            <p>Color: ${car.color}</p>
            <p>Gas Mileage: ${car.gasMileage}</p>
        `;

    carCard.innerHTML = carContent;
    carList.appendChild(carCard);
  });
}

// Initially display all cars when the page loads
displayCars();

function populateDropdowns() {
  const years = [...new Set(cars.map((car) => car.year))];
  const makes = [...new Set(cars.map((car) => car.make))];
  const mileages = [...new Set(cars.map((car) => car.mileage))];
  const colors = [...new Set(cars.map((car) => car.color))];
  const prices = [...new Set(cars.map((car) => car.price))];

  populateDropdown("year", years);
  populateDropdown("make", makes);
  populateDropdown("mileage", mileages);
  populateDropdown("color", colors);
  populateDropdown("price", prices);
}

function populateDropdown(dropdownId, values) {
  const dropdown = document.getElementById(dropdownId);
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.innerText = value;
    dropdown.appendChild(option);
  });
}
function renderCars() {
  const carList = document.querySelector(".car-list");
  carList.innerHTML = ""; // Clear any existing car cards

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "product-card";
    carCard.setAttribute("data-year", car.year);
    carCard.setAttribute("data-make", car.make);
    carCard.setAttribute("data-mileage", car.mileage);
    carCard.setAttribute("data-color", car.color);
    carCard.setAttribute("data-price", car.price);

    carCard.innerHTML = `
    <img src="${car.image}" alt="${car.make} ${car.model} Image">
        <h2>${car.make} ${car.model}</h2>
        <p>Year: ${car.year}</p>
        <p>Color: ${car.color}</p>
        <p>Mileage: ${car.mileage}</p>
        <p>Price: ${car.price}</p>
        <p>Fuel Economy: ${car.gasMileage}</p>
      `;

    carList.appendChild(carCard);
  });
}

// Render the cars when the page loads
document.addEventListener("DOMContentLoaded", renderCars);

window.onload = function () {
  displayCars();
  populateDropdowns();
};