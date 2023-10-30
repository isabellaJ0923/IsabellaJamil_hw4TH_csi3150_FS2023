document.querySelector("button").addEventListener("click", function () {
    // Get filter values
    var yearFilter = document.querySelector("[name='year']").value || "";
    var makeFilter = document.querySelector("[name='make']").value || "";
    var mileageFilter = document.querySelector("[name='mileage']").value || "";
    var colorFilter = document.querySelector("[name='color']").value || "";
    var priceFilter = document.querySelector("[name='price']").value || "";
  
    var carCards = document.querySelectorAll(".product-card");
  
    // Loop through each card and check if it matches the filters
    carCards.forEach(function (card) {
      var year = card.getAttribute("data-year");
      var make = card.getAttribute("data-make");
      var mileage = card.getAttribute("data-mileage");
      var color = card.getAttribute("data-color");
      var price = card.getAttribute("data-price");
  
      if (
        (!yearFilter || year == yearFilter) &&
        (!makeFilter || make == makeFilter) &&
        (!mileageFilter || mileage <= mileageFilter) &&
        (!colorFilter || color == colorFilter) &&
        (!priceFilter || price <= priceFilter)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
  function resetFilters() {
    // Reset each filter dropdown to the first option
    document.getElementById("year").selectedIndex = 0;
    document.getElementById("make").selectedIndex = 0;
    document.getElementById("mileage").selectedIndex = 0;
    document.getElementById("color").selectedIndex = 0;
    document.getElementById("price").selectedIndex = 0;
  }
  
  document.querySelector(".reset-btn").addEventListener("click", function () {
    const formElements = document.querySelectorAll(".filter-form input");
    formElements.forEach((element) => {
      if (element.type !== "button") {
        element.value = "";
      }
      
    });
    // Re-display all cars after reset
    displayCars();
  });
  