const express = require('express');
const router = express.Router();

//Default Route
router.get('/', (req, res) => {
  try {
    res.render('credentials',{title: 'Credentials'});
    
  } catch (error) {

    res.status(404).redirect('error');
  }
});

router.post('/', (req, res) => {
    try {
        // res.render('home',{title: 'Credentials'});
        res.status(200).redirect('/');
        
      } catch (error) {
    
        res.status(404).redirect('error');
      }
});

module.exports = router;