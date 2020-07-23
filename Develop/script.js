$(document).ready(function() {  
  
    // Moment declaration for day
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    function testTime() {
    // Moment Current time
      var currentTime = moment().hours();
  
    $(".time-block").each(function() {
    var hourBlock = parseInt($(this).attr("id").split("-")[1]);
  
    // Function to compare hours with current time 
    if (hourBlock < currentTime) {
        $(this).addClass("past");
        } 
    else if (hourBlock === currentTime) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
    else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    testTime();
  
    //Set up the interval
    var interval = setInterval(testTime, 15000);
  
    // saved data
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
    var formValue = $(this).siblings(".description").val();
    console.log(this);
    var listItem = $(this).parent().attr("id");
    console.log(listItem);
    
    localStorage.setItem(listItem, formValue);
    });

  });