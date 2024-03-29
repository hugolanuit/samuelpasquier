<?php

namespace Mill3WP\Setup;

use Mill3WP\Assets;

/**
 * Theme setup
 */
function setup()
{
    // Make theme available for translation
    load_theme_textdomain('mill3wp', get_template_directory() . '/languages');

    // Register wp_nav_menu() menus
    // http://codex.wordpress.org/Function_Reference/register_nav_menus
    register_nav_menus([
        'primary_navigation' => __('Main navigation', 'mill3wp'),
        'secondary_navigation' => __('Secondary Navigation', 'mill3wp'),
        'footer_navigation' => __('Footer navigation', 'mill3wp'),
        'social_links' => __('Social network links', 'mill3wp')
    ]);

    // Enable features
    //add_theme_support('post-formats', array('aside', 'gallery'));
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('menus');

    // Enable post thumbnails
    // http://codex.wordpress.org/Post_Thumbnails
    // http://codex.wordpress.org/Function_Reference/set_post_thumbnail_size
    // http://codex.wordpress.org/Function_Reference/add_image_size
    add_image_size('pixel', 100);
    add_image_size('small', 576);
    add_image_size('large', 1024);
    add_image_size('largest', 1800);
    add_image_size('large-retina', 2400);
    add_image_size('largest-retina', 3600);
    add_image_size('full', '');

    // Enable HTML5 markup support
    // http://codex.wordpress.org/Function_Reference/add_theme_support#HTML5
    add_theme_support('html5', array(
        'comment-list',
        'comment-form',
        'search-form',
        'gallery',
        'caption'
    ));

    // Use main stylesheet for visual editor
    // To add custom styles edit /assets/styles/layouts/_tinymce.scss
    add_editor_style(Assets\Asset_File_path('editor-style', 'css'));
}
add_action('after_setup_theme', __NAMESPACE__ . '\\setup');

/**
 * Theme assets
 */
function assets()
{
    // *****
    // external scripts
    // wp_enqueue_script('mill3wp/gmaps', "https://maps.googleapis.com/maps/api/js?key=[key]&libraries=places&language={$language}", null, true, true);
    // *****

    wp_enqueue_style('mill3wp/gfonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300:400&display=swap', [], false, null);

    // webpack dev
    if (THEME_DEV === true) {
        wp_enqueue_script(
            'mill3wp/webpack',
            "http://localhost:{$_ENV['WEBPACK_DEV_SERVER_PORT']}/js/app.bundle.js",
            null,
            null,
            true
        );
    } else {
        wp_enqueue_style(
            'mill3wp/css',
            Assets\Asset_File_path('style', 'css'),
            false,
            null
        );
        wp_enqueue_script(
            'mill3wp/js',
            Assets\Asset_File_path('app', 'js'),
            [],
            null,
            true
        );
    }

    // inject global Wordpress variables to Javascript
    $wp_endpoints = array(
      'admin_ajax' => admin_url('admin-ajax.php'),
      //'rest-api' => get_rest_url(null, 'wp/v2/'),
      //'nonce' => wp_create_nonce('tdp_nonce'),
    );

    wp_add_inline_script(THEME_DEV === true ? 'mill3wp/webpack' : 'mill3wp/js', 'window.wp = '.json_encode($wp_endpoints).';', 'before');

    // remove core scripts and freaking emoji
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
}

add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\assets', 100);


// Remove wp-embed.min.js
add_action('wp_footer', function(){ wp_deregister_script( 'wp-embed' ); });

/*
 * Modify TinyMCE editor to remove H1.
 */
function mill3wp_tiny_mce_remove_unused_formats($init)
{
    // Add block format elements you want to show in dropdown
    $init['block_formats'] =
        'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Address=address;Pre=pre;Blockquote=blockquote;';
    return $init;
}

add_filter(
    'tiny_mce_before_init',
    __NAMESPACE__ . '\\mill3wp_tiny_mce_remove_unused_formats'
);


// Set directory for Admin Columns settings
add_filter('acp/storage/file/directory', function() {
  return get_stylesheet_directory() . '/acp-settings';
});

// Remove WP Admin Bar in frontend
add_filter( 'show_admin_bar', '__return_false' );
