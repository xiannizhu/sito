// script.js

// Function to update the time
function updateTime() {
    // Create a new Date object
    var currentTime = new Date();

    // Extract the hours, minutes, and seconds
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Format the time
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Construct the time string
    var timeString = hours + ":" + minutes + ":" + seconds;

    // Update the content of the 'time' element
    document.getElementById("time").innerHTML = timeString;
}

// Call updateTime() initially to display the time immediately
updateTime();

// Call updateTime() every second to update the time continuously
setInterval(updateTime, 1000);
