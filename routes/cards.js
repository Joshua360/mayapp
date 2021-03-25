const express = require('express');
const router = express.Router();
const { data } = require('../data/cardData.json');
const {cards} = data;
    
  
router.get('/',  (req, res)=> {
    const randomNumber = Math.floor(Math.random()* cards.length);
    res.redirect(`/cards/${randomNumber}?side=question`);
  });

router.get('/:id',  (req, res)=> {
  const name = req.cookies.username;
  const {id} = req.params;
  const {side} = req.query;

  if(!side){
    return res.redirect(`/cards/${id}?side=question`);
  }

  const text = cards[id][side]; //1?side=question

  const {hint} = cards[id];

  const templateData = { text,id, name}

  if(side === 'question'){
    templateData.hint = hint;
    templateData.sideToShow = 'answer';
    templateData.sideToDisplay='Answer';
    templateData.side = 'Question';
  }else if(side==='answer'){
    templateData.sideToShow='question';
    templateData.sideToDisplay='Question';
    templateData.side='Answer';

  }

  res.render('cards', templateData);

});



  module.exports = router;
   