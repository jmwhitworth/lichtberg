import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import generateClasses from '../helpers/generateClasses';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: generateClasses(attributes.style, attributes.classBaseName)
	});
	
	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
