function modal() {
      // Модальное окно
      let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descriptionBtn = document.querySelectorAll('.description-btn');

  descriptionBtn.forEach(element => {
      element.addEventListener('click', () => {
          overlay.style.display = 'block';
          element.classList.add('more-spash');
          document.body.style.overflow = 'hidden';
      });

      close.addEventListener('click', () => {
          element.classList.remove('more-spash');
      });
  });


  more.addEventListener('click', () => {
      overlay.style.display = 'block';
      more.classList.add('more-spash');
      document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
      overlay.style.display = 'none';
      more.classList.remove('more-spash');
      document.body.style.overflow = '';
  });
}

module.exports = modal;