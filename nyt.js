rahul_nallappa [2:26 PM] 
$( document ).ready(function() {
	console.log( "ready!" );



	$(".btn").on("click", function(event){


		event.preventDefault();
		console.log("button was clicked!");



		var term = document.getElementById("numberOfRecords").value;
// var term = $("#search").val();



var numberRecords = $("#numberOfRecords").val();



var startYear = $("#startYear").val();



var endYear = $("#endYear").val();



var queryURL = "http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=c6b6d232645147c99d22e7386777c49f&q=" + term;

// + "&begin_date=" + startYear + "&end_date=" + endYear;



http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=c6b6d232645147c99d22e7386777c49f&q=&begin_date=&end_date=


$.ajax({
	url: queryURL,
	method: 'GET',
}).done(function(result) {
	console.log(result);


});


});



});