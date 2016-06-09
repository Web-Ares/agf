"use strict";
( function() {

    $( function() {

        $( '.catalog' ).each( function() {
            Catalog( $( this ) );
        });

        $( '.aside-menu__wrap' ).each( function() {
            Menu( $( this ) );
        });

        $( '.swiper-container' ).each( function() {
            Slider( $( this ) );
        });

        $( '.header__menu-btn' ).each( function() {
            MenuOpen($(this));
        });

        $( '.aside-menu__btn' ).each( function() {
            MenuOpen( $ ( this ) );
        });

        $( '.btn-up' ).each( function() {
            SlideToTop( $( this ) );
        });

        $('.popup').each(function(){
            new Popup($(this));
        });

    });

    var SlideToTop = function( obj ) {

        //private properties
        var _obj = obj;

        //private methods
        var _addEvents = function() {

                _obj.on( {
                    click: function() {

                        $( 'html, body' ).animate( {scrollTop: 0}, 600 );
                    }
                });

                $(window).on( {
                    'scroll':function() {
                        if( $( window ).scrollTop() > $( window ).height() ) {
                            $( _obj ).fadeIn();
                        } else {
                            $( _obj ).fadeOut();
                        }
                        if( $( window ).scrollTop() + $( window ).height() > $( '.site__footer' ).offset().top - 16 ) {
                            $( _obj ).css( { bottom: $( window ).scrollTop() + $( window ).height() - $( '.site__footer' ).offset().top - 66 } );
                        } else {
                            $( _obj ).css( { bottom: '0' } );
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

    var MenuOpen = function(obj) {

        //private properties
        var _obj = obj;

        //private methods
        var _addEvents = function() {

                _obj.on( {
                    click: function() {
                        var curElem = _obj.parent();

                        console.log( curElem );

                        if (curElem.hasClass( 'active' )) {
                            curElem.removeClass( 'active' );
                        } else {
                            curElem.addClass( 'active' );
                        }
                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
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

                _items.on( {
                    click: function() {
                        var curElem = $( this ),
                            curMenu= curElem.find( 'ul' );

                        if( curMenu.is( ':visible' ) ) {
                            curMenu.slideUp( 300 );
                            curElem.removeClass( 'open' );
                        }
                        else{
                            curMenu.slideDown( 300 );
                            curElem.addClass( 'open' );
                        }
                        if ( event.stopPropagation ) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                });

                $('body').on( {

                    click: function(e) {

                        var elem=$(e.target);

                        var curElem = $( '.aside-menu__wrap>li' ),
                            curMenu= curElem.find( 'ul' );

                        if( curMenu.is( ':visible' ) ) {
                            curMenu.slideUp( 300 );
                            curElem.removeClass( 'open' );
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

    var Popup = function (obj) {

        var _self = this,
            _popup = obj,
            _btnShow = $( '.site__header-request' ),
            _form = $( '.popup__wrap'),
            _btnClose = _popup.find( '.popup__close' ),
            _html = $( 'html' );

        var _addEvents = function () {

                _btnShow.on( {
                    click: function(){
                        var curPopup = $( '.popup' );
                        _showPopup( curPopup );
                        return false;
                    }
                } );

                _btnClose.on( {
                    click: function() {
                        var curPopup = $( this ).parents( '.popup' );
                        _hidePopup( curPopup );
                        return false;
                    }
                } );
                _popup.click( function() {
                    var curPopup = _popup;
                    if ( _self._noClosePopup ) {
                        _self._noClosePopup = false;
                        return false;
                    }
                    _hidePopup( curPopup );
                });
                 _form.on({
                    click: function(event) {
                        event = event || window.event;
                        event.stopPropagation();
                    }
                });
            },
            _build = function(){
                _self._noClosePopup = false;
            },
            _showPopup = function( curPopup ){
                _popup.addClass( 'popup_opened' );
                _html.css({
                    "overflow-y": "hidden",
                    paddingRight: "17px"
                });
            },
            _hidePopup = function(curPopup){
                curPopup.removeClass( 'popup_opened' );
                _html.css({
                    "overflow-y": "scroll",
                    paddingRight: 0
                });
            },
            _init = function () {
                _build();
                _addEvents();
            };

        _init();
    };

    var Slider = function ( obj ) {

        //private properties
        var _self = this,
            _paginator = obj.find($( '.slider__icon' )),
            _next = $( '.photo-next' ),
            _prev = $( '.photo-prev' ),
            _nextPhoto = $( '.photo_button-next' ),
            _prevPhoto = $( '.photo_button-prev' ),
            _nextSpecialist = $( '.specialist-button-next' ),
            _prevSpecialist = $( '.specialist-button-prev' ),
            _nextDescription = $( '.description_button-next' ),
            _prevDescription = $( '.description_button-prev' ),
            _obj = obj;

        //private methods
        var _addEvents = function () {

            },
            _init = function () {
                _addEvents();
            };
        if ( _obj.hasClass( 'slider__wrap' ) ) {
            var _swiperPromo = new Swiper( _obj, {
                slidesPerView: 1,
                autoplay: 10000,
                speed: 1000,
                pagination: _paginator,
                loop: true,
                paginationClickable: true
            });
        }
        if ( _obj.hasClass( 'photo__wrap' ) ) {
            var _swiper = new Swiper( _obj, {
                nextButton: _next,
                prevButton: _prev,
                slidesPerView: 1,
                autoplay:5000,
                speed: 2000,
                pagination: ( '.photo__point' ),
                loop: true,
                paginationClickable: true
            });

        }
        if ( _obj.hasClass( 'photo_wrap' ) ) {
            var _swiper1 = new Swiper( _obj, {
                nextButton: _nextPhoto,
                prevButton: _prevPhoto,
                slidesPerView: 1,
                autoplay:5000,
                speed: 2000,
                pagination: ( '.photo_point' ),
                loop: true,
                paginationClickable: true
            });

        }
        if ( _obj.hasClass( 'specialist__slider' ) ) {
            var _specialist = new Swiper( _obj, {
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

        if ( _obj.hasClass( 'description__wrap' ) ) {
            var _specialist1 = new Swiper( _obj, {
                nextButton: _nextDescription,
                prevButton: _prevDescription,
                slidesPerView: 5,
                autoplay:5000,
                speed: 1000,
                loop: true,
                breakpoints: {
                    768: {
                        slidesPerView: 5
                    },
                    600: {
                        slidesPerView: 3
                    },
                    400: {
                        slidesPerView: 2
                    }
                }
            });
        }

        //public properties

        //public methods

        _init();
    };

} )();

