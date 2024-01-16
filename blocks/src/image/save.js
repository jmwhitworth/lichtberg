import { useBlockProps } from '@wordpress/block-editor';
import generateClasses from '../helpers/generateClasses';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: generateClasses(attributes.style, attributes.classBaseName)
	});
	
	return (
		<div { ...blockProps }>
			{ attributes.url && (
				<img
					src={ attributes.url }
					alt={ attributes.alt }
					className={ `${attributes.classBaseName}__image` }
				/>
			) }
			{ attributes.caption && (
				<figcaption className={ `${attributes.classBaseName}__caption` }>
					{ attributes.caption }
				</figcaption>
			) }
		</div>
	);
}
