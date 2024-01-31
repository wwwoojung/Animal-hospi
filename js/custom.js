$(function () {
    const MAIN_VISUAL_SLIDE = new Swiper('.MainVisual .main_visual_slide', {
        loop: true,
    })

    $('.MainCategory .tab_menu li a').on('click', function (e) {
        e.preventDefault();
        const IDX = $(this).parent().index();
        $('.MainCategory .tab_menu li').removeClass('on');
        $('.MainCategory .tab_menu li').eq(IDX).addClass('on');

        $('.MainCategory .tab_content .itm').removeClass('on');
        $('.MainCategory .tab_content .itm').eq(IDX).addClass('on');
    })
})