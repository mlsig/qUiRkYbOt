const { RedditSimple } = require("reddit-simple");

module.exports = {
    name: 'meme',
    description: "this will get a random post from r/meme",
    execute(message, args){
      RedditSimple.RandomPost('memes').then(res => {
        message.channel.send(res[0]["data"]["url"]);
      }).catch(e => {
          console.log(e);
      });
    }
}
