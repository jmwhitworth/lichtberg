# lichtberg

## Controlling the available blocks

To enable only Lichtberg blocks on your site, add the following to your theme's `functions.php` file:

```php
if ( function_exists( '\lichtberg\allowOnlyLichtbergBlocks' ) ) {
    add_filter( 'allowed_block_types_all', '\lichtberg\allowOnlyLichtbergBlocks', 25 );
}
```

Alternatively, you can extend this example with additional blocks to allow only specific blocks alongside Lichtberg:

```php
function customAllowBlocks(): array
{
    // The extra blocks you'd like to allow
    $blocks = [
		'core/image',
		'core/paragraph',
    ];

    // If Lichtberg is enabled, add the Lichtberg blocks to the array
    if ( function_exists( '\lichtberg\allowOnlyLichtbergBlocks' ) ) {
        $blocks = array_merge($blocks, \lichtberg\allowOnlyLichtbergBlocks());
    }

    return $blocks;
}
add_filter( 'allowed_block_types_all', 'customAllowBlocks' );
```

## Block styles

Block style variations can be added via a PHP hook.

Adding a variation allows that class to be added to the block.

Multiple variations can be used together to allow combinations such as changing colour and padding individually to allow better extensibility.
To add new styles to a block, use the following template:

```php
/**
 * Change the style options for Lichtberg blocks
 * @return array
 */
function changeBlockStyleOption($metadata): array
{
    switch ($metadata['name']) {
        // Check for the desired block
        case 'lichtberg/section':
            // Populate the styles array as per this example
            $metadata['attributes']['options']['default']['style'] = [
                [ 'label' => 'Dark', 'value' => 'dark' ],
                [ 'label' => 'Thin', 'value' => 'thin' ]
            ];
            break;
    }
    return $metadata;
}
add_filter('block_type_metadata', 'changeBlockStyleOption', 10, 1);
```

If, for example, the `Dark` style option from the above code was chosen on the Text block, the block would then get an additional class added to it based on the matching `value`: `wp-block-lichtberg-text--style-dark`

The pattern is: `wp-block-lichtberg-{BLOCK_NAME}--style-{STYLE_VALUE}`, inline with BEM standards
