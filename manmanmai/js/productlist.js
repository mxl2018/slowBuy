$(function () {
    // 1一级标题的渲染
    var categoryid = geturl('categoryid');
    var category = geturl('category');
    var pageid = geturl('pageid');
    var pageNum
    // console.log($("#pageing"))
    // $('#pageing').val(3);

    // console.log(category)
    // console.log(id);
    //   console.log(pageid);
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcategorybyid',
        data: { categoryid: categoryid },
        success: function (info) {
            // console.log(info);
            $('.menu_nav .text').text(category);
        }
    })
    //2列表详情页的渲染
    $.ajax({
        url: "http://127.0.0.1:9090/api/getproductlist",
        data: { categoryid: categoryid, pageid: pageid },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.product_list .product').html(template('productlistTmp', info));
            localStorage.setItem('category', geturl('category'));
            localStorage.setItem('productId', info.result[0].productId);

            // 3分页标签功能
            pageNum = Math.ceil(info.totalCount / info.pagesize);
            var arr = [];
            for (var i = 1; i <= pageNum; i++) {
                arr.push(i);
            }
            console.log(arr);
            var obj = {
                arr: arr,
            }
            $('#pageing').html(template('pagTmp', obj));
            paging({categoryid,pageid,category,pageNum});
        }
    })
})