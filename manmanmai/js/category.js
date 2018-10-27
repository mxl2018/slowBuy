$(function () {
    // 1、发送ajax请求一级渲染
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcategorytitle',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.mmm_nav .erp .first').html(template('topTmp', info));
        }
    })

    // //2、给a注册点击事件(事件委托)
    // $('.mmm_nav .first').on('click', 'a', function () {
    //     // console.log(1);
    //     //1、展示二级标签
    //     //2、发送ajax请求二级渲染
    //     if (!$(this).hasClass('current')) {
    //         $(this).addClass('current');
    //         var id = $(this).data('id');
    //         var that = this;
    //         console.log(id);
    //         $.ajax({
    //             url: 'http://127.0.0.1:9090/api/getcategory',
    //             data: { titleid: id },
    //             dataType: 'json',
    //             success: function (info) {
    //                 console.log(info);
    //                 $(that).siblings('ul').html(template('secondTmp', info));
    //             }
    //         })
    //     }
    //     else{
    //         $(this).siblings().toggleClass('hide');
    //     }
    // })
    //2、给一级分类注册点击事件，二级分类展示
    $('.first').on('click','a',function(){
        var id= $(this).data('id');
        // console.log(id)
        var that = this;
        if(!$(this).hasClass('current')){
            $.ajax({
                url: 'http://127.0.0.1:9090/api/getcategory',
                data: { titleid: id },
                dataType: 'json',
                success: function (info) {
                    console.log(info);
                    $(that).siblings('ul').html(template('secondTmp', info));
                    $(that).addClass('current');
                }
            });
        }
        else{
            $(that).siblings('ul').toggle();
        }

    })
})
