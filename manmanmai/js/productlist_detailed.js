$(function(){
    //1、面包屑导航的渲染
     var id= geturl('productId');
    $.ajax({
        url:'http://127.0.0.1:9090/api/getproduct',
        data:{productid:id},
        dataType:'json',
        success:function(info){
            console.log(info);
            var category=localStorage.getItem('category');
            // console.log(category)
            $('.categoryname').text(category);
            var str = info.result[0].productName;
            str = str.split(' ')[0];
            console.log(str);
            $('.menu_nav .productName').text(str);
            $('.detailimg_show').html(template('singletmp',info));
        }
    })
    //2、发送ajax评论渲染
    $.ajax({
        url:'http://127.0.0.1:9090/api/getproductcom',
        dataType:'json',
        data:{productid:id},
        success:function(info){
            console.log(info);
            $('.netFriend .comment').html(template('netTmp',info))
        }
    })
})