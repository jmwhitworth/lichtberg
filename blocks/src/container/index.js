import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes';
import './styles.scss';

registerBlockType( metadata.name, {
	attributes: attributes,
	edit: Edit,
	save,
} );
