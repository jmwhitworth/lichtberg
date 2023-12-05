import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import CreateClasses from './createClasses';

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: CreateClasses({ attributes })
	});
	
	return React.createElement(
		"div",
		{ ...blockProps },
		<InnerBlocks.Content />
	);
}
