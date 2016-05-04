//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
// quotes object to hold some quotes for the page to show...
function Quote() {
  var quotes=[
    "Don't cry because it's over, smile because it happened. ― Dr. Seuss",
    "Be yourself; everyone else is already taken. ― Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ― Albert Einstein",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ― Bernard M. Baruch",
    "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth. ― William W. Purkey",
    "A room without books is like a body without a soul. ― Marcus Tullius Cicero",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams. ― Dr. Seuss",
    "You only live once, but if you do it right, once is enough. ― Mae West",
    "Be the change that you wish to see in the world. ― Mahatma Gandhi",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. ― J.K. Rowling, Harry Potter and the Goblet of Fire",
    "No one can make you feel inferior without your consent. ― Eleanor Roosevelt",
    "If you tell the truth, you don't have to remember anything. ― Mark Twain",
    "A friend is someone who knows all about you and still loves you. ― Elbert Hubbard",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ― Maya Angelou",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. ― Mahatma Gandhi",
    "Without music, life would be a mistake. ― Friedrich Nietzsche",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. ― Ralph Waldo Emerson",
    "It is better to be hated for what you are than to be loved for what you are not. ― André Gide",
    "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.  ― Marilyn Monroe",
    "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. ― Maurice Switzer",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. ― Marilyn Monroe"
  ];
  var max= quotes.length;
  this.getRandomQuote=function() {
    var quote=Math.floor(Math.random() * max);
    return quotes[quote];
  }
}

var yourQuote = new Quote();

function displayQuote() {
  var myQuote = yourQuote.getRandomQuote();
  $("#showQuote").text(myQuote);
  $("#shareQuote").html("<a href=\"https://twitter.com/intent/tweet?text=" + myQuote +"\"><button class=\"btn btn-info\">Tweet</button></a>");
}

displayQuote();
$("#getNewQuote").click(function() {
  displayQuote();
});
