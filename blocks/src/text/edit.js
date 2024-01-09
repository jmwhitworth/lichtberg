import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
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
				<PanelBody title={ __( 'Block Settings', 'lichtberg') }>
					<StylePanel attributes={ attributes } setAttributes={ setAttributes } />
					<SelectControl
						label={ __( 'Tag', 'lichtberg' ) }
						value={ attributes.tag }
						options={ attributes.options.tag }
						onChange={ ( value ) => setAttributes( { tag: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			
			<RichText
                { ...blockProps }
                tagName={ attributes.tag }
                value={ attributes.content }
                allowedFormats={ [ 'core/bold', 'core/italic' ] }
                onChange={ ( content ) => setAttributes( { content } ) }
                placeholder={ __( 'Heading...', 'lichtberg' ) }
            />
		</>
	);
}
