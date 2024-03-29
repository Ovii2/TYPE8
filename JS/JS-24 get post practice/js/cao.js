"use strict";
console.log("cao");

const baseUrl = "https://olive-bead-glazer.glitch.me/";
const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", sendBrandModel);

function sendBrandModel() {
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      brand: "BMW",
      model: "X7",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
      getCars();
    })
    .catch((error) => console.log(error.message));
}

function getCars() {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => console.log("data", data))
    .catch((error) => console.log(error.message));
}
getCars();
