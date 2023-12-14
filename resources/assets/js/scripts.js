;(function($, window, document, undefined) {

    let $win        = $(window);
    let $doc        = $(document);
    let $body       = $(document.body);
    let _isDesktop    = false;
    let _isMobile     = false;
    let _isTablet     = false;
    let _isBP1170     = false;
    let _deviceWidth  = $win.outerWidth();
    let _deviceHeight = $win.outerHeight(true);
    let winWidth      = $win.outerWidth();
    let root = window.location.protocol + "//" + document.location.hostname;


  $doc.ready(function() {
    $body = $(' body ');
    winWidth = $win.outerWidth();

    $body.DataImg();

    $body.Viewport();

    $body.InitClick();
    $body.InitChange();
    $body.InitFocus();

  });


  $win.load(function(){

    //iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini
    /*
    if(navigator.userAgent.match(/iPhone|iPad|iPod/i) ){
      alert('я ифон');
    }
    */
  });



  $win.on('resize', function(){

    $body.Viewport();
    $body.closeModalWindow();

  });


  $win.on('orientationchange', function(){
    //срабатывает раньше чем resize

    $body.closeModalWindow();

     if(!_isDesktop){
        //alert('desktop');
     }else{
        //alert('mobile');
     }

    //location.reload();
  });


  $doc.on('DOMContentLoaded',function () {

  });



  //////////// Functions /////////////

  $.fn.Viewport = function(){
    _deviceHeight = $win.outerHeight(true);
    _deviceWidth = $win.outerWidth();
    _isBP1170 =  (_deviceWidth < 1170);
    _isDesktop = (_deviceWidth > 1023) ? true : false;
    _isTablet  = (_deviceWidth <= 1023 && _deviceWidth >= 768) ? true : false;
    _isMobile  = (_deviceWidth <= 767) ? true : false;
  };


  //// data-img.js Initialize
  //--------------------------------------------------------------------------
  $.fn.DataImg = function(){
    $('.data-img').dataImg({
      sml: 450,
      med: 767,
      lrg: 768,
      resize: true,
      bgImg: true
    });
  };


  //// По ресайзу закрываем модальные окна!
  //-------------------------------------------------------------------------------------
  $.fn.closeModalWindow = function(){

    setTimeout(function() {//задержка, не правильно определяется ширина окна
      let winWidthCurrent = $win.outerWidth();
      let modalBlock = $(".modal-overlay");
      let modalBlockSecond = $(".modal-second-overlay");

      if((modalBlock.css('display') === 'block' || modalBlockSecond.css('display') === 'block') && winWidth !== winWidthCurrent){

        let modalContent = $(modalBlock).find('.popup'),
        modalParent = $('#' + modalContent.attr('id') + '-block');

        modalBlock.fadeOut(500, function () {
          modalParent.append(modalContent);
          modalBlock.remove();
        });
      }

    }, 1);
  };

  $.fn.InitClick = function() {

     /*
     this.on('click touchstart', function (event) {
     var $target = $(event.target);
     alert($target.attr('class'));
     });
     */

     /*
     this.on('click touchstart', '.selector', function(){
     console.log($(this));
     });
     */


    // Прверка полей – ФОРМ
    //-------------------------------------------------------------------------------------
    this.on('click', '.submit-btn', function () {

      $(this).parents('.check').find('input:not(.not-check, .input.not-check, .radio, .checkbox)').each(function () {
        if($(this).val() === '' || $(this).val() === 'Не заполнено' || $(this).val() === 'Ваше имя' || $(this).val() === 'E-mail' || $(this).val() === 'Кириллицей' || $(this).val() === 'Только числа' || $(this).val() === 'Не e-mail') {
          $(this).val('Не заполнено');
          $(this).addClass('stop');
          $(this).parents('.check').find('.submit-btn').addClass('error').val('Ошибка');

          //Проверка - какое поле лагает
          //alert($(this).attr('name'));

        }else {
          let patternName = /^[а-яА-Я\s]+$/,
            patternNum = /^[+0-9\s_()-]+$/,
            patternEmail = /^[^@]+@[^@.]+\.[^@]+$/;//  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i

          if(($(this).attr('name') === 'name' || $(this).attr('name') === 'first-name') && $(this).val().search(patternName) !== 0) {
            $(this).val('Кириллицей');
            $(this).addClass('stop');
            $(this).parents('.check').find('.submit-btn').addClass('error').val('Ошибка');
          }
          if($(this).attr('name') === 'tel' && $(this).val().search(patternNum) !== 0){
            $(this).val('Только числа');
            $(this).addClass('stop');
            $(this).parents('.check').find('.submit-btn').addClass('error').val('Ошибка');
          }
          if($(this).attr('name') === 'email' && $(this).val().search(patternEmail) !== 0){
            $(this).val('Не e-mail');
            $(this).addClass('stop');
            $(this).parents('.check').find('.submit-btn').addClass('error').val('Ошибка');
          }else{
            if($(this).val() === 'Кириллицей'){
              $(this).val('Кириллицей');
              $(this).addClass('stop');
            }
            if($(this).val() === 'Только числа'){
              $(this).val('Только числа');
              $(this).addClass('stop');
            }
          }
        }
      });

      $('.check').submit(function ( event ) {
        let stopInputs = $('.check').find('.stop');
        if(stopInputs.length !== 0){
          event.preventDefault();
        }else{
          return true;
        }
      });

    });

    //  Чекбоксы СОГЛАСИЕ
    //-------------------------------------------------------------------------------------
    this.on('click', '.checkline', function () {
      let checkLine = $(this),
        checkbox = checkLine.prev('input'),
        submitBtn = $(this).parents('.check').find('.submit-btn'),
        allInput = $(this).parents('.check').find('input:not(.submit-btn,[name="title"],[type="hidden"])');

      if(!submitBtn.hasClass('error')){
        submitBtn.attr('data-value', submitBtn.val());
      }

      if(checkbox.is(':checked')){
        if(checkLine.hasClass('subscr')){
          submitBtn.prop('disabled', true);
          allInput.removeClass('stop').css({'color':'#aaa'});
        }else {
          allInput.val('Не заполнено').removeClass('stop');
          allInput.removeClass('stop').css({'color':'#aaa'});
          submitBtn.prop('disabled', true);
          submitBtn.removeClass('error');
          submitBtn.val(submitBtn.attr('data-value'));
        }
      }else {
        submitBtn.prop('disabled', false);
        submitBtn.removeClass('error');
        submitBtn.val(submitBtn.attr('data-value'));
      }
    });


    //  Модалки - Два окна через AJAX для Laravel
    //-------------------------------------------------------------------------------------

    this.on('click', '.modal', function (event) {
      event.preventDefault();

      let x = $(this).attr('class');
      let modalContent = '';
      let modalWidth;
      let winHeight = $(window).height();

      let id = $(this).attr('id');

      let dopClass = '';
      if($(this).hasClass('modal-second')){
        dopClass = 'modal-second';
      }

      switch (x) {
        case 'modal':
          modalWidth = 400;
          break;
        case 'agreement modal modal-second':
          modalWidth = 800;
          break;
      }

      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      });
      $.ajax({
        type:'POST',
        url:"/ajax",
        async: false,
        data:{id:id},
        success: getData
      });

      function getData(data) {
        modalContent = data.view;
      }

      // Вычисление ширины скролбара для Модалок
      function scrollbarWidth() {
        let documentWidth = parseInt(document.documentElement.clientWidth);
        let windowsWidth = parseInt(window.innerWidth);
        let scrollbarWidth = windowsWidth - documentWidth;
        return scrollbarWidth;
      }

      //Вычисление позиции крестика .сlose
      function closeButtonPosition(scrollBarWidth, modalWrapper) {
        let modalWrapHeight = modalWrapper.outerHeight(true);
        let modalWrapWidth = modalWrapper.outerWidth(true);
        let _scrollBarWidth = scrollBarWidth;
        let _closeButton = modalWrapper.find('.close');

        if (modalWidth > modalWrapWidth && (modalWrapHeight) < winHeight) {
          _closeButton.css({
            "position": "absolute",
            "top": "0",
            "right": "50%",
            "marginRight": (-modalWrapWidth / 2) + "px"
          }).fadeIn(300);
        }
        else if (modalWidth > modalWrapWidth && (modalWrapHeight - 100) > winHeight) {
          _closeButton.css({
            "position": "fixed",
            "top": "10px",
            "right": "50%",
            "marginRight": (-modalWrapWidth / 2) + (_scrollBarWidth) + "px"
          }).fadeIn(300);
        }
        else if (modalWidth < modalWrapWidth && (modalWrapHeight - 100) > winHeight) {
          _closeButton.css({
            "position": "fixed",
            "top": "10px",
            "right": "50%",
            "marginRight": (-modalWidth / 2) + (_scrollBarWidth) + "px"
          }).fadeIn(300);
        }
        else {
          if (modalWidth > modalWrapWidth) {
            _closeButton.css({
              "position": "absolute",
              "top": "0",
              "right": "50%",
              "marginRight": (-modalWrapWidth / 2) + "px"
            }).fadeIn(300);
          }
          else {
            _closeButton.css({
              "position": "absolute",
              "top": "0",
              "right": "50%",
              "marginRight": (-modalWidth / 2) + "px"
            }).fadeIn(300);
          }
        }
      }

      //Тело модалки
      $body.append(
        "<div class='modal-overlay " + dopClass + "'>" +
        "<div class='modal-table " + dopClass + "'>" +
        "<div class='modal-cell " + dopClass + "'>" +
        "<div class='modal-wrapper " + dopClass + "'>" +
        "<a class='close'></a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>");


      if(!$(this).hasClass('modal-second')){
        //////Первое модальное окно
        ///////////////////////////////////////////////
        let modalWrapper = $(".modal-wrapper");
        let modalOverlay = $(".modal-overlay");
        //Добавляем содержимое в модалку
        modalWrapper.css('maxWidth', modalWidth + "px").append(modalContent);

        modalOverlay.fadeIn(500, function () {

          let scrollBarWidth = scrollbarWidth();

          // ФИКС скрола страницы за модальным окном
          $body.css({'height': '100vh', 'overflowY': 'hidden', 'paddingRight': scrollBarWidth});
          // + padding на величину спрятанного скрола
          modalOverlay.css({'paddingRight': scrollBarWidth});

          //Задаем позицию для крестика Close
          closeButtonPosition(scrollBarWidth, modalWrapper);

        });// Медленно выводим

        //Снимаем чекбокс (глюк после отправки)
        if ($(modalContent).find('[name="submit"]').prop('disabled') === true) {
          $(modalContent).find('.check-wrapper > .checkbox').prop('checked', false);
        }

        //Закрываем окно
        $(".close").click(function () {
          // ОТМЕНА ФИКС скрола страницы за модальным окном
          $body.css({'height': '100%', 'overflowY': 'auto', 'paddingRight': 0});
          modalOverlay.css({'paddingRight': 0});

          modalOverlay.fadeOut(500);
          setTimeout(function () {
            modalOverlay.remove();
          }, 500);
        });
      }else{
        //////Второе модальное окно (для соглашения)
        ////////////////////////////////////////////////////////
        let modalWrapperSecond = $(".modal-wrapper.modal-second");
        let modalOverlay = $(".modal-overlay");
        let modalOverlaySecond = $(".modal-overlay.modal-second");
        //Добавляем содержимое в модалку
        modalWrapperSecond.css('maxWidth', modalWidth + "px").append(modalContent);

        modalOverlaySecond.fadeIn(500, function () {

          let scrollBarWidthSecond = parseInt(modalOverlay.css('paddingRight')) / 2;

          //Задаем позицию для крестика Close
          closeButtonPosition(scrollBarWidthSecond, modalWrapperSecond);

        });// Медленно выводим

        //Закрываем окно
        $(".close").click(function () {

          modalOverlaySecond.fadeOut(500);
          setTimeout(function () {
            modalOverlaySecond.remove();
          }, 500);
        });
      }
    });

  };//$.fn.InitClick

  $.fn.InitChange = function() {

    // Ярлычек для поля multiple-select (если выбрано хоть одно)
    //-------------------------------------------------------------------------------------
    /*
    this.on('change', '.multiple-select', function () {
      if($('.multiple-select').val() !== null){
        $('.multiple-select').parent().addClass('show-label');
      }else{
        $('.multiple-select').parent().removeClass('show-label');
      }
    });
    */


  };//$.fn.InitChange

  $.fn.InitFocus = function () {

    //// Маски для input
    this.on('focus', 'input', function () {
       if($(this).hasClass('phone-mask')){
         $(this).mask("+7(999) 999-9999").val('Не заполнено');
       }else if($(this).hasClass('date-mask')){
         $(this).mask("99.99.9999", {placeholder: "дд.мм.гггг" }).val('Не заполнено');
       }else if($(this).hasClass('time-mask')){
         $(this).mask("99.99", {placeholder: "чч.мм" }).val('Не заполнено');
       }else if($(this).hasClass('date-time-mask')){
         $(this).mask("99.99.9999 – 99.99", {placeholder: "дд.мм.гггг – чч.мм" }).val('Не заполнено');
       }
    });

    //// Снимаем ошибку валидации с кнопки .submit-btn при фокусе на input
    this.on('focus', '.check input', function () {
      let thisSubmit = $(this).parents('.check').find('.submit-btn');

      if(!$(this).hasClass('submit-btn')){
        $(this).css('color','#333').val('');
        $(this).removeClass('stop');
      }

      if(!thisSubmit.hasClass('error')){
        thisSubmit.attr('data-value', thisSubmit.val());
      }

      if(thisSubmit.hasClass('error')){
        thisSubmit.removeClass('error');
        thisSubmit.val(thisSubmit.attr('data-value'));
      }
    });

  };//$.fn.InitFocus

})(jQuery, window, document);
