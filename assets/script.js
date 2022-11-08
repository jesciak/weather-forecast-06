//global variables
var apiKey = "4c7125ce7302733bfe305df59d35dd48"
var date = $('#date');

var currentDate = moment().format('L');
date.text(currentDate);

// //DOM element references
var cityEl = document.getElementById('cityName')
// var citySearch =
var searchButton = document.getElementById('searchBtn')
var textInput = document.getElementById('textInput')
var tempEl = document.getElementById('temp')
var humityEl = document.getElementById('humidity')
var windEl = document.getElementById('wind')
var uvEl = document.getElementById('uv')
// var dateEl =
// var iconEl =document.getElementById('temp')

var cityList = [];
var searchedCities;
var lastSearched;

//function to get lat & lon
function getLatLon(city) {
  let lat, lon = '';
  let url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + apiKey + '&units=imperial';
  fetch(url)
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      console.log(data)

      lat = data[0].lat;
      lon = data[0].lon;

      getCurrentWeather(lat, lon);
      getFiveDay(lat, lon);
    })
}
// get current weather data
function getCurrentWeather(lat, lon) {
  var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial';
  fetch(url)
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      console.log(data)
      // appending data results to DOM element ids
      $('#cityName').html(data.name);
      $('#temp').append(JSON.stringify(data.main.temp) + ' F');
      $('#humidity').append(JSON.stringify(data.main.humidity) + ' %');
      $('#wind').append(JSON.stringify(data.wind.speed) + ' MPH');
    })
}
searchButton.addEventListener('click', function () {
  var cityName = textInput.value;

  console.log(cityName)
  // function getCityStored(cityList){
  //   var storedCity=JSON.parse(localStorage.setItem('cityName'));
  //   for(let i=0; i< storedCity.length; i++){
  // console.log(storedCity[i]);
  // }
  // renderCityData(cityList);
  // }

  // saves the search to local storage
  localStorage.setItem('cityName', JSON.stringify(cityName));
  getLatLon(cityName);
  cityList.push(cityName);
})
// 5 day forecast
function getFiveDay(lat, lon) {
  console.log('testing lat', lat)
  console.log('testing lon', lon)

  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial')

    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      console.log(data);
      const lat = data.city.coord.lat;
      const lon = data.city.coord.lon;
      var forecastResults = data.list;
      console.log(forecastResults)
      for (let i = 0; i < forecastResults.length; i++) {
        var day = Number(forecastResults[i].dt_txt.split('-')[2].split(' ')[0]);
        var hour = forecastResults[i].dt_txt.split('-')[2].split(' ')[1];
        console.log(day);
        console.log(hour);
        // if(forecastResults[i].dt_txt.indexOf('12:00:00') !== -1){
        // var temp= forecastResults[i].main.temp;
        // var roundedTemp= Math.floor(temp);
        // fiveDayData.innerHTML='';

        $('#temp1').append(JSON.stringify(data.city.main.temp) + ' F');
        $('#humidity1').append(JSON.stringify(data.main.humidity) + ' %');
        $('#wind1').append(JSON.stringify(data.wind.speed) + ' MPH');
        getFiveDay(data, lat, lon);
      }
    })
}


