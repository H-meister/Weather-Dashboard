var CityFormEl 
var cityButtonsEl 
var cityInputEl
var repoContainerEl 
var repoSearchTerm

let APIkey = '11659c4227080b90af32d4018c636256'

var formSubmitHandler = function(event) {
	//prevent page form refereshing
	event.preventDefault();

	//gert value from the input 
	var cityName = cityInputEl.value.trim();

	if (cityName) {
		//get city info
		
		//clear old content
		repoContainerEl.textContent = "";
		cityInputEl.value ="";
	} else {
		alert("Please Enter A City")
	}
};

var buttonClickHandler = function(event) {
	var city = event.target.getAttribute("data-city");

	if (city) {
		//get all forcast

		//clear entries
		repoContainerEl.textContent = "";
	}
};

var getCityRepo = function(city) {
	//format city url 
	var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + APIkey;  	

	//make a get request tot url 
	fetch(apiUrl)
	.then(function(response) {
		//request was successful
		if (response.ok) {
			console.log(response);
			response.json().then(function (data) {
				console.log(data);
				displayRepos(data, city)
			})
		} else {
			alert ('error')
		}
	})
	.catch(function(error) {		
		alert("Unable to connect to server");
	});
};

var displayRepos = function(repos, searchTerm) {
	/// check if api returned any repos
	if(repos.length === 0) {
		repoContainerEl.textContent = "no repositories found.";
		return;
	}

	repoSearchTerm.textontent = searchTerm;

}