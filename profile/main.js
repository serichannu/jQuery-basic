   // カルーセル
    $("#carousel").slick({
        autoplay: true,
        dots: true,
        fade: true,
        infinite: true,
        autoplaySpeed: 3000,
        arrows: false,
    });


    // リンクのホバー時に不透明度をアニメーションで変更する
    $("a").hover(
        function () {
            $(this).animate({ "opacity": 0.6 }, 300);
        },
        function () {
            $(this).animate({ "opacity": 1.0 }, 300);
        }
    );
 // Worksの画像をクリックしたときにモーダルで拡大表示する

    $('.works img').click(function () {
        const imgSrc = $(this).attr('src');
        $('.big-img').attr('src', imgSrc);
        $('.modal').fadeIn();
        return false
    });

    // 閉じるボタンをクリックしたときにモーダルを閉じる
    $('.close-btn').click(function () {
        $('.modal').fadeOut();
        return false
    });
