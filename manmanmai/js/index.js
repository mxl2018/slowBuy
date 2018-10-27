
$(function(){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType:'json',
        success:function(info){
            // console.log(info); 
            $('.product').html(template('productTmp',info));     
        }
    })
})
$(function(){
    // <!-- 慢慢买导航渲染 -->
    $.ajax({
        url:'http://127.0.0.1:9090/api/getindexmenu',
        dataType:'json',
        success:function(info){
            console.log(info);
            var str = template('nav_tmp',info);
            
            $('.mmm_nav ul').html(str);
        }
    });
    //2、给更多注册点击事件，展示隐藏的数据
    $('.mmm_nav').on('click','li:nth-child(8)',function(){
        $('li:nth-last-child(-n+4)').toggle();
        console.log(1);
    })
})
