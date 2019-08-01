var today = new Date();
var userHour = prompt('What is the current hour?');
var hourNow = today.getHours();
var greeting;
var testUserHour;


if (userHour !== hourNow) {
    testUserHour = 'You can\'t count! Current hour is ' + hourNow; 
} else {
    testUserHour = 'Aren\'t you smart! You submitted ' + userHour + ' and the current hour is ' + hourNow;
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