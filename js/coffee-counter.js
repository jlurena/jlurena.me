var initialDate = new Date(2015, 8, 28); // Aug 28 2015
var now = Date.now();
var difference = now - initialDate;
var millisecondsPerDay = 24 * 60 * 60 * 1000;

// Coffees since RIT
var coffees = Math.floor(difference / millisecondsPerDay);

// Write result to HTML
document.getElementById('coffeesDrank').innerHTML = coffees;