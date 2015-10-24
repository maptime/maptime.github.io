$(function() {

  var $glossaryTrigger = $('.glossary-trigger'),
      $glossary = $('.fws-glossary'),
      $goGlossary,
      source = $('.glossary-template').html(),
      template = Handlebars.compile(source),
      $termsList = $('.glossary-terms'),
      $search = $('.glossary-search'),
      $terms = $('.term'),
      terms = [],
      index;

  loadTerms();

  $glossaryTrigger.on('click', function () {
    $glossary.toggleClass('active');
  });

  // After each key stroke compare the search box query against the name and description of each term
  $search.on('keyup input propertychange paste', function() {
    if ($search.val() === '') {
      terms = alphabetize(terms);
      compileTemplate(terms);
    } else {
      compileTemplate( filterTerms(terms) );
    }
  });

  // Creates an array of objects based on HTML
  function loadTerms() {
    $terms.each(function (i, term) {
      var $term = $(term),
        related = [];

      $term.find('.term-tags span').each(function() {
        related.push($(this).text());
      });

      terms.push({
        name: $term.find('h3').text(),
        definition: $term.find('.term-definition').html(),
        image: {
          src: $term.find('img').attr('src'),
          alt: $term.find('img').attr('alt')
        },
        tags: related
      });
    });
    highlightTerms(terms);
    terms = alphabetize(terms);
    createIndex(terms);
    compileTemplate(terms);
  }

  // Highlight any glossary terms that are on the current page
  function highlightTerms(terms) {
    var highlight = [];
    $.each(terms, function (i, term) {
      highlight.push(term.name);
      if (term.acronym){
        highlight.push(term.acronym);
      }
    });

    $('.main-content').highlight(highlight, {className: 'go-glossary'});
    $('.go-glossary').on('click', function() {
      $search.val($(this).text());
      compileTemplate(filterTerms(terms));
      $glossary.toggleClass('active');
    }).attr('role', 'button');
  }

  //Create Lunr.js index of glossary terms
  function createIndex(data) {
    index = lunr(function() {
      this.field('term', {boost: 10});
      this.field('definition');
      this.field('tags', {boost: 3});
      this.ref('id');
    });

    $.each(data, function(i, term) {
      index.add({
        id: i,
        name: term.term,
        definition: term.definition,
        tags: term.tags.toString()
      });
     });
  }

  //Filter terms based on Lunr.js index
  function filterTerms(data) {
    var query = $search.val().toLowerCase(),
        hits = index.search(query),
        results = [];

    $.each(hits, function(key, value) {
      results.push(terms[value.ref]);
    });
    return results;
  }

  // Compile the Handlebars.js template with provided data
  function compileTemplate(data) {
    if (data.length) {
      $termsList.empty().append( template({ 'terms': data }) );
      registerTagHandler();
    } else {
      $termsList.empty().append('<li class="term"><h3>No glossary terms found.</h3></li>');
    }
  }

  // Change search term & recompile template when user clicks a tag
  function registerTagHandler() {
    var $tag = $('.glossary-tag');
    $tag.on('click', function() {
      $search.val($(this).text());

      compileTemplate( filterTerms(terms) );
    });
  }

  function alphabetize(data) {
    return data.sort(compare);
  }

  function compare(a,b) {
    if (a.name < b.name) {
       return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
});
