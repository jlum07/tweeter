$(document).ready(function() {

  // Uses delegation but not with the .delegation, being passed after click.
  $("#tweet-list").on( "click", ".tweet", function(event) {

    // console.log($(this).data("id"));
    $("#tweet-moto").fadeToggle().css({display: "flex"});



    // $("#tweet-img").empty();

    var randID = Math.floor(Math.random() * 1084);



    // var $img = $('<img />').attr({
    //     'id': 'myImage',
    //     'src': `https://picsum.photos/600/600?image=${randID}`,
    //     'alt': 'tweet pic',
    //     'title': 'tweet pic',
    // });

    // $("#tweet-img").append($img);


    $("#one-tweet").css({'background-image': `url(https://picsum.photos/600/600?image=${randID}`, 'display': 'flex'});
    // background-image: url(https://picsum.photos/800/600/?image=12)

    const tweetID = $(this).data("id");


    // testing above
    // console.log(tweetID);





    $.ajax(`/tweets/id/${tweetID}`, {
    })
    .done(function (data) {

      $('#one-tweet-avatar').attr('src', data.user.avatars.regular);
      $('#one-tweet-name').text(data.user.name);
      $('#one-tweet-timesince').text(getTimeSince(data.created_at));

      $('#one-tweet-username').text(`${data.user.handle}: `);
      $('#one-tweet-message').text(data.content.text);

    })
    .fail(function(xhr) {
      console.log('error', xhr);
    });

  });

  // closes tweet moto
  $("#tweet-moto").on( "click", function(event) {

    $(this).fadeToggle();

  });

  // $("#one-moto").on("hover", function(event) {

  //   $('#one-tweet-head').fadeToggle();
  //   $('#one-tweet-message').fadeToggle();

  // });



});
