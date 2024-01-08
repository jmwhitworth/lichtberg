import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const onSelectImage = (media) => {
        setAttributes({
            image: {
				id: media.id,
				url: media.url,
				alt: media.alt,
			}
        });
    };
	const onRemoveImage = () => {
        setAttributes({
            image: {
				id: null,
				url: '',
				alt: '',
			}
        });
    };

	return (
		<>
			<InspectorControls>
				<PanelBody title="Block Settings">
					<SelectControl
						label="Title Tag Type"
						value={attributes.heading.tag}
						options={[
							{ label: 'Paragraph (p)', value: 'p' },
							{ label: 'Heading 1 (h1)', value: 'h1' },
							{ label: 'Heading 2 (h2)', value: 'h2' },
							{ label: 'Heading 3 (h3)', value: 'h3' },
							{ label: 'Heading 4 (h4)', value: 'h4' },
							{ label: 'Heading 5 (h5)', value: 'h5' },
							{ label: 'Heading 6 (h6)', value: 'h6' },
						]}
						onChange={(value) => setAttributes({ heading: {...attributes.heading, tag: value} })}
					/>
					<SelectControl
						label="Body Tag Type"
						value={attributes.body.tag}
						options={[
							{ label: 'Paragraph (p)', value: 'p' },
							{ label: 'Heading 1 (h1)', value: 'h1' },
							{ label: 'Heading 2 (h2)', value: 'h2' },
							{ label: 'Heading 3 (h3)', value: 'h3' },
							{ label: 'Heading 4 (h4)', value: 'h4' },
							{ label: 'Heading 5 (h5)', value: 'h5' },
							{ label: 'Heading 6 (h6)', value: 'h6' },
						]}
						onChange={(value) => setAttributes({ body: {...attributes.body, tag: value} })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="wp-block-lichtberg-card__image">
					{attributes.image.url ? (
						<div>
							<img src={attributes.image.url} alt={attributes.image.alt} />
							<Button
								onClick={onRemoveImage}
								style={{ position: 'absolute', left: '0' }}
								isDestructive>
									Remove Image
							</Button>
						</div>
					) : (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectImage}
								allowedTypes={['image']}
								value={attributes.image.id}
								render={({ open }) => (
									<Button onClick={open}>
										Upload Image
									</Button>
								)}
							/>
						</MediaUploadCheck>
					)}
				</div>
				<div className="wp-block-lichtberg-card__content">
					<RichText
						tagName={attributes.heading.tag}
						className="wp-block-lichtberg-card__content-title"
						value={attributes.heading.text}
						onChange={(value) => setAttributes({ heading: {...attributes.heading, text: value} })}
						placeholder={attributes.heading.placeholder}
					/>
					<RichText
						tagName={attributes.body.tag}
						className="wp-block-lichtberg-card__content-text"
						value={attributes.body.text}
						onChange={(value) => setAttributes({ body: {...attributes.body, text: value} })}
						placeholder={attributes.body.placeholder}
					/>
				</div>
			</div>
		</>
	);
}