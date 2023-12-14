$(document).ready(function () {
  $('.nav-sidebar a').each(function(){

    let location = window.location.protocol + '//' + window.location.host + window.location.pathname;
    let link = this.href;
    if(link == location){
      $(this).addClass('active');
      $(this).closest('.has-treeview').addClass('menu-open');
    }
  });

  //Initialize Select2 Elements
  $('.select2').select2();

  //Initialize bs-custom-file-input
  bsCustomFileInput.init();



  //SUMMERNOTE
  //////////////////////////////////////////////////////

  //Summernote custom Button
  var UlButton = function (context) {
    var ui = $.summernote.ui;

    // create button
    var button = ui.button({
      contents: '<i class="far fa-list-alt"/> Шаблон UL',
      tooltip: 'Шаблон UL для сатьи',
      click: function () {
        context.invoke('pasteHTML', '<ul class="list list__ul-bullet">' +
          '<li>Пункт</li>' +
          '<li>Пункт</li>' +
          '<li>Пункт и т.д.</li>' +
          '</ul>');
        /*var node = document.createElement('div');
        node.classList.add("foo");
        context.invoke('insertNode', node);*/
      }
    });
    return button.render();   // return button as jquery object
  };

  var ImgButton = function (context) {
    var ui = $.summernote.ui;
    // create button
    var button = ui.button({
      contents: '<i class="far fa-image"/> Image',
      tooltip: 'image',
      click: function () {
        //ckfinder POPUP
        CKFinder.popup( {
          chooseFiles: true,
          width: 800,
          height: 600,
          onInit: function( finder ) {
            finder.on( 'files:choose', function( evt ) {
              var file = evt.data.files.first();
              var url = file.getUrl();
              finder.on( 'file:choose:resizedImage', function( evt ) {
                url = evt.data.resizedUrl;
               } );
              // invoke insertText method with 'hello' on editor module.
              context.invoke('insertImage', url, function ($image) {
                //$image.css('width', $image.width() / 3);
                $image.attr({'data-filename':'retriever','class':'data-img'});
              });
            } );
          }
        } );
      }
    });

    return button.render();   // return button as jquery object
  };
  //Initialize Summernote #content #description
  var summernote = $('#content').summernote({
    lang: 'ru-RU',
    prettifyHtml: true,
    styleTags: [
      'p',
      { title: 'Заголовок H2', tag: 'h2', className: 'title-h2', value: 'h2' },
      { title: 'Blockquote', tag: 'blockquote', className: 'block', value: 'blockquote' },
    ],
    toolbar: [
      // [groupName, [list of button]]
      ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
      ['font', ['strikethrough', 'superscript', 'subscript']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['insert', ['link', 'video', 'table']],
      ['misc', ['fullscreen', 'undo', 'redo', 'codeview']],
      ['myBtn', ['image', 'templateUl']]
    ],
    buttons: {
      templateUl: UlButton,
      image: ImgButton
    },
    popover: {
      link: [
        ['link', ['linkDialogShow', 'unlink']]
      ],
    }
  });


});
