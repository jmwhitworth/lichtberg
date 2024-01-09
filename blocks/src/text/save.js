import { useBlockProps, RichText } from '@wordpress/block-editor';
import { generateClasses } from '../lichtbergHelpers';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: generateClasses(attributes.style, attributes.options.classBaseName)
	});
	
	return (
		<RichText.Content
			{ ...blockProps }
			tagName={ attributes.tag }
			value={ attributes.content }
		/>
	);
}
