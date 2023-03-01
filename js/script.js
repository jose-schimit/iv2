$(function (){
   
    //fixar header
    $(window).scroll(function(){
        if($(this).scrollTop() > 5){
            $('.header').addClass('nav-scrol');
            $('#nav-img').attr('src','imagens/iv2hori.png');
        }else{
            $('.header').removeClass('nav-scrol'); 
            $('#nav-img').attr('src',"imagens/iv2branco.png");
        }
    });


    
    $('.btn-bar').click(function(){
        $('.btn-bar').hide();
        $('.btn-close').show();
        $('.nav').show(); 
       $('.header').addClass('header-nav-scrol');
    });
        
       
    $('.btn-close').click(function(){
        $('.btn-bar').show();
        $('.btn-close').hide();
        $('.nav').hide();
        //$('.nav').css("margin-left", "+=1000px");
       $('.header').removeClass('header-nav-scrol');
    })
 
});






