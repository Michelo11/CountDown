const target = 1672531200000;
const now = Date.now(); 
const difference = target - now;
const interval = 1000;
let duration = moment.duration(difference, 'milliseconds');

const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(function(){
  duration = moment.duration(duration - interval, 'milliseconds');
  months.textContent = duration.months();
  days.textContent = duration.days();
  hours.textContent = duration.hours();
  minutes.textContent = duration.minutes();
  seconds.textContent = duration.seconds();
}, interval);