---
---

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
};

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
    githubWatchers()
});
