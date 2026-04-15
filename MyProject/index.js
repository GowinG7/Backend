const joke = require("give-me-a-joke");
//Get a random joke
joke.getRandomDadJoke(function(jokeText){
    console.log(jokeText);
});