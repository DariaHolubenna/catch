const express = require('express');

const router = express.Router();

require('../controls/dbFunction');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
// ***********************************


router.get('/article', async (req, res) => {
  try {   
    console.log('123'); 
    const models = await modelFind();
    res.status(200).json(models)
  } catch (err) {
    res.status(400).json(err)
  }
})


// router.get('/arcticles/:id', async (req, res) => {
//   try {
//     res.status(200).json(models)
//   } catch (err) {
//     res.status(400).json(err.errmsg)
//   }
// })  


// router.get('/getModels', async (req, res) => {
//  try {
//     res.status(200).json(models)
//   } catch (err) {
//     res.status(400).json(err.errmsg)
 
//   }
 
// })



module.exports = router;
