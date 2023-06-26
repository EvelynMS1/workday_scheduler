//current date display
const $datedisplay = document.getElementById("currentDay");
const currentdate = dayjs().format('dddd, MMMM D');
$datedisplay.textContent=currentdate;
//notification function of event display
const $message = document.getElementById("message");
$(function () {
  var button = $(".saveBtn");
  button.click(function () {
    //class id or element
    var textarea = $(this).siblings(".description").val();
    var timeId = $(this).parent().attr("id");
    localStorage.setItem(timeId, textarea);
    $message.textContent= 'Appointment Added to Local Storage!';

      // 
    // };


    console.log(textarea, timeId);
  });

  for (let index = 9; index < 18; index++) {
    $("#hour-" + index + " .description").val(
      localStorage.getItem("hour-" + index)
    );
  }
  $(".time-block").each(function () {
    var currenthour = dayjs().hour();
    console.log(currenthour);
    // console.log(typeof currenthour);

    var rowtime = parseInt($(this).attr("id").split("-")[1]);
    if (rowtime < currenthour) {
      $(this).addClass("past");
    } else if (rowtime === currenthour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
    console.log(typeof rowtime);
  });
});
//one day planner 24 hrs
