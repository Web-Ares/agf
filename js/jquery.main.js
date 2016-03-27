"use strict";
( function(){

    $( function(){

        $('.catalog').each(function () {
            Catalog($(this));
        });

        $('.aside-menu__wrap').each(function() {
            Menu($(this));
        });

        $('.swiper-container').each(function () {
            Slider($(this));
        });

        $('.header__menu-btn').on({
            'click':function(){
                var curElem = $(this).parent();

                if (curElem.hasClass('active')) {
                    curElem.removeClass('active');
                } else {
                    curElem.addClass('active');
                }

            }
        });

        $('.aside-menu__btn').on({
            'click':function(){
                var curElem = $(this).parent();

                if (curElem.hasClass('active')) {
                    curElem.removeClass('active');
                } else {
                    curElem.addClass('active');
                }

            }
        });

        $('.btn-up').on({
            'click':function(){
                $('html, body').animate({scrollTop: 0}, 600);
            }
        });

        $(window).on({
            'scroll':function(){
                if($(window).scrollTop() > $(window).height()){
                    $('.btn-up').fadeIn();
                } else {
                    $('.btn-up').fadeOut();
                }
                if($(window).scrollTop() + $(window).height() > $('.site__footer').offset().top + 16) {
                    $('.btn-up').css({ bottom: $(window).scrollTop() + $(window).height() - $('.footer').offset().top + 16 });
                } else {
                    $('.btn-up').css({ bottom: '0' });
                }
            }
        });
    });

    var Catalog = function(obj) {

        //private properties
        var _obj = obj,
            _btn = _obj.find( '.catalog__hider' ),
            _content = _btn.next( '.catalog__hider');


        //private methods
        var _addEvents = function() {

                _btn.on({
                    click: function(){
                        var curElem = $(this),
                            curContent = curElem.next( '.catalog__content' );

                        if( curContent.is( ':visible' ) ){
                            curContent.slideUp(300);
                        } else {
                            curContent.slideDown(300);
                        }
                        if ( event.stopPropagation ) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                });

                $('body').on({

                    click: function(e){

                        var elem=$(e.target);

                        var curElem = $('.aside-menu__wrap>li'),
                            curMenu= curElem.find('ul');

                        if(curMenu.is(':visible')){
                            curMenu.slideUp(300);
                        }
                    }
                });

            },
            _init = function() {


                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var Menu = function(obj) {

        //private properties
        var _obj = $(this),
            _items=$('.aside-menu__wrap>li');


        //private methods
        var _addEvents = function() {


                _items.on({
                    click: function(){
                        var curElem = $(this),
                            curMenu= curElem.find('ul');

                        if(curMenu.is(':visible')){
                            curMenu.slideUp(300);
                            curElem.removeClass('open');
                        }
                        else{
                            curMenu.slideDown(300);
                            curElem.addClass('open');
                        }
                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                });

                $('body').on({

                    click: function(e){

                        var elem=$(e.target);

                        var curElem = $('.aside-menu__wrap>li'),
                            curMenu= curElem.find('ul');

                        if(curMenu.is(':visible')){
                            curMenu.slideUp(300);
                            curElem.removeClass('open');
                        }
                    }
                });

            },
            _init = function() {


                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var Slider = function (obj) {

        //private properties
        var _self = this,
            _paginator = obj.find($('.slider__icon')),
            _next = $('.photo-button-next'),
            _prev = $('.photo-button-prev'),
            _nextSpecialist = $('.specialist-button-next'),
            _prevSpecialist = $('.specialist-button-prev'),
            _obj = obj;

        //private methods
        var _addEvents = function () {

            },
            _init = function () {
                _addEvents();
            };
        if (_obj.hasClass('slider__wrap')) {
            var _swiperPromo = new Swiper(_obj, {
                slidesPerView: 1,
                autoplay: 10000,
                speed: 1000,
                pagination: _paginator,
                loop: true,
                paginationClickable: true
            });
        }
        if (_obj.hasClass('photo__wrap')) {
            var _swiper = new Swiper(_obj, {
                nextButton: _next,
                prevButton: _prev,
                slidesPerView: 1,
                autoplay:5000,
                speed: 2000,
                loop: true
            });

        }
        if (_obj.hasClass('specialist__slider')) {
            var _specialist = new Swiper(_obj, {
                nextButton: _nextSpecialist,
                prevButton: _prevSpecialist,
                slidesPerView: 4,
                autoplay:5000,
                speed: 1000,
                loop: true,
                breakpoints: {
                    940: {
                        slidesPerView: 3
                    }
                }
            });

        }

        //public properties

        //public methods

        _init();
    };

} )();

