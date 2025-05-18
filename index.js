var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var message = document.getElementById("message");
var statuss = document.getElementById("status");
var input = document.getElementById("eventDate");

// Function to get the saved event date from localStorage
function getSavedEventDate() {
  var savedDate = localStorage.getItem("spiritxEventDate");
  if (savedDate) {
    return new Date(savedDate);
  }
  return null;
}

// Function to save event date to localStorage
function setEventDate() {
  var selectedDate = input.value;
  if (!selectedDate) {
    alert("Please select a valid date and time.");
    return;
  }
  localStorage.setItem("spiritxEventDate", selectedDate);
  statuss.textContent = "Date saved successfully!";
  setTimeout(function () {
    statuss.textContent = "";
  }, 3000);
}

// Countdown update function
function updateCountdown() {
  var eventDate = getSavedEventDate();

  if (!eventDate) {
    message.textContent = "Please set the event date first.";
    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    return;
  }

  var now = new Date();
  var diff = eventDate.getTime() - now.getTime();

  if (diff <= 0) {
    message.textContent = "The event has started!";
    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    return;
  }

  message.textContent = "";

    var sec = Math.floor(diff / 1000) % 60;
    var min = Math.floor(diff / (1000 * 60)) % 60;
    var hr = Math.floor(diff / (1000 * 60 * 60)) % 24;
    var d = Math.floor(diff / (1000 * 60 * 60 * 24));


    days.textContent = d < 10 ? "0" + d : d;
    hours.textContent = hr < 10 ? "0" + hr : hr;
    minutes.textContent = min < 10 ? "0" + min : min;
    seconds.textContent = sec < 10 ? "0" + sec : sec;

}

setInterval(updateCountdown, 1000);

