$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass(' fa-x');
    });
     
        const  section = $('section');
        const navitems =$('nav_item');

    $(window).on('scroll',function(){
        const header = $('header')
        const scrollPosition =  $(window).scrolltop()- header.outerheight( );
        let activeSectionIndex = 0;
        
        if(srollpodition<=0){
            header.css('box-shadow','none');
        }else{
            header.css('box-shadow','5px 1px 5px rgba(0,0,0,0.1)');
        }
        section.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerheight();

            if(scrollPosition>=sectionTop&&scrollPosition<sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })
        navitems.removeClass('active');
        $(navitems[activeSectionIndex]).addClass('active');

    });

    scrollReveal().reveal('#cta',{
         origin: 'left',
         duration: 2000,
         distance: '20%'
    });
     scrollReveal().reveal('.dish',{
         origin: 'left',
         duration: 2000,
         distance: '20%'
    });
     scrollReveal().reveal('#testemonials_chef',{
         origin: 'left',
         duration: 1000,
         distance: '20%'
    });
     scrollReveal().reveal('.feedback',{
         origin: 'rigth',
         duration: 1000,
         distance: '20%'
    });

});
/*
função do js para fazer animacão de rolagem do scroll alteran o destinatario  no menu header 
$(window).on('scroll',function(){
        const header = $('header')
        const scrollPosition =  $(window).scrolltop()- header.outerheight( );
        let activeSectionIndex = 0;
        
        if(srollpodition<=0){
            header.css('box-shadow','none');
        }else{
            header.css('box-shadow','5px 1px 5px rgba(0,0,0,0.1)');
        }
        section.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerheight();

            if(scrollPosition>=sectionTop&&scrollPosition<sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })
        navitems.removeClass('active');
        $(navitems[activeSectionIndex]).addClass('active');

    });
    */