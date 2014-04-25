//From: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/901144#901144
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(function() {
  var pageName = window.location.href.toString().split(window.location.host)[1].split('?')[0];
  if(getParameterByName('installed')) $("#installed").toggle();
  
  switch(pageName) {
    case "/about.html":
      $("#about").attr("class", "active");
      break;
    case "/help.html":
      $("#help").attr("class", "active");
      break;
    case "/sites.html":
      $("#sites").attr("class", "active");
      break;
    case "/contact.html":
      $("#contact").attr("class", "active");
      break;
    default:
      $("#navbar-main-brand").attr("class", "active-brand navbar-brand");
      break;
  }

  $("#showguide").click(function() {
    event.preventDefault();
    $("#pictureguide").toggle();
  });

  document.getElementById("contact_button").onclick = function() {
    var data = {
      url: $("#site_url").val(),
      message: $("#comments").val()
    };
    postMessage(data);
  };

  var postMessage = function(message) {
    $.ajax({
      type: "POST",
      url: "http://localhost:4567/message",
      data: message
    })
      .done(function( msg ) {
        console.log( "Data Saved: " + msg );
      });
  }

});
