/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// consider making the function in JQ
function createTweetElement(tweet) {

  const dateSinceSeconds = ((Date.now() - tweet.created_at)/1000);
  const dateSince = getTimeSince(dateSinceSeconds);

  // trying to have unique ids for icons so that when hover they light up individually
  const userHandle =  tweet.user.handle.slice(1);


  // Another way to do XSS fix. Difference is mostly in the return line
  // const tweetHTML =  $(
  //     `<article class="tweet">
  //         <header>
  //           <div>
  //             <img src="${tweet.user.avatars.regular}" alt="User Avatar">
  //             <span class="full-name">${tweet.user.name}</span>
  //           </div>
  //           <div class="username">${tweet.user.handle}</div>
  //         </header>
  //         <div class="tweet-body">
  //
  //         </div>
  //         <footer>
  //           <div class="tweet-age">
  //             ${dateSince}
  //           </div>
  //           <div class="tweet-icons">
  //             <i class="fas fa-flag"></i>
  //             <i class="fas fa-retweet"></i>
  //             <i class="fas fa-heart"></i>
  //           </div>
  //         </footer>
  //       </article>`);
  // return $('.tweet-body', tweetHTML).text(tweet.content.text);


   return $(
      `<article class="tweet">
          <header>
            <div>
              <img src="${tweet.user.avatars.regular}" alt="User Avatar">
              <span class="full-name">${tweet.user.name}</span>
            </div>

            <div class="username">${tweet.user.handle}</div>
          </header>
          <div class="tweet-body">
            ${$('<div>').text(tweet.content.text).html()}
          </div>
          <footer>
            <div class="tweet-age">
              ${dateSince}
            </div>
            <div class="tweet-icons">
              <i class="report-icon fas fa-flag" id="icon-report-${userHandle}"></i>
              <i class="retweet-icon fas fa-retweet" id="icon-retweet-${userHandle}"></i>
              <i class="like-icon fas fa-heart" id="icon-like-${userHandle}"></i>
            </div>
          </footer>
        </article>`);

}


function renderTweets(tweets) {
    // look into for each
    $('#tweet-list').empty();
    for (let i = 0; i < tweets.length; i++) {
      $('#tweet-list').prepend(createTweetElement(tweets[i]));
    }

}



function loadTweets () {

  $(document).ready(function() {

    // AJAX Callback
    // $.ajax({
    //   dataType: "json",
    //   type: "GET",
    //   url: "/tweets/",
    //   data: "/tweets.json",
    //   success: function(data, status, jqXHR) {
    //     // console.log(data);
    //     // return data;
    //     renderTweets(data);
    //   },
    //   error: function(jqXHR, status, error) {
    //     console.log('Error:', jqXHR , status, error);
    //   }
    // });

    // AJAX Promise
    $.ajax("/tweets/", {
    })
    .done(function (data) {
      renderTweets(data);
    })
    .fail(function(xhr) {
      console.log('error', xhr);
    });

    // Similar to callback but short forms for just JSON.. I think
    // $.getJSON( "/tweets/", function(data) {renderTweets(data)});


  });

}


$(document).ready(function() {

  loadTweets();

});


// Submit button event
$(document).ready(function() {

  $('#tweet-form').submit(function(event) {

    event.preventDefault();

    const $tweetText = $('#tweet-text');
    const $errorMsg = $('#error-hide');

    if ($tweetText.val().length > 140) {
      $errorMsg.slideDown();
      $errorMsg.find('#error-message').text('Posts must be less than 140 characters.');
    } else if ($tweetText.val() === "") {
      $errorMsg.slideDown();
      $errorMsg.find('#error-message').text('You cannot post a blank message.');
    } else {

      $.ajax({
        type: "POST",
        url: "/tweets/",
        data: $("#tweet-text").serialize(),
      })
      .done(function() {
        loadTweets();
      })
      .fail(function(xhr) {
        console.log('error', xhr);
      });

      $tweetText.val("");
      $(this).find('.counter').text('140');
      $('#error-hide').slideUp();

    }

  });

  $('#error-hide #error-close').click(function(event) {
      $('#error-hide').slideUp();
  });

});


// Compose button
$(document).ready(function() {

   $("#nav-bar #compose-button").on("click", function() {

    const $newTweet = $('#new-tweet');

    $newTweet.slideToggle();
    $newTweet.find('#tweet-text').focus();
    $('#error-hide').slideUp();

   });

});