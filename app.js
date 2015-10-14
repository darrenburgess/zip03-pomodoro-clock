$(document).ready(function(){

	function setDefaultTimes() {
		workTime = "25:00";
		breakTime = "5:00";
		$('#workTime').append(workTime);
		$('#breakTime').append(breakTime);
	}

	setDefaultTimes();

	function increment(type, direction){
		// increments the break timer or pomodoro timer by one minute up or down
	}

	function startTimer(duration, display) {
		var timer = duration, minutes, seconds;
		setInterval(function(){
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			display.text(minutes + ":" + seconds);

			if (--timer < 0) {
				timer = duration;
			}
		}, 1000);
	}

	function stopTimer() {
		console.log('timer stopped');
	}

	$('#start').click(function () {
		var fiveMinutes = 60 * 5,
			display = $('#time');
		startTimer(fiveMinutes, display);
	});

	$('#stop').click(function () {
		stopTimer();
	});

});