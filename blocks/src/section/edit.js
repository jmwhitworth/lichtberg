import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';

import { ALL_BLOCKS } from '../contants';
import StylePanel from '../components/StylePanel';
import generateClasses from '../helpers/generateClasses';


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
