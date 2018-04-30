function displayTweetMoto(tweet) {

  $('#one-tweet-avatar').attr('src', tweet.user.avatars.regular);
  $('#one-tweet-name').text(tweet.user.name);
  $('#one-tweet-timesince').text(getTimeSince(tweet.created_at));

  $('#one-tweet-username').text(`${tweet.user.handle}: `);
  $('#one-tweet-message').text(tweet.content.text);

}


$(document).ready(function() {

  // Uses delegation but not with the .delegation, being passed after click.
  $("#tweet-list").on( "click", ".tweet", function(event) {


    $("#tweet-moto").fadeToggle().css({display: "flex"});

    // Grabs a random image from picsum. Sometimes it fails because they have quite a few dead img links in their db
    var randID = Math.floor(Math.random() * 1084);
    $("#one-tweet").css({'background-image': `url(https://picsum.photos/600/600?image=${randID}`, 'display': 'flex'});

    // Ajax request to search for single tweet based on MongoDB ID
    // This could be dont by reading the elements data/values but wanted to practice with mongo
    const tweetID = $(this).data("id");

    $.ajax(`/tweets/id/${tweetID}`, {
    })
    .done(function (data) {
      displayTweetMoto(data);
    })
    .fail(function(xhr) {
      console.log('error', xhr);
    });

  });


  $("#one-tweet").on( "click", function(event) {
    event.stopPropagation();
  });

  // closes tweet moto
  $("#tweet-moto").on( "click", function(event) {
    $(this).fadeToggle();
  });

});
