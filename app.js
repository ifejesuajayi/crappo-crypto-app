const hamburger = document.getElementById("mobile");
const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  navbar.style.transition = "0.8s ease";
});

// const cards = document.querySelectorAll(".flexTwo");

// cards.forEach((card) => {
//   card.addEventListener("mouseover", () => {
//     cards.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//     card.classList.add("active");
//   });
// });

const cardOne = document.querySelector(".cardOne");
const cardTwo = document.querySelector(".cardTwo");
const cardThree = document.querySelector(".cardThree");

const arr1 = document.querySelector(".arrowRightOne");
const arr2 = document.querySelector(".arrowRightTwo");
const arr3 = document.querySelector(".arrowRightThree");

const min1 = document.querySelector(".miningOne");
const min2 = document.querySelector(".miningTwo");
const min3 = document.querySelector(".miningThree");

cardOne.addEventListener("mouseover", () => {
  cardOne.classList.add("active");
  cardTwo.classList.remove("active");
  cardThree.classList.remove("active");
  min1.style.display = "inline";
  arr1.style.display = "none";
  min2.style.display = "none";
  arr2.style.display = "inline";
  min3.style.display = "none";
  arr3.style.display = "inline";
});
cardTwo.addEventListener("mouseover", () => {
  cardTwo.classList.add("active");
  cardOne.classList.remove("active");
  cardThree.classList.remove("active");
  min2.style.display = "inline";
  arr2.style.display = "none";
  min1.style.display = "none";
  arr1.style.display = "inline";
  min3.style.display = "none";
  arr3.style.display = "inline";
});
cardThree.addEventListener("mouseover", () => {
  cardThree.classList.add("active");
  cardTwo.classList.remove("active");
  cardOne.classList.remove("active");
  min3.style.display = "inline";
  arr3.style.display = "none";
  min2.style.display = "none";
  arr2.style.display = "inline";
  min1.style.display = "none";
  arr1.style.display = "inline";
});
