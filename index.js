const toggleBtn = document.querySelector(`.toggle_btn`);
const toggleBtnIcon = document.querySelector(`.toggle_btn i`);
const dropDownMenu = document.querySelector(`.dropdwon-menu`);
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle(`open`);
  const isOpen = dropDownMenu.classList.contains(`open`);

  toggleBtnIcon.classList = isOpen ? `fa-solid fa-xmark` : `fa-solid fa-bars`;
};

import { config } from "dotenv";
config();
//import dotenv from "dotenv";
//dotenv.config();
//require("dotenv").config();
//import dotenv from "dotenv";
//import {} from "dotenv/config";
//dotenv.config({ path: ".env" });
//const dotenv = require(".env");

const templateID = process.env.templateID;
const publicKey = process.env.publicKey;
const serviceID = process.env.serviceID;
(function () {
  emailjs.init(publicKey);
  const btn = document.getElementById("button");

  document
    .getElementById("contactForum")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      btn.value = "Sending...";

      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          btn.value = "Send Email";
          alert("Email sent successfully!");
        },
        (err) => {
          btn.value = "Send Email";
          alert(JSON.stringify(err));
        }
      );
    });
})();
