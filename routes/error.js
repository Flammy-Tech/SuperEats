const express = require('express');
const router = express.Router();

const lifeQuotes = [
  "Life is what happens when you're busy making other plans.",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
  "In three words, I can sum up everything I've learned about life: it goes on.",
  "Life is really simple, but we insist on making it complicated.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Life is short, and it's up to you to make it sweet.",
  "The biggest adventure you can take is to live the life of your dreams.",
  "Life is either a daring adventure or nothing at all.",
  "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
  "Life is too important to be taken seriously."
];

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * lifeQuotes.length);
  return lifeQuotes[randomIndex];
}

//Default Route
router.get('/', (req, res) => {
  res.render('error', {
    title: '404 - Not Found',
    quote: getRandomQuote()
  });
});

module.exports = router;