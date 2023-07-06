function swiperFeedbackInit() {
  const swiper = new Swiper('.swiper', {
    loop: false,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

  });
}

function detectDevice() {
  if(/Android|iPhone|iPad|iPod|IEMobile/i.test(navigator.userAgent)){
    swiperFeedbackInit();
  } else{}
}

detectDevice();