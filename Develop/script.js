// Moment day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// Moment Current time 
var currentTime = moment();
currentTime = currentTime.startOf("hour");
var beforeTime = moment().startOf('day').add(9, "hours");

//Time Blocks
