/**
 * Created by X on 2018/11/14.
 */
$(function(){
    var id=getParams("sysId")
    console.log(id);
    var result=listData["listData"+id]
    console.log(result)
    //search ?  hash #   article.html?articleId=3&name=22&
              var htmlmodel=$("#contentBox").html()
              htmlmodel=htmlmodel.replace("$everytitle$",result.everytitle)
              htmlmodel=htmlmodel.replace("$everytitle1$",result.everytitle)
              htmlmodel=htmlmodel.replace("$attime$",result.attime)
              htmlmodel=htmlmodel.replace("$title$",result.title)
              htmlmodel=htmlmodel.replace("$p1$",result.p1)
              htmlmodel=htmlmodel.replace("$p2$",result.p2)
                  htmlmodel=htmlmodel.replace("$a1$",result.a1)
              htmlmodel=htmlmodel.replace("$img1$",result.img1)
              htmlmodel=htmlmodel.replace("$p3$",result.p3)
              htmlmodel=htmlmodel.replace("$h21$",result.h21)
              htmlmodel=htmlmodel.replace("$p4$",result.p4)
              htmlmodel=htmlmodel.replace("$img2$",result.img2)
              htmlmodel=htmlmodel.replace("$p5$",result.p5)
              htmlmodel=htmlmodel.replace("$h22$",result.h22)
              htmlmodel=htmlmodel.replace("$p6$",result.p6)
              htmlmodel=htmlmodel.replace("$img3$",result.img3)
              htmlmodel=htmlmodel.replace("$p7$",result.p7)
              htmlmodel=htmlmodel.replace("$sp1$",result.sp1)
              htmlmodel=htmlmodel.replace("$sp2$",result.sp2)
              htmlmodel=htmlmodel.replace("$a2$",result.a2)
              htmlmodel=htmlmodel.replace("$sp3$",result.sp3)
              htmlmodel=htmlmodel.replace("$sp4$",result.sp4)
              htmlmodel=htmlmodel.replace("$sp5$",result.sp5)
              htmlmodel=htmlmodel.replace("$sp6$",result.sp6)
              htmlmodel=htmlmodel.replace("$h23$",result.h23)
              htmlmodel=htmlmodel.replace("$p8$",result.p8)
              htmlmodel=htmlmodel.replace("$p9$",result.p9)
              htmlmodel=htmlmodel.replace("$p10$",result.p10)
              htmlmodel=htmlmodel.replace("$p11$",result.p11)
              htmlmodel=htmlmodel.replace("$p12$",result.p12)
              htmlmodel=htmlmodel.replace("$p13$",result.p13)
              htmlmodel=htmlmodel.replace("$img4$",result.img4)
              htmlmodel=htmlmodel.replace("$p14$",result.p14)
              htmlmodel=htmlmodel.replace("$p15$",result.p15)

              $("#NIE-art").append(htmlmodel)

})
function getParams(type){
    var reg=new RegExp("(^|&)"+type+"=([^|&]*)(&|$)")
    //substring   substr
    var value=window.location.search.substring(1).match(reg)
    //test  match  exec
    if(value==null){
        return null
    }else{
        return  value[2]
    }


}
  //
  //  var result=listData["listData0"+pageStart]
  //  global.count=result.data.count
  //  var pageSize=result.data.pageSize
  //  var list=result.data.list
  //  if(pageStart==0){
  //      $(".list").html("")
  //  }
  //  console.log(result)
  //for(var i=0;i<list.length;i++){
  //      var htmlmodel=$("#itemHtml").html()
  //      htmlmodel=htmlmodel.replace("$sysId$",list[i].sysId)
  //      htmlmodel=htmlmodel.replace("$title$",list[i].title)
  //      htmlmodel=htmlmodel.replace("$tit$",list[i].title)
  //      htmlmodel=htmlmodel.replace("$atTime$",list[i].attime)
  //      htmlmodel=htmlmodel.replace("$comment$",list[i].comment)
  //      htmlmodel=htmlmodel.replace("$i$",list[i].i)
  //      $(".list").append(htmlmodel)
  //  }



