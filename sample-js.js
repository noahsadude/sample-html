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

function createGreeting(fallback,morning,afternoon,evening) {
    var currentHour = today.getHours();
    if (currentHour > 18) {
        greeting = evening;
    } else if (currentHour > 12){
        greeting = afternoon;
    } else if (currentHour > 12){
        greeting = morning;
    } else {
        greeting = fallback;
    }
    return greeting
}

document.write('<h3>' + createGreeting('Hello','Good Morning!','Good Afternoon!','Top of the evening!') +' You submitted ' + userHour + ' and the current hour is ' + hourNow + '</h3>');