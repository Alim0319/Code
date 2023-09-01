const toggleBtn = document.querySelector(`.toggle_btn`);
const toggleBtnIcon = document.querySelector(`.toggle_btn i`);
const dropDownMenu = document.querySelector(`.dropdwon-menu`);
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle(`open`);
  const isOpen = dropDownMenu.classList.contains(`open`);

  toggleBtnIcon.classList = isOpen ? `fa-solid fa-xmark` : `fa-solid fa-bars`;
};

//import { config } from "dotenv";
//config();
//import dotenv from "dotenv";
//dotenv.config();
//require("dotenv").config();
//import dotenv from "dotenv";
//import {} from "dotenv/config";
//dotenv.config({ path: ".env" });
//const dotenv = require(".env");

/*const templateID = process.env.templateID;
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
*/

/*document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const btn = document.getElementById("button");
    btn.value = "Sending...";

    // Fetch API keys from the backend
    fetch("/env")
      .then((response) => response.json())
      .then((data) => {
        // Initialize EmailJS with the public key
        emailjs.init(data.publicKey);

        // Send the email using fetched API keys
        emailjs.sendForm(data.serviceId, data.templateId, this).then(
          () => {
            btn.value = "Send Email";
            alert("Email sent successfully!");
          },
          (err) => {
            btn.value = "Send Email";
            alert(JSON.stringify(err));
          }
        );
      })
      .catch((error) => {
        console.error("Error fetching data from backend:", error);
        btn.value = "Send Email";
        alert("Error fetching data from backend. Please try again.");
      });
  });*/

/*async function sendEmail(serviceId, templateId, form) {
  try {
    const response = await fetch("/env"); // Replace with your backend route
    const data = await response.json();

    const emailjsResponse = await emailjs.sendForm(serviceId, templateId, form);
    console.log("Email sent successfully:", emailjsResponse);
    alert("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Error sending email. Please try again.");
  }
}

// Attach a submit event listener to the form
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const serviceId = await fetch("env/serviceId"); // Replace with your backend route
    const templateId = await fetch("env/templateId"); // Replace with your backend route
    const form = this;

    sendEmail(serviceId, templateId, form);
  });
*/
/*document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const btn = event.target.querySelector("input[type='submit']");
    btn.value = "Sending..."; // Change the button text

    // Get form data
    const formData = new FormData(event.target);

    // You can fetch the backend URL from your .env file or hardcode it
    const backendURL = "http://localhost3500"; // Replace with the actual backend URL

    try {
      const response = await fetch(`${backendURL}/api/env`);
      const data = await response.json();

      // Use data.serviceId, data.templateId, etc. in your email sending logic
      emailjs.sendForm(data.serviceId, data.templateId, formData).then(
        () => {
          btn.value = "Send Email";
          alert("Email sent successfully!");
        },
        (err) => {
          btn.value = "Send Email";
          alert(JSON.stringify(err));
        }
      );
    } catch (error) {
      console.error("Error fetching data from backend:", error);
      btn.value = "Send Email";
      alert("Error fetching data from backend. Please try again.");
    }
  });
*/
