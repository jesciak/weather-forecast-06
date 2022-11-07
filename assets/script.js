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
var tempEl = document.getElementById('temp')
var humityEl =document.getElementById('humidity')
var windEl =document.getElementById('wind')
var uvEl=document.getElementById('uv')
// var dateEl =
// var iconEl =document.getElementById('temp')

var cityList= [];
var searchedCities;
var lastSearched;

 if (localStorage.getItem('city')){
  searchedCities= JSON.parse(localStorage.getItem('city'));
  console.log(searchedCities);
  for (var i=0; i< searchedCities.length; i++){
  lastSearched= searchedCities.length -1;
  var lastCity= searchedCities[lastSearched]; 
  }
  }else {
    cityList;
  }
getCurrentWeather();
console.log('city', cityList);

// function renderCityData(){
//   $('#city-search-list').empty();
//   $('#textInput').val('');
//   for (var i=0; i< cityList.length; i++){
//     var j= $('<li>');
//     j.addClass('list-group-item')
//     j.attr('data-name', cityList[i]);
//     j.text(cityList[i]);
//     $('cityList').prepend(j);
// };
// }

function getCityStored(cityList){
  var storedCity=JSON.parse(localStorage.getItem('cityName'));
  for(let i=0; i< storedCity.length; i++){
console.log(storedCity[i]);
}
renderCityData();
}

//function to get lat & lon
function getLatLon(city) {
  let lat, lon = '';
  let url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + apiKey + '&units=imperial';
  fetch(url)
  .then(function(res) { 
    return res.json()
  } )
  .then(function(data){
    console.log(data)
    
     lat = data[0].lat;
     lon = data[0].lon;

 
    

  getCurrentWeather(lat, lon);
  getFiveDay(lat,lon);
  
})



   
}
// get current weather data

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
  // JSON.parse(localStorage.setItem('cityName'));
  localStorage.setItem('cityName', JSON.stringify(cityName));
  getLatLon(cityName);
  cityList.push(cityName);
  // $('#city-search-list').append("<li>" + cityName+"</li>");
})



// 5 day forecast

function getFiveDay(lat,lon){
  console.log('testing lat',lat)
  console.log('testing lon',lon)

  fetch ('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial')

  .then(function(res) { 
    return res.json()
  } )
  .then(function(data){
    console.log(data);
    const lat=data.city.coord.lat;
    const lon=data.city.coord.lon;
    var forecastResults = data.list;
    console.log(forecastResults)
    for(let i=0; i< forecastResults.length; i++){
    var day=Number(forecastResults[i].dt_txt.split('-')[2].split(' ')[0]);
    var hour=forecastResults[i].dt_txt.split('-')[2].split(' ')[1];
    console.log(day);
    console.log(hour);
    if(forecastResults[i].dt_txt.indexOf('12:00:00') !== -1){

      var temp= forecastResults[i].main.temp;
      var roundedTemp= Math.floor(temp);
  l
    // fiveDayData.innerHTML='';
  
$('#temp1').append(JSON.stringify(data.city.main.roundedTemp)+ ' F');
 $('#humidity1').append(JSON.stringify(data.main.humidity)+ ' %');
 $('#wind1').append(JSON.stringify(data.wind.speed)+ ' MPH');
 getFiveDay(data);
    
  }
    }
})
}

