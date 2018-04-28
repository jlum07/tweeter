function getTimeSince(created_at) {

  const timeSince = ((Date.now() - created_at)/1000);

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

}