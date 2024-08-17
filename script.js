"use strict";

const product1 = {
  img: "img/mini-zirconia.jpg",
  product_info: "Mini Zirconia set, Non tarnish",
  price: 6000,
  category: "jewelery",
  product_seller: "Dapper Stores",
  type: "featured",
};

const product8 = {
  img: "img/crystal-earrings.jpg",
  product_info: "Simple but elegant sey of crystal earrings, non tanish",
  price: 4000,
  category: "jewelery",
  product_seller: "Dapper Stores",
  type: "normal",
};

const product2 = {
  img: "img/steel-earrings.jpg",
  product_info: "Steel Earrings, Non Tarnish",
  price: 4000,
  category: "clothes",
  product_seller: "Dapper Stores",
  type: "normal",
};

const product3 = {
  img: "img/steel-earrings1.jpg",
  product_info: "Steel Earrings, Non Tarnish",
  price: 4000,
  category: "clothes",
  product_seller: "Dapper Stores",
  type: "featured",
};

const product4 = {
  img: "img/stanley-mug.jpg",
  product_info: "Stanley mug",
  price: 23000,
  category: "clothes",
  product_seller: "Dapper Stores",
  type: "featured",
};

const product5 = {
  img: "img/black-jean-shorts.jpg",
  product_info: "Black Jean Shorts",
  price: 30000,
  category: "clothes",
  product_seller: "Dapper Stores",
  type: "normal",
};

const product6 = {
  img: "img/blue-jean-mens-short.jpg",
  product_info: "Blue Jean Mens Shorts",
  price: 30000,
  category: "clothes",
  productNo: 3,
  product_seller: "Dapper Stores",
  type: "normal",
};

const product7 = {
  img: "img/brilliant-round-cut.jpg",
  product_info: "Brilliant round cut Zirconia earrings",
  price: 4000,
  category: "jewelery",
  product_seller: "Dapper Stores",
  type: "featured",
};

const product9 = {
  img: "img/dark-blue-jean-mens-short.jpg",
  product_info: "Dark Blue Jean Men Shorts",
  price: 30000,
  category: "clothes",
  productNo: 3,
  product_seller: "Dapper Stores",
  type: "featured",
};

const product10 = {
  img: "img/long-blue-skeleton-jean-trouser.jpg",
  product_info: "Long Blue Skeleton Jean Trouser",
  price: 35000,
  category: "clothes",
  productNo: 3,
  product_seller: "Dapper Stores",
  type: "normal",
};
const product11 = {
  img: "img/black-jean-trouser.jpg",
  product_info: "Black Jean Trouser",
  price: 30000,
  category: "clothes",
  productNo: 3,
  product_seller: "Dapper Stores",
  type: "featured",
};
const product12 = {
  img: "img/blue-jean-trouser.jpg",
  product_info: "Blue Jean Trouser",
  price: 28000,
  category: "clothes",
  productNo: 3,
  product_seller: "Dapper Stores",
  type: "normal",
};
const product13 = {
  img: "img/skeleton-jean-trouser.jpg",
  product_info: "Skeleton Jean Trouser",
  price: 45000,
  category: "clothes",
  productNo: 3,
  product_seller: "Dapper Stores",
  type: "featured",
};

const products = [
  product13,
  product9,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product2,
  product10,
  product11,
  product12,
  product1,
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
