/*
 * jQuery Dima Skin Switcher
 * By PixelDima
 * @version 1.0.0
 */

//Fix JSHint
/*global angular,multipage,onepage,fullwidth,
boxedwidth,skinStyle,skinColor,settings,
showGrids,box_image,box_patterns,sw_input,floatBox,$,pgInto,
elementAndClassColor,elementAndClassBg,patt_images,bg_images,
styles_css,setColor,patternsInto,winHeight,boxedInto,boxedClass,timeout:false*/
+(function () {
    "use strict";
    // Create Angular module
    // inject angular cookies
    var app = angular.module("sw-switcher", ["ngCookies"]);

  /* app.directive('userinfo', ['$timeout',
        function (timer) {
            var directive = {};

            directive.restrict = 'E'; 
            directive.templateUrl = "dima-switcher/skin-switcher.html";

            return directive;
        }]);*/
    app.directive('userinfo', ['$timeout',
        function ($timeout) {
            return {
                link: function ($scope, element, attrs) {
                    $scope.$on('dataloaded', function () {
                        $timeout(function () { // You might need this timeout to be sure its run after DOM render.
                            element.width()
                            element.height()
                        }, 0, false);
                    })
                }
            };
}]);



    /*================Mine Controller===================*/
    app.controller("mainController", function ($scope) {
        //callback global variables in config.js
        $scope.settings = {
            display: false,
            multipage: multipage,
            onepage: onepage,
            fullwidth: fullwidth,
            boxedwidth: boxedwidth,
            skinStyle: skinStyle,
            skinColor: skinColor,
            settings: settings,
            showGrids: showGrids,
            box_image: box_image,
            box_patterns: box_patterns,
            sw_input: sw_input,
            floatBox: floatBox
        };

        //show and hide box menu depending on windows size    
        if ($(window).width() < 960) {
            $scope.settings.display = false;
        } else {
            $scope.settings.display = true;
        }       
        
    });

    /*================Cookie Controller===================*/
    app.controller("CookieController", function ($scope, $rootScope, $cookieStore) {

        var isBoxed = $cookieStore.get("boxVal"),
            isPatt = $cookieStore.get("pattCooki"),
            isImg = $cookieStore.get("imgCooki"),
            isStyle = $cookieStore.get("styleCooki"),
            isColored = $cookieStore.get("coloCokies");

        /**
         * show old patterns use cookies
         */
        if (isPatt) {
            $("body").css({
                "background": "url(dima-switcher/patterns/" + isPatt + ") top left repeat fixed"
            });
        }
        /**
         * show old bg image use cookies
         */
        if (isImg) {
            $("body").css({
                "background": "url(dima-switcher/bg/" + isImg + ") top left fixed"
            });
            $(pgInto).addClass("sw-background");
        }
        /**
         * show old style use cookies
         */
        if (isStyle) {
            $("link[data-them]").attr("href", isStyle);
            $cookieStore.remove("isStyle");
        }
        /**
         * [add or remove boxed class]
         * @type {Boolean}
         */
        if (isBoxed === boxedClass) {
            $("body").addClass(boxedClass);
        } else {
            $("body").removeClass(boxedClass);
        }
        /**
         * change color use cookies
         */
        if (isColored) {
            $(elementAndClassColor).css({
                "color": isColored
            });
            $(elementAndClassBg).css({
                "background": isColored
            }).show(200);
        }
        /**
         * [boxed save boxed change]
         * @return {[event]} [description]
         */
        $scope.boxed = function () {
            $rootScope.boxedval = "boxed";
            $cookieStore.put("boxVal", $rootScope.boxedval);
        };
        /**
         * [wide save fullwide change]
         * @return {[type]} [description]
         */
        $scope.wide = function () {
            $rootScope.boxedval = "wide";
            $cookieStore.put("boxVal", $rootScope.boxedval);
        };
        /**
         * [watch colorPic model and change color depend on input value]
         */
        $scope.$watch("colorPic", function () {
            var elem = $("#hue-demo");
            // Save current value of element
            elem.data("oldVal", elem.val());
            // Look for changes in the value
            elem.bind("propertychange keyup input paste", function () {
                // If value has changed...
                if (elem.data("oldVal") !== elem.val()) {
                    // Updated stored value
                    elem.data("oldVal", elem.val());
                    // Do action
                    $(elementAndClassColor).css({
                        "color": elem.val()
                    });
                    $(elementAndClassBg).css({
                        "background": elem.val()
                    }).show(200);
                }
            });
        });
    });

    /*====================Options Controller=======================*/
    //This controller responsible for saving Cookies // cahnge patterns and background image , colors
    app.controller("optionsController", function ($scope, $rootScope, $cookieStore, $timeout) {
        $scope.patterns = patt_images;
        $scope.bg_image = bg_images;
        $scope.styles = styles_css;
        $scope.colors = setColor;
        $scope.elmColor = elementAndClassColor;
        $scope.elmBg = elementAndClassBg;
        $scope.show = false;

        /**
         * [savaPattern to add and save patterns]
         * @param  {[url]} pattern
         * @return {[event]}  [change patterns]
         */
        $scope.savaPattern = function (pattern) {
            $rootScope.pattCooki = pattern;
            $(this).parent().siblings().removeClass("active").end().addClass("active");
            $(patternsInto).removeClass("sw-background");
            $(patternsInto).css({
                "background": "url(dima-switcher/patterns/" + pattern + ") top left repeat fixed"
            });
            $cookieStore.put("pattCooki", $rootScope.pattCooki);
            $cookieStore.remove("imgCooki");
        };

        /**
         * [savaImage to save and change image backgrounds]
         * @param  {[URL]} image
         * @return {[event]} [change image backgrounds]
         */
        $scope.savaImage = function (image) {
            $rootScope.imgCooki = image;

            $(this).parent().siblings().removeClass("active").end().addClass("active");
            $(pgInto).css({
                "background": "url(dima-switcher/bg/" + image + ") top left fixed"
            });
            $(pgInto).addClass("sw-background");

            $cookieStore.put("imgCooki", $rootScope.imgCooki);
            $cookieStore.remove("pattCooki");
        };

        /**
         * [savaStyle to save and change css style file]
         * @param  {[url]} style
         * @return {[event]}  [change css style file]
         */
        $scope.savaStyle = function (style) {
            $rootScope.styleCooki = style;
            $("link[data-them]").attr("href", style); // change the style file usin jQuery
            $cookieStore.put("styleCooki", $rootScope.styleCooki); //save cookies
        };

        /**
         * [showGrids to show and hide grids system]
         * @return {[event]} [show and hide grids system]
         */
        $scope.showGrids = function () {
            $(".sw-grid").toggleClass("show");
        };
        /**
         * [saveColors To save and change color and background colors from input using colorpic plugin]
         * @return {[event]} [save and change color]
         */
        $scope.saveColors = function () {
            $rootScope.coloCokies = $("#hue-demo").val();
            $cookieStore.put("coloCokies", $rootScope.coloCokies);
        };
        /**
         * [changeColors To save and change color and background colors]
         * @param  {[hex color]}
         *  @return {[event]} [save and change color]
         */
        $scope.changeColors = function (col) {
            $($scope.elmColor).css({
                "color": col
            });
            $($scope.elmBg).css({
                "background": col
            }).show(200);

            $rootScope.coloCokies = col;
            $cookieStore.put("coloCokies", $rootScope.coloCokies);
        };
        /**
         * [savePattIn to get patterns url from input and save it]
         * @return {[event]} [save and change patterns]
         */
        $scope.savePattIn = function () {
            var patterns = $("[name=\"patterns-colors\"]").val();
            $(patternsInto).removeClass("sw-background");
            $(patternsInto).css({
                "background": "url(" + patterns + ") top left repeat fixed"
            });
            return false;
        };
        /**
         * [saveImgIn to get bg image url from input and save it]
         * @return {[event]} [save and change bg image]
         */
        $scope.saveImgIn = function () {
            var bgImage = $("[name=\"bg-image\"]").val();
            $(pgInto).css({
                "background": "url(" + bgImage + ") top left fixed"
            });
            $(pgInto).addClass("sw-background");
            return false;
        };
        /**
         * [reset to reset the cookies ]
         * @return {[event]} [remove cookies]
         */
        $scope.reset = function () {
            //remove cookies
            $cookieStore.remove("imgCooki");
            $cookieStore.remove("pattCooki");
            $cookieStore.remove("styleCooki");
            $cookieStore.remove("boxVal");
            $cookieStore.remove("patttCooki");
            $cookieStore.remove("coloCokies");
            //refresh a page
            location.reload();
        };
        /**
         * [to reset the cookies after X Ms ]
         * @return {[event]} [remove cookies]
         */
        $timeout(function () {
            $cookieStore.remove("imgCooki");
            $cookieStore.remove("pattCooki");
            $cookieStore.remove("styleCooki");
            $cookieStore.remove("boxVal");
            $cookieStore.remove("patttCooki");
            $cookieStore.remove("coloCokies");
        }, timeout);
    });

    //jQuery part=============================================================================================

    $(document).ready(function () {
        //Media
        // Get the windows height
        var winHeight = $('body').height();
        $(".sw-grid").css("height", winHeight);
        /**
         * [minicolors]
         * @return {[type]} [description]
         */
        $(".demo").each(function () {
            $(this).minicolors({
                animationEasing: "swing",
                theme: "bootstrap"
            });
        });

       
        
        //-----main funcion-----------------
        function dima_switcher() {
            //================================================================================================//
            /**
             * [display all patterns]
             * @return {[type]} [description]
             */
            $(".sw-patterns a").each(function () {
                var patt = $(this).attr("data-image");
                if (patt) {
                    $(this).css({
                        "background": "url(dima-switcher/patterns/" + patt + ")"
                    });
                }
            });

            /**
             * [display all bg images]
             * @return {[type]} [description]
             */
            $(".sw-images a").each(function () {
                var image = $(this).attr("data-image");
                if (image) {
                    if (image) {
                        $(this).append("<img src=dima-switcher/bg/small-" + image + " alt=\"\">");
                    }
                }
            });
            /**
             * [display favorites colors]
             * @return {[type]} [description]
             */
            $(".sw-skin-color a").each(function () {
                var color = $(this).attr("data-color");
                $(this).css("background-color", color);
            });

            //================================================================================================//
            /**
             * [hideMainBox hide main box]
             * @return {[none]} []
             */
            function hideMainBox() {
                $("#sw-main-box").removeClass("slide");
                $("#sw-open-icon").removeClass("dima-active");
                $("#sw-open-icon").removeClass("sw-active");
            }

            /**
             * [Show and hide main box]
             * @return {[none]} []
             */
            $("#sw-open-icon").click(function () {

                if (!$(this).hasClass("sw-active")) {
                    $("#sw-main-box").addClass("slide");
                    $(this).addClass("sw-active");
                } else {
                    hideMainBox();
                }
                return false;
            });
            /**
             * [hide mine box whene klick out of the box]
             * @return {[type]} [description]
             */
            $(document).click(function () {
                hideMainBox();
            });

            /**
             * [Tabs ...]
             * @return {[none]} []
             */
            $(".layout-switer-item").on("click", function () {
                var state = $(this).attr("data-name");
                if (state === "boxed") {
                    $(boxedInto).addClass(boxedClass);
                    $(".sw-boxed-options").slideToggle();
                    $(".sw-single-pages").slideUp();
                } else if (state === "onepage") {
                    $(".sw-single-pages").slideToggle();
                    $(".sw-boxed-options").slideUp();
                    $(".sw-page-selector a").removeClass("active");
                } else {
                    $(boxedInto).removeClass(boxedClass);
                    $(".sw-boxed-options").slideUp();
                    $(".sw-single-pages").slideUp();
                }
                $(".layout-switer-item").removeClass("active");
                $(this).toggleClass("active");
                return false;
            });
            //================================================================================================//
        } //----!dima-sw
        //================================================================================================//
        //call the main function.
        dima_switcher();
    });
}());