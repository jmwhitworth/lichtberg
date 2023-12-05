import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	useInnerBlocksProps
} from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import CreateClasses from './createClasses';

export default function Edit({ attributes, setAttributes }) {
	// Create InnerBlocksProps to avoid editor nesting extra divs, which breaks flex
    const blockProps = useBlockProps({
        className: CreateClasses({ attributes })
    });
    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        templateInsertUpdatesSelection: true,
    });

	const updateFlexAttribute = (key, value) => {
		setAttributes({
			flex: {
				...attributes.flex,
				[key]: value,
			},
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Block Settings">
					<SelectControl
						label="Flex direction"
						value={attributes.flex.direction}
						options={[
							{ label: 'Row', value: 'row' },
							{ label: 'Column', value: 'col' },
							{ label: 'Row-reverse', value: 'row-reverse' },
							{ label: 'Column-Reverse', value: 'col-reverse' },
						]}
						onChange={(value) => updateFlexAttribute('direction', value)}
					/>
					<SelectControl
						label="Flex gap"
						value={attributes.flex.gap}
						options={[
							{ label: 'None', value: '0' },
							{ label: 'Extra small', value: '2' },
							{ label: 'Small', value: '3' },
							{ label: 'Normal', value: '4' },
							{ label: 'Large', value: '6' },
							{ label: 'Extra large', value: '8' },
						]}
						onChange={(value) => updateFlexAttribute('gap', value)}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...innerBlocksProps}></div>
		</>
	);
}
