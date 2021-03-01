const express = require('express');
const router = express.Router();
const Pokemon = require('../pokemonDb')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/boring', (req, res, next) => {
  res.send('This is a boring line of text');
});



//dynamic template ractice
router.get('/test', (req, res, next) => {
  let x = 5;
let myFavouriteFruit = "kiwi";
  res.render('test', { 
    title: 'Express',
    x: x, 
    favFruit: myFavouriteFruit, 
    name: "alex"
  });
});

router.get('/exciting', (req, res, next) => { 
  res.render('exciting', { 
    title: 'Express' 
  });
});


let viewCount = 0;

router.get('/really_exciting', (req, res, next) => { 
  res.render('really_exciting', { 
    title: 'Express',
    viewCount : viewCount++
  });
});


//pokemon 
router.get('/pokemon', (req, res, next) => { 
  
  res.render('pokemon', { 
    title: 'Express',
    pokemon: Pokemon
  });
});

module.exports = router;
