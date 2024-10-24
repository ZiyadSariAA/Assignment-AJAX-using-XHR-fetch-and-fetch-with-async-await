var api = '1660055c75f740b5bd4154617242410';


function searchByXHR() {
  var theCity = document.getElementById("input").value.trim();
  var theWind = document.getElementById("Thewind");

  var theLTempr = document.getElementById("Low");

  var theHtempr = document.getElementById("High");

  if (!theCity) {
    alert("Please enter a city name.");
    return;
  }

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

      let rOBJ = JSON.parse(xhr.responseText);

      theWind.innerText = `The Wind Speed: ${rOBJ.current.wind_kph} k/h`;
      theHtempr.innerText = `High: ${rOBJ.current.temp_c} °C`;

      theLTempr.innerText = `Low: ${rOBJ.current.windchill_c} °C`;

    }
  };


  xhr.open("GET", `https://api.weatherapi.com/v1/current.json?key=${api}&q=${theCity}`, true);

  xhr.send();
}

document.getElementById("getWeatherXHR").addEventListener("click", searchByXHR);




async function SFetchAwAs() {
  var theCity = document.getElementById("input").value.trim();
 var theWind = document.getElementById("Thewind");

   var theLTempr = document.getElementById("Low");

   var theHtempr = document.getElementById("High");

 let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api}&q=${theCity}`);

  let data = await response.json();

  theHtempr.innerText = `High: ${data.current.temp_c}°C`;

  theWind.innerText = `Wind Speed: ${data.current.wind_kph} kph`;
  theLTempr.innerText = `Low: ${data.current.windchill_c}°C`;

}

document.getElementById("getWeatherAsyncAwait").addEventListener("click", SFetchAwAs);





function FetchWay() {
  var theCity = document.getElementById("input").value.trim();
 var theWind = document.getElementById("Thewind");
  var theLTempr = document.getElementById("Low");

  var theHtempr = document.getElementById("High") ;

 if (!theCity) {
    alert("Please enter a city name.") ;
    return;
  }

  fetch(`https://api.weatherapi.com/v1/current.json?key=${api}&q=${theCity}`)



  .then(answer => {
    return answer.json()
  })
    .then(info => {

  theHtempr.innerText = `High: ${info.current.temp_c}°C`;
    

      theWind.innerText = `Wind Speed: ${info.current.wind_kph} kph`;
      theLTempr.innerText = `Low: ${info.current.windchill_c}°C`;

    })

}
  document.getElementById("getWeatherFetch").addEventListener("click" , FetchWay);






