(function ($) {
    "use strict";

    var windowWidth = $(window).width(),
        nav = $(".dima-nav").outerHeight(),
        NavbarFexed = true,
        topbar = false;



    $(document).ready(function () {

        var PixelDima = {

            initialized: false,
            initialize: function () {
                //Prevent multiple initializations           
                if (this.initialized) {
                    return;
                }
                //Did not initialize
                this.initialized = true;
                this.build();
                this.events();
                $("body").imagesLoaded();
            },

            build: function () {

                //Mobile Nav Menu
                this.mobile_nav();

                // Scroll to Top Button.
                $.scrollToTop();

                this.Scroll();

                //TOP NavBAr
                this.ShowAndHideTopNav();

                this.revolution();

                //Fix NavBAr
                this.fixNav();

                //Sub menu function ( animation and more - by superfish.js script)
                this.sub_menu();

                //search box
                this.search_box();

                //flat shadow for icons vox
                this.flatshadow();

                //progress bar animation and color
                this.progress();

                //testimonial animation
                this.testimonial();

                //mediaelementjs mp3 mp4 youtube ....
                this.mediaelementjs();

                //Tooltip And Accordion and Tabs we use bootstrap JS 
                this.tabs();

                //alert and info .. messages
                this.notification();

                this.skrollr_function();

                //this.bigvedio()

                this.CountUp();

                this.map();

            },

            mobile_nav: function () {
                var navigation = $(".dima-nav"),
                    dima_btn_nav = $("a.dima-btn-nav");

                $("a.dima-btn-nav").click(function () {
                    //hide menu 
                    if (dima_btn_nav.hasClass("btn-active")) {
                        navigation.slideUp(); // hide 
                        dima_btn_nav.removeClass("btn-active");
                    } else {
                        dima_btn_nav.addClass("btn-active");
                        navigation.slideDown(); //show the menu 
                    }
                });
            },



            sub_menu: function () {
                var dimaShow = {
                        Object: ""
                    },
                    dimaHide = {
                        Object: ""
                    };
                dimaShow.opacity = "show";
                dimaShow.width = "show";
                dimaShow.height = "show";

                dimaHide.width = "hide";
                dimaHide.height = "hide";

                $("ul.sf-menu").superfish({
                    delay: 800,
                    dualColumn: 7,
                    tripleColumn: 14,
                    animation: dimaShow,
                    animationOut: dimaHide,
                    speed: "fast",
                    speedOut: "fast",
                    autoArrows: true
                });
            },

            ShowAndHideTopNav: function () {

                if (topbar) {
                    $(".dima-topbar").css("display", "none");
                }
            },
            Scroll: function () {

                $(".dima-nav").localScroll({
                    target: "body",
                    axis: "y",
                    duration: 800,
                    margin: true,
                    offset: -(nav)
                });
            },

            map: function () {
                $("#map").each(function () {
                    var lem = $("#map"),
                        lat = lem.attr("data-lat"),
                        lng = lem.attr("data-lng"),

                        style = [
                            {
                                "featureType": "water",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "hue": "#165c64"
                                    },
                                    {
                                        "saturation": 34
                                    },
                                    {
                                        "lightness": -69
                                    },
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "hue": "#b7caaa"
                                    },
                                    {
                                        "saturation": -14
                                    },
                                    {
                                        "lightness": -18
                                    },
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape.man_made",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "hue": "#cbdac1"
                                    },
                                    {
                                        "saturation": -6
                                    },
                                    {
                                        "lightness": -9
                                    },
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "hue": "#8d9b83"
                                    },
                                    {
                                        "saturation": -89
                                    },
                                    {
                                        "lightness": -12
                                    },
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "hue": "#d4dad0"
                                    },
                                    {
                                        "saturation": -88
                                    },
                                    {
                                        "lightness": 54
                                    },
                                    {
                                        "visibility": "simplified"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "hue": "#bdc5b6"
                                    },
                                    {
                                        "saturation": -89
                                    },
                                    {
                                        "lightness": -3
                                    },
                                    {
                                        "visibility": "simplified"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "hue": "#bdc5b6"
                                    },
                                    {
                                        "saturation": -89
                                    },
                                    {
                                        "lightness": -26
                                    },
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "hue": "#c17118"
                                    },
                                    {
                                        "saturation": 61
                                    },
                                    {
                                        "lightness": -45
                                    },
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "hue": "#8ba975"
                                    },
                                    {
                                        "saturation": -46
                                    },
                                    {
                                        "lightness": -28
                                    },
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "hue": "#a43218"
                                    },
                                    {
                                        "saturation": 74
                                    },
                                    {
                                        "lightness": -51
                                    },
                                    {
                                        "visibility": "simplified"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative.province",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "hue": "#ffffff"
                                    },
                                    {
                                        "saturation": 0
                                    },
                                    {
                                        "lightness": 100
                                    },
                                    {
                                        "visibility": "simplified"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative.neighborhood",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "hue": "#ffffff"
                                    },
                                    {
                                        "saturation": 0
                                    },
                                    {
                                        "lightness": 100
                                    },
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },

                            {
                                "featureType": "administrative.locality",
                                "elementType": "labels",
                                "stylers": [
                                    {
                                        "hue": "#ffffff"
                                    },
                                    {
                                        "saturation": 0
                                    },
                                    {
                                        "lightness": 100
                                    },
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative.land_parcel",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "hue": "#ffffff"
                                    },
                                    {
                                        "saturation": 0
                                    },
                                    {
                                        "lightness": 100
                                    },
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "hue": "#3a3935"
                                    },
                                    {
                                        "saturation": 5
                                    },
                                    {
                                        "lightness": -57
                                    },
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.medical",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "hue": "#cba923"
                                    },
                                    {
                                        "saturation": 50
                                    },
                                    {
                                        "lightness": -46
                                    },
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            }
                        ],

                        map = new GMaps({
                            el: "#map",
                            lat: lat,
                            lng: lng,
                            zoom: 15,
                            styles: style,
                            panControl: true,
                            zoomControl: true,

                            scaleControl: false,
                            scrollwheel: false,
                            disableDoubleClickZoom: true,
                            draggable: true,

                            zoomControlOpt: {
                                style: "SMALL",
                                position: "TOP_LEFT"
                            }
                        });
                    // ADD Marker 
                    map.addMarker({
                        lat: lat,
                        lng: lng,
                        title: "Lorem",
                        infoWindow: {
                            content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. . </p>"
                        }
                    });


                });
            },

            revolution: function () {
                var revapi;
                revapi = $(".tp-banner").revolution({
                    delay: 15000,
                    startwidth: 1170,
                    startheight: 500,
                    hideThumbs: 10,
                    fullWidth: "off",
                    fullScreen: "on",
                    fullScreenOffsetContainer: ""
                });
            },

            search_box: function () {
                ////search box event
                $(".search-btn").click(function () {
                    $("#search-box").slideDown(450, "easeOutCirc");
                    $("#search-box").css({
                        "height": "70px"
                    });
                    $("#search-box input[type=text]").focus();
                    return false;
                });
                
                function closeSearch() {
                    $("#search-box").slideUp(450, "easeOutExpo");
                }
                
                ////close search btn event
                $("#close").click(function () {
                    closeSearch();
                    return false;
                });
                //if user clicks away from the search close it
                $("#search-box input[type=text]").blur(function (e) {
                    closeSearch();
                });

                
            },


            flatshadow: function () {
                $(".flat-icon").flatshadow({
                    color: "#3498DB",
                    angle: "SE",
                    fade: false,
                    boxShadow: false // Accept full 6 digit hex color (#000000)
                });
            },

            CountUp: function () {
                var options = {
                    useEasing: true,
                    useGrouping: true,
                    separator: ",",
                    decimal: "."
                };

                $(".countUp").each(function () {

                    var from = $(".countUp #countUp-1").attr("data-from"),
                        to = $(".countUp #countUp-1").attr("data-to"),
                        from_2 = $(".countUp #countUp-2").attr("data-from"),
                        to_2 = $(".countUp #countUp-2").attr("data-to"),
                        from_3 = $(".countUp #countUp-3").attr("data-from"),
                        to_3 = $(".countUp #countUp-3").attr("data-to"),

                        countUp_1 = new countUp("countUp-1", from, to, 0, 5, options),
                        countUp_2 = new countUp("countUp-2", from_2, to_2, 0, 5, options),
                        countUp_3 = new countUp("countUp-3", from_3, to_3, 0, 5, options);
                    countUp_1.start();
                    countUp_2.start();
                    countUp_3.start();

                });
            },



            fixNav: function () {
                if (!NavbarFexed) {
                    return;
                }
                $.fn.fix_navbar = function (el) {
                    el = $(this);
                    el.addClass("fix_nav");
                    var clean_nav = $(".dima"),

                        fixAll = function (el) {
                            var parent = el.parent(),
                                offsetTop = parent.offset().top;
                            if ($(document).scrollTop() > offsetTop) {
                                if ($(document).scrollTop() > (el.height() - $(window).height())) {
                                    el.addClass("fixed");
                                    if (windowWidth > 989) {
                                        clean_nav.addClass("clear-nav").css("padding-top", el.outerHeight()).show();
                                    }
                                } else {
                                    el.removeClass("fixed");
                                    clean_nav.removeClass("clear-nav").hide();
                                }
                            } else {
                                el.removeClass("fixed");
                                clean_nav.removeClass("clear-nav").hide();
                            }
                        };
                    $(window).scroll(function () {
                        fixAll(el);
                    });
                    $(window).ready(function () {
                        fixAll(el);
                    });
                };
            },



            progress: function () {

                //progress bar animaition
                setTimeout(function () {
                    $(".progress .progress-bar").each(function () {
                        var el = $(this),
                            perc = el.attr("aria-valuenow"),
                            current_percent = 0,
                            progress = setInterval(function () {
                                if (current_percent >= perc) {
                                    clearInterval(progress);
                                } else {
                                    current_percent += 1;
                                    el.css("width", (current_percent) + "%");
                                }
                            }, 5);
                    });

                }, 300);

                //progress bar color
                $('.progress.styleTwo').append(function () {
                    var elm = $(this),
                        color = elm.attr("color-val");
                    elm.css('border-color', color);
                    elm.find('.progress-bar').css('background-color', color);
                    elm.find('span').css('border-top-color', color);
                });

                //circular  
                $('.dial').each(function () {

                    var elm = $(this),
                        color = elm.attr("data-fgColor"),
                        perc = elm.attr("value");

                    elm.knob({
                        'value': 0,
                        'min': 0,
                        'max': 100,
                        "skin": "tron",
                        "readOnly": true,
                        "thickness": 0.1,
                        'dynamicDraw': true,
                        "displayInput": false
                    });

                    $({
                        value: 0
                    }).animate({
                        value: perc
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        progress: function () {
                            elm.val(Math.ceil(this.value)).trigger('change');
                        }
                    });

                    //circular progress bar color
                    $(this).append(function () {
                        elm.parent().parent().find('.circular-bar-content').css('color', color);
                        elm.parent().parent().find('.circular-bar-content label').text(perc + '%');
                    });

                });


            },



            testimonial: function () {
                //testimonial slider
                $("#owl-testimonial").owlCarousel({
                    navigation: false, // Show next and prev buttons
                    slideSpeed: 300,
                    lazyLoad: true,
                    paginationSpeed: 400,
                    singleItem: true,
                    autoPlay: true,
                    autoHeight: true
                });

                $("div.owl-carousel:not(.manual)").each(function () {
                    var elm = $(this),
                        items = elm.attr("owl-namber"),
                        autoPlay = elm.attr("owl-autoPlay"),
                        navigation = elm.attr("owl-navigation"),
                        pagination = elm.attr("owl-pagination");
                    
                    if (autoPlay === "true") {
                        autoPlay = true;
                    } else {
                        autoPlay = false;
                    }
                     
                    if (pagination === "true") {
                        pagination = true;
                    } else {
                        pagination = false;
                    }

                    // Custom Navigation Events
                    if (navigation === "true") {
                        navigation = true;
                        elm.next().css("display", "block");

                        $(".next").click(function () {
                            elm.trigger("owl.next");
                        });
                        $(".prev").click(function () {
                            elm.trigger("owl.prev");
                        });

                    } else {
                        navigation = false;
                    }

                    elm.owlCarousel({

                        itemsDesktop: [1199, 4],
                        itemsDesktopSmall: [980, 3],
                        itemsTablet: [768, 2],
                        itemsTabletSmall: false,
                        itemsMobile: [479, 1],

                        navigation: false,
                        pagination: pagination,
                        slideSpeed: 300,
                        items: items,
                        paginationSpeed: 400,
                        autoPlay: autoPlay,

                        // Responsive
                        responsive: true,
                        responsiveRefreshRate: 200,
                        responsiveBaseWidth: window,

                        // CSS Styles
                        baseClass: "owl-carousel",
                        theme: "owl-theme",

                        //Lazy load
                        lazyLoad: true,
                        lazyFollow: true,
                        lazyEffect: "fade"


                    });
                });
            },


            mediaelementjs: function () {
                $("audio,video").mediaelementplayer({
                    success: function (media, node, player) {
                        $("#" + node.id + "-mode").html("mode: " + media.pluginType);
                    }
                });
            },

            skrollr_function: function () {
                // Init Skrollr
                var skr = skrollr.init({
                    forceHeight: false
                });
                // Refresh Skrollr after resizing our sections
                skr.refresh($(".homeSlide"));
            },


            tabs: function () {

                $("body").tooltip({
                    selector: "[data-toggle=tooltip]",
                    animation: true,
                    html: true
                });

                $(".collapse").collapse({
                    toggle: false
                });


                $("#dima-tab-nav a:first").tab("show"); // Select first tab
                $("#dima-tab-nav a").click(function (e) {
                    e.preventDefault();
                    $(this).tab("show");
                });

            },

            notification: function () {
                // $(".dima-alert").alert()
                $(".dima-alert button.close").click(function (e) {
                    $(this).parent().fadeOut(200, "easeOutExpo");
                });
            },

            events: function () {
                //Fix The Navbar 
                if (windowWidth > 960 && NavbarFexed) {
                    $(".dima-navbar").fix_navbar();
                }

                //Add class active Based on URL http://css-tricks.com/snippets/jquery/add-active-navigation-class-based-on-url/
                $(function () {
                    $('.sidebar li a[href^="' + location.pathname.split("/")[2] + '"]').parent().addClass('active');
                });

                $(window).resize(function () {
                    windowWidth = $(window).width();
                    $(".dima-navbar").fix_navbar();
                });
            }
        };

        //START
        PixelDima.initialize();

    });


    //Resize End 

}($));