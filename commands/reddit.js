const { RedditSimple } = require("reddit-simple");

module.exports = {
    name: 'reddit',
    description: "this will get a random post from the specified subreddit",
    execute(message, args){
      RedditSimple.RandomPost(args[0]).then(res => {
        message.channel.send(res[0]["data"]["url"]);
      }).catch(e => {
          console.log(e);
      });
    }
}
