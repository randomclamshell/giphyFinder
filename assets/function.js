//variables for the search results
var searchResults;

//api info

//on the click of the button function goes here. since jquery is linked the dollar sign will come into place
$(findIt).on("click", function (event) {

  //use the queryurl function and get function to retrieve the info we need
  var queryurl = "http://api.giphy.com/v1/gifs/search?q=" + results + "&api_key=CkMebP8lfxtRR7SUAFicseQbP8Sa6zxA&limit=15";
  //this prevents the page from refreshing every time you hit the button
  event.preventDefault();

  //since we are going to use the results div as the area for the results to appear we will grab the div

  var results = $("#find-gif").val();

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (searchResults) {
    $("#movie-view").text((searchResults));
  });

});