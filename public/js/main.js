window.onload = function(){
    page.init();
    menu.init();
    graphics.init();
};


/* page ---------------------------------------*/
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

    if(this.x_sm <= this.x){
        $(menu.button).removeClass(menu.active);
        $(menu.block).removeAttr('style');
    }
};


/* menu ---------------------------------------*/
var menu = {
    active: 'active',
    button: '.mobileMenu',
    block: '.header-block',
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
            $(menu.block).slideUp(menu.tim);
        }
    });

    $('body').on('click', this.button, function(event){

        if($(this).hasClass(menu.active)){
            
            $(this).removeClass(menu.active);
            $(menu.block).slideUp(menu.tim);
        }else{
            
            $(this).addClass(menu.active);
            $(menu.block).stop(true);
            $(menu.block).slideDown(menu.tim);
        }
    });    
};


/* graphics -----------------------------------*/
var graphics = {
    active: 'active',
    cont: '.graphics-cont',
    box: '.graphics-box',
    buttBox: '.graphics-button',
    button: '.graphics-title',
    tim: 300
};

graphics.init = function(){

    this.events();
};

graphics.events = function(){
    
    for(var i=0; i<$(graphics.cont).length; i++){
        
        if($(graphics.cont).eq(i).hasClass(graphics.active)){
            
            $(graphics.cont).eq(i).find(graphics.box).slideDown(0);
            $(graphics.cont).eq(i).find(graphics.buttBox).fadeIn(0);
        }   
    }
    
    $('body').on('click', this.button, function(event){

        if($(this).parents(graphics.cont).hasClass(graphics.active)){

            $(this).parents(graphics.cont).removeClass(graphics.active);
            $(this).parents(graphics.cont).find(graphics.box).slideUp(graphics.tim);
            $(this).parents(graphics.cont).find(graphics.buttBox).fadeOut(graphics.tim);
            
        }else{

            $(this).parents(graphics.cont).addClass(graphics.active);
            
            $(this).parents(graphics.cont).find(graphics.box).stop(true);
            $(this).parents(graphics.cont).find(graphics.buttBox).stop(true);
            
            $(this).parents(graphics.cont).find(graphics.box).slideDown(graphics.tim);
            $(this).parents(graphics.cont).find(graphics.buttBox).fadeIn(graphics.tim);
        }
    }); 
};