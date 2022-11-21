$(function() {
  // ボタンを押したらテキスト出力
  $('button').on('click', function() {
    console.log('ボタンがクリックされました');
  });

  // カーソル操作で色とテキストが変化
  $('.color').on({
    'click': () => {
      // 背景を赤
      $('.color').css('background-color', 'red');
      // テキストを「click」
      $('.color').text('click');
    },
    'dblclick': () => {
      // 背景を緑
      $('.color').css('background-color', 'green');
      // テキストを「dblclick」
      $('.color').text('dblclick');
    },
    'mouseenter': () => {
      // 背景を青
      $('.color').css('background-color', 'blue');
      // テキストを「mouseenter」
      $('.color').text('mouseenter');
    },
    'mouseout': () => {
      // 背景をグレー
      $('.color').css('background-color', 'gray');
      // テキストを「mouseout」
      $('.color').text('mouseout');
    },
  });

  $(document).on('click keydown', (e) => {
    // クリックされた場合
    if(e.type === 'click') {
      $('.clickOrPush').text('クリックされました!');
    }
    // キーが押された場合
    if(e.type === 'keydown') {
      $('.clickOrPush').text('キーが押されました!');
    }
  });
});
