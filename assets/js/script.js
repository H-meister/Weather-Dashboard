// get text from city text input and make a fetch request.

// in that fetch request get specific data to the city that was entered.

// Needs to get current and future conditions for the city. Add the city also to the search history.

//view current weather conditions for the city then presented with CITY NAME, THE DATE, AN ICON REPRESENTATION OF THE WEATHER CONDITIONS
//THE TEMPERATURE, THE HUMIDITY, THE WIND SPEED, AND THE UV INDEX

//add COLOR to see if it is favorable, Moderate, or Severe.

var getUserRepos = function(user) {
	// format the github api url
	var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
	// make a request to the url
	fetch(apiUrl).then(function(response) {
	  response.json().then(function(data) {
		console.log(data);
	  });
	});
  };

  getUserRepos();