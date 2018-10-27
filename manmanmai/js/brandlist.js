$(function(){
    var id =geturl('brandtitleid');
    // console.log(id);
    // 热门品牌比较
    $.ajax({
        url: 'http:127.0.0.1:9090/api/getbrand',
        datatype: 'json',
        data:{brandtitleid:id},
        success: function (info) {
          console.log(info);
          $('.render').html(template('renderTmp', info));
        }
      })
      // 热门品牌销量
      var pageid = 0;
      $.ajax({
        url: 'http://127.0.0.1:9090/api/getbrandproductlist',
        datatype: 'json',
        data:{brandtitleid:id,pagesize:4},
        success: function (info) {
          console.log(info);
          $('.sale-list').html(template('scaleTmp', info));
          pageid= info.totalCount/info.pagesize;
          localStorage.setItem('productId', info.result[0].productId);
          //  平板电视最新评论
          var productid = +localStorage.getItem('productId');
          $.ajax({
            url: 'http://127.0.0.1:9090/api/getproductcom',
            datatype: 'json',
            data:{productid:productid},
            success: function (info) {
              console.log(info);
              $('.comment-list .list').html(template('commentTmp', info));
            }
          })
        }
      })
})