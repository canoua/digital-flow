let form = document.querySelector('#form');
let inputs = document.querySelectorAll('.input');
let formItems = document.querySelectorAll('.feedback__form__group');
let submitBtn = document.querySelector('.feedback__btn');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  for(let i=0; i<inputs.length; i++) {
    if(inputs[i].value == ''){
      let error = document.createElement('div');
      error.textContent = 'Ошибка';
      error.style.cssText = 'color: red; position: absolute;';

      for(let j=0; j<formItems.length; j++) {
        formItems[j].prepend(error);
        formItems[j].style.cssText = 'position: relative;';
      }

      submitBtn.setAttribute('disabled', 'disabled');
    }
  }
})