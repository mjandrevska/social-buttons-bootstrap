function getFbLikes(element){
  var $elem = $(element);
  var purl = $elem.attr('data-url');
  var url = 'https://api.facebook.com/method/links.getStats';
  $.get(url, {
      urls: purl,
      format: 'json'
    }, function(response){
      $elem.text(response[0].like_count);
    });
}