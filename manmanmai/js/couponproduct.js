$(function(){
    var couponid = geturl('couponid');
    console.log(couponid)
    $.ajax({
        url:'http://127.0.0.1:9090/api/getcouponproduct',
        data:{couponid:couponid},
        dataType:'json',
        success:function(info){
            console.log((info));
            $('.product_list .list').html(template('listTmp',info));
            var index=0;
            var lis = $('.list li');
            $('.list').on('click','li',function(){
                $('.modal').show();
                var src = $(this).find('img').attr('src');
                $('.modal img').attr('src',src);
                index=$(this).index();
            });
            var timeid = setInterval(function(){
                index--;
                if(index<=0){
                    index=lis.length-1;
                }
                var src= lis.eq(index).find('img').attr('src');
                $('.modal img').attr('src',src);
            },500)
            // 点击上一页，切换到上一页
            $('.arrow-left').on('click',function(e){
                clearInterval( timeid);
                e.stopPropagation();
                if(index>=0){
                    index--;
                    var src= lis.eq(index).find('img').attr('src');
                    $('.modal img').attr('src',src);
                    console.log(index);  
                }
            })
            // 点击下一页，切换到下一页
            $('.arrow-right').on('click',function(e){
                e.stopPropagation();
                if(index<lis.length){
                    index++;
                    var src = lis.eq(index).find('img').attr('src');
                    $('.modal img ').attr('src',src);
                }
            })
            //给模态框注册点击事件，点击隐藏
            $('.modal').on('click',function(){
                $('.modal').hide();
            })
        }
    });
    // 给所有的li注册点击事件，事件委托
})