//variables set up to alter be manipulated by jquery
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
  $('#hour-9 button').on('click', function() {
    var todo9 = $('#hour-9 textarea').val();
    localStorage.setItem('todo9', todo9);
  });
  $('#hour-10 button').on('click', function() {
    var todo10 = $('#hour-10 textarea').val();
    localStorage.setItem('todo10', todo10);
  });
  $('#hour-11 button').on('click', function() {
    var todo11 = $('#hour-11 textarea').val();
    localStorage.setItem('todo11', todo11);
  });
  $('#hour-12 button').on('click', function() {
    var todo12 = $('#hour-12 textarea').val();
    localStorage.setItem('todo12', todo12);
  });
  $('#hour-13 button').on('click', function() {
    var todo13 = $('#hour-13 textarea').val();
    localStorage.setItem('todo13', todo13);
  });
  $('#hour-14 button').on('click', function() {
    var todo14 = $('#hour-14 textarea').val();
    localStorage.setItem('todo14', todo14);
  });
  $('#hour-15 button').on('click', function() {
    var todo15 = $('#hour-15 textarea').val();
    localStorage.setItem('todo15', todo15);
  });
  $('#hour-16 button').on('click', function() {
    var todo16 = $('#hour-16 textarea').val();
    localStorage.setItem('todo16', todo16);
  });
  $('#hour-17 button').on('click', function() {
    var todo17 = $('#hour-17 textarea').val();
    localStorage.setItem('todo17', todo17);
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
  var savedtodo9 =localStorage.getItem('todo9')
  var savedtodo10 =localStorage.getItem('todo10')
  var savedtodo11 =localStorage.getItem('todo11')
  var savedtodo12 =localStorage.getItem('todo12')
  var savedtodo13 =localStorage.getItem('todo13')
  var savedtodo14 =localStorage.getItem('todo14')
  var savedtodo15 =localStorage.getItem('todo15')
  var savedtodo16 =localStorage.getItem('todo16')
  var savedtodo17 =localStorage.getItem('todo17')

  $('#hour-9 textarea').val(savedtodo9)
  $('#hour-10 textarea').val(savedtodo10)
  $('#hour-11 textarea').val(savedtodo11)
  $('#hour-12 textarea').val(savedtodo12)
  $('#hour-13 textarea').val(savedtodo13)
  $('#hour-14 textarea').val(savedtodo14)
  $('#hour-15 textarea').val(savedtodo15)
  $('#hour-16 textarea').val(savedtodo16)
  $('#hour-17 textarea').val(savedtodo17)

  //Code to display the current date in the header of the page.
  function updateTime() {
    var now = dayjs();
    var formatted = now.format('MMM DD, YYYY [at] hh:mm:ss a');
    document.getElementById('currentDay').textContent = formatted;
    };
    setInterval(updateTime, 1000);
});
