$(function () {
    var pageid;
    if(location.search){
        pageid =geturl('pageid') ;
    }
    else{
        pageid = 1;
    }
    // var pageid =geturl('pageid') ;
    // console.log(pageid);
    
    
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType: 'json',
        data:{pageid:pageid-1||0},
        success: function (info) {
            console.log(info);
            $('.product').html(template('productTmp', info));
            // 3分页标签功能
            var pageNum = Math.ceil(info.totalCount / info.pagesize);
            var arr = [];
            for (var i = 1; i <= pageNum; i++) {
                arr.push(i);
            }
            console.log(arr);
            var obj = {
                arr: arr,
            }
            $('#pageing').html(template('pagTmp', obj));
            $('#pageing').val(pageid);
            $('#pageing').on('change', function () {
                var value = $(this).val();
                location.href = "moneyctrl.html?pageid=" + value;
            });
            $('.prev').on('click',function(){
                var value=$('#pageing').val();
                if(value>0){
                    location.href = "moneyctrl.html?pageid=" + (--value);
                }
                else{
                    alert("当前已经是第一页");
                }
            })
            $('.next').on('click',function(){
                var value=$('#pageing').val();
                if(value<arr.length){
                    location.href = "moneyctrl.html?pageid=" + (++value);
                }
                else{
                    alert("当前已经是最后一页");
                }
            })

        }
    })
})