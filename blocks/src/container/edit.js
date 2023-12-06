import { useBlockProps,	InspectorControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
//import createClasses from './createClasses';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        //className: createClasses({ attributes })
    });
    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        templateInsertUpdatesSelection: true,
    });
	
	return (
		<>
			<InspectorControls>
				<PanelBody title="Block Settings">
					<SelectControl
						label={attributes.display.label}
						value={attributes.display.desktop}
						options={attributes.display.options}
						onChange={(value) => setAttributes( {display: {...attributes.display, desktop: value} } )}
					/>
					<SelectControl
						label={attributes.gap.label}
						value={attributes.gap.desktop}
						options={attributes.gap.options}
						onChange={(value) => setAttributes( {gap: {...attributes.gap, desktop: value} } )}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...innerBlocksProps}></div>
		</>
	);
}
