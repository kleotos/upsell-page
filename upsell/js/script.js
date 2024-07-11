function startTimer(duration, displayHours, displayMinutes, displaySeconds) {
    let timer = duration;
    setInterval(function () {
      let hours = parseInt(timer / 3600, 10);
      let minutes = parseInt((timer % 3600) / 60, 10);
      let seconds = timer % 60;

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      displayHours.querySelector('span').textContent = hours;
      displayMinutes.querySelector('span').textContent = minutes;
      displaySeconds.querySelector('span').textContent = seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  window.onload = function () {
    const oneHour = 60 * 60; // 1 hour in seconds
    const displayHours = document.querySelector('#hours');
    const displayMinutes = document.querySelector('#minutes');
    const displaySeconds = document.querySelector('#seconds');
    startTimer(oneHour, displayHours, displayMinutes, displaySeconds);
  };