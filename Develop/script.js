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
//1pm time block
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');
$(".block5").text(time5);
//2pm time block
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');
$(".block6").text(time6);
//3pm time block
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');
$(".block7").text(time7);
//4pm time block
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');
$(".block8").text(time8);
//5pm time block
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');
$(".block9").text(time9);


// Save to a local storage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});