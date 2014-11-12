var events = document.getElementById("events") ? document.getElementById("events") : false;

jQuery(document).ready(function($){
  // test spreadsheet key 1kswO9zq5UgQCdPwndBmQGtKhQtbQw8xSQhqHLcQHxKU
  if(events) {
    events.innerHTML="<p><img class='loading' src='/img/loading.gif'> Upcoming Events</p>";
    Tabletop.init({
      key: '1kswO9zq5UgQCdPwndBmQGtKhQtbQw8xSQhqHLcQHxKU',
      orderby: 'datetime', // response comes in date order! SO AWESOME.
      callback: buildEvents,
      simpleSheet: true } );
  }
});

function buildEvents(data, tabletop) {
  
  var today = new Date(); // today's date
  events.innerHTML=""; // removes loading.gif
  var dates = []; // used to make sure we only print a date once

  // loop through returned data to build events
  for (var i=0; i<data.length; i++) {

    // set date object for use in event building
    var date = time(data[i].datetime);

    // check date to make new date item if it hasn't been pushed yet
    if(dates.indexOf(date.day)==-1) {
      var dateItem = document.createElement("li");
      dateItem.className = "date-cal";
      dateItem.innerHTML = "<p class='date-num'>"+date.dateNum+"</p><p class='date-month fill-navy'>"+date.month+"</p>";
      events.appendChild(dateItem);
      dates.push(date.day); // push into array for next check
    }

    // create event element
    var item = document.createElement("li");
    item.className="event";
    item.innerHTML+="<p class='event-chapter'>"+data[i].whichchapter+"<span class='event-time'>" + date.time + "</span></p>";
    item.innerHTML+="<p class='event-location'><a href='http://maps.google.com/?q="+data[i].locationname + " " + data[i].locationaddress + "' target='_blank'>"+data[i].locationname+"</a></p>";
    events.appendChild(item);

  }

}

// date and time functions for returning nice names
function time(time) {
  var d = new Date(time);
  return {
    d: d,
    dateNum: d.getDate(),
    month: month(d.getMonth()),
    day: weekday(d.getDay()) + ", " + month(d.getMonth()) + " " + ordinalsuffix(d.getDay()),
    time: meetingTime(d)
  }
}
function weekday(d) {
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[d];
}
function month(d) {
  months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
  return months[d];
}
function ordinalsuffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) { return i + "st"; }
    if (j == 2 && k != 12) { return i + "nd"; }
    if (j == 3 && k != 13) { return i + "rd"; }
    return i + "th";
}
function meetingTime(t) {
  return ((t.getHours() < 10)?"0":"") + ((t.getHours()>12)?(t.getHours()-12):t.getHours()) + ":" + ((t.getMinutes() < 10)?"0":"") + t.getMinutes() + ((t.getHours()>12)?('PM'):'AM');
}