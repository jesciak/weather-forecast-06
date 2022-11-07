//global variables
var apiKey = "4c7125ce7302733bfe305df59d35dd48"
var date= $('#date');
var currentDate= moment().format('L');
date.text(currentDate);

// //DOM element references
// var cityEl =
// var citySearch =
var searchButton = document.getElementById('searchBtn')
var textInput = document.getElementById('textInput')
var cityList= [];
var searchedCities;
var lastSearched;
var tempEl = document.getElementById('temp')
var humityEl =document.getElementById('humidity')
var windEl =document.getElementById('wind')
var uvEl=document.getElementById('uv')
// var dateEl =
// var iconEl =document.getElementById('temp')

searchButton.addEventListener('click', textInput);

function renderSearchHistory(){
    var citySearchList= document.getElementById('city-search-list');
    citySearchList.replaceChildren()
    storage.forEach(function(element){
      var cities= $(this).siblings('city-search-list');
  
    })
  }

// if (localStorage.getItem('cityList')){
// searchedCities= JSON.parse(localStorage.getItem('cityList'));
// console.log(searchedCities);
// for (var i=0; i< searchedCities.length; i++){
// lastSearched= searchedCities.length -1;
// var lastCity= searchedCities[lastSearched]; 
// }
// }else {
//   cityList;
// }
// getLatLon();
// console.log('cityList', cityList);

// $('searchBtn').on('click', function(event){
//   event.preventDefault();
//   var city= $('#textInput').val();
//   console.log(city);
// })
//add timezone plugin to day.js
getCityStored();

function renderCityData(){
  $('#city-search-list').empty();
  $('#textInput').val('');
  for (var i=0; i< cityList.length; i++){
    var j= $('<li>');
    j.addClass('list-group-item')
    j.attr('data-name', cityList[i]);
    j.text(cityList[i]);
    $('cityList').prepend(j);
};
}

function getCityStored(){
  var storedCity=JSON.parse(localStorage.getItem('cityName'));
if (storedCity !== null){
  cityList= storedCity;
}
renderCityData();
}

//function to get lat & lon
function getLatLon(city) {
  var url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + apiKey + '&units=imperial';
  fetch(url)
  .then(function(res) { 
    return res.json()
  } )
  .then(function(data){
    console.log(data)
    
    var lat = data[0].lat;
    var lon = data[0].lon;
    
    // cityList.push(city);
    

// var citySearched =$('<li>');
// citySearched.addClass('list-city-group');
// citySearched.text(data.name);
// citySearched.attr('lat', data.coord.lat);
// citySearched.attr('lon', data.coord.lon);
// $('#city-search-list').prepend(citySearched);

// citySearched.on('click', function(){
//   lat=$(this).attr('lat');
//   lon=$(this).attr('lon');
//   getcity(response);
  getCurrentWeather(lat, lon);
// })
// ;

//     getCurrentWeather(lat, lon);
//    getCity(response);
  })
}

function getCurrentWeather(lat,lon){
  var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial';
  fetch(url)
  .then(function(res) { 
    return res.json()
  } )
  .then(function(data){
    console.log(data)
   
  
    $('#temp').append(JSON.stringify(data.main.temp)+ ' F');
    $('#humidity').append(JSON.stringify(data.main.humidity)+ ' %');
    $('#wind').append(JSON.stringify(data.wind.speed)+ ' MPH');

  })
}


searchButton.addEventListener('click', function () {
  var cityName = textInput.value;

  console.log(cityName)
  localStorage.setItem('cityName', JSON.stringify(cityName));
  getLatLon(cityName);
  // $('#city-search-list').append("<li>" + cityName+"</li>");
})

function example(a,b){

  return a+b;
 
}

example(1,2) ;//3
example(2,3); //5

getFiveDay(lat,lon);

function getFiveDay(lat,lon){
  fetch ('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial')

  .then(function(res) { 
    return res.json()
  } )
  .then(function(data){
    console.log(data);
    lat=data.coord.lat;
    lon=data.coord.lon;
    fiveDayData.innerHTML='';
    // for (let i=6; i<39){
    $('#temp1').append(JSON.stringify(data.main.temp)+ ' F');
    $('#humidity1').append(JSON.stringify(data.main.humidity)+ ' %');
    $('#wind1').append(JSON.stringify(data.wind.speed)+ ' MPH');
    
getFiveDay(lat,lon);

  });

}





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