/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



// consider breaking out into another js file for reusablity and oraganization
function getTimeSince(timeSince) {

  // if (timeSince < 60) {
  //   return `${timeSince} seconds ago`;
  // } else if  (timeSince < 60*60) {
  //   return `${timeSince/60} minutes ago`;
  // } else if  (timeSince < 60*60*24) {
  //   return `${timeSince/60/60} hours ago`;
  // } else if  (timeSince < 60*60*24*30) {
  //   return `${timeSince/60/60/24} days ago`;
  // } else if  (timeSince < 60*60*24*30*12) {
  //   return `${timeSince/60/60/24/30} months ago`;
  // } else {
  //   return `${timeSince/60/60/24/30/12} years ago`;
  // }

  if (timeSince < 60) {
    return `${Math.round(timeSince)} seconds ago`;
  } else if  (timeSince < 60*60) {
    return `${Math.round(timeSince/60)} minutes ago`;
  } else if  (timeSince < 60*60*24) {
    return `${Math.round(timeSince/60/60)} hours ago`;
  } else if  (timeSince < 60*60*24*30) {
    return `${Math.round(timeSince/60/60/24)} days ago`;
  } else if  (timeSince < 60*60*24*30*12) {
    return `${Math.round(timeSince/60/60/24/30)} months ago`;
  } else {
    return `${Math.round(timeSince/60/60/24/30/12)} years ago`;
  }

  // for round to 2 decimal .toFixed(2)

}


// consider making the function in JQ
function createTweetElement(tweet) {

  const dateSinceSeconds = ((Date.now() - tweet.created_at)/1000);
  const dateSince = getTimeSince(dateSinceSeconds);

  console.log(dateSince);

// ${tweet.content.text}

  // <script>alert('This shouldnt happen!!');</script>

  // const $xssFix = $('#tweet-body', tweetHTML).text(tweet.content.text);
  // console.log($xssFix);
  // console.log(tweet.content.text);

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
  //           ${$('<p></p>').}
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
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
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


$(document).ready(function() {

  // renderTweets(data);
  loadTweets();

});


function loadTweets () {

  $(document).ready(function() {

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

    $.ajax("/tweets/", {
    })
    .done(function (data) {
      renderTweets(data);
    })
    .fail(function(xhr) {
      console.log('error', xhr);
    });


    // $.getJSON( "/tweets/", function(data) {renderTweets(data)});


  });

}


// Submit button event
$(document).ready(function() {

  $('#tweet-form').submit(function(event) {

    event.preventDefault();

    // add failure
    // $.ajax({
    //   type: "POST",
    //   url: "/tweets/",
    //   data: $("#tweet-text").serialize(),
    //   success: function() {
    //     location.reload();
    //   }
    // });

    const tweetText = $(this).parent().find('#tweet-text');
    const errorMsg = $(this).parent().parent().parent().find('#error-hide');

    if (tweetText.val().length > 140) {
      // alert("Posts must be less than 140 characters.");
      $(this).parent().parent().parent().find('#error-hide').slideDown();
      errorMsg.find('#error-message').text('Posts must be less than 140 characters.');
    } else if (tweetText.val() === "") {
      // alert("You must enter a message.");
      $(this).parent().parent().parent().find('#error-hide').slideDown();
      errorMsg.find('#error-message').text('You cannot post a blank message.');
    } else {

      $.ajax({
        type: "POST",
        url: "/tweets/",
        data: $("#tweet-text").serialize(),
      })
      .done(function() {
        loadTweets();
        // location.reload();
      })
      .fail(function(xhr) {
        console.log('error', xhr);
      });

      tweetText.val("");
      $(this).find('.counter').text('140');
      $('#error-hide').slideUp();
      // console.log(tweetText.val());

    }

  });

  $('#error-hide #error-close').click(function(event) {
      $(this).parent().parent().slideUp();
  });

});




// Compose button
$(document).ready(function() {

   $("#nav-bar #compose-button").on("click", function() {

    // console.log($(this).parent().parent().find('.container').find('.new-tweet'));
    // $(this).parent().parent().parent().find('.container').find('#new-tweet').slideToggle();
    $('#new-tweet').slideToggle();
    $('#new-tweet').find('#tweet-text').focus();
    $('#error-hide').slideUp();



   });


});