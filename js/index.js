/**
 * Created by X on 2018/11/5.
 */
$(function(){
    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        menu: '#menu'
    });
   $("#alltop-menu").hover(function(){
       $(this).addClass("alltop-menu-hover")
   },function(){
       $(this).removeClass("alltop-menu-hover")
   })
    $(".mr_nav").click(function(){
    $(this).addClass("cur").siblings().removeClass("cur")
    })
});