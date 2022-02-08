$(document).ready(function () {

  $('.header_up-menu').on('click', function () {
    $('.header_up-menu__line2').width(40);
    $('.header_up-menu__line3').width(40);
    $('.menu').slideDown(1000);

  });

  $('.menu__close').on('click', function () {
    $('.menu').slideUp(300);
    $('.header_up-menu__line2').width(32);
    $('.header_up-menu__line3').width(26);
    $('.modal_thanks').fadeOut();
    $('.popup_overlay').fadeOut();

  });


  $('.menu-link').on('click', function () {
    $('.menu').slideDown(1000);
  });

  $('.menu-list li').hover(function () {
    // over
    $(this).css('opacity', '1').find('.menu-list__ellips').css('opacity', '1');
  }, function () {
    // out
    $(this).css('opacity', '0.8').find('.menu-list__ellips').css('opacity', '0');
  });



  function nambersAnimate() {
    var empty_number_step = $.animateNumber.numberStepFactories.append('')
    $('.numbers-item.left').animateNumber({
      number: 12,
      numberStep: empty_number_step
    }, {
      easing: 'swing',
      duration: 2000
    });

    var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
    $('.numbers-item.center').animateNumber({
      number: 72,
      numberStep: percent_number_step
    }, {
      easing: 'swing',
      duration: 2000
    });
  };


  var windowHeight = $(window).height();
  $(document).on('scroll', function () {
    $('.numbers').each(function () {
      var self = $(this),
        height;
      if (self.height() >= windowHeight) {
        height = self.offset().top + windowHeight - 100;
      } else {
        height = self.offset().top + self.height();
      }
      if ($(document).scrollTop() + windowHeight >= height) {
        nambersAnimate();
      }
    });
  });
  var doc = $('.docs-photos-two');

  $(document).on('scroll', function () {
    $('.docs').each(function () {
      var self = $(this),
        height;
      if (self.height() >= windowHeight) {
        height = self.offset().top + windowHeight - 100;
      } else {
        height = self.offset().top + self.height();
      }
      if ($(document).scrollTop() + windowHeight >= height) {
        doc.addClass('transform-doc')
      }
    });
  });



  $('text').hover(function () {
    // over
    $(this).css({
      'opacity': '1',
      'cursor': 'pointer'
    }).prev('g').css('fill', '#E9CDA0');
    $(this).next('path').css('fill', '#E9CDA0');
  }, function () {
    // out
    $(this).css({
      'opacity': '0.7'
    }).prev('g').css('fill', '#2e343a');
    $(this).next('path').css('fill', '#464e55');
  });


  function hoverRound(e, t, p, tn) {
    $(e).hover(function () {
      // over
      $(this).css('fill', '#E9CDA0');
      $(t).css('opacity', '1');
      $(p).css('fill', '#E9CDA0');
      $(tn).css('opacity', '1');
    }, function () {
      //out
      $(this).css('fill', '#2e343a');
      $(t).css('opacity', '0.7');
      $(p).css('fill', '#464e55');
      $(tn).css('opacity', '0.7');
    });
  };

  function hoverPath(e, t, p, tn) {
    $(e).hover(function () {
      // over
      $(this).css('fill', '#E9CDA0');
      $(t).css('opacity', '1');
      $(p).css('fill', '#E9CDA0');
      $(tn).css('opacity', '1');
    }, function () {
      //out
      $(this).css('fill', '#2e343a');
      $(t).css('opacity', '0.7');
      $(p).css('fill', '#464e55');
      $(tn).css('opacity', '0.7');
    });
  };

  function hoverTxtn(e, t, p, tn) {
    $(e).hover(function () {
      // over
      $(this).css('opacity', '1');
      $(t).css('opacity', '1');
      $(p).css('fill', '#E9CDA0');
      $(tn).css('fill', '#E9CDA0');
    }, function () {
      //out
      $(this).css('opacity', '0.7');
      $(t).css('opacity', '0.7');
      $(p).css('fill', '#464e55');
      $(tn).css('fill', '#2e343a');
    });
  };
  hoverTxtn('.ellipse-txtn1', '.ellipse-txt1', '.ellipse-pth1', '.ellipse1')
  hoverTxtn('.ellipse-txtn2', '.ellipse-txt2', '.ellipse-pth2', '.ellipse2')
  hoverTxtn('.ellipse-txtn3', '.ellipse-txt3', '.ellipse-pth3', '.ellipse3')
  hoverTxtn('.ellipse-txtn5', '.ellipse-txt5', '.ellipse-pth5', '.ellipse5')
  hoverTxtn('.ellipse-txtn6', '.ellipse-txt6', '.ellipse-pth6', '.ellipse6')
  hoverTxtn('.ellipse-txtn7', '.ellipse-txt7', '.ellipse-pth7', '.ellipse7')
  hoverTxtn('.ellipse-txtn8', '.ellipse-txt8', '.ellipse-pth8', '.ellipse8')
  hoverTxtn('.ellipse-txtn9', '.ellipse-txt9', '.ellipse-pth9', '.ellipse9')
  hoverTxtn('.ellipse-txtn10', '.ellipse-txt10', '.ellipse-pth10', '.ellipse10')


  hoverPath('.ellipse-pth1', '.ellipse-txt1', '.ellipse1', '.ellipse-txtn1')
  hoverPath('.ellipse-pth2', '.ellipse-txt2', '.ellipse2', '.ellipse-txtn2')
  hoverPath('.ellipse-pth3', '.ellipse-txt3', '.ellipse3', '.ellipse-txtn3')
  hoverPath('.ellipse-pth4', '.ellipse-txt4', '.ellipse4', '.ellipse-txtn4')
  hoverPath('.ellipse-pth5', '.ellipse-txt5', '.ellipse5', '.ellipse-txtn5')
  hoverPath('.ellipse-pth6', '.ellipse-txt6', '.ellipse6', '.ellipse-txtn6')
  hoverPath('.ellipse-pth7', '.ellipse-txt7', '.ellipse7', '.ellipse-txtn7')
  hoverPath('.ellipse-pth8', '.ellipse-txt8', '.ellipse8', '.ellipse-txtn8')
  hoverPath('.ellipse-pth9', '.ellipse-txt9', '.ellipse9', '.ellipse-txtn9')
  hoverPath('.ellipse-pth10', '.ellipse-txt10', '.ellipse10', '.ellipse-txtn10')

  hoverRound('.ellipse1', '.ellipse-txt1', '.ellipse-pth1', '.ellipse-txtn1');
  hoverRound('.ellipse2', '.ellipse-txt2', '.ellipse-pth2', '.ellipse-txtn2');
  hoverRound('.ellipse3', '.ellipse-txt3', '.ellipse-pth3', '.ellipse-txtn3');
  hoverRound('.ellipse5', '.ellipse-txt5', '.ellipse-pth5', '.ellipse-txtn5');
  hoverRound('.ellipse6', '.ellipse-txt6', '.ellipse-pth6', '.ellipse-txtn6');
  hoverRound('.ellipse7', '.ellipse-txt7', '.ellipse-pth7', '.ellipse-txtn7');
  hoverRound('.ellipse8', '.ellipse-txt8', '.ellipse-pth8', '.ellipse-txtn8');
  hoverRound('.ellipse9', '.ellipse-txt9', '.ellipse-pth9', '.ellipse-txtn9');
  hoverRound('.ellipse10', '.ellipse-txt10', '.ellipse-pth10', '.ellipse-txtn10');




  $('.round-wrap-mob').slick({
    arrows: false,
    easing: 'ease',
    vertical: true,
    verticalSwiping: true
  });


  var btnVideo = $('.video-prev-wrap-btn');

  $(btnVideo).magnificPopup({
    type: 'iframe'
  });

  $('.play_video_block__btn a').magnificPopup({
    type: 'iframe'
  });


  $('.play_video_block-text a').magnificPopup({
    type: 'iframe'
  });

  var advItem = $('.advantage-item');

  $(advItem).hover(function () {
    // over
    $(this).find('.advantage-item__title').css('text-shadow', '0px 3px 20px rgba(222,195,154,0.35)');
    $(this).find('.testobj path').css('stroke', '#e9cda0');

  }, function () {
    // out
    $(this).find('.advantage-item__title').css('text-shadow', 'none');
    $(this).find('.testobj path').css('stroke', 'none');
  });

  var btnProjectOne = $('.projects-slider-item-btns button');
  var popUpProjecOne = $('.popup-about-project');
  var closeProjectOne = $('.popup-about-project__close');

  $(btnProjectOne).on('click', function () {
    $(popUpProjecOne).slideDown();
  });

  $(closeProjectOne).on('click', function () {
    $(popUpProjecOne).slideUp();
  });


  var nav = $('[href ^= "#"]');
  nav.on('click', function (event) {
    event.preventDefault();
    var target = $(this).attr('href');
    var top = $(target).offset().top;
    $('html,body').animate({
      scrollTop: top
    }, 700);
    $('.menu').fadeOut(300);

  });

  // slick for project

  $('.projects-slider').owlCarousel({
    items: 1,
    margin: 130,
    loop: true,
    center: true,
    nav: true,
    navText: ['<div class="projects-slider-item-arr prev"><img src="img/prev-arr.svg" alt=""></div>', '<div class="projects-slider-item-arr next"><img src="img/next_arr.svg" alt=""></div>'],
    stagePadding: 250,
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1,
        margin: 50,
        stagePadding: 0
      },
      600: {
        items: 1,
        margin: 50,
        stagePadding: 0
      },
      1000: {
        items: 1,
        margin: 50,
        stagePadding: 0
      },
      1200: {
        margin: 50,
        stagePadding: 70
      },
      1600: {
        margin: 130,
        stagePadding: 250
      }
    }
  });

  $('.popup-about-project-sider').owlCarousel({
    items: 1,
    nav: true,
    navText: ['<div class="popup-about-project-arr prev"><img src="img/prev-arr.svg" alt=""></div>', '<div class="popup-about-project-arr next"><img src="img/next_arr.svg" alt=""></div>'],
    loop: true,
    center: true,
    dots: false
  });


  $('.js-range-slider').ionRangeSlider({
    min: 0,
    max: 5000,
    postfix: ' м2',
    skin: 'round'
  });



  $('.input-file').each(function () {
    var $input = $(this),
      $label = $input.next('.js-labelFile'),
      labelVal = $label.html();

    $input.on('change', function (element) {
      var fileName = '';
      if (element.target.value) fileName =
        element.target.value.split('\\')
        .pop();
      fileName ? $label.addClass('has-file')
        .find('.js-fileName').html(
          fileName) : $label.removeClass(
          'has-file').html(labelVal);
    });
  });


  var questionArr = $('.quiz-item-question');
  var nextQ = $('.next_q');
  var startQ = 0
  var beginBtn = $('.start_begin')

