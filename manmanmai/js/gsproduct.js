$(function(){
    // 1、店铺数据渲染
    $.ajax({
        url:'http://127.0.0.1:9090/api/getgsshop',
        dadaType:'json',
        success:function(info){
            console.log(info);
            $('.shop').html(template('shopTmp',info))
            localStorage.setItem('shopid',info.result[0].shopId);
        }
    })
    //2、区域数据渲染
    $.ajax({
        url:'http://127.0.0.1:9090/api/getgsshoparea',
        dadaType:'json',
        success:function(info){
            console.log(info);
            $('.area').html(template('areaTmp',info));
            localStorage.setItem('areaid',info.result[0].areaId);
        }
    })
    //3、主体内容渲染
    var shopid= localStorage.getItem('shopid');
    var areaid= localStorage.getItem('areaid');
    render();
    function render(){
        $.ajax({
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{shopid:shopid,areaid:areaid,},
            dadaType:'json',
            success:function(info){
                console.log(info);
                $('.info').html(template('mainTmp',info))
            }
        })
    }
     // //4、 给店铺，地域，价格注册点击事件，对应项隐藏
    $('.jd').on('click',function(){
        $('.content_first').toggle();
    })
    $('.hb').on('click',function(){
        $('.content_two').toggle();
    })
    $('.all').on('click',function(){
        $('.content_three').toggle();
    })
    //5、给各个店铺注册点击事件
    // 跳转到对应商铺信息，再次渲染
    $('.content_first').on('click','li',function(){
        $(this).find('.right').show();
        $(this).siblings().find('.right').hide();
        shopid = $(this).data('id')
        console.log(shopid);
        render();
    })
    $('.content_two').on('click','li',function(){
        $(this).find('.right').show();
        $(this).siblings().find('.right').hide();
        areaid = $(this).data('id')
        render();
    })
})