$(function(){
    
    $('.tanchuang li').click(function(){           
        $(this).siblings().find('a').removeClass('activs');
        $(this).find('a').addClass('activs');
    })
    var isMobile = (document.documentElement.clientWidth || document.body.clientWidth) > 768;
    if(isMobile){
        $('.ours').mouseover(function(){
            $('.tanchuang').css('display','block')
        }).mouseout(function(){
            $('.tanchuang').css('display','none')
        })      
        
    }
    

    if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){//移动设备清除导航栏右内边距
        $('.guanwo').click(function(){						
            if($('.tanchuang').css('display') == 'block'){
                $('.tanchuang').hide(300);
            }else{
                $('.tanchuang').show(300);
            }
        }) 
            
    } 

    $('.dengs').click(function(){
        window.open('http://guanli.suishenketang.com/','_blank');
        return false;
    })
    
})