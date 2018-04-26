$(document).ready(function() {

  $("section#new-tweet form textarea").on("input", function() {
    // input propertychange paste -- would we need them all?

    var $chars = $(this).val().length;
    var $count = $(this).parent().find('.counter');

    $count.text(140 - $chars);

    if ($chars > 140) {
      // $(this).parent().find('.counter').css("color", "red");
      $count.addClass('count-red').removeClass('count-black');
    } else {
      // $(this).parent().find('.counter').css("color", "black");
      $count.addClass('count-black').removeClass('count-red');
    }

  });

});