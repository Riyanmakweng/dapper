"use strict";

const product1 = {
  img: "img/car2.jpg",
  product_info: "Levelz, Black tracksuit piece",
  price: 7500,
  category: "clothes",
  productNo: 1,
  product_seller: "Dapper Stores",
  type: "featured",
};
const product7 = {
  img: "img/car2.jpg",
  product_info: "Levelz, Black tracksuit piece",
  price: 7500,
  category: "clothes",
  productNo: 1,
  product_seller: "Dapper Stores",
  type: "featured",
};
const product8 = {
  img: "img/car2.jpg",
  product_info: "Levelz, Black tracksuit piece",
  price: 7500,
  category: "clothes",
  productNo: 1,
  product_seller: "Dapper Stores",
  type: "featured",
};

const product2 = {
  img: "img/car3.jpg",
  product_info: "Black Shirt, Long Sleeved",
  price: 8500,
  category: "clothes",
  productNo: 2,
  product_seller: "Dapper Stores",
  type: "featured",
};

const product3 = {
  img: "img/car4.jpg",
  product_info: "Ring Light",
  price: 7500,
  category: "clothes",
  productNo: 3,
  product_seller: "Dapper Stores",
  type: "featured",
};

const product4 = {
  img: "img/car4.jpg",
  product_info: "Ring Light",
  price: 7500,
  category: "clothes",
  productNo: 3,
  product_seller: "Dapper Stores",
  type: "normal",
};

const product5 = {
  img: "img/car4.jpg",
  product_info: "Ring Light",
  price: 7500,
  category: "clothes",
  productNo: 3,
  product_seller: "Dapper Stores",
  type: "normal",
};

const product6 = {
  img: "img/car4.jpg",
  product_info: "Ring Light",
  price: 7500,
  category: "clothes",
  productNo: 3,
  product_seller: "Dapper Stores",
  type: "normal",
};

const products = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
];

const featuredProduct = products.filter((pro) => pro.type === "featured");
const ourProduct = products.filter((pro) => pro.type === "normal");

// Select Elements
const featuredProducts = document.querySelector(".container1");
const ourProducts = document.querySelector(".container2");

const question = document.querySelectorAll(".question");
const question1 = document.querySelector(".question-box1");
const question2 = document.querySelector(".question-box2");
const question3 = document.querySelector(".question-box3");
const answer = document.querySelectorAll(".answer");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
// Functions
const displayFeaturedProduct = function () {
  featuredProducts.innerHTML = "";
  featuredProduct.forEach((product) => {
    featuredProducts.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
            <img src="${product.img}" alt="" width="300px" height="350px" loading="lazy">
            <p class="product-info">${product.product_info}</p>
            <p class="seller">${product.product_seller}</p>
            <div class="price-talk">
              <p class="price"><span class="naira">&#8358 </span>${product.price}</p>
              <a href="https://wa.link/rpjarh" class="buy" target="_blank">
              <img src="img/pngwing.com (4).png" alt="" class="whatsapp-logo">
              Lets talk</a>
            </div>
          </div>`
    );
  });
};

const displayOurProduct = function () {
  ourProducts.innerHTML = "";
  ourProduct.forEach((product) => {
    ourProducts.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
            <img src="${product.img}" alt="" width="300px" height="350px" loading="lazy">
            <p class="product-info">${product.product_info}</p>
            <p class="seller">${product.product_seller}</p>
            <div class="price-talk">
              <p class="price"><span class="naira">&#8358 </span>${product.price}</p>
              <a href="https://wa.link/rpjarh" class="buy" target="_blank">
              <img src="img/pngwing.com (4).png" alt="" class="whatsapp-logo">
              Lets talk</a>
            </div>
          </div>`
    );
  });
};

const hideAnswer = function () {
  answer.forEach((ans) => ans.classList.add("hidden"));
};

const showAnswer1 = function () {
  answer1.classList.toggle("hidden");
  arrow1.classList.toggle("rotate");
};
const showAnswer2 = function () {
  answer2.classList.toggle("hidden");
  arrow2.classList.toggle("rotate");
};
const showAnswer3 = function () {
  answer3.classList.toggle("hidden");
  arrow3.classList.toggle("rotate");
};

// Calling Functions

displayFeaturedProduct();
displayOurProduct();
hideAnswer();
// Events

question1.addEventListener("click", showAnswer1);
question2.addEventListener("click", showAnswer2);
question3.addEventListener("click", showAnswer3);
