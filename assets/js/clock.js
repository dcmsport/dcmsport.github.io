function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function get_next_race(){
  var current_date = new Date();
  for(var race_idx in races){
    race_date = new Date(
      races[race_idx].year,
      races[race_idx].month - 1,
      races[race_idx].day
    );
    if (race_date > current_date){
      return races[race_idx];
    }
  }
  return races[0];
}

$(document).ready(function(){
  race = get_next_race();
  $("#next_race_place").html(race.name);
  race_date = new Date(race.year, race.month - 1, race.day);
  initializeClock('clockdiv', race_date);
} );