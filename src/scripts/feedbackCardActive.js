let card = document.querySelectorAll('.feedback__card');

for (let i=0; i<card.length; i++) {
  card[i].addEventListener('click', function() {
    for(let i=0; i<card.length; i++) {
      card[i].classList.remove('feedback__card_active');
    }
    card[i].classList.add('feedback__card_active');
  })
}