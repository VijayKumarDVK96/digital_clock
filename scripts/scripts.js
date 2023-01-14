'use strict';

/*
Config the lines of code with senInterval to execute every 1 second. Get hours, minutes, seconds. Assign day_night by default as AM. If hours is greater or equal to 12, then assign day_night as PM. Minus the hours by 12 if greater than 12. For seconds, minutes, hours values is less than 10 means concatenate 0 as prefix. Append the values to the screen.
*/

setInterval(() => {
    const time = document.querySelector(".display #time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if (hours >= 12) {
        day_night = "PM";  
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});