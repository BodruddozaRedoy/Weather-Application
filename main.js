const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=Dhaka";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2859b63b3emsh2554425a19f634cp102fa1jsn10a523f6baf6",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const getWeather = (inputCity) => {
  cityName.innerHTML = inputCity;
  fetch(
    "https://weatherapi-com.p.rapidapi.com/current.json?q=" + inputCity,
    options
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      temp_c.innerHTML = res.current.temp_c;
      weatherText.innerHTML = res.current.condition.text;
      weatherIcon.setAttribute("src", res.current.condition.icon);
      continent.innerHTML = res.location.tz_id;
      country.innerHTML = res.location.country;
      localTime.innerHTML = res.location.localtime;
      last_updated.innerHTML = res.location.last_updated
      wind_mph.innerHTML = res.wind_mph
      wind_degree.innerHTML = res.wind_degree
      feelslike_c.innerHTML = res.feelslike_c

    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(inputCity.value);
});
getWeather("Dhaka");
