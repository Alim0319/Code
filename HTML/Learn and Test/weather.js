import useApiKey from "./key.js";
document.getElementById("weatherButton").addEventListener("click", getWeather);
const display = document.getElementById("weatherDisplay");

async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const apiKey = useApiKey();
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}";
  try {
    const response = await (await fetch(apiUrl)).json();
    console.log(response.json());
    if (response.code == "400") {
      if (response.message == "Nothing to geocode") {
        display.textContent =
          "you need to provide a location to get a forecost for it.";
      }
    }
    const { description, icon } = response.weather[0];
    const { temp, feels_like } = response.main;

    const weather = `
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>
  <p >It is ${description}</p>
  <p> It says it is ${temp} C outside </p>
  <p>It should feel like: $(feels_like}</p>

  `;

    display.innerHTML = weather;
  } catch (e) {
    console.log("error", e);
  }
}
