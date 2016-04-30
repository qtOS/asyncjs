var myGen = function*(){
  var one = yield 1,
      two = yield 2,
      three = yield 3;
}
var myGen = function*(){
  var one = yield $.get('api/friends'),//'aaron'
      two = yield $.get('api/profile'),//'my profile'
      three = yield $.get('api/tweets');//'my tweet'
}

var gen = myGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());// value:undefined | done: true

Promise.coroutine(function*(){
  var data = yield{
    tweets: $.get('tweets.json'),
    profile: $.get('profile.json')
  };
  console.log(data.tweets, data.profile);
})();

Promise.coroutine(function*(){
  var [tweets, profile] = yield [
    $.get('tweets.json');
    $.get('profile.json')
  ];
  console.log(tweets, profile);
})();
