import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save();

	return React.createElement(
		attributes.tagType,
		{ ...blockProps, style: { textAlign: attributes.align } },
		<RichText.Content value={attributes.content} />
	);
}
