/**
 * Created by X on 2018/11/13.
 */
$(function () {
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
//二维码显示隐藏
    $('.close').click(function(){
    $('.side-show').removeClass('shou');
    $('.side').removeClass('show');
    $('.close').hide()
})
    $('.side-show').click(function(){
        $('.side-show').addClass('shou');
        $('.side').addClass('show');
        $('.close').show()
    })

    //二维码切换
    $('.mediu').find('span').click(function(){
        $(this).addClass('on').siblings().removeClass('on')
    })

})
