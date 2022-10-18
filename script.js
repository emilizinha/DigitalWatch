const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

setInterval (function time() {

    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    (hr < 10) ? hr = '0' + hr : hr;

    (min < 10) ? min = '0' + min : min;

    (sec < 10) ? sec = '0' + sec : sec;

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
})

