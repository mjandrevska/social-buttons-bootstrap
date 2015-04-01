function getTweets(element){
	var $elem = $(element);
	var purl = $elem.attr('data-url');
	var url = 'http://cdn.syndication.twitter.com/widgets/tweetbutton/count.json';
	$.ajax(url, {
		type: 'GET',
		dataType: 'jsonp',
		url: url,
		data: {
			url: purl,
			callback: '?'
		}
	}).then(function(response){
		$elem.text(response.count);
	});
}