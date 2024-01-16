import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

import { createMetadata } from '../helpers';
import block from './block.json';
const metadata = createMetadata(block);

registerBlockType( metadata.name, {
	edit: Edit,
	save,
} );
