import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, PlainText } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';

import StylePanel from '../components/StylePanel';
import generateClasses from '../helpers/generateClasses';


export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: generateClasses(attributes.style, attributes.classBaseName)
	});
	
	const updateShortcode = (content) => {
		let sanitizedContent = content.trim().replace(/^\[|\]$/g, '');
		sanitizedContent = `[${sanitizedContent}]`;
		setAttributes({ content: sanitizedContent });
	};
	
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Block Settings', 'lichtberg') }>
					<StylePanel attributes={ attributes } setAttributes={ setAttributes } />
				</PanelBody>
			</InspectorControls>
			
			<div {...blockProps}>
                <PlainText
                    value={ attributes.content }
                    onChange={ updateShortcode }
                />
            </div>
		</>
	);
}
