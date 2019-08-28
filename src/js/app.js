import sayHello from './lib/sayHello.js';
import selectize from './lib/selectize';

sayHello();
import objectFitImages from 'object-fit-images';

objectFitImages();
//tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});
//select
$('select').selectize();

$('.close, .bg').on('click', function() {
  $('.authorization').fadeOut();
  $('.bg').fadeOut();
});
//new open pop-up
$('[data-pop]').on('click', function() {
  $('.authorization').fadeOut();
  let link = $(this).attr('href');
  $(link).fadeIn();
  $('.bg').fadeIn();
});

// $('.qwe').on('click', function() {
// .addClass('')
// });
