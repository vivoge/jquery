$(function(){
    $('.input').click(function(){
        $.ajax({
            type:'post',
            url:'/getlist',

            data:{
                username:$('input[name=username]').val(),
                password:$('input[name=password]').val()
            }
,
               // $('form').serialize(),
            success:function(res,status,xhr){
                $('#box').html(res);
            }
        })

       // $('#box').html($('form').serialize());

    });






});