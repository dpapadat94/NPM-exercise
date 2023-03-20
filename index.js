console.log("Hello World");
import Wishlist from "./wishlist";

const form = document.getElementById("submitForm");
const makeInp = document.getElementById("makeInput");
const modelInp = document.getElementById("modelInput");
const yearInp = document.getElementById("yearInput");
const makePara = document.getElementById("car-make");
const modelPara = document.getElementById("car-model");
const yearPara = document.getElementById("car-year");
const rmButton = document.querySelector("#removeBtn");
const wishListUl = document.querySelector("#wishListContainer > ul");

let wishlist1 = new Wishlist();

form.addEventListener("submit", addCar);

rmButton.addEventListener("click", removeCar);

function updateDOMList() {
  wishListUl.innerHTML = "";
  wishlist1.list.forEach((car) => {
    const liItem = document.createElement("li");
    liItem.textContent = `${car.make} ${car.model}`;
    liItem.addEventListener("click", () => showCarDetails(car));
    wishListUl.appendChild(liItem);
  });
}

function showCarDetails(car) {
  makePara.textContent = car.make;
  modelPara.textContent = car.model;
  yearPara.textContent = car.year;
  rmButton.disabled = false;
  rmButton.setAttribute("data-carId", car.id);
}

function addCar(event) {
  event.preventDefault();
  let make = makeInp.value;
  let model = modelInp.value;
  let year = yearInp.value;
  wishlist1.add(make, model, year);

  updateDOMList();
}
function removeCar() {
  let carId = Number(rmButton.getAttribute("data-carId"));
  wishlist1.remove(carId);

  updateDOMList();

  makePara.textContent = "";
  modelPara.textContent = "";
  yearPara.textContent = "";
  rmButton.disabled = true;
}
