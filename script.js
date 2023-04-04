//variables set up to modify HTML and set up comparisons for functions in Jquery
var hour9 = {
  element: $('#hour-9'),
  value: 9
}
var hour10 = {
  element: $('#hour-10'),
  value: 10
}
var hour11 = {
  element: $('#hour-11'),
  value: 11
}
var hour12 = {
  element: $('#hour-12'),
  value: 12
}
var hour13 = {
  element: $('#hour-13'),
  value: 13
}
var hour14 = {
  element: $('#hour-14'),
  value: 14
}
var hour15 = {
  element: $('#hour-15'),
  value: 15
}
var hour16 = {
  element: $('#hour-16'),
  value: 16
}
var hour17 = {
  element: $('#hour-17'),
  value: 17
}

$(function () {

  // Listener for click events on the save button.
  $('.saveBtn').on('click', function () {
    localStorage.setItem($(this).parent('div').attr('id') , $(this).siblings('textarea').val());
  });

  // Code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  function updateColor () {
    var now = dayjs ();
    var currentHour = now.hour();
    $.each([hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17],
      function(index, hour) {
      if (currentHour == hour.value) {
        hour.element.attr('class','row time-block present')
      } else if (currentHour > hour.value) {
        hour.element.attr('class','row time-block past')
      } else {
        hour.element.attr('class','row time-block future')
      } 
    });
  };
  updateColor();

  //Code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  function readFromStorage () {
     $('.time-block').each(function(index, element) {
        var savedText = localStorage.getItem($(element).attr('id'));
        if (savedText !== null) {
          $(element).find('textarea').val(savedText);
        }
      });
  };
  readFromStorage();

  //Code to display the current date in the header of the page.
  function updateTime() {
    var now = dayjs();
    var formatted = now.format('MMM DD, YYYY [at] hh:mm:ss a');
    document.getElementById('currentDay').textContent = formatted;
    };
    setInterval(updateTime, 1000);
});