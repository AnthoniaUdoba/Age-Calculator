//selecting the items by getting elements from HTML
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let date = document.getElementById("date").value;
let calculate = document.getElementById("calculate").value;
let result = document.querySelector(".result").value;

//set date maximum to today
date.max = new Date().toISOString().split("T")[0];
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

// if (date > day) {
//   day = day + months[month - 1];
//   month = month - 1;
// }
