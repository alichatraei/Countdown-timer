const daysEl = document.querySelector("#days"),
  hourEl = document.querySelector("#hour"),
  minuteEl = document.querySelector("#minute"),
  secondsEl = document.querySelector("#seconds"),
  newYear = "1 Jan 2023";
const formatTime = (time) => (time < 10 ? `0${time}` : time);
const countdown = () => {
  const newYearsDate = new Date(newYear),
    currentDate = new Date(),
    totalSeconds = (newYearsDate - currentDate) / 1000,
    days = Math.floor(totalSeconds / 3600 / 24),
    hour = Math.floor(totalSeconds / 3600) % 24,
    minute = Math.floor(totalSeconds / 60) % 60,
    second = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hourEl.innerHTML = formatTime(hour);
  minuteEl.innerHTML = formatTime(minute);
  secondsEl.innerHTML = formatTime(second);
};
countdown();

setInterval(countdown, 1000);
