/**
 * Created by xyq on 2017/7/14.
 */
// TT_NS.downloadApp.init("koogeek-home://","koogeek://");
/*******动画效果*******/
var element1=document.getElementById("sec1_dir");
    page_1=scrollMonitor.create(element1, -300),
    item1=anime({
        targets:'.s1_img',
        translateY:'-10%',
        duration:2000,
        easing:'easeOutExpo',
        autoplay:false
    }),
    element3=document.getElementById("sec3_dir");
    page_3=scrollMonitor.create(element3, -300),
    item3_1=anime({
        targets:'.s3_img1',
        translateX:'15%',
        duration:2000,
        easing:'easeOutExpo',
        autoplay:false

    }),
    item3_2=anime({
        targets:'.s3_img2',
        translateX:'-15%',
        duration:2000,
        easing:'easeOutExpo',
        autoplay:false
    }),
    item3_3=anime({
        targets:'.s3_icon',
        opacity:1,
        scale:3,
        duration:2000,
        delay:1000,
        easing:'easeOutExpo',
        autoplay:false
    }),
    element4=document.getElementById("sec4_dir");
    page_4=scrollMonitor.create(element4, -300),
    item4=anime({
        targets:'.s4_img',
        translateY:'-10%',
        duration:2000,
        easing:'easeOutExpo',
        autoplay:false
    }),
    element7=document.getElementById("sec7_dir");
    page_7=scrollMonitor.create(element7, -300),
    item7=anime({
        targets:'.s7_img',
        translateY:'-10%',
        duration:2000,
        easing:'easeOutExpo',
        autoplay:false
    }),
    // 光影动画效果
    element6=document.getElementById("sec6_dir");
    page_6=scrollMonitor.create





    element8=document.getElementById("sec8_dir");
    page_8=scrollMonitor.create(element8, -300),
    item8_1=anime({
        targets: '.s8_num1 input',
        value: '85℃',
        round: 1,
        duration: 2000,
        easing: 'easeInOutExpo',
        autoplay: false
    }),
    item8_2=anime({
        targets: '.s8_num2 input',
        value: '12A',
        round: 1,
        duration: 2000,
        easing: 'easeInOutExpo',
        autoplay: false
    }),
    element9=document.getElementById("sec9_dir");
    page_9=scrollMonitor.create(element9, -300),
    item9=anime({
        targets: '.s9_img',
        height:'60%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    element12=document.getElementById("sec12_dir");
    page_12=scrollMonitor.create(element12, -300),
    item12_1=anime({
        targets: '.s12_img1',
        translateX:'-180%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item12_2=anime({
        targets: '.s12_img2',
        translateX:'-136%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item12_3=anime({
        targets: '.s12_img4',
        translateX:'25%',
        duration: 2000,
        easing: 'easeOutExpo',
        autoplay: false
    }),
    item12_4=anime({
        targets: '.s12_img',
        opacity: [{value:1},{value:.8}],
        duration: 10000,
        easing: 'easeOutExpo',
        delay: function(el, i, l) {
            return (i+1) * 2000;
        },
        loop: true,
        autoplay: false
    }),
    item12_5=anime({
        targets: '.s12_list li',
        'border-color': [{value:'#000'},{value:'#dedede'}],
        duration: 3000,
        easing: 'easeOutExpo',
        delay: function(el, i, l) {
            return (i+1) * 2000;
        },
        loop: true,
        autoplay: false
    }),
    page_1.enterViewport(function () {
        item1.restart();
    });
    page_3.enterViewport(function () {
        item3_1.restart();
        item3_2.restart();
        item3_3.restart();
    });
    page_4.enterViewport(function () {
        item4.restart();
    });

    page_7.enterViewport(function () {
        item7.restart();
    });
    page_8.enterViewport(function () {
        item8_1.restart();
        item8_2.restart();
    });
    page_9.enterViewport(function () {
        item9.restart();
    });
    page_12.enterViewport(function () {
        item12_1.restart();
        item12_2.restart();
        item12_3.restart();
        item12_4.restart();
        item12_5.restart();
    });
