const express = require('express');
const router = express.Router();

const loginStatus = true;

//Default Route
router.get('/', (req, res) => {
  try {
    if (loginStatus === true) {
      res.render('home');
      
    }
    else{
      res.redirect('credentials');
    }
    
  } catch (error) {
    res.status(404).redirect('error');
  }
});

module.exports = router;