$(function() {
  // id属性がfadeOutの要素がクリックされたら
  $('#fadeOut').on('click', function() {
    // フェードアウトする
    $('.box1').fadeOut();
  });

  // id属性がfadeInの要素がクリックされたら
  $('#fadeIn').on('click', function() {
    // フェードインする
    $('.box1').fadeIn();
  })

  // id属性がfadeToggleの要素がクリックされたら
  $('#fadeToggle').on('click', function() {
    // フェードイン or フェードアウトする
    $('.box2').fadeToggle();
  })

  // id属性がslideUpの要素がクリックされたら
  $('#slideUp').on('click', function() {
    // スライドアップする
    $('.box3').slideUp();
  });
  // id属性がslideUpの要素がクリックされたら
  $('#slideDown').on('click', function() {
    // スライドダウンする
    $('.box3').slideDown();
  });
  // id属性がslideUpの要素がクリックされたら
  $('#slideToggle').on('click', function() {
    // スライドアップ or スライドダウンする
    $('.box4').slideToggle();
  });

  $('#fadeOut2').on('click', function() {
    // 不透明度を0にする(フェードアウトする)
    $('.box5').css('opacity', 0);
  });
  $('#fadeIn2').on('click', function() {
    // 不透明度を1にする(フェードインする)
    $('.box5').css('opacity', 1);
  });
  $('#slideUp2').on('click', function() {
    // 高さを0にする(スライドアップする)
    $('.box5').css('height', 0);
  });
  $('#slideDown2').on('click', function() {
    // 高さを200にする(スライドダウンする)
    $('.box5').css('height', 200);
  });
});