import mainStyle from "app/pages/Main/assets/css/main.css";
import "bootstrap";

/* page ---------------------------------------*/

let page = {
    x_lg: 1280,
    x_md: 992,
    x_sm: 768,
    x: null,
    y: null
};

page.init = function () {

    page.dimensioning();
    page.events();

    $(window).resize(function () {
        page.dimensioning();
        page.events();
    });
};

page.dimensioning = function () {
    this.x = window.innerWidth;
    this.y = window.innerHeight;
};

page.events = function () {
    menu.mobile();
};


/* menu ---------------------------------------*/
let menu = {
    active: mainStyle.active,
    open: mainStyle.open,

    block: '.' + mainStyle["header-dropDown"],
    button: '.' + mainStyle["mobileMenu"],

    list: '.' + mainStyle.menu,
    subList: '.' + mainStyle.menu + " > li ul",
    subListLi: '.' + mainStyle.menu + " > li",
    subListButt:
    '.' + mainStyle["header-dropDown"] + ' .' + mainStyle.menu + ' > li > a, '
    + '.' + mainStyle["header-dropDown"] + ' .' + mainStyle.menu + " > li > span",

    lan: '.' + mainStyle.language,
    lanCur: '.' + mainStyle.language__current,
    lanList: '.' + mainStyle.language__list,

    tim: 250
};

menu.init = function () {

    this.events();
};

menu.events = function () {

    $("body").on('click', function (event) {

        if ($(event.target).closest(menu.block + ', ' + menu.button).length) {
            return;
        }

        if ($(menu.button).hasClass(menu.active)) {
            $(menu.button).removeClass(menu.active);
            $(menu.block).slideUp(menu.tim, function () {
                menu.closeAll();
            });
        }
    });
    $("body").on('click', this.button, function (event) {

        if ($(this).hasClass(menu.active)) {

            $(this).removeClass(menu.active);
            $(menu.block).slideUp(menu.tim, function () {
                menu.closeAll();
            });

        } else {

            $(this).addClass(menu.active);
            $(menu.block).stop(true);
            $(menu.block).slideDown(menu.tim);
        }
    });
    $("body").on('click', this.subListButt, function (event) {

        if ($(this).next('ul').hasClass(menu.active)) {

            $(this).parents('li').removeClass(menu.open);
            $(this).next('ul').removeClass(menu.active);
            $(this).next('ul').slideUp(menu.tim);
        } else {

            $(this).parents('li').addClass(menu.open);
            $(this).next('ul').addClass(menu.active);
            $(this).next('ul').stop(true);
            $(this).next('ul').slideDown(menu.tim);
        }
    });
    $("body").on('click', this.lanCur, function (event) {

        if ($(this).parents(menu.lan).hasClass(menu.active)) {

            $(this).parents(menu.lan).removeClass(menu.active);
            $(this).next(menu.lanList).slideUp(menu.tim);
        } else {

            $(this).parents(menu.lan).addClass(menu.active);
            $(this).next(menu.lanList).stop(true);
            $(this).next(menu.lanList).slideDown(menu.tim);
        }
    });
};

menu.closeAll = function () {

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

menu.mobile = function () {


    if (page.x_md <= page.x) {
        $(menu.button).removeClass(menu.active);
        $(menu.block).removeAttr('style');

        $(menu.subListLi).removeClass(menu.open);

        $(menu.subList).removeClass(menu.active);
        $(menu.subList).removeAttr('style');

        $(menu.lan).removeClass(menu.active);
        $(menu.lanList).removeAttr('style');

        $('.logo').after($(menu.list));

    } else {

        $(menu.block).prepend($(menu.list));
    }
};

menu.desktop = function () {

};

let modals = {};

modals.init = function () {
    $("body").on("click", function (event) {
        if ($("div." + mainStyle["modal-backdrop"] + '.' + mainStyle.fade + '.' + mainStyle.in).length) {
            if($("#login").hasClass(mainStyle.in)) {
                $("#login").fadeOut().removeClass(mainStyle.in);
            } else if($("#reset-password").hasClass(mainStyle.in)) {
                $("#reset-password").fadeOut().removeClass(mainStyle.in);
            }
        }
    });

    $("body").on("click", '[data-target="#login"]', function (event) {
        $("#login").modal("show").fadeIn().show();
    });
    $("body").on("click", '[data-target="#reset-password"]', function (event) {
        $("#reset-password").modal("show").fadeIn().show();
    });


    $("#reset-password").on("show.bs.modal", function (event) {
        if(event.target.id === "login"){
            $("#login").removeClass("in").addClass(mainStyle.in);
        } else if(event.target.id === "reset-password"){
            $("#login").modal("hide");
            $("#reset-password").removeClass("in").addClass(mainStyle.in);
        }

    });
    $("#login, #reset-password").on("hide.bs.modal", function(event) {
        if(event.target.id === "reset-password") {
            $("#reset-password").removeClass(mainStyle.in).fadeOut();
        } else {
            $("#login").fadeOut().removeClass(mainStyle.in);
        }
    });
};

export {menu, page, modals};





