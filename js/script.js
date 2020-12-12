//ページ読み込み前の実行プログラム
$(function(){


  //ローディングページが非表示になったら動画を再生

　//「新年のご挨拶」をクリック後の演出
  $('.greeting').click(function(){
    $('.btn-wrapper').fadeOut(500);
    $('.greeting-wrapper').fadeIn(2000);
  });

  //「Topページへ戻る」をクリック後の演出
  $('.totop-btn').click(function(){
    $('.btn-wrapper').fadeIn(2000);
    $('.greeting-wrapper').fadeOut(500);
    $('#bg-wrapper').fadeOut(500);
    $('.omikuji-result').fadeOut(500);
  });

  ////「おみくじを引く」をクリック後のアニメーションへの導入
  $('.omikuji-btn').click(function(){
    $('.omikuji-video').attr('src','video/omikuji.gif');
    $('.btn-wrapper').fadeOut(500);
    $('#bg-wrapper').fadeIn(1000);
    $('.omikuji-wrapper').fadeIn(1000);
  });

  //「おみくじを引く」をクリック後のアニメーション後演出
  $('.omikuji-btn').click(function(){
    setTimeout(function(){
      $('.omikuji-wrapper').fadeOut(1000);
      $('.omikuji-result').fadeIn(1000);
    },5200);

    //おみくじ結果の処理
    var results = ['image/daikichi1.png',
                   'image/daikichi2.png',
                   'image/chukichi1.png',
                   'image/chukichi2.png',
                   'image/chukichi3.png',
                   'image/syokichi1.png',
                   'image/syokichi2.png',
                   'image/syokichi3.png',
                   'image/kichi1.png',
                   'image/kichi2.png'];


    var random = results[Math.floor(Math.random() * results.length)];

    $('.result').attr('src',random);

  });
});





//ページ読み込み後の実行プログラム
window.onload = function() {
  //ローディング画面をフェードアウト
  const loader = document.getElementById('loading-wrapper');
  loader.classList.add('completed');

  //冒頭アニメーションを再生
  var media = document.getElementById("op-video");
  var media2 = document.getElementById("op-video2")

  media.currentTime = 0.5;
  media.play();

  media2.currentTime = 0.5;
  media2.play();


  //冒頭アニメーションからのボタンページフェードイン
  setTimeout(function(){
    $('.btn-wrapper').fadeIn(1000);
  }, 27000);
};
