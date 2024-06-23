let inputName = document.querySelector("#name");
let showCardName = document.querySelector(".f-name");
let inputNumber = document.querySelector("#card-number");
let showCardNumber = document.querySelector(".f-number");
let inputMonth = document.querySelector("#date-info");
let showMonth = document.querySelector(".show-month");
let inputYear = document.querySelector(".years");
let showYear = document.querySelector(".show-year");
let inputCvc = document.querySelector("#cvc");
let showCvc = document.querySelector(".cvc");

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

inputYear.onkeyup = function () {
  if (inputYear.value === "") {
    showYear.innerHTML = "00";
  }
  if (inputYear.value < 10) {
    showYear.innerHTML = "0" + inputYear.value;
  } else {
    showYear.innerHTML = inputYear.value;
  }
};

inputCvc.onkeyup = function () {
  if (inputCvc.value === "" || inputCvc.value === !NaN) {
    showCvc.innerHTML = "000";
  } else {
    showCvc.innerHTML = inputCvc.value;
  }
};

document.forms[0].onsubmit = function (e) {
  if (
    inputName.value === "" ||
    inputNumber.value === "" ||
    inputMonth.value === "" ||
    inputYear.value === "" ||
    inputCvc.value === ""
  ) {
    e.preventDefault();
  }
};
