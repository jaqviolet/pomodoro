$( document ).ready(function() {

var clock = 5;
var sec = 0;
var min = 1;

var pomTimer;
var filler = 100 / (min * 60);
var bFiller= 100 / (bMin * 60);

var bClock = 1;
var bSec = 0;
var bMin = 01;
var myBreak;
var acc = 0;

var pomRunning = false;
var breakRunning = false;
var countDown = false;

$('#clock').html(clock);
$('#break').html(bClock);
$('#timer').html(clock);

$('.minus').click(function() {
  if (clock > 1) {
    clock -= 1;
    $(this).siblings('#clock').html(clock);
  }
});
$('.plus').click(function() {
  clock += 1;
  $(this).siblings('#clock').html(clock);
});

$('.minusB').click(function() {
  if (bClock > 1) {
    bClock -= 1;
    $(this).siblings('#break').html(bClock);
  }
});
$('.plusB').click(function() {
  bClock += 1;
  $(this).siblings('#break').html(bClock);
});

$('.go').click(function() {
  
  if (countDown == false) {
    countDown = true;
    $(this).html('stop');
    min = clock;
    bMin= bClock;
     filler = 100 / (min * 60);
   bFiller= 100 / (bMin * 60);
    pomTimer = setInterval(myTimer, 1000);
  } 
  else if (countDown == true) {
    if (pomRunning == true) {
      clearInterval(pomTimer);
      $('#timer').html(clock);
      pomRunning = false;
    } else if (breakRunning == true) {
      clearInterval(myBreak);
      $('#timer').html(clock);
      breakRunning = false;
    }
    countDown = false;
    sec = 0;
    bSec = 0;
    $(this).html('start');
    acc=0;
    $('#fill').css({
      background: "linear-gradient(to top, #F7BC0C " + acc + "%,transparent " + acc + "%,transparent 100%)"
    });
  }
  
});

function myTimer() {
  pomRunning = true;

  if (acc <= 100) {
    acc += filler;
    $('#fill').css({
      background: "linear-gradient(to top, #F7BC0C " + acc + "%,transparent " + acc + "%,transparent 100%)"
    });

  }

  sec -= 1;

  if (sec === -1) {
    sec = 59;
    min -= 1;
  }
  if (sec > 9) {
    var time = min + ":" + sec;
    $('#timer').html(time);
  }
  else if (sec < 10 && sec > -1) {
    var time = min + ":0" + sec;
    $('#timer').html(time);

  }
  if (min === 0 && sec === 0) {
    clearInterval(pomTimer);
    pomRunning = false;
   
    myBreak = setInterval(breakTimer, 1000);
    accumulator=100;
  };

};

function breakTimer() {
  breakRunning = true;
 
  if (acc>0) {
    acc -= bFiller;
    
    $('#fill').css({
      background: "linear-gradient(to top, #F7BC0C " + acc + "%,transparent " + acc + "%,transparent 100%)"
    });

  }
  bSec -= 1;

  if (bSec === -1) {
    bSec = 59;
    bMin -= 1;
  }
  if (bSec > 9) {
    var breakTime = bMin + ":" + bSec;
    $('#timer').html(breakTime);

  } else if (bSec < 10 && bSec > -1) {
    var breakTime = bMin + ":0" + bSec;
    $('#timer').html(breakTime);

  }
  if (bMin === 0 && bSec === 0) {
    clearInterval(myBreak);
    breakRunning = false;
    countDown = false;
  }
};
});