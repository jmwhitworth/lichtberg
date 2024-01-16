import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import './editor.scss';

import StylePanel from '../components/StylePanel';
import generateClasses from '../helpers/generateClasses';


export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: generateClasses(attributes.style, attributes.classBaseName),
		style: { textAlign: attributes.alignment}
	});
	
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Block Settings', 'lichtberg') }>
					<StylePanel attributes={ attributes } setAttributes={ setAttributes } />
					<SelectControl
						label={ __( 'Tag', 'lichtberg' ) }
						value={ attributes.tag }
						options={ attributes.tagOptions }
						onChange={ ( tag ) => setAttributes( { tag } ) }
					/>
				</PanelBody>
			</InspectorControls>
			
			<BlockControls>
				<AlignmentToolbar
					value={ attributes.alignment }
					onChange={ ( alignment ) => setAttributes( { alignment } ) }
				/>
			</BlockControls>
			
			<RichText
                { ...blockProps }
                tagName={ attributes.tag }
                value={ attributes.content }
                allowedFormats={ [ 'core/bold', 'core/italic' ] }
                onChange={ ( content ) => setAttributes( { content } ) }
                placeholder={ __( 'Your text...', 'lichtberg' ) }
            />
		</>
	);
}
