import { useBlockProps, RichText } from '@wordpress/block-editor';

import { generateClasses } from '../helpers';


export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: generateClasses(attributes.style, attributes.classBaseName),
		style: { textAlign: attributes.alignment }
	});
	
	return (
		<RichText.Content
			{ ...blockProps }
			tagName={ attributes.tag }
			value={ attributes.content }
		/>
	);
}
