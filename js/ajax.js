/**
 * Created by X on 2018/11/14.
 */
var global=global||{}   //存储为全局变量
$(function(){
    //pagestart  页数  pagesize  每页的条数  count 总条数
    //
    //$("#listMore").click(function(){
    //    pageStart++
    //    if(pageStart<global.page){
    //        getList()
    //    }else{
    //        $("#listMore").hide()
    //    }
    //
    //})
    //跳转详情页
    $(".list").delegate(".oli","click",function(){
        var sysId=$(this).attr("sysId")
        console.log(sysId);
        window.location="xqy.html?sysId="+sysId
    })
    getList()
})
var pageStart=0   //数据页数

function getList(){

    //$.ajax({
    // url:"1.json",
    // type:"get",
    // async:false,
    // dataType:"json",
    //    data:{
    //
    // },
    //}).done(function(result){
    //
    //})
    //console.log(listData)
    var result=listData["listData0"+pageStart]
    global.count=result.data.count
    var pageSize=result.data.pageSize
    var list=result.data.list
    if(pageStart==0){
        $(".list").html("")
    }
    console.log(result)
    for(var i=0;i<list.length;i++){
        var htmlmodel=$("#itemHtml").html()
        htmlmodel=htmlmodel.replace("$sysId$",list[i].sysId)
        htmlmodel=htmlmodel.replace("$title$",list[i].title)
        htmlmodel=htmlmodel.replace("$tit$",list[i].title)
        htmlmodel=htmlmodel.replace("$atTime$",list[i].attime)
        htmlmodel=htmlmodel.replace("$comment$",list[i].comment)
        htmlmodel=htmlmodel.replace("$i$",list[i].i)
        $(".list").append(htmlmodel)
    }

    global.page=Math.ceil(global.count/pageSize)
    return global.page



}
////底部页数

function getParameter(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
}


//init
$(function(){
    var totalPage = 7;
    var totalRecords = 70;
    var pageNo = getParameter('pno');
    if(!pageNo){
        pageNo = pageStart  ;
    }
    //生成分页
    //有些参数是可选的，比如lang，若不传有默认值
    kkpager.generPageHtml({
        pno : pageNo,
        //总页码
        total : totalPage,
        //总数据条数
        totalRecords : totalRecords,
        mode : 'click',//默认值是link，可选link或者click
        click : function(n){
            console.log(n)
            // do something
            //手动选中按钮
            $(".list").html("")
            pageStart=n-1
            getList()
            console.log(pageStart)
            this.selectPage(n);
            return false;
        }
        /*
         ,lang				: {
         firstPageText			: '首页',
         firstPageTipText		: '首页',
         lastPageText			: '尾页',
         lastPageTipText			: '尾页',
         prePageText				: '上一页',
         prePageTipText			: '上一页',
         nextPageText			: '下一页',
         nextPageTipText			: '下一页',
         totalPageBeforeText		: '共',
         totalPageAfterText		: '页',
         currPageBeforeText		: '当前第',
         currPageAfterText		: '页',
         totalInfoSplitStr		: '/',
         totalRecordsBeforeText	: '共',
         totalRecordsAfterText	: '条数据',
         gopageBeforeText		: '&nbsp;转到',
         gopageButtonOkText		: '确定',
         gopageAfterText			: '页',
         buttonTipBeforeText		: '第',
         buttonTipAfterText		: '页'
         }*/
    });
});

