<?php

namespace lichtberg\helpers;

if ( !function_exists('\lichtberg\helpers\allBlockNames') ) {
    /**
     * Allows only Lichtberg blocks to be used in the editor, see README.md for examples
     * @return array
     */
    function allBlockNames(): array
    {
        return [
            'lichtberg/group',
            'lichtberg/image',
            'lichtberg/link',
            'lichtberg/section',
            'lichtberg/shortcode',  
            'lichtberg/text',
        ];
    }
}