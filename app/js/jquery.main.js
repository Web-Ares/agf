"use strict";
( function(){

    $( function(){

        $('.aside-menu__wrap').each(function() {
            Menu( $( this ) );
        });

        $('.swiper-container').each(function () {
            Slider( $( this ) );
        });

        /*$.each( $( '.header__menu' ), function() {

            new MainMenu ( $( this ) );

        } );*/

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
    });

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
                        }
                        else{
                            curMenu.slideDown(300);
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

   /* var MainMenu = function( obj ) {

        //private properties
        var _self = this,
            _menu = obj,
            _window = $( window ),
            _showBtn = $( '.aside-menu__btn' );

        //private methods
        var _addEvents = function() {

                _showBtn.on( {
                    click: function() {

                        _openMenu( $( this ) );

                    }
                } );

                _window.on( {
                    resize: function () {

                        _resetStyle();

                    }
                } );

            },
            _init = function() {
                _menu[ 0 ].obj = _self;
                _addEvents();
            },
            _openMenu = function( elem )  {

                var curItem = elem;

                if( curItem.hasClass( 'opened' ) ) {

                    curItem.removeClass( 'opened' );

                } else {

                    curItem.addClass( 'opened' );
                }

            },
            _resetStyle = function() {

                _showBtn.removeClass( 'opened' );
                //_menu.removeAttr( 'style' );

            };

        _init();
    };*/

    var Slider = function (obj) {

        //private properties
        var _self = this,
            _paginator = obj.find($('.slider__icon')),
            _next = $('.photo-button-next'),
            _prev = $('.photo-button-prev'),
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
                autoplay: 15000,
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
                autoplay:1500,
                speed: 1000,
                loop: true
            });

        }

        //public properties

        //public methods

        _init();
    };

} )();