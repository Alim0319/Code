// declearing html elements

const imgDiv = document.querySelector(`.profile-pic-div`);
const img = document.querySelector(`#photo`);
const file = document.querySelector(`#my_stayle`);
const uploadBtn = document.querySelector(`#uploadBtn`);

//if user hover on img div
imgDiv.addEventListener(`mouseenter`, function () {
  uploadBtn.style.display = `block`;
});

//if we hover from img div
imgDiv.addEventListener(`mouseenter`, function () {
  uploadBtn.style.display = ``;
});
// lets work for image showing functionality when we chose an image to upload

// when we choose a foto to upload

file.addEventListener(`change`, function () {
  //this reders to file
  const chooseFile = this.file[0];
  if (chooseFile) {
    const reader = new FileReader();
    //fileReader is a predefind function of Js
    reader.addEventListener(`load`, function () {
      img.setAttribute(`src`, reader.result);
    });
    reader.readAsDataURL(chooseFile);
  }
});
