import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title="Block Settings">
					<SelectControl
						label="Select Width"
						value={attributes.width}
						options={[
							{ label: '100%', value: '100' },
							{ label: '50%', value: '50' },
						]}
						onChange={(width) => setAttributes({ width })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps} >
				<div className={'test'}>
					<InnerBlocks />
				</div>
			</div>
		</>
	);
}
