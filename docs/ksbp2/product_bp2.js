var scrollElem_1=document.getElementById("sec1_dir");page_1=scrollMonitor.create(scrollElem_1,-300),item1=anime({targets:".s1_img",translateY:"-10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),scrollElem_2=document.getElementById("sec2_dir"),page_2=scrollMonitor.create(scrollElem_2,-300),item2=anime({targets:".s2_img",translateX:"-10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),scrollElem_3=document.getElementById("sec3_dir"),page_3=scrollMonitor.create(scrollElem_3,-300),item3=anime({targets:".s3_img",translateX:"10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),scrollElem_4=document.getElementById("sec4_dir"),page_4=scrollMonitor.create(scrollElem_4,-300),item4=anime({targets:".s4_img",translateY:"-10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),scrollElem_5=document.getElementById("sec5_dir"),page_5=scrollMonitor.create(scrollElem_5,-300),item5=anime({targets:".s5_img",translateX:"10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),scrollElem_6=document.getElementById("sec6_dir"),page_6=scrollMonitor.create(scrollElem_6,-300),item6_1=anime({targets:".s6_img1",translateX:"-10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),item6_2=anime({targets:".s6_img2",translateX:"10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),scrollElem_7=document.getElementById("sec7_dir"),page_7=scrollMonitor.create(scrollElem_7,-300),item7_1=anime({targets:".s7_img1",translateX:"10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),item7_2=anime({targets:".s7_img3",translateX:"-10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),scrollElem_8=document.getElementById("sec8_dir"),page_8=scrollMonitor.create(scrollElem_8,-300),item8=anime({targets:".s8_img",translateY:"10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),scrollElem_9=document.getElementById("sec9_dir"),page_9=scrollMonitor.create(scrollElem_9,-300),item9_1=anime({targets:".s9_img1",translateX:"10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),item9_2=anime({targets:".s9_img2",translateX:"-10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),item9_3=anime({targets:".s9_icon",opacity:[{value:0},{value:1}],duration:2e3,delay:1e3,easing:"easeOutExpo",autoplay:!1}),scrollElem_11=document.getElementById("sec11_dir"),page_11=scrollMonitor.create(scrollElem_11,-300),item11=anime({targets:".s11_img",translateX:"10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),scrollElem_12=document.getElementById("sec12_dir"),page_12=scrollMonitor.create(scrollElem_12,-300),item12=anime({targets:".s12_img",translateX:"10%",duration:2e3,easing:"easeOutExpo",autoplay:!1}),page_1.enterViewport(function(){item1.restart()}),page_2.enterViewport(function(){item2.restart()}),page_3.enterViewport(function(){item3.restart()}),page_4.enterViewport(function(){item4.restart()}),page_5.enterViewport(function(){item5.restart()}),page_6.enterViewport(function(){item6_1.restart(),item6_2.restart()}),page_7.enterViewport(function(){item7_1.restart(),item7_2.restart()}),page_8.enterViewport(function(){item8.restart()}),page_9.enterViewport(function(){item9_1.restart(),item9_2.restart(),item9_3.restart()}),page_11.enterViewport(function(){item11.restart()}),page_12.enterViewport(function(){item12.restart()});