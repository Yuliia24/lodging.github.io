import sayHello from './lib/sayHello.js';

sayHello();
import objectFitImages from 'object-fit-images';

objectFitImages();

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});
