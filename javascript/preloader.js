$(function(){ // this replaces document.ready
    setTimeout(function(){
      $('.preloader').fadeOut('slow', function() {
        $(this).remove();
        $("div.section").removeClass("hidden");
      });
     }, 5000);
  });