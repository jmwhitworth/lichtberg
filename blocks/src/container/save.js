import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save();
	
	return React.createElement(
		"div",
		{ ...blockProps },
		<div className={'test'}>
			<InnerBlocks.Content />
		</div>
	);
}
