# lichtberg

## What is Lichtberg?

Lichtberg changes the way you use Gutenberg: Style your blocks with traditional CSS and add as many variations as you like. With the designing removed from Gutenberg, you can focus purely on layout and content in a lighter, visually-accurate editor.

## Why do this?

- Improve speeds by removing the bloated default block stylesheets and load only the styles that you need.
- Ensure design consistency throughout your website by taking control of your styling in the traditional way.
- Ship client-focused sites that give your customers the control, while removing opportunities to create awkward or broken content.
- Get an accurate preview of your page content directly from the editor in a content-focused workflow.
- Make no compromises in flexibility by adding and using as many style variations as you like, in any combination that you require.

## A quick overview

All Lichtberg blocks have a base class name and follow a BEM class name structure. All blocks ship with minimal/no styling, but follow a sensible markup structure for maximum flexibility.

Anyone using Lichtberg should start by writing default styles for all blocks, ensuring their stylesheets are loaded both on the front end and the admin dashboard.

Once the base styles are complete, you can then add style variations. These variations are added via PHP hooks and styled via CSS. apply your variations to individual blocks and mix-and-match them as you require.

## An example

You've done the default styles for the Text block, but want to add a variation which transforms the text content to be uppercase:

1. Add a new variation via the PHP hook called `uppercase`.
2. Add the appropriate styling to your CSS, targeting the class `wp-block-lichtberg__text--style-uppercase`
3. On the block where you'd like to utilise this new variation, select it from the block settings panel on the right-hand side of the editor and see it apply in real-time.

By following these steps, you can extend the styles of any block in as many ways as you like, and you can combine variations as needed to avoid any repetition.

Want your new `uppercase` variation to also have extra padding or different colours? You can either update the CSS for the `uppercase` variation, or add a new variation and apply both to the same block!

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
