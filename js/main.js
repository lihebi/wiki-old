$(document).ready(function() {
  console.log('hello');
  d=[];
  $('.post-list li a').each(function(index) {
    d.push({
      'href': $(this).attr('href'),
      'title': $(this).text().trim()
    });
  })
  console.log(d);
})

function add(ele, href, title, currentHref) {
  var tmp = currentHref.split('/')[0];
  if (ele.has('cat#cat-'+tmp)) {
    add(ele.find('cat#cat-'+tmp), href, title, currentHref.substr(currentHref.indexOf('/')));
  } else {
    ele.append($('<cat id="cat-'+tmp+'"></cat>'));
  }
}
