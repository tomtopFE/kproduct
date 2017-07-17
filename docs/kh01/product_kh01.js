
// TT_NS.downloadApp.init("koogeek-home://","koogeek://");
/**************************初始化调用***************************/
//第一屏动画

var scrollElem_1 = document.getElementById('sec1_dir'),
    page_1 = scrollMonitor.create(scrollElem_1, -300),                
    item1_1 = anime({
        targets: '.s1_img1',
        translateY: '-10%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item1_2 = anime({
        targets: '.s1_img2',
        translateX: '10%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),

    scrollElem_2 = document.getElementById('sec2_dir'),
    page_2 = scrollMonitor.create(scrollElem_2, -300),
    item2_1 = anime({
        targets: '.s2_bg1',
        skewX: 20,
        duration: 2000,
        easing: 'linear',
        direction: 'alternate',
        loop: true,
        autoplay: false
    }),
    item2_2 = anime({
        targets: '.s2_bg2',
        skewX: -20,
        duration: 2000,
        easing: 'linear',
        direction: 'alternate',
        loop: true,
        autoplay: false
    }),

    scrollElem_3 = document.getElementById('sec3_dir'),
    page_3 = scrollMonitor.create(scrollElem_3, -300),
    item3_1 = anime({
        targets: '.s3_img1',
        translateX: '30%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item3_2 = anime({
        targets: '.s3_img2',
        translateX: '-30%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item3_3 = anime({
        targets: '.s3_img3',
        scale: 3,
        opacity: 1,
        duration: 2000,
        delay: 1000,
        easing: 'easeOutExpo',
        autoplay: false
    }),

    scrollElem_4 = document.getElementById('sec4_dir'),
    page_4 = scrollMonitor.create(scrollElem_4, -300),
    item4_1 = anime({
        targets: '.s4_icon',
        scale: [{value:1.1},{value:1}],
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),

    scrollElem_6 = document.getElementById('sec6_dir'),
    page_6 = scrollMonitor.create(scrollElem_6, -300),
    item6_1 = anime({
        targets: '.s6_img1',
        translateX: '-8%',
        translateY: '-6%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item6_2 = anime({
        targets: '.s6_img2',
        translateX: '8%',
        translateY: '6%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),

    scrollElem_7 = document.getElementById('sec7_dir'),
    page_7 = scrollMonitor.create(scrollElem_7, -300),
    item7_1 = anime({
        targets: '.s7_num1 input',
        value: '85℃',
        round: 1,
        duration: 2000,
        easing: 'easeInOutExpo',
        autoplay: false
    }),
    item7_2 = anime({
        targets: '.s7_num2 input',
        value: '12A',
        round: 1,
        duration: 2000,
        easing: 'easeInOutExpo',
        autoplay: false
    }),

    scrollElem_8 = document.getElementById('sec8_dir'),
    page_8 = scrollMonitor.create(scrollElem_8, -300),
    item8_1 = anime({
        targets: '.s8_img',
        height: '68.57%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),

    scrollElem_11 = document.getElementById('sec11_dir'),
    page_11 = scrollMonitor.create(scrollElem_11, -300),
    item11_1 = anime({
        targets: '.s11_img1',
        translateX: '-130%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item11_2 = anime({
        targets: '.s11_img2',
        translateX: '-80%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item11_3 = anime({
        targets: '.s11_img4',
        translateX: '40%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item11_4 = anime({
        targets: '.s11_img',
        opacity: [{value:1},{value:.8}],
        duration: 3000,
        easing: 'easeOutExpo',
        // direction: 'alternate',
        delay: function(el, i, l) {
            return (i+1) * 2000;
        },
        loop: true,
        autoplay: false
    }),
    item11_5 = anime({
        targets: '.s11_list li',
        'border-color': [{value:'#000'},{value:'#dedede'}],
        duration: 3000,
        easing: 'easeOutExpo',
        // direction: 'alternate',
        delay: function(el, i, l) {
            return (i+1) * 2000;
        },
        loop: true,
        autoplay: false
    });

page_1.enterViewport(function() {
    item1_1.restart();
    item1_2.restart();
    // page_1.destroy();
});
page_2.enterViewport(function() {
    item2_1.play();
    item2_2.play();
    // page_2.destroy();
});
page_2.exitViewport(function() {
    item2_1.pause();
    item2_2.pause();
});
page_3.enterViewport(function() {
    item3_1.restart();
    item3_2.restart();
    item3_3.restart();
});
page_4.enterViewport(function() {
    item4_1.restart();
});
page_6.enterViewport(function() {
    item6_1.restart();
    item6_2.restart();
});
page_7.enterViewport(function() {
    item7_1.restart();
    item7_2.restart();
});
page_8.enterViewport(function() {
    item8_1.restart();
});
page_11.enterViewport(function() {
    item11_1.play();
    item11_2.play();
    item11_3.play();
    item11_4.play();
    item11_5.play();
});

$(document).on('click','.show_more img',function(){
    $(".show_more").toggleClass('active');
});