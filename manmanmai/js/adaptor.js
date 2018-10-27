//1、适配不同屏幕
var design = 750;
var base = 100;
adaptor();
function adaptor() {
    if (width > 750) {
        width = 750;
    }
    if (width < 320) {
        width = 320;
    }
    var width = window.innerWidth;
    var size = width / design * base;
    document.documentElement.style.fontSize = size + "px";
}
window.addEventListener('resize', adaptor);
// 2、地址栏的截取
//  console.log(location.search);
function geturl(key) {
    var str = decodeURI(location.search);
    // str = decodeURI(location.search);
    // console.log(str.split('?'));
    var arr = str.split('?')[1];
    // console.log(arr)
    arr = arr.split("&");
    // console.log(arr)
    var obj = {};
    arr.forEach(function (v, i) {
        var key = v.split("=")[0];
        var value = v.split("=")[1];
        obj[key] = value;
    })
    return obj[key];
}
// 分页公共类
function paging({ categoryid, pageid, category,pageNum}) {
    // 用户手动输入，监听select值变化，跳转到相应页面
    $("#pageing").val(pageid);
    $('#pageing').on('change', function () {
        var value = $(this).val();
        location.href = "productlist.html?categoryid=" + categoryid + "&category=" + category + "&pageid=" + value;
    })
    $('.prev').on('click', function () {
        var currentPageId = $('#pageing').val();
        console.log(currentPageId);
        if (currentPageId > 1) {
            location.href = "productlist.html?categoryid=" + categoryid + "&category=" + category + "&pageid=" + (--currentPageId);
        }
        else {
            alert("亲已经是第一页了");
        }
    })
    $('.next').on('click', function () {
        var currentPageId = $('#pageing').val();
        if (currentPageId < pageNum) {
            location.href = "productlist.html?categoryid=" + categoryid + "&category=" + category + "&pageid=" + (++currentPageId);
        }
        else {
            alert("亲已经是最后一页了");
        }
    })
}
