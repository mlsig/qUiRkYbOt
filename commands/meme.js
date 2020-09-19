module.exports = {
    name: 'meme',
    description: "this will get a random post from r/meme",
    execute(message, args){
        message.channel.send(RedditSimple.RandomPost('memes'));
    }
}