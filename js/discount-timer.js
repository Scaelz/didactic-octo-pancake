const timer = document.querySelector('.timer__time');
const deadline = '31 march 2022';

const deadlineDate = new Date(deadline).getTime();


const formatTimeUnit = (unit) => {
    return unit < 10 ? '0' + unit : unit;
}

const calculateTimeUnits = (totalSeconds) => {
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60 % 60);
    const hours = Math.floor(totalSeconds / 60 / 60 % 60);
    const days = Math.floor(totalSeconds / 60 / 60 / 24)
    return { seconds, minutes, hours, days };
}

const updateTimer = () => {
    const currentDate = new Date().getTime();
    const timeLeftInSeconds = (deadlineDate - currentDate) / 1000;
    let {seconds, minutes, hours, days} = calculateTimeUnits(timeLeftInSeconds);
    seconds = formatTimeUnit(seconds);
    minutes = formatTimeUnit(minutes);
    hours = formatTimeUnit(hours);
    days = formatTimeUnit(days);
    timer.textContent = `${days}д ${hours}:${minutes}:${seconds}`;

    if (timeLeftInSeconds < 0) {
        clearInterval(interval);
        timer.textContent = `00:00:00`;
    }
}
updateTimer();
const interval = setInterval(updateTimer, 500);

