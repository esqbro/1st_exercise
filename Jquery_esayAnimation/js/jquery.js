$(document).ready(function(){
  
    $('.main_btn').on('click', function(){      // назначение обработчика событий
        $('.overlay').fadeToggle('slow');            // назначение встроенной анимации
        $('.modal').slideDown('slow');
    });

    $('a').on('click', function(){      
        $('.overlay').fadeToggle('slow');            
        $('.modal').slideDown('slow');
    });

    $('.close').on('click', function(){      
        $('.overlay').fadeToggle('slow');            
        $('.modal').slideUp('slow');
    });
    
});