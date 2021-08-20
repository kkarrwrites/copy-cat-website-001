// Copyright Year Update
document.querySelector('#copyright-year').innerText = new Date().getFullYear();

// Navigation Bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}