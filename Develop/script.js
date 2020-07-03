
// Moment Current time 
var currentTime = moment();

// Moment declaration for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// Calculates the start of day
var beforeTime = moment().startOf('day').add(9, "hours");

// Time blocks

//9am
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm A');
$(".block1").text(time1);

//10am
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');
$(".block2").text(time2);

//11am
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');
$(".block3").text(time3);

//12pm
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');
$(".block4").text(time4);

//1pm
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');
$(".block5").text(time5);

