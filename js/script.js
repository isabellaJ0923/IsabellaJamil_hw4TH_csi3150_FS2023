// Function to filter and display cars based on user input
function filterAndDisplayCars() {
    const filters = {
      year: getFilterValue("year"),
      make: getFilterValue("make"),
      mileage: parseFloat(getFilterValue("mileage")),
      color: getFilterValue("color"),
      price: parseFloat(getFilterValue("price")),
    };
  
    const carCards = document.querySelectorAll(".product-card");
  
    carCards.forEach((card) => {
      const cardData = {
        year: getCardAttribute(card, "data-year"),
        make: getCardAttribute(card, "data-make"),
        mileage: parseFloat(getCardAttribute(card, "data-mileage")),
        color: getCardAttribute(card, "data-color"),
        price: parseFloat(getCardAttribute(card, "data-price")),
      });
  
      const matchesFilters = Object.keys(filters).every((key) => {
        const filterValue = filters[key];
        const cardValue = cardData[key];
  
        return !filterValue || filterValue === cardValue;
      });
  
      card.style.display = matchesFilters ? "block" : "none";
    });
  }
  
  // Function to reset filter inputs and display all cars
  function resetFilters() {
    resetFilter("year");
    resetFilter("make");
    resetFilter("mileage");
    resetFilter("color");
    resetFilter("price");
    displayAllCars();
  }
  
  // Helper function to get filter input values by name
  function getFilterValue(inputName) {
    return document.querySelector(`[name="${inputName}"]`).value || "";
  }
  
  // Helper function to get card attributes by name
  function getCardAttribute(card, attributeName) {
    return card.getAttribute(attributeName);
  }
  
  // Helper function to reset filter input by name
  function resetFilter(inputName) {
    document.querySelector(`[name="${inputName}"]`).value = "";
  }
  
  // Function to display all cars
  function displayAllCars() {
    const carCards = document.querySelectorAll(".product-card");
    carCards.forEach((card) => {
      card.style.display = "block";
    });
  }
  
  // Event listener for the filter button
  document.querySelector("button").addEventListener("click", filterAndDisplayCars);
  
  // Event listener for the reset button
  document.querySelector(".reset-btn").addEventListener("click", resetFilters);
  