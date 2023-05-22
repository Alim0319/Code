const toggleBtn = document.querySelector(`.toggle_btn`);
const toggleBtnIcon = document.querySelector(`.toggle_btn i`);
const dropDownMenu = document.querySelector(`.dropdwon-menu`);
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle(`open`);
  const isOpen = dropDownMenu.classList.contains(`open`);

  toggleBtnIcon.classList = isOpen ? `fa-solid fa-xmark` : `fa-solid fa-bars`;
};

const imgDiv = document.querySelector(`.profile-pic-div`);
const img = document.querySelector(`#photo`);
const file = document.querySelector(`#myStayle`);
const uploadBtn = document.querySelector(`#uploadBtn`);

myStayle.addEventListener(`change`, function () {
  //this reders to file
  console.log(this.files);
  const choosedFile = this.files;
  if (choosedFile) {
    const reader = new FileReader();

    img.src = URL.createObjectURL(this.files[0]);
  }
});

const aboutme = document.getElementById("right");
const inputBtn = document.getElementById("aboutme");
const text = document.getElementById("text");

inputBtn.addEventListener("click", function () {
  aboutme.innerHTML = "<h1>Java Test Automation Elevator Pitch Example</h1>";

  console.log(aboutme);
});
