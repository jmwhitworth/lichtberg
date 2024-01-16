<?php
/**
 * Plugin Name:       Lichtberg
 * Description:       A collection of lightweight blocks
 * Requires at least: 6.0
 * Requires PHP:      8.0
 * Version:           0.5.0
 * Author:            Jack Whitworth
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       lichtberg
 *
 * @package           lichtberg
 */

/**
 * Exit if accessed directly.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once 'helpers.php';
require_once 'hooks.php';

//$json = file_get_contents(__DIR__ . '/blocks/src/attributes.json'); 
//$json_data = json_decode($json, true); 
//die(var_dump($json_data));
