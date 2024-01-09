import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { generateClasses } from '../lichtbergHelpers';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: generateClasses(attributes.style, attributes.options.classBaseName)
	});
	
	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
