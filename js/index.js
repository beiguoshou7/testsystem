/**
 * Created by X on 2018/11/5.
 */
$(function() {
    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#menu',
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $('.bk-left').addClass('hide');
                $(".copyright-btn").show()
                $(".qrcode-aside").show()
            }
            else {
                $('.bk-left').removeClass('hide');
                $(".copyright-btn").hide()
                $(".qrcode-aside").hide()
            }
            if (index ==5){
                $("#next").hide()
            }
            else{
                $("#next").show()

            }
        },

});
    //向下小箭头 （到下一屏）
    $("#next").click(function(){
        $('#dowebok').fullpage.moveSectionDown();
    })
    //顶部下拉
    $("#alltop-menu").hover(function () {
        $(this).addClass("alltop-menu-hover")
    }, function () {
        $(this).removeClass("alltop-menu-hover")
    });
    //nav点击加横线
    $(".mr_nav").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    });
    //更多幸存者显示隐藏
    $('.nav_item').hover(function(){
        $('.r-mode-more').slideDown()
    },function(){
        $('.r-mode-more').slideUp()
    })
    $('.r-mode-more').hover(function(){
        $('.r-mode-more').slideDown().stop()
    },function(){
        $('.r-mode-more').slideUp()
    })

    //小cg动画自动播放
    $('#jiasu').get(0).play();

    $('.jiasu').get(1).play();
    $('.jiasu').get(2).play();
    $('.jiasu').get(3).play();


    //第二屏轮播
    ~function () {
        var i = 0;

        function aa() {
            if (i == 5) {
                i = 0
            }
            $("#Jnews_ban").find($('a')).eq(i).animate({opacity: 1}, 1000).css({display: 'inline-block'}).siblings().animate({opacity: 0}, 1500).css({display: 'none'})
            $("#Jnews_ban_tab").find($('span')).eq(i).addClass('on').siblings().removeClass();
            i++;
        }

        var timer = setInterval(aa, 2000);
        $(".news_ban").hover(function () {
                clearInterval(timer);
            },
            function () {
                timer = setInterval(aa, 2000);
            });
        $("#Jnews_ban_tab").find($('span')).hover(function () {
            i = $(this).index()
            $("#Jnews_ban").find($('a')).eq($(this).index()).css({
                opacity: '1',
                display: 'inline-block'
            }).siblings().css({opacity: '0', display: 'none'}),
                $(this).addClass('on').siblings().removeClass()
        })
    }()


    //=============special=======
        $('.special_bg').get(0).play();
        $('.special_bg').get(1).play();
    console.log($('.jiasu'));
    ~function () {
        var i = 0;

        function aa() {
            if (i > $(".spe_box").find($('div')).length - 1) {
                i = 0
            }
            $(".spe_box").find($('div')).eq(i).css({display: 'inline-block'}).siblings().css({display: 'none'})
            $(".special_dian").find($('span')).eq(i).addClass('on').siblings().removeClass('on');
            $(".special_desc").find($(".special_desc_con")).eq(i).addClass('show').siblings().removeClass('show');
            $(".special_line2").find($("span")).eq(i).addClass('on').css({display:"block"}).siblings().removeClass('on').css({display:"none"})
            i++;
            $(".spe_cur").html('0' + i);

        }

        setInterval(aa, 5500);
        $(".special_dian").find($('span')).click(function () {
            i = $(this).index()
            $(".spe_box").find($('div')).eq($(this).index()).css({display: 'inline-block'}).siblings().css({display: 'none'});
            $(this).addClass('on').siblings().removeClass('on');
            $(".special_desc").find($(".special_desc_con")).eq(i).addClass('show').siblings().removeClass('show');
            $(".special_line2").find($("span")).eq(i).addClass('on').css({display:"block"}).siblings().removeClass('on').css({display:"none"})
            $(".spe_cur").html('0' + (i + 1));
        })
        $(".special_dian").find($('span')).click(function () {
            i = $(this).index()
            $(".spe_box").find($('div')).eq($(this).index()).css({display: 'inline-block'}).siblings().css({display: 'none'});
            $(this).addClass('on').siblings().removeClass('on');
            $(".special_desc").find($(".special_desc_con")).eq(i).addClass('show').siblings().removeClass('show');
            $(".special_line2").find($("span")).eq(i).addClass('on').css({display:"block"}).siblings().removeClass('on').css({display:"none"})
            $(".spe_cur").html('0' + (i + 1));
        })
        $('.prev').click(function () {
            i--;
            if (i < 0) {
                i = $(".special_dian").find($('span')).length - 1
            }
            $(".spe_box").find($('div')).eq(i).css({display: 'inline-block'}).siblings().css({display: 'none'});
            $(".special_dian").find($('span')).eq(i).addClass('on').siblings().removeClass('on');
            $(".special_desc").find($(".special_desc_con")).eq(i).addClass('show').siblings().removeClass('show');
            $(".special_line2").find($("span")).eq(i).addClass('on').css({display:"block"}).siblings().removeClass('on').css({display:"none"})
            $(".spe_cur").html('0' + (i + 1));
        })
        $('.next').click(function () {
            i++;
            if (i > $(".special_dian").find($('span')).length - 1) {
                i = 0
            }
            $(".spe_box").find($('div')).eq(i).css({display: 'inline-block'}).siblings().css({display: 'none'});
            $(".special_dian").find($('span')).eq(i).addClass('on').siblings().removeClass('on');
            $(".special_desc").find($(".special_desc_con")).eq(i).addClass('show').siblings().removeClass('show');
            $(".special_line2").find($("span")).eq(i).addClass('on').css({display:"block"}).siblings().removeClass('on').css({display:"none"})
            $(".spe_cur").html('0' + (i + 1));
        })

    }()


    //第五屏
    $(".people2").find($(".list")).hover(function(){
        $(".people2").find($(".people_bg")).addClass('show')
    },function(){
        $(".people2").find($(".people_bg")).removeClass('show')

    });
    $(".people3").find($(".list")).hover(function(){
        $(".people3").find($(".people_bg")).addClass('show')
    },function(){
        $(".people3").find($(".people_bg")).removeClass('show')

    });
    //二维码
    $(".qrcode-tab").find('a').eq(0).click(function(){
            $(this).addClass('active').siblings().removeClass('active')
        $('.qrcode-content').find('div').eq($(this).index()).addClass('active').siblings().removeClass('active')
    });
    $(".qrcode-tab").find('a').eq(1).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).index());
        $('.qrcode-content').find('div').eq($(this).index()).addClass('active').siblings().removeClass('active')

    });

    //版权
    $(".copyright-btn").click(function(){
        $(".wrap_copyright").toggleClass('show')
    })

    //遮罩层
    $('.qstv_item').click(function(){
        console.log($(this).find('video').attr('src'))
        $('.Layer').show();
        $('.video-pop').show()
        //console.log( $('.video-pop'))
        $('.video-pop').find('video').attr("src",$(this).find('video').attr('src'))
        $('.video-pop').find('video').get(0).play();
        //console.log($(this))
        $('.video-pop').find('.v_p').html($(this).find($('.qstv_desc').find('.v_desc1')).html())
    });
    $('.video_box').click(function(){
        console.log($(this).find('video').attr('src'))
        $('.Layer').show();
        $('.video-pop').show()
        //console.log( $('.video-pop'))
        $('.video-pop').find('video').attr("src",$(this).find('video').attr('src'))
        $('.video-pop').find('video').get(0).play();
        //console.log($(this))
        $('.video-pop').find('.v_p').html($(this).find($('.qstv_desc').find('.v_desc1')).html())
    });


    $(".v_close").click(function(){
        $('.Layer').hide();
        $('.video-pop').hide()
    })
});