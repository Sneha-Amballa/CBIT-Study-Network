document.addEventListener("DOMContentLoaded", function () {
    let timerElement = document.querySelector(".timer");
    let sessionElement = document.querySelector(".goals");
    let quoteElement = document.querySelector(".quote");

    let startButton = document.getElementById("startTimer");
    let stopButton = document.getElementById("stopTimer");

    let timeLeft = 50 * 60; 
    let sessionCount = 0;
    let timerInterval = null;

    const quotes = [
        "The secret of getting ahead is getting started.",
        "Don’t watch the clock; do what it does. Keep going.",
        "The only way to achieve the impossible is to believe it is possible.",
        "Small steps in the right direction can turn out to be the biggest step of your life.",
        "Success is the sum of small efforts, repeated day in and day out.",
        "You don’t have to be great to start, but you have to start to be great."
    ];

    function updateTimerDisplay() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerElement.textContent = `⏳ Personal Timer: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    startButton.addEventListener("click", function () {
        if (!timerInterval) {
            timerInterval = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateTimerDisplay();
                } else {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    sessionCount++;
                    sessionElement.textContent = `🎯 Number of Sessions: ${sessionCount}`;
                    quoteElement.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
                    alert("Session completed! Take a short break.");
                    timeLeft = 50 * 60; 
                    updateTimerDisplay();
                }
            }, 1000);
            startButton.disabled = true;
            stopButton.disabled = false;
        }
    });

    stopButton.addEventListener("click", function () {
        clearInterval(timerInterval);
        timerInterval = null;
        startButton.disabled = false;
        stopButton.disabled = true;
    });

    updateTimerDisplay();
});
