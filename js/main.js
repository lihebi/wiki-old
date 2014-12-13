$(document).ready(function() {
  d=[];
  $('.post-list li a').each(function(index) {
    d.push({
      'href': $(this).attr('href'),
      'title': $(this).text().trim()
    });
  });
  $('.page-content').append('<div id="cat"></div>');
  d.forEach(function(v) {
    add($('#cat'), v.href, v.title, v.href.substr(7));
  });
  $('#cat cat').each(function() {
    $(this).append('<label>'+$(this).attr('id').substr(4)+'</label>')
  })
})

function add(ele, href, title, currentHref) {
  if (currentHref.indexOf('/')<0) {
    ele.append($('<a href="'+href+'">'+title+'</a>'));
    return;
  }
  var tmp = currentHref.split('/')[0];
  var id = 'cat-'+tmp;
  if (ele.has('cat#'+id).length == 0) {
    ele.append($('<cat id="'+id+'"></cat>'));
  }
  add(ele.find('cat#'+id), href, title, currentHref.substr(currentHref.indexOf('/')+1));
}
