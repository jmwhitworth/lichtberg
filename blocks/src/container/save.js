import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
//import createClasses from './createClasses';

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save({
		//className: createClasses({ attributes })
	});
	
	return React.createElement(
		"div",
		{ ...blockProps },
		<InnerBlocks.Content />
	);
}
