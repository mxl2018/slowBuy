$(function(){
    var id = geturl('productId');
    // console.log(id);
    $.ajax({
        url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        dataType:'json',
        data:{productid:id},
        success:function(info){
            console.log(info);
            $('.money_detail').html(template('titleTmp',info));
            $('.city').html(template('listtmp',info));
            $('.contentbox').html(template('commenttmp',info));
        }
    })
})