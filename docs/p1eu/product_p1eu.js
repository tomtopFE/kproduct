
// TT_NS.downloadApp.init("koogeek-home://","koogeek://");
/**************************初始化调用***************************/
//第一屏动画

var scrollElem_1 = document.getElementById('sec1_dir'),
    page_1 = scrollMonitor.create(scrollElem_1, -300),                
    item1_1 = anime({
        targets: '.s1_img',
        scale: .9,
        duration: 2000,
        easing: 'linear',
        autoplay: false
    }),

    scrollElem_2 = document.getElementById('sec2_dir'),
    page_2 = scrollMonitor.create(scrollElem_2, -300),
    item2_1 = anime({
        targets: '.s2_img',
        translateX: '10%',
        duration: 2000,
        easing: 'linear',
        autoplay: false
    }),

    scrollElem_3 = document.getElementById('sec3_dir'),
    page_3 = scrollMonitor.create(scrollElem_3, -300),
    item3_1 = anime({
        targets: '.s3_txt',
        opacity: 1,
        translateY: '-20%',
        duration: 1000,
        easing: 'easeOutExpo',
        autoplay: false
    }),

    scrollElem_4 = document.getElementById('sec4_dir'),
    page_4 = scrollMonitor.create(scrollElem_4, -300),
    item4_1 = anime({
        targets: '.s4_txt',
        opacity: 1,
        translateY: '-20%',
        duration: 1000,
        easing: 'easeOutExpo',
        autoplay: false
    }),

    scrollElem_5 = document.getElementById('sec5_dir'),
    page_5 = scrollMonitor.create(scrollElem_5, -300),
    item5_1 = anime({
        targets: '.bg_tl',
        translateY: '100px',
        opacity: 1,
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item5_2 = anime({
        targets: '.bg_tr',
        translateX: '-100px',
        opacity: 1,
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item5_3 = anime({
        targets: '.bg_bl',
        translateX: '100px',
        opacity: 1,
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item5_4 = anime({
        targets: '.bg_br',
        translateY: '-100px',
        opacity: 1,
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),

    scrollElem_6 = document.getElementById('sec6_dir'),
    page_6 = scrollMonitor.create(scrollElem_6, -300),
    item6_1 = anime({
        targets: '.s6_txt',
        opacity: 1,
        translateY: '-20%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),

    scrollElem_7 = document.getElementById('sec7_dir'),
    page_7 = scrollMonitor.create(scrollElem_7, -300),
    item7_1 = anime({
        targets: '.s7_img',
        translateX: '-10%',
        duration: 2000,
        easing: 'linear',
        autoplay: false
    }),
    chart=['58.24%','60.51%','63.35%','67.61%','72.16%','73.30%','71.02%','64.77%','63.35%','59.38%','55.11%','54.55%'],
    scrollElem_8 = document.getElementById('sec8_dir'),
    page_8 = scrollMonitor.create(scrollElem_8, -300),
    item8_1 = anime({
        targets: '.chart_item .item',
        height: function(el, i, l) {
            return chart[i];
        },
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    });

page_1.enterViewport(function() {
    item1_1.restart();
});
page_2.enterViewport(function() {
    item2_1.restart();
});
page_3.enterViewport(function() {
    item3_1.restart();
});
page_4.enterViewport(function() {
    item4_1.restart();
});
page_5.enterViewport(function() {
    item5_1.restart();
    item5_2.restart();
    item5_3.restart();
    item5_4.restart();
});
page_6.enterViewport(function() {
    item6_1.restart();
});
page_7.enterViewport(function() {
    item7_1.restart();
});
page_8.enterViewport(function() {
    item8_1.restart();
});