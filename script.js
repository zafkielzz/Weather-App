const apiKey = "5862e518ae0c8f64992df30472830ee5";
const btn = document.getElementById("search-btn");
const input = document.getElementById("city-input");
const result = document.getElementById("weather-result");

btn.addEventListener("click", () => {
  const city = input.value.trim();
  if (!city) {
    result.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((res) => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    })
    .then((data) => {
      const html = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
      result.innerHTML = html;
    })
    .catch((err) => {
      result.innerHTML = `<p style="color: red;">${err.message}</p>`;
    });
});
