$(document).ready(function() {

  $("section#new-tweet form textarea").on("input", function() {
    // input propertychange paste -- would we need them all?

    // console.log($(this).val().length);
    var chars = $(this).val().length;
    var count = $(this).parent().find('.counter');

    count.text(140 - chars);

    // $(this).parent().find('.counter').text(140 - $(this).val().length);

    if (chars > 140) {
      // change class or id instead of css which is technically inline
      // $(this).parent().find('.counter').css("color", "red");
      count.addClass('count-red').removeClass('count-black');


    } else {
      // $(this).parent().find('.counter').css("color", "black");
      count.addClass('count-black').removeClass('count-red');
    }

  });

});