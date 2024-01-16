<?php

namespace lichtberg\hooks;


if ( !function_exists('\lichtberg\hooks\registerBlockCategory') ) {
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
\add_filter( 'block_categories_all', '\lichtberg\hooks\registerBlockCategory' );


if ( !function_exists('\lichtberg\hooks\registerBlocks') ) {
    /**
     * Registers all Lichtberg blocks using the 'register_block_type' hook
     * @return void
     */
    function registerBlocks(): void
    {
        // Blockname => Callback ?? ''
        $blocks = [
            'group' => '',
            'image' => '',
            'link' => '',
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
\add_action( 'init', '\lichtberg\hooks\registerBlocks' );



