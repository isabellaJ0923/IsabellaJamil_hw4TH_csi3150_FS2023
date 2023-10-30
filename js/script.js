const filterForm = document.getElementById("filter");
const price = document.getElementById("price");
const make = document.getElementById("make");
const mileage = document.getElementById("mileage");
const color = document.getElementById("colors");

document.getElementById("none").style.display = "none";

document.getElementById("filters").addEventListener("change", displayCars);

function displayCars() {
  document.getElementById("none").style.display = "none";
  const maxPrice = price.value;
  const makeValue = make.value;
  const mileageValue = mileage.value;
  const colorValue = color.value;

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardPrice = card.getAttribute("data-price");
    const cardMake = card.getAttribute("data-make");
    const cardMileage = card.getAttribute("data-mileage");
    const cardColor = card.getAttribute("data-color");

    if (
      (cardPrice <= maxPrice || maxPrice === "Price") &&
      (makeValue === cardMake || makeValue === "Makes") &&
      (mileageValue >= cardMileage || mileageValue === "Mileage") &&
      (colorValue === cardColor || colorValue === "Colors")
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
  const count = 0;
  cards.forEach((card) => {
    const cardPrice = card.getAttribute("data-price");
    const cardMake = card.getAttribute("data-make");
    const cardMileage = card.getAttribute("data-mileage");
    const cardColor = card.getAttribute("data-color");

    if (
      (cardPrice <= maxPrice || maxPrice === "Price") &&
      (makeValue === cardMake || makeValue === "Makes") &&
      (mileageValue >= cardMileage || mileageValue === "Mileage") &&
      (colorValue === cardColor || colorValue === "Colors")
    ) {
      count = count + 1;
    }
  });

  if (count == 0) {
    document.getElementById("none").style.display = "block";
  }
}
