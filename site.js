---
---
{% include js/handlebars-4.0.3.min.js %}
{% include js/lunr-0.5.12.min.js %}
{% include js/jquery.highlight.js %}
{% include js/glossary.js %}

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

$(githubWatchers);
