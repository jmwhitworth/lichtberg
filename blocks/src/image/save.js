import { useBlockProps } from '@wordpress/block-editor';
import { generateClasses } from '../lichtbergHelpers';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: generateClasses(attributes.style, attributes.options.classBaseName)
	});
	
	return (
		<div { ...blockProps }>
			{ attributes.url && (
				<img
					src={ attributes.url }
					alt={ attributes.alt }
					className={ `${attributes.options.classBaseName}__image` }
				/>
			) }
			{ attributes.caption && (
				<figcaption className={ `${attributes.options.classBaseName}__caption` }>
					{ attributes.caption }
				</figcaption>
			) }
		</div>
	);
}
