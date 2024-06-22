let inputName = document.querySelector("#name");
let showCardName = document.querySelector(".f-name");
let inputNumber = document.querySelector("#card-number");
let showCardNumber = document.querySelector(".f-number");
let inputMonth = document.querySelector("#date-info");
let showMonth = document.querySelector(".show-month");
let inputYear = document.querySelector(".years");
let showYear = document.querySelector(".show-year");

inputName.onkeyup = function () {
  if (inputName.value === "" || !isNaN(inputName.value)) {
    showCardName.innerHTML = "Default Name";
  } else {
    showCardName.innerHTML = inputName.value;
  }
};

inputNumber.onkeyup = function () {
  if (inputNumber.value === "") {
    showCardNumber.innerHTML = "0000 0000 0000 0000";
  } else {
    showCardNumber.innerHTML = inputNumber.value;
  }
};

inputMonth.onkeyup = function () {
  if (inputMonth.value === "") {
    showMonth.innerHTML = "00";
  }
  if (inputMonth.value < 10) {
    showMonth.innerHTML = "0" + inputMonth.value;
  } else {
    showMonth.innerHTML = inputMonth.value;
  }
};
