$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop+1000) {
      $(this).addClass("slide");
    }
  });
});

$(window).scroll(function() {
    $('.fadedfx').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+1000) {
            $(this).addClass("fadeIn");
        }
    });
});

if($(window).width()<700 )
{
  



}
