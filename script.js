//フェードイン

$(function(){
  　$(window).scroll(function (){
      $('.effect-fade').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
              $(this).addClass('effect-scroll');
          }
      });
  　});
  });

  //パララックス

  $(function(){
    $(window).scroll(function(){
    var yLine = $(this).scrollTop();
      $('.background').css('background-position', 'left top ' +parseInt( -yLine / 20 ) +'px');
    });
  });


  //スクロール

  //about

  $(function(){
    $('a[href^="#about-jump"]').click(function(){
      //スクロールのスピード
      var speed = 1500;
      //リンク元を取得
      var href= $(this).attr("href");
      //リンク先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      //リンク先までの距離を取得
      var position = target.offset().top;
      //スムーススクロール
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

 

  //works

  $(function(){
    $('a[href^="#works-jump"]').click(function(){
      //スクロールのスピード
      var speed = 1500;
      //リンク元を取得
      var href= $(this).attr("href");
      //リンク先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      //リンク先までの距離を取得
      var position = target.offset().top;
      //スムーススクロール
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

 
  document.querySelectorAll('*').forEach(el => el.clientWidth > document.body.clientWidth ? console.log(el) : null);
