import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
 
	return (
		<>
			<InspectorControls>
				<PanelBody title="Block Settings">
					<SelectControl
						label="Select Tag Type"
						value={attributes.tagType}
						options={[
							{ label: 'Paragraph (p)', value: 'p' },
							{ label: 'Heading 1 (h1)', value: 'h1' },
							{ label: 'Heading 2 (h2)', value: 'h2' },
							{ label: 'Heading 3 (h3)', value: 'h3' },
							{ label: 'Heading 4 (h4)', value: 'h4' },
							{ label: 'Heading 5 (h5)', value: 'h5' },
							{ label: 'Heading 6 (h6)', value: 'h6' },
						]}
						onChange={(tagType) => setAttributes({ tagType })}
					/>
					<SelectControl
						label="Align text"
						value={attributes.align}
						options={[
							{ label: 'Left', value: 'left' },
							{ label: 'Center', value: 'center' },
							{ label: 'Right', value: 'right' },
							{ label: 'Justify', value: 'justify' },
						]}
						onChange={(align) => setAttributes({ align })}
					/>
				</PanelBody>
			</InspectorControls>

			<RichText
				{...blockProps}
				tagName={attributes.tagType}
				value={attributes.content}
				style={{ textAlign: attributes.align }}
				onChange={(content) => setAttributes({ content })}
				placeholder={attributes.placeholder}
			/>
		</>
	);
}