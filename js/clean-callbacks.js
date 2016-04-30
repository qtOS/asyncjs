$status = $('#status');

$.ajax({
  type: 'GET',
  url: 'profile.json',
  success: getTweets,
  error: handleError
});

function getTweets(profile){
  $status.append('<li>got profile</li>');
  $('#profile-pre').html(JSON.stringify(profile));
  $.ajax({
    type: 'GET',
    url: 'tweets.json?id=' + profile.id,
    success: getMentionedUser,
    error: handleError
  });
}
function getMentionedUser(tweets){
  $status.append('<li>got tweets</li>');
  $('#tweets-pre').html(JSON.stringify(tweets));

  $.ajax({
    type: 'GET',
    url: 'friend.json?id=' + tweets[0].usersMentioned[0].id,
    success: function(friend){
      $status.append('<li>got mentioned friend</li>');
      $('#friend-pre').html(JSON.stringify(friend));
    },
    error: handleError
  });
}
function handleError(xhr, status, err){
  $status.append('<li>error: '+ err.toString()+'</li>');
}
