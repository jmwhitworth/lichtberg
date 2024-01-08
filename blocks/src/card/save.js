import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save();

	return (
        <div {...blockProps}>
			<div className="wp-block-lichtberg-card__image">
				{attributes.image.url && (
					<img src={attributes.image.url} alt={attributes.image.alt} />
				)}
			</div>
			<div className="wp-block-lichtberg-card__content">
				{ attributes.heading.text && (
					<RichText.Content
						tagName={attributes.heading.tag}
						className="wp-block-lichtberg-card__content-title"
						value={attributes.heading.text}
					/>
				)}
				{ attributes.body.text && (
					<RichText.Content
						tagName={attributes.body.tag}
						className="wp-block-lichtberg-card__content-text"
						value={attributes.body.text}
					/>
				)}
			</div>
        </div>
    );
}
