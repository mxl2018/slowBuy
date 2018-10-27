$(function () {
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getinlanddiscount',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.mmm_main .box').html(template('inlanddiscounttmp', info));
        }
    })
    //监听页面滚动事件。加载后面四个产品 
    var flag = true;
    $(window).scroll(function () {
        var scrollTops = $(window).scrollTop();
        console.log(scrollTops);
        if (scrollTops >1200&&flag) {
            flag=false;
            $('.loading').show();
            setTimeout(function(){
                $('li:nth-last-child(-n+4)').show();
                $('.loading').hide();
            },1000)
        }
    })

})
