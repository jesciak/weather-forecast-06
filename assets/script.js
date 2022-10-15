//global variables
var apiKey = "4c7125ce7302733bfe305df59d35dd48"
// var weatherAPIURL = 

// //DOM element references
// var cityEl =
// var citySearch =
var searchButton = document.getElementById('searchBtn')
var textInput = document.getElementById('textInput')
// var tempEl =
// var humityEl =
// var windEl =
// var dateEl =
// var iconEl =

//add timezone plugin to day.js


//function to get lat & lon
function getLatLon(city) {
  var url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + apiKey
  fetch(url)
  .then(function(res) { 
    return res.json()
  } )
  .then(function(data){
    console.log(data)
    var lat = data[0].lat;
    var lon = data[0].lon;
    getCurrentWeather(lat, lon)
  })
}

function getCurrentWeather(lat,lon){
  var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey;
  fetch(url)
  .then(function(res) { 
    return res.json()
  } )
  .then(function(data){
    console.log(data)
  })
}

searchButton.addEventListener('click', function () {
  var cityName = textInput.value
  console.log(cityName)
  getLatLon(cityName)
})

function example(a,b){
  return a+b;
}

example(1,2) //3
example(2,3) //5


//function to display search history list

//start at end of history array and show most recent at top

//data-search allows acess to city name when click handler is invoked

//update history in local storage & update displayed history

//if there is no search term return function

//function to get search history from local storage

//display current weather data fetched from OpenWeather API

//store response data from our fetch request in variables

//function to display forecast card given object from openweather daily

//variable to hold data from api

//create element for card

//add content elements

//function to display 5 day forecast

//create timestamps for start and end 5 day forecast

//first filters thru all data return only data that falls between one day after current data and upto5 days 

//fetch weather data for given location given location from weather geolocation
//endpoint; then, calls functions to display currect & forecast weather data

// function to handleSearchFormSubmit

// function to handleHistoryClick



// fetch("http://api.openweathermap.org/geo/1.0/reverse?lat= ${data[0].lat}&lon={lon}&appid=" + apiKey"
// )
  // .then((response) => response.json())
  // .then((data) => console.log(data));