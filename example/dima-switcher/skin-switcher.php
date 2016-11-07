<?php
$plugin_dir = "http://localhost/Dima-Skin-Switcher/example/";
?>

<div id="sw-main-box" ng-controller="mainController" ng-class="{right: 'sw-right', left: 'sw-left'}[settings.floatBox] " ng-app="sw-switcher" ng-show="{{settings.display}}" ng-click="$event.stopPropagation();"  class="hide-me">

    <div id="sw-open-icon">
        <a href="#">
            <img src="<?php echo $plugin_dir ?>/dima-switcher/icons/cog.png" alt="">
        </a>
    </div>

    <p class="sw-title"><span>layout</span>
    </p>
    <section class="sw-layout">

        <!-- MULTIPAGE -->
        <div class="sw-page-selector multipage" ng-show="{{settings.multipage}}">
            <a class="multipage-page" href="">
                <img src="<?php echo $plugin_dir ?>/dima-switcher/icons/multi.png" alt="">
                <span>MULTIPAGE</span>
            </a>
        </div>
        <!-- !MULTIPAGE -->

        <!-- One Page -->
        <div class="layout-switer-item onepage" data-name="onepage" ng-show="{{settings.onepage}}">
            <div class="sw-page-selector">
                <a class="" href="#">
                    <img src="<?php echo $plugin_dir ?>/dima-switcher/icons/one.png" alt="">
                    <span>EXAMPLES</span>
                    <img class="down" src="<?php echo $plugin_dir ?>/dima-switcher/icons/down.png" alt="">
                </a>
            </div>
        </div>
        <!-- List of one page -->
        <div data-name="wide" id="scrollbar">
            <div class="sw-single-pages">
                <ul>
                    <li><a href="#">#Example One</a></li>
                    <li><a href="#">#Example Two</a></li>
                    <li><a href="#">#Example Three</a></li>
                </ul>
            </div>
        </div>
        <!-- !One Page -->

        <!-- FULLWIDTH -->
        <div ng-controller="CookieController">
            <div class="layout-switer-item fullwidth" data-name="wide" ng-show="{{settings.fullwidth}}">
                <div class="sw-page-selector" ng-click="wide()">
                    <a class="sw-wide-link" href="#">
                        <img src="<?php echo $plugin_dir ?>/dima-switcher/icons/full.png" alt=""><span>FULLWIDTH</span>
                    </a>
                </div>
            </div>
            <!-- !FULLWIDTH -->


            <!-- Boxed -->
            <div class="layout-switer-item boxedwidth" data-name="boxed" ng-show="{{settings.boxedwidth}}">
                <div class="sw-page-selector" ng-click="boxed()">
                    <a class="sw-boxed-link" href="#">
                        <img src="<?php echo $plugin_dir ?>/dima-switcher/icons/boxed.png" alt="">
                        <span>BOXED</span>
                    </a>
                    <img class="down" src="<?php echo $plugin_dir ?>/dima-switcher/icons/down.png" alt="">
                </div>
            </div>
        </div>
        <div class="sw-boxed-options" ng-controller="optionsController">
            <section class="sw-patterns" id="scrollbar" ng-show="{{settings.box_patterns}}">
                <p class="sw-sub-title">Patterns</p>

                <ul>
                    <li ng-repeat="pattern in patterns">
                        <a ng-click="savaPattern(pattern)" data-image="{{pattern}}" href="#"></a>
                    </li>
                </ul>
                <div class="sw-input urlIn auto" ng-show="{{settings.sw_input}}">
                    <input type="text" name="patterns-colors" placeholder="http://">
                    <a ng-click="savePattIn()" class="patterns-colors" href="#">&#43;</a>
                </div>
            </section>

            <section class="sw-images" id="scrollbar" ng-show="{{settings.box_image}}">
                <p class="sw-sub-title">Images</p>

                <ul>
                    <li ng-repeat="bg in bg_image">
                        <a ng-click="savaImage(bg)" data-image="{{bg}}" href="#"></a>
                    </li>
                </ul>

                <div class="sw-input urlIn auto" ng-show="{{settings.sw_input}}">
                    <input type="text" name="bg-image" placeholder="http://">
                    <a ng-click="saveImgIn()" class="bg-image" href="#">&#43;</a>
                </div>
            </section>
        </div>
        <!-- !Boxed -->

    </section>


    <div id="skinStyle" ng-show="{{settings.skinStyle}}">
        <p class="sw-title"><span>Skin style</span>
        </p>
        <section class="sw-skin-style" ng-controller="optionsController" id="scrollbar">
            <ul>
                <li ng-repeat="style in styles">
                    <a ng-click="savaStyle(style[0])" data-style="{{style[0]}}" href="#">{{style[1]}}</a>
                </li>
            </ul>
        </section>
    </div>

    <div id="skinStyle" ng-show="{{settings.skinStyle}}">
        <p class="sw-title"><span>Skin style</span>
        </p>
        <section class="sw-skin-color" ng-controller="optionsController" id="scrollbar">
            <ul>
                <li ng-repeat="style in styles">
                    <a ng-click="savaStyle(style[0])" data-color="{{style[1]}}" href="#"></a>
                </li>
            </ul>
        </section>        
    </div>


    <div id="skinColor" ng-show="{{settings.skinColor}}">
        <p class="sw-title"><span>Skin color</span>
        </p>
        <section class="sw-skin-color" ng-controller="optionsController" id="scrollbar">
            <ul>
                <li ng-repeat="color in colors">
                    <a ng-click="changeColors(color[0])" data-color="{{color[0]}}" href="#"></a>
                </li>
            </ul>
        </section>

        <!-- pic color you want -->
        <div class="sw-input" ng-controller="optionsController">
            <input type="text" id="hue-demo" ng-model="colorPic" class="demo" data-control="hue" value="">
            <a ng-click="saveColors()" href="#">&#43;</a>
        </div>
    </div>

    <div id="settings" ng-show="{{settings.settings}}">
        <p class="sw-title"><span>settings</span>
            <section class="sw-skin-style" ng-controller="optionsController">
                <ul>
                    <li><a ng-click="reset()" href="#">reset</a>
                    </li>
                    <li><a id="showGrids" ng-click="showGrids()" ng-show="{{settings.showGrids}}" href="#">Show Grids</a>
                    </li>
                </ul>
            </section>
    </div>

</div>
