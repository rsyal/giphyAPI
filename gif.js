 // Initial array of countries
 var countries = ["China", "India", "England", "Brazil",
 "Russia", "Mexico", "Australia", "Bali", "Italy", "Japan"]

// displayCountryInfo function re-renders the HTML to display the appropriate content
function displayCountryInfo() {
 // $("#").empty();
 var country = $(this).attr("data-country");
 var queryURL = "https://api.giphy.com/v1/gifs/search?q="
   + country
   + "&api_key=kjGxs353gz2YVN3xpNmtgGh2IxWBDe3g&limit=3";
 $.ajax({
   url: queryURL,
   method: "GET"
 }).then(function (response) {
   console.log(response);

   // Creating a div to hold the country
   var countryDiv = $("<div class='country'>");

   // Storing the rating data
   var rating = response.rating;

   // Creating an element to have the rating displayed
   var pOne = $("<p>").text("Rating: " + rating);

   // Displaying the rating
   countryDiv.append(pOne);

   // loop
   console.log (response.data);

   for(var i=0; i<response.data.length;i++){
     var countryImage = $("<img>");
     countryImage.attr("src", response.data[i].images.fixed_height.url);
     countryImage.attr(".gif");
     console.log(countryImage);
     countryDiv.append(countryImage);
    
      
   }
    // $(".gif").on("click", function() {
    // // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    // var state = $(this).attr("data-state");
    // // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // // Then, set the image's data-state to animate
    // // Else set src to the data-still value
    // if (state === "still") {
    // $(this).attr("src", $(this).attr("data-animate"));
    // $(this).attr("data-state", "animate");
    // } else {
    // $(this).attr("src", $(this).attr("data-still"));
    // $(this).attr("data-state", "still");
    // }
    //  });
  

   // Creating and storing an image tag
   // 
   // // Setting the src attribute of the image to a property pulled off the result item
   // 

   // // Appending the paragraph and image tag to the animalDiv

   // 

   // // Prependng the countryDiv to the HTML page in the "#gifs-appear-here" div
   // 
   // // Retrieving the URL for the image
 

   // // Creating an element to hold the image
  

   // // Appending the image
   // Putting the entire country above the previous countries
   $("#country-view").append(countryDiv);
 
 });


//  $(".gif").on("click", function(){

//   var state = $(this).attr("data-state");
//   var pause = $(this).attr("data-still");
//   var play = $(this).attr("data-animate");

//   if (state == "still") {
//     $(this).attr("src", play);
//     $(this).attr("data-state", "animate");

//   }
//   else if (state == "animate") {
//     $(this).attr("src", pause);
//     $(this).attr("data-state", "still")
//   }
// });
}

// Function for displaying country data
function renderButtons() {

 // Deleting the countries prior to adding new countries
 // (this is necessary otherwise you will have repeat buttons)
 $("#buttons-view").empty();

 // Looping through the array of countries
 for (var i = 0; i < countries.length; i++) {

   // Then dynamicaly generating buttons for each country in the array
   // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
   var a = $("<button>");
   // Adding a class of movie-btn to our button
   a.addClass("country-btn");
   // Adding a data-attribute
   a.attr("data-country", countries[i]);
   // Providing the initial button text
   a.text(countries[i]);
   // Adding the button to the buttons-view div
   $("#buttons-view").append(a);
 }

}




// This function handles events where a country button is clicked
$("#add-country").on("click", function (event) {
 event.preventDefault();
 // This line grabs the input from the textbox
 var country = $("#country-input").val().trim();

 // Adding country from the textbox to our array
 countries.push(country);

 // Calling renderButtons which handles the processing of our country array
 renderButtons();
});

// Adding a click event listener to all elements with a class of "country-btn"
$(document).on("click", ".country-btn", displayCountryInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();






