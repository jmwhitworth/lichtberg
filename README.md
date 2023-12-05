# lichtberg


To enable only Lichtberg blocks on your site, add the following to your theme's `functions.php` file:

```php
if ( function_exists( '\lichtberg\allowOnlyLichtbergBlocks' ) ) {
    \add_filter( 'allowed_block_types_all', '\lichtberg\allowOnlyLichtbergBlocks', 25 );
}
```

Alternatively, you can extend this with additional blocks by following this example:

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

