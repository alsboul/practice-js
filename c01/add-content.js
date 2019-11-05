// var today = new Date();
// console.log(today);
// console.log("amman-102d3");
// var hourNow = today.getHours();
// console.log(hourNow);


var hourNow = prompt("what time is now?");
var greeting;

if (hourNow > 18 && hourNow <24 ) {
  greeting = 'Good evening, Class!';
} else if (hourNow > 12 && hourNow <=18) {
  greeting = 'Good afternoon, Class!';
} else if (hourNow >= 0 && hourNow <=12) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');