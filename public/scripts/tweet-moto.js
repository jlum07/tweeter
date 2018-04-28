$(document).ready(function() {

  // Uses delegation but not with the .delegation, being passed after click.
  $("#tweet-list").on( "click", ".tweet", function(event) {

    $("#tweet-moto").fadeToggle().css({display: "flex"});

    var randID = Math.floor(Math.random() * 1084);

    $("#one-tweet").css({'background-image': `url(https://picsum.photos/600/600?image=${randID}`, 'display': 'flex'});

    const tweetID = $(this).data("id");


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

});
