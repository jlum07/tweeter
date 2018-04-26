$(document).ready(function() {

  $("section#new-tweet form textarea").on("input propertychange paste", function() {

    var $chars = $(this).val().length;
    var $count = $(this).parent().find('.counter');

    $count.text(140 - $chars);

    if ($chars > 140) {
      $count.addClass('count-red').removeClass('count-black');
    } else {
      $count.addClass('count-black').removeClass('count-red');
    }

  });

});