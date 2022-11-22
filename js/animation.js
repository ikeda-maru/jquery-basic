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
});