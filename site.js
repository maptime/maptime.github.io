---
---
//Tabletop.js
{% include js/tabletop.js %}
{% include js/moment.js %}

function githubWatchers() {
    var watchers = $('.followers');
    $.ajax({
        url: 'https://api.github.com/repos/' +
            'maptime' + '/' +
            '{{site.repo}}' + '/subscribers',
        dataType: 'jsonp',
        success: function(res) {
            if (!res.data.length) return;
            var template =
                "<a class='thumbnail contain' href='http://github.com/<%=login%>' style='background-image:url(<%=avatar_url%>)'>" +
                    "<span class='popup center fill-light strong small round pad0y pad1x'>" +
                        "<span class='truncate'><%=login%></span>" +
                    "</span>" +
                "</a>";
            var data = _(res.data)
                .map(function(i) { return _(template).template(i); })
                .reverse()
                .join('');

            watchers.append(data);
        }
    });
}

function filterDates(events) {
    // Ditch past events
    var upcoming = _.filter(events, function(event){
        return moment(event.datetime) > moment();
    });

    // Sort by date
    upcoming.sort(function(a,b) {
        var a = moment(a.datetime),
            b = moment(b.datetime);
        if (a < b)
          return -1;
        if (a > b)
          return 1;
        return 0;
    });

    return upcoming;
}

function processEvents(data, tabletop) {

    // Filter and Sort dates
    var filtered = filterDates(data);

    var $eventList = $('.events-list'),
        template = "<li class='event'>" +
                    "<% if (externalurl) { %>" +
                    "<a href='<%=externalurl%>'><%=whichchapter%></a></h3>" +
                    "<% } else { %>" +
                    "<h3 class='event-title'><%=whichchapter%></h3>" +
                    "<% } %>" +
                    "<p class='event-date'><%=moment(datetime).format('MMMM Do YYYY, h:mm a')%></p>" +
                    "<p><address><%=locationname%><br><%=locationaddress%></address></p>" +
                   "</li>";
    var events = _(filtered)
        .map(function(i) { return _(template).template(i); });

    $eventList.append(events);
}

function initEvents() {
    var $eventList = $('.events-list'),
        $header = $('.events-header'),
        $window = $(window),
        events = Tabletop.init({
            key: '1kswO9zq5UgQCdPwndBmQGtKhQtbQw8xSQhqHLcQHxKU',
            callback: processEvents,
            simpleSheet: true,
            orderBy: 'datetime'
        });

    $header.on('click', function(){
        if ($window.width() < 704) $eventList.toggle();
    });
}

$(function() {
    // Menu logic
    var nav = $('#nav'),
        menu = $('#nav .menu'),
        navButton = $('.nav-expand');
    $('button.nav-expand').on('click', function(){
      menu.slideToggle(200);
      navButton.toggleClass('open');
    });
    var blocked = false,
        threshold = 800;
    $(window).resize(function(){
      menuCheck($(window).outerWidth(true), blocked, threshold);
    });
    function menuCheck(w, b, t) {
      if (w>t && !b) {
        menu.show();
        blocked = !b;
        $('.nav-expand').removeClass('open');
      } else if (w<=t && b) {
        menu.hide();
        blocked = !b;
      }
    }
    githubWatchers();
    initEvents();
});
