import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { StylePanel, generateClasses } from '../lichtbergHelpers';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: generateClasses(attributes.style, attributes.options.classBaseName)
	});
	
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Block Settings', 'lichtberg')}>
					<StylePanel attributes={ attributes } setAttributes={ setAttributes } />
					<SelectControl
						label={ __( 'Padding', 'lichtberg' ) }
						value={ attributes.padding }
						options={ attributes.options.padding }
						onChange={ ( value ) => setAttributes( { padding: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			
			<div { ...blockProps }>
				<InnerBlocks />
			</div>
		</>
	);
}
