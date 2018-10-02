//first create functionality to add buttons

// //here we will render a button for each search
// renderButtons(userInput);




//on the click of the button function goes here. since jquery is linked the dollar sign will come into place
$(".addIt").on("click", function () {
  event.preventDefault();

  var userInput = $("#search-input").val();
  console.log(userInput);
  //first adding a function that will take the user input and will add this value to a button

  //variable for a new button to be rendered
  var btn = $("<button style='margin:5px;'>");
  //we will target the user input
  btn.text(userInput);
  btn.addClass('gifButton');
  btn.attr('data-value', userInput);
  // console.log(btn);
  //use the queryurl function and get function to retrieve the info we need

  $(".buttonDisplay").append(btn);

  $("#search-input").val("");

});

console.log("gif button goes after this");

$(document).on('click', '.gifButton', function () {

  console.log("gif button is being clicked");
  
  var buttonValue = $(this).attr("data-value");
  console.log(buttonValue);

  var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + buttonValue + "&api_key=CkMebP8lfxtRR7SUAFicseQbP8Sa6zxA&limit=15";

  console.log(queryUrl);



  $.ajax({
    url: queryUrl,
    method: "GET"

  }).then(function (response) {
    console.log(response)

    // console.log(response.data[0].images.original.url);
    for (var i = 0; i < response.data.length; i++) {



      var imageUrl = response.data[i].images.original_still.url;

      var giphyImage = $("<img>");

      giphyImage.attr("src", imageUrl);
      giphyImage.attr("alt", "giphy");
      giphyImage.attr("class", "picture");
      giphyImage.attr("data-state", "still");
      giphyImage.attr("data-still", response.data[i].images.original_still.url);
      giphyImage.attr("data-animate", response.data[i].images.fixed_height.url);


      // give data attributes for still/animated images and attribute to keep track of state
      // refer to the pausing gifs activitiy from week 3/unit 6

      console.log(giphyImage);

      $(".results").prepend(giphyImage);
    }
  })
});


$(document).on("click", ".picture", function () {
  
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");

  if (state === "still") {

    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");

  } else {
    
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});