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
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
  
    
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
    var formValue = $(this).siblings(".description").val();
    console.log(this);
    var listItem = $(this).parent().attr("id");
   
    localStorage.setItem(listItem, formValue);
    });

  });