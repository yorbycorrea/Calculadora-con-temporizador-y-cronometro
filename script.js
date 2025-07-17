function currenTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" +ss;
    let watch = document.querySelector('#watch');
    watch.innerHTML = time;
}

let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            displayStopwatch();
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopwatchTime = 0;
    displayStopwatch();
    stopStopwatch();
}

function displayStopwatch() {
    let hours = Math.floor(stopwatchTime / 3600);
    let minutes = Math.floor((stopwatchTime % 3600) / 60);
    let seconds = stopwatchTime % 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('stopwatch').textContent = `${hours}:${minutes}:${seconds}`;
}

let timerInterval;
let timerTime = 0;

function startTimer() {
    let input = document.getElementById('timerInput').value;
    if (input && !timerInterval) {
        timerTime = parseInt(input);
        updateTimerDisplay();
        timerInterval = setInterval(() => {
            if (timerTime > 0) {
                timerTime--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert("¡Tiempo terminado!");
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    timerTime = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    let minutes = Math.floor(timerTime / 60);
    let seconds = timerTime % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('timerDisplay').textContent = `${minutes}:${seconds}`;
}


setInterval(currenTime, 1000);