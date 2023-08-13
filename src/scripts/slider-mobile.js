function swiperFeedbackInit() {
  const swiper = new Swiper('.swiper', {
    loop: false,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

  });
}

if (document.documentElement.clientWidth < 1254) {
  swiperFeedbackInit();
}