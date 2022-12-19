document.getElementById("search").addEventListener("click",() => {

    city = document.getElementsByClassName("search-bar")[0].value;
    console.log(city);
    let API_key = "a84b6040c8e4b925ab4903888747fb81";
    let clat,clon;

    let loc = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_key}`);
    loc.then((res) => {
        return res.json();
    }).then((val) => {
        clat = val[0].lat;
        clon = val[0].lon;

        let p=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${clat}&lon=${clon}&appid=${API_key}&units=metric`);

        p.then((reseponse) => {
            return reseponse.json();
        }).then((value) => {

            let iconurl = "http://openweathermap.org/img/w/" + value.weather[0].icon + ".png";
            document.getElementsByClassName("icon")[0].setAttribute("src",iconurl);

            document.getElementById("city").innerHTML = `Weather in ${city}`;
            document.getElementById("humidity").innerHTML = `Humidity: ${value.main.humidity} %`;
            document.getElementById("pressure").innerHTML = `Pressure: ${value.main.pressure} hPa`;
            document.getElementById("feel").innerHTML = `feels like: ${value.main.feels_like} °C`;
            document.getElementById("temp").innerHTML = `${value.main.temp} °C`;
            // document.getElementById("temp_max").innerHTML = `max Temp: ${value.main.temp_max} °C`;
            // document.getElementById("temp_min").innerHTML = `min Temp: ${value.main.temp_min} °C`;
            document.getElementById("vis").innerHTML = `Visibility: ${value.visibility} m`;
            document.getElementById("wind").innerHTML = `wind-speed: ${value.wind.speed} m/s`;
            document.getElementById("clouds").innerHTML = `clouds: ${value.clouds.all} %`;
            document.getElementById("description").innerHTML = `${value.weather[0].description}`;
        });
    });
});
