// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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

var todo9 = $('#hour-9 textarea').val();
var todo10 = $('#hour-10 textarea').val();
var tod11 = $('#hour-11 textarea').val();
var todo12 = $('#hour-12 textarea').val();
var todo13 = $('#hour-13 textarea').val();
var todo14 = $('#hour-14 textarea').val();
var todo15 = $('#hour-15 textarea').val();
var todo16 = $('#hour-16 textarea').val();
var todo17 = $('#hour-17 textarea').val();

$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('hour-9 button').on('click', function() {
    localStorage.setItem('todo9', todo9);
  });
  $('hour-10 button').on('click', function() {
    localStorage.setItem('todo10', todo10);
  });
  $('hour-11 button').on('click', function() {
    localStorage.setItem('todo11', todo11);
  });
  $('hour-12 button').on('click', function() {
    localStorage.setItem('todo12', todo12);
  });
  $('hour-13 button').on('click', function() {
    localStorage.setItem('todo13', todo13);
  });
  $('hour-14 button').on('click', function() {
    localStorage.setItem('todo14', todo14);
  });
  $('hour-15 button').on('click', function() {
    localStorage.setItem('todo15', todo15);
  });
  $('hour-16 button').on('click', function() {
    localStorage.setItem('todo16', todo16);
  });
  $('hour-17 button').on('click', function() {
    localStorage.setItem('todo17', todo17);
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  

  // TODO: Add code to display the current date in the header of the page.
  function updateTime() {
    var now = dayjs();
    var formatted = now.format('MMM DD, YYYY [at] hh:mm:ss a');
    document.getElementById('currentDay').textContent = formatted;
    };
    setInterval(updateTime, 1000);
});
