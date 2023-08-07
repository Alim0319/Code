const TemplateID = "template_4x01bng";
const PublicKey = "_RyfKlQUkTyEAVeWB";
const ServiceID = "service_yfnl7yp";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);

    // Replace "YOUR_TEMPLATE_ID" with the ID of your EmailJS email template
    emailjs.send("ServiceID", "TemplateID", formData).then(
      function (response) {
        // Email sent successfully, show a success message to the user
        alert("Email sent successfully!");
        document.getElementById("contactForm").reset(); // Reset the form after successful submission
      },
      function (error) {
        // An error occurred while sending the email
        alert("Failed to send email. Please try again later.");
      }
    );
  });
