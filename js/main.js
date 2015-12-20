$(document).ready(function() {
  hljs.initHighlightingOnLoad();
  renderPostList();
  renderKatex();
  renderUML();
  adjustEdit();
  $('#toc').toc({
    'selectors': 'h1,h2,h3',
    'container': '.post-content'
  });
})

function renderUML() {
  $('.uml').each(function() {
    var thisNode = $(this).get()[0];
    var canvasNode = document.createElement("canvas");
    var content = thisNode.innerHTML;
    thisNode.parentNode.insertBefore(canvasNode, thisNode);
    thisNode.parentNode.removeChild(thisNode);
    nomnoml.draw(canvasNode, content);
  })
}

function renderPostList() {
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
}

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

function renderKatex() {
  $('code').each(function() {
    var re=/^\$([^\$]+)\$$/
    var katexSrc = $(this).text();
    var result = re.exec(katexSrc);
    if (result != null && result.length>0) {
      try {
        $(this).after('<span></span>'); // add <span> element for katex to render in
        katex.render(result[1], $(this).next().get(0));
        // append katex source string for future reference
        $(this).next().append('<span class="katex-src">'+katexSrc+'</span>');
        $(this).remove();
      } catch(e) {
        console.log(e);
      }
    }
  });
  $('.language-latex').each(function() {
    var src = $(this).text();
    var list = src.trim().split('\n');
    var container = $(this).parent().parent().after('<p class="katex-pre"></p>').next();
    $(this).parent().parent().remove();
    for (var i=0;i<list.length;i++) {
      console.log('rendering '+list[i]);
      katex.render(list[i], container.append('<p></p>').find('p:last-child').get(0));
    }
  });
}

function adjustEdit() {
  var edit = $('header .edit-btn');
  var editStr = edit.attr('href');
  editStr = 'https://github.com/lihebi/wiki/edit/gh-pages/'+editStr.substr(editStr.indexOf('_wiki'));
  edit.attr('href', editStr);
}
