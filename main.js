$(function () {
  const box1 = $('.box1');
  const service = $('#service-area');

  box1.parallax({
    imageSrc: 'image/img/1-2.jpg',
    speed: 0.2,
  });

  service.parallax({
    imageSrc: 'image/img/1-3.jpg',
    speed: 0.2,
  });
});
