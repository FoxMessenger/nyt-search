var term = $("#search").val();

var numberRecords = $("tbd").val();

var startYear = $("tbd").val();

var endYear = $("tbd").val();





var queryURL = "http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=c6b6d232645147c99d22e7386777c49f&q=" + term + "&begin_date=" + startYear + "&end_date=" + endYear ;


$.ajax({
 url: url,
 method: 'GET',
}).done(function(result) {
 console.log(result);















}).fail(function(err) {
 throw err;
});