function setTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const scound = now.getSeconds();

  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");

  const hours = (hour / 12) * 360 + (minute / 60) * 30 + 90;
  const minutes = (minute / 60) * 360 + (scound / 60) * 6 + 90;
  const seconds = (scound / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hours}deg)`;
  minuteHand.style.transform = `rotate(${minutes}deg)`;
  secondHand.style.transform = `rotate(${seconds}deg)`;
}

setInterval(setTime, 1000);
