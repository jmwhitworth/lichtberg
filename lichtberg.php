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
            'card' => '',
            'container' => '',
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
		'lichtberg/card',
		'lichtberg/container',
		'lichtberg/text',
    ];
}


/**
 * An array of css variable names and their given values, added to site header as inline styles
 * @return array
 */
function cssVariables(): array
{
    $defaultVariables = [
        "--lb-breakpoint-mobile" => "360px",
        "--lb-breakpoint-tablet" => "780px",
        "--lb-breakpoint-desktop" => "1080px",
        "--lb-text-size--xs" => "0.5em",
        "--lb-text-size--sm" => "0.75em",
        "--lb-text-size--md" => "1em",
        "--lb-text-size--lg" => "2em",
        "--lb-text-size--xl" => "3.5em",
        "--lb-text-size--2xl" => "6em",
        "--lb-spacer--xs" => "0.5em",
        "--lb-spacer--sm" => "0.75em",
        "--lb-spacer--md" => "1em",
        "--lb-spacer--lg" => "2em",
        "--lb-spacer--xl" => "3.5em",
        "--lb-spacer--2xl" => "6em",
    ];

    /**
     * Filter the CSS variables allowing child themes or plugins to override them.
     *
     * @param array $defaultVariables Default CSS variables.
     */
    return apply_filters('lichtberg_css_variables', $defaultVariables);
}


/**
 * Generate inline styles from CSS variables array.
 *
 * @param array $variables
 * @return string
 */
function generateInlineStyles(array $variables): string
{
    return implode(';', array_map(
        static function ($variable, $value) {
            return "$variable: $value";
        },
        array_keys($variables),
        $variables
    ));
}


/**
 * Adds the required lichtberg CSS variables as inline styles to the sites header
 */
function addCssVariablesToHead(): void
{
    if ($variables = cssVariables()) {
        $inlineStyles = generateInlineStyles($variables);
        echo "<style type='text/css'>body {{$inlineStyles}}}</style>";
    }
}
\add_action( 'wp_head', '\lichtberg\addCssVariablesToHead' );


/**
 * Example function call for overriding Lichtberg's default CSS variables
 */
function custom_css_variables($defaultVariables) {
    // Override the default CSS variables
    $defaultVariables['--lb-text-size--md'] = '1.2em';
    $defaultVariables['--lb-text-size--lg'] = '2.5em';

    return $defaultVariables;
}
// \add_filter('lichtberg_css_variables', '\lichtberg\custom_css_variables');
