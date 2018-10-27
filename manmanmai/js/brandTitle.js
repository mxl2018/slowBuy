$(function(){
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbrandtitle',
        datatype: 'json',
        success: function (info) {
          console.log(info);
          $('.erp .first').html(template('randerTmp', info));
        }
      })
})