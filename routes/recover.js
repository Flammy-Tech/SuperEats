const express = require('express');
const router = express.Router();

//Default Route
router.get('/', (req, res) => {
  try {
    res.render('recover',{title: 'Recover Password'});
    
  } catch (error) {

    res.status(404).redirect('error');
  }
});

module.exports = router;