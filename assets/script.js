
var apiKey = "4c7125ce7302733bfe305df59d35dd48"
var cityEl =
var citySearch =
var searchButton =
var tempEl =
var humityEl =
var windEl =
var dateEl =
var iconEl =




fetch("http://api.openweathermap.org/geo/1.0/reverse?lat= ${data[0].lat}&lon={lon}&appid=" + apiKey"
)
  .then((response) => response.json())
  .then((data) => console.log(data));