---
---

{% include js/handlebars-2.0.min.js %}

$(function() {
  'use strict';

  var source = $('#glossary-template').html(),
      template = Handlebars.compile(source),
      $termList = $('.glossary-terms'),
      terms = {{ site.data.glossary | jsonify }},
      $search = $('.filter');
  console.log(terms);

  // AFter each key stroke compare the search box query against the name and city of each office
  $search.on('keyup', function() {
    var query = $(this).val().toLowerCase(),
        filtered;

    filtered = $.grep(terms, function(obj) {
      return (obj.term.toLowerCase().indexOf(query) >= 0 || obj.definition.toLowerCase().indexOf(query) >= 0);
    });
    console.log(filtered);
    // Recompile the template with the filtered office list
    $termList.empty().append( template(filtered) );
  });
});