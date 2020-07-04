// Moment day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// Moment Current time 
var currentTime = moment();
currentTime = currentTime.startOf("hour");
var beforeTime = moment().startOf('day').add(9, "hours");

//Time Blocks

//9am time block
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm A');
$(".block1").text(time1);
//10am time block
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');
$(".block2").text(time2);
//11am time block
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');
$(".block3").text(time3);
//12pm time block
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');
$(".block4").text(time4);

