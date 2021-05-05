const quotes = [
  {
    name: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    name: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    name: "Anne Frank",
    quote: "Whoever is happy will make others happy too.",
  },
  {
    name: "Helen Keller",
    quote: "Life is either a daring adventure or nothing at all.",
  },
  {
    name: "Albert Einstein",
    quote: "Only a life lived for others is a life worthwhile.",
  },
  {
    name: "John Lennon",
    quote: "The purpose of our lives is to be happy.",
  },
  {
    name: "Ralph Waldo Emerson",
    quote: "Live in the sunshine, swim the sea, drink the wild air.",
  },
  {
    name: "Jonathan Swift",
    quote: "May you live all the days of your life.",
  },
  {
    name: "Hans Christian Andersen",
    quote: "Life itself is the most wonderful fairy tale.",
  },
  {
    name: "Borna Pavlić",
    quote: "What ever it is, don't take it seriously",
  },
];

const quoteBtn = document.getElementById("quoteBtn");
const quote = document.getElementById("quote");
const quoteAuthor = document.querySelector("#quoteAuthor");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[number].quote;
  quoteAuthor.innerHTML = quotes[number].name;
}
