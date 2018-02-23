window.onload = function(){
    page.init();
    menu.init();
};


/* page ---------------------------------------*/
/*
var page = {
    x_lg: 1280,
    x_md: 992,
    x_sm: 768,
    x: null,
    y: null
};

page.init = function(){

    page.dimensioning();
    page.events();
    
    $(window).resize(function(){
        page.dimensioning();
        page.events();
    });
};

page.dimensioning = function(){
    this.x = window.innerWidth;
    this.y = window.innerHeight;
};

page.events = function(){
    menu.mobile();
};


*/
/* menu ---------------------------------------*/
var menu = {
    active: 'active',
    open: 'open',
     
    block: '.header-dropDown',
    button: '.mobileMenu',
    
    list: '.menu',
    subList: '.menu > li ul',
    subListLi: '.menu > li',
    subListButt: '.header-dropDown .menu > li > a, .header-dropDown .menu > li > span',
    
    lan: '.language',
    lanCur: '.language__current',
    lanList: '.language__list',
    
    tim: 250
};

menu.init = function(){
    
    this.events();
};

menu.events = function(){
     
    $('body').on('click', function(event){

        if($(event.target).closest(menu.block + ', ' + menu.button).length){
            return;
        }
        
        if($(menu.button).hasClass(menu.active)){
            $(menu.button).removeClass(menu.active);
            $(menu.block).slideUp(menu.tim, function(){
                menu.closeAll();
            });
        }
    });
    
      
    $('body').on('click', this.button, function(event){

        if($(this).hasClass(menu.active)){

            $(this).removeClass(menu.active);
            $(menu.block).slideUp(menu.tim, function(){
               
                menu.closeAll();
            });
            
        }else{

            $(this).addClass(menu.active);
            $(menu.block).stop(true);
            $(menu.block).slideDown(menu.tim);
        }
    });
    
    
    $('body').on('click', this.subListButt, function(event){
        
        if($(this).next('ul').hasClass(menu.active)){

            $(this).parents('li').removeClass(menu.open);
            $(this).next('ul').removeClass(menu.active);
            $(this).next('ul').slideUp(menu.tim);
        }else{
             
            $(this).parents('li').addClass(menu.open);
            $(this).next('ul').addClass(menu.active);
            $(this).next('ul').stop(true);
            $(this).next('ul').slideDown(menu.tim);
        }
    });
    
    
    $('body').on('click', this.lanCur, function(event){

        if($(this).parents(menu.lan).hasClass(menu.active)){

            $(this).parents(menu.lan).removeClass(menu.active);
            $(this).next(menu.lanList).slideUp(menu.tim);
        }else{

            $(this).parents(menu.lan).addClass(menu.active);
            $(this).next(menu.lanList).stop(true);
            $(this).next(menu.lanList).slideDown(menu.tim);
        }
    });
};

menu.closeAll = function(){
     
    $(menu.button).removeClass(menu.active);
    $(menu.block).removeAttr('style');
      
    $(menu.subListLi).removeClass(menu.open);
    $(menu.subList).removeClass(menu.active);
    $(menu.subList).stop(true);
    $(menu.subList).removeAttr('style');
    
    $(menu.lan).removeClass(menu.active);
    $(menu.lanList).stop(true);
    $(menu.lanList).removeAttr('style');
};

menu.mobile = function(){
    
     if(page.x_md <= page.x){
          $(menu.button).removeClass(menu.active);
          $(menu.block).removeAttr('style');

          $(menu.subListLi).removeClass(menu.open);

          $(menu.subList).removeClass(menu.active);
          $(menu.subList).removeAttr('style');
          
          $(menu.lan).removeClass(menu.active);
          $(menu.lanList).removeAttr('style');

          $('.logo').after($(menu.list));

     }else {

          $(menu.block).prepend($(menu.list));
     }
};

menu.desktop = function(){

};






