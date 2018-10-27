// 导航思路
$(function () {
  // 1、导航标题渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
    datatype: 'json',
    success: function (info) {
      console.log(info)
      $('.nav-title').html(template('titleTmp', info));
      //4、区域滚动功能
      var lis = document.querySelectorAll('.nav-title li');
      // console.log( lis )
      var ul =  document.querySelector('#wrapper .nav-title');
      var lisWidth = 0;
      lis.forEach(function(v,i){
        lisWidth += v.offsetWidth;
        // console.log( lisWidth);
      })
      ul.style.width= lisWidth +"px";
      var myScroll = new IScroll('#wrapper', {
        scrollX: true,
        scrollY: false
      });
    }
  })
  // 2、内容渲染
  render();
  var titleid;
  function render() {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
      data: { titleid: titleid || 0 },
      datatype: 'json',
      success: function (info) {
        // console.log(info);
        $('.nav-content .content').html(template('contentTmp', info));
      }
    })
  }

  //3、给头部导航注册点击事件内容页面跳转到相应内容页
  $('.list_nav').on('click', 'a', function () {
    $(this).addClass('current').parent().siblings().children().removeClass('current');
    titleid = $(this).data('id');
    console.log(titleid);
    render();
  })
})