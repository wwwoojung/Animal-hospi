$(function () {
    $('#header .header_wrap .m_open').on('click', (e) => {
        e.preventDefault();
        $('#header .header_wrap').toggleClass('on');
    })

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
    $('.MainNotice .tab_menu h3 a').on('click', function (e) {
        e.preventDefault();
        const IDX = $(this).parent().index();
        $('.MainNotice .tab_menu h3').removeClass('on');
        $('.MainNotice .tab_menu h3').eq(IDX).addClass('on');

        $('.MainNotice .tab_content>ul').removeClass('on');
        $('.MainNotice .tab_content>ul').eq(IDX).addClass('on');
    })
})