function nextQues() {
  $(questionArr[startQ]).removeClass('d-block').addClass('d-none');
  $(questionArr[++startQ]).removeClass('d-none').addClass('d-block');
}

function startBegin() {
  $(questionArr).removeClass('d-block').addClass('d-none');
  $(questionArr[0]).addClass('d-block');
  startQ = 0
  $('input').attr('value','')
  
}

$(beginBtn).click(function() {
  startBegin();
});

$(nextQ).click(function(){
  nextQues();
  
});

//E-mail Ajax Send
$('form').submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: '../mail.php', //Change
    data: th.serialize()
  }).done(function() {
    console.log($('.modal_thanks'));
    $('.modal_thanks').show();
    // alert('Спасибо');
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});


$('.stages-mob_v').owlCarousel({
  items: 1,
  nav: true,
  dots: false,
  navText: ['<img src="img/arr_prev_stages.svg" class="stages-mob_v__arr_prev" alt="Назад">','<img src="img/arr_next_stages.svg" class="stages-mob_v__arr_next" alt="Вперед">',],
  loop: true,
  startPosition: 3
});


// Вызов попап
$('.popup_call').click(function (e) { 
$('.popup_overlay').fadeIn();
});

$('.header_up-contacts__callback').click(function (event) {
  event.preventDefault();
  console.log('dfdfdfd');
  
  $('.popup_overlay').fadeIn();
});

$('.popup_overlay-form__close').click(function (e) {
  $('.popup_overlay').fadeOut();
  
});




});