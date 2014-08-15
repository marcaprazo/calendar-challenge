function renderEvents(eventArray) {
  
  example = document.createElement("div");
  example.innerHTML = '<div class="event-sticker"><span class="time">10:00</span><span class="title">Meeting with the board</span><span class="description">Some random placeholder text</span></div>';
  example.setAttribute("class", "event-sticker-wrapper");
  example.setAttribute("style", "top: 60px; left: 0px; width: 598px; height: 120px;");

  calendar = document.getElementById("calendar-events");

  calendar.appendChild(example);

  
  
  return false;

}
