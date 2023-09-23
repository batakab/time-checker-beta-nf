// let val1 = document.querySelector(".he");
// let val2 = document.querySelector(".she");
// let press = document.querySelector(".btn");

// press.addEventListener("click", function () {
//   val1.value;
//   val2.value;

//   console.log(parseInt(val1.value) + parseInt(val2.value));
// });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var city = "philippines";
// var apiKey = "1QW8MX/TEqlpZUU+0xs28A==vhmqfKytZfuZULrl"; // Replace 'YOUR_API_KEY' with your actual API key

// $.ajax({
//   method: "GET",
//   url: "https://api.api-ninjas.com/v1/worldtime?city=" + city,
//   headers: { "X-Api-Key": apiKey },
//   contentType: "application/json",
//   success: function (result) {
//     console.log(result);
//   },
//   error: function ajaxError(jqXHR) {
//     console.error("Error: ", jqXHR.responseText);
//   },
// });

// document.querySelector(".type-of-day").innerHTML = result.datetime;

// var apiKey = "1QW8MX/TEqlpZUU+0xs28A==vhmqfKytZfuZULrl";

// const userInput = document.querySelector(".search-bar input");
// const userBtn = document.querySelector(".search-bar button");

// userBtn.addEventListener("click", () => {
//   var city = userInput.value;

//   // Declare the result variable in a wider scope
//   var result;

//   $.ajax({
//     method: "GET",
//     url: "https://api.api-ninjas.com/v1/worldtime?city=" + city,
//     headers: { "X-Api-Key": apiKey },
//     contentType: "application/json",
//     success: function (data) {
//       // Assign the data to the result variable
//       result = data;
//       console.log(result);

//       // Update the content of an element with class "date-class" with the API result's date
//       document.querySelector(".date_time").innerHTML = result.datetime;
//       document.querySelector(".country-name").innerHTML = result.timezone;
//       document.querySelector(".type-of-day").innerHTML = result.day_of_week;
//       document.querySelector(".big-text1").innerHTML = result.day;
//       document.querySelector(".big-text2").innerHTML = result.hour;
//       document.querySelector(".big-text3").innerHTML = result.minute;
//       document.querySelector(".big-text4").innerHTML = result.second;
//     },
//     error: function ajaxError(jqXHR) {
//       console.error("Error: ", jqXHR.responseText);
//     },
//   });
// });

// var apiKey = "1QW8MX/TEqlpZUU+0xs28A==vhmqfKytZfuZULrl";

// const userInput = document.querySelector(".search-bar input");
// const userBtn = document.querySelector(".search-bar button");

// // Declare the result variable in a wider scope
// var result;

// function updateClock() {
//   $.ajax({
//     method: "GET",
//     url: "https://api.api-ninjas.com/v1/worldtime?city=" + city,
//     headers: { "X-Api-Key": apiKey },
//     contentType: "application/json",
//     success: function (data) {
//       // Assign the data to the result variable
//       result = data;

//       // Update the content of elements with class "date-class"
//       document.querySelector(".date_time").innerHTML = result.datetime;
//       document.querySelector(".country-name").innerHTML = result.timezone;
//       document.querySelector(".type-of-day").innerHTML = result.day_of_week;
//       document.querySelector(".big-text1").innerHTML = result.day;
//       document.querySelector(".big-text2").innerHTML = result.hour;
//       document.querySelector(".big-text3").innerHTML = result.minute;
//       document.querySelector(".big-text4").innerHTML = result.second;
//     },
//     error: function ajaxError(jqXHR) {
//       console.error("Error: ", jqXHR.responseText);
//     },
//   });
// }

// userBtn.addEventListener("click", () => {
//   var city = userInput.value;
//   updateClock(); // Initial update
//   setInterval(updateClock, 1000); // Update every 1 second (1000 milliseconds)
// });
// In this code, we've defined a function called updateClock that makes the API request to get the current time and updates the content of the HTML elements with the retrieved time values. We call this function initially when the user clicks the button, and then we use setInterval to call it every 1000 milliseconds (1 second) to continuously update the time like a clock.

var apiKey = "1QW8MX/TEqlpZUU+0xs28A==vhmqfKytZfuZULrl";
const userInput = document.querySelector(".search-bar input");
const userBtn = document.querySelector(".search-bar button");

var result;

userBtn.addEventListener("click", () => {
  var city = userInput.value;
  updateClock();
  setInterval(updateClock, 1000);

function updateClock() {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/worldtime?city=" + city,
    headers: { "X-Api-Key": apiKey },
    contentType: "application/json",
    success: function (data) {
      result = data;

      document.querySelector(".date_time").innerHTML = result.datetime;
      document.querySelector(".country-name").innerHTML = result.timezone;
      document.querySelector(".type-of-day").innerHTML = result.day_of_week;
      document.querySelector(".big-text1").innerHTML = result.day;
      document.querySelector(".big-text2").innerHTML = result.hour;
      document.querySelector(".big-text3").innerHTML = result.minute;
      document.querySelector(".big-text4").innerHTML = result.second;
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

});
