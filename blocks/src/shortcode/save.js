import { useBlockProps } from '@wordpress/block-editor';

import { generateClasses } from '../helpers';


export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: generateClasses(attributes.style, attributes.classBaseName)
	});
	
	return (
		<div { ...blockProps }>
			{ attributes.content }
		</div>
	);
}
