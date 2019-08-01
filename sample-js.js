var today = new Date();
var userHour = prompt('What is the current hour?');
var usercolor = prompt('What should the background color be?');
var hourNow = today.getHours();
var greeting;
var testUserHour;

document.body.style.backgroundColor = usercolor;

if (userHour == hourNow) {
    testUserHour =  'Aren\'t you smart! You submitted ' + userHour + ' and the current hour is ' + hourNow;
} else {
    testUserHour = 'You are learning how to count! You submitted ' + userHour + ' Current hour is ' + hourNow; 
}

alert(testUserHour);

if (hourNow > 18) {
    greeting = 'Good evening! ';
} else if (hourNow > 12){
    greeting = 'Good afternoon ';
} else if (hourNow > 12){
    greeting = 'Good morning ';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting +' You submitted ' + userHour + ' and the current hour is ' + hourNow + '</h3>');