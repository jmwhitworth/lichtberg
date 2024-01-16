import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import { StylePanel } from '../components';
import { nestableBlocks, generateClasses } from '../helpers';

import './editor.scss';



export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: generateClasses(attributes.style, attributes.classBaseName)
	});
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
        templateInsertUpdatesSelection: true,
		allowedBlocks: nestableBlocks()
    });
	
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Block Settings', 'lichtberg')}>
					<StylePanel attributes={ attributes } setAttributes={ setAttributes } />
				</PanelBody>
			</InspectorControls>
			
			<div {...innerBlocksProps}></div>
		</>
	);
}
