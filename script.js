"use strict";

// HTML Elements
const pageViewsNumber = document.getElementById("page-views-number");
const price = document.getElementById("price");
const quotaType = document.getElementById("quota-type");
const inputSlider = document.getElementById("input-slider");
const toggleBtn = document.getElementById("input-toggle");

// Useful info
const pageviews = ["10K", "50K", "100K", "500K", "1M"];

inputSlider.addEventListener("change", () => {
  price.textContent = inputSlider.value;
  if (inputSlider.value == "8") {
    pageViewsNumber.textContent = pageviews[0];
  }
  if (inputSlider.value == "12") {
    pageViewsNumber.textContent = pageviews[1];
  }
  if (inputSlider.value == "16") {
    pageViewsNumber.textContent = pageviews[2];
  }
  if (inputSlider.value == "24") {
    pageViewsNumber.textContent = pageviews[3];
  }
  if (inputSlider.value == "36") {
    pageViewsNumber.textContent = pageviews[4];
  }
  toggleBtn.checked = false;
});

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.checked) {
    sessionStorage.setItem("oldValue", price.textContent);
    price.textContent =
      parseInt(price.textContent) * 12 - parseInt(price.textContent) * 0.25;
    quotaType.textContent = "/year";
  } else {
    price.textContent = sessionStorage.getItem("oldValue");
    quotaType.textContent = "/month";
  }
});
