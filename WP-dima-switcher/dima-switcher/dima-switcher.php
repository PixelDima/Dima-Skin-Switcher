<?php

/*
Plugin Name: Dima - Skin Switcher
Plugin URI: http://codecanyon.net/item/dima-skin-switcher/7986406
Description: DIMA-SS is a powerful plugin build using jQuery and AngularJS. For web designer and developer.
Author: Adel Tahri
Version: 1.1
Author URI: http://ma.tt/
*/

add_action( 'wp_enqueue_scripts', 'wp_dima_switcher_style', 99 );

function wp_dima_switcher_style() {
  if ( ! is_admin() ) {
    wp_enqueue_style( 'switcher-style',  plugins_url( 'css/switcher-style-darck.css', __FILE__ ), null, '1.1' );
    wp_enqueue_style( 'minicolors',  plugins_url( 'css/jquery.minicolors.css', __FILE__ ), null, '1.1' );
  } 
}

function wp_dima_switcher_script()
{
  if ( ! is_admin() ) {
    wp_register_script( 'angular-script', plugins_url( 'js/libs/angular.min.js', __FILE__ ) );
    wp_enqueue_script( 'angular-script' );
    wp_register_script( 'angular-cookies', plugins_url( 'js/libs/angular-cookie.min.js', __FILE__ ) );
    //wp_register_script( 'angular-cookies', plugins_url( 'js/libs/angular-cookies.js', __FILE__ ) );
    wp_enqueue_script( 'angular-cookies' );
  }
}
add_action( 'wp_enqueue_scripts', 'wp_dima_switcher_script' );

function wp_dima_switcher_script_footer()
{
  if ( ! is_admin() ) {
    wp_register_script( 'jquery-10', plugins_url( 'js/libs/jquery-1.10.2.min.js', __FILE__ ) );
    wp_enqueue_script( 'jquery-10' );
    wp_register_script( 'minicolors-script', plugins_url( 'js/libs/jquery.minicolors.min.js', __FILE__ ) );
    wp_enqueue_script( 'minicolors-script' );
    wp_register_script( 'angular-config', plugins_url( 'js/config.js', __FILE__ ) );
    wp_enqueue_script( 'angular-config' );
    wp_register_script( 'angular-ng', plugins_url( 'js/ng-sw.js', __FILE__ ) );
    wp_enqueue_script( 'angular-ng' );
    
  }
}
add_action( 'wp_footer', 'wp_dima_switcher_script_footer' );

/**
 * filter to add skin-switcher
 */
add_filter('wp_head','add_dima_skin_switcher');

function add_dima_skin_switcher() {
  //echo file_get_contents(plugins_url('skin-switcher.php', __FILE__));
  require('skin-switcher.php');

}

?>