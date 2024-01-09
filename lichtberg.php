<?php
/**
 * Plugin Name:       Lichtberg
 * Description:       A collection of lightweight blocks
 * Requires at least: 6.1
 * Requires PHP:      8.2
 * Version:           1.0.0
 * Author:            Jack Whitworth
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       lichtberg
 *
 * @package           lichtberg
 */


namespace lichtberg;


/**
 * Exit if accessed directly.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


if ( !function_exists('\lichtberg\registerBlockCategory') ) {
    /**
     * Creates the Lichtberg category within Gutenberg
     * @param array $categories
     * @return array
     */
    function registerBlockCategory( array $categories ): array
    {
        $categories[] = [
            'slug'  => 'lichtberg',
            'title' => 'Lichtberg'
        ];

        return $categories;
    }
}
\add_filter( 'block_categories_all', '\lichtberg\registerBlockCategory' );


if ( !function_exists('\lichtberg\registerBlocks') ) {
    /**
     * Registers all Lichtberg blocks using the 'register_block_type' hook
     * @return void
     */
    function registerBlocks(): void
    {
        // Blockname => Callback ?? ''
        $blocks = [
            'image' => '',
            'section' => '',
            'shortcode' => '',
            'text' => '',
        ];
        
        foreach ( $blocks as $dir => $render_callback ) {
            $args = [];
            if ( !empty( $render_callback ) ) {
                $args['render_callback'] = $render_callback;
            }
            \register_block_type( __DIR__ . '/blocks/build/' . $dir, $args );
        }
    }
}
\add_action( 'init', '\lichtberg\registerBlocks' );


/**
 * Allows only Lichtberg blocks to be used in the editor, see README.md for examples
 * @return array
 */
function allowOnlyLichtbergBlocks(): array
{
    return [
		'lichtberg/image',
		'lichtberg/section',
		'lichtberg/shortcode',
		'lichtberg/text',
    ];
}


/**
 * Change the style options for Lichtberg blocks
 * @return array
 */
function changeBlockThemeOption($metadata): array
{
    switch ($metadata['name']) {
        case 'lichtberg/section':
            $metadata['attributes']['options']['default']['style'] = [
                [ 'label' => 'Dark', 'value' => 'dark' ]
            ];
            break;
    }
    return $metadata;
}
\add_filter('block_type_metadata', '\lichtberg\changeBlockThemeOption', 10, 1);
