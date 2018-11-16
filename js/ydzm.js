/**
 * Created by X on 2018/11/16.
 */
$(function(){
    //头部下拉
    $("#alltop-menu").hover(function () {
        $(this).addClass("alltop-menu-hover")
    }, function () {
        $(this).removeClass("alltop-menu-hover")
    });

    //弹窗关闭
    $(".close").click(function(){
        $(".mask").hide()
    });
    //登录
    $(".login").click(function(){
        $("#login").show()
    });
    //video
    $(".video_btn").click(function(){
        $("#video").show()
    });
    //创建加入营地
    $(".create_btn").click(function(){
        $("#popTips").show()
    });
    $(".join_btn").click(function(){
        $("#popTips").show()
    })
    //查看营地
    $(".mine_btn").click(function(){
        $("#select").show()
    })
})
