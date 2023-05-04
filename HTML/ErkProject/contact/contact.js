const button = document.getElementById("button");
const img = document.getElementById("img");
const input = document.getElementById("input");
const label = document.getElementById("label");
const reader = new FileReader();

img.src = localStorage.getItem("imgData") || "";

input.addEventListener("change", () => {
  reader.readAsDataURL(input.files[0]);
});

reader.addEventListener("load", ({ target: { result } }) => {
  localStorage.setItem("imgData", result);
  img.src = result;
});

button.addEventListener("click", () => {
  localStorage.clear();
  img.src = "";
});
