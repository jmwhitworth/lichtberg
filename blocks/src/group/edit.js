import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { ALL_BLOCKS, StylePanel, generateClasses } from '../lichtbergHelpers';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: generateClasses(attributes.style, attributes.classBaseName)
	});
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
        templateInsertUpdatesSelection: true,
		allowedBlocks: ALL_BLOCKS
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
