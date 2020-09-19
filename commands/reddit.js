module.exports = {
    name: 'reddit',
    description: "this will get a random post from the specified subreddit",
    execute(message, args){
        message.channel.send(RedditSimple.RandomPost(args[1]));
    }
}