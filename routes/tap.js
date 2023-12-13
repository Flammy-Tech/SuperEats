// routes/meals.js

const express = require('express');
const router = express.Router();

// Default Route
router.get('/', async (req, res) => {
  try {
    const response = await fetch('http://localhost:5000/meals'); // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const meals = await response.json();
    res.render('tap', { meals });
  } catch (error) {
    // console.error('Error fetching meals:', error);
    res.status(500).redirect('error');
  }
});

module.exports = router;
