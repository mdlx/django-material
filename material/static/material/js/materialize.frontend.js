/* global $ */
$(document).on('turbolinks:load', function () {
  // Sidenav
  // http://materializecss.com/side-nav.html
  // https://github.com/noraesae/perfect-scrollbar#how-to-use
  $('.button-collapse').sideNav()
  $(document).activeNavigation('#slide-out')
  $('#slide-out').perfectScrollbar()
})

$(document).on('turbolinks:before-cache', function () {
  // Sidenav
  $('#sidenav-overlay').remove()
  $('.drag-target').remove()
  $('#slide-out').perfectScrollbar('destroy')
})

// Disable reload same page links
document.addEventListener("turbolinks:before-visit", function (event) {
  var origin = window.location.href;
  var destination = event.data.url;

  if(origin == destination) {
    event.preventDefault();
    return;
  }
});

// submit GET forms with turbolinks
$(document).on("submit", "form[data-control-form][method=get]", function(e) {
  Turbolinks.visit(
    this.action +
      (this.action.indexOf('?') == -1 ? '?' : '&') +
      $(this).serialize()
  );
  return false;
});
