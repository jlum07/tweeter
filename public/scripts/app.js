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


function renderTweets(tweets) {

    for (let i = 0; i < tweets.length; i++) {
      $('#tweet-list').append(createTweetElement(tweets[i]));
    }

}


// createTweetElement
// consider making the function in JQ
function createTweetElement(tweet) {

  let dateSinceSeconds = ((Date.now() - tweet.created_at)/1000);
  let dateSince = getTimeSince(dateSinceSeconds);

  let HTML = `
        <article class="tweet">
          <header>
            <div>
              <img src="${tweet.user.avatars.regular}" alt="User Avatar">
              <span class="full-name">${tweet.user.name}</span>
            </div>

            <div class="username">${tweet.user.handle}</div>
          </header>
          <div class="tweet-body">
            ${tweet.content.text}
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
        </article>
      `;

  return $(HTML);

}

function getTimeSince(timeSince) {

  if (timeSince < 60) {
    return `${timeSince} seconds ago`;
  } else if  (timeSince < 60*60) {
    return `${timeSince/60} minutes ago`;
  } else if  (timeSince < 60*60*24) {
    return `${timeSince/60/60} hours ago`;
  } else if  (timeSince < 60*60*24*30) {
    return `${timeSince/60/60/24} days ago`;
  } else if  (timeSince < 60*60*24*30*12) {
    return `${timeSince/60/60/24/30} months ago`;
  } else {
    return `${timeSince/60/60/24/30/12} years ago`;
  }

}


$(document).ready(function() {

renderTweets(data);

});






// Ajax Example
// $(function() {
//   var $button = $('#load-more-posts');
//   $button.on('click', function () {
//     console.log('Button clicked, performing ajax call...');
//     $.ajax({
//       url: 'more-posts.html',
//       method: 'GET',
//       success: function (morePostsHtml) {
//         console.log('Success: ', morePostsHtml);
//         $button.replaceWith(morePostsHtml);
//       }
//     });
//   });
// });






