$(function(){
    var id = geturl('productid');
    console.log(id);
    $.ajax({
        url:'http://127.0.0.1:9090/api/getdiscountproduct',
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