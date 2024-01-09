import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Button } from '@wordpress/components';
import { StylePanel, generateClasses } from '../lichtbergHelpers';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: generateClasses(attributes.style, attributes.options.classBaseName)
	});
	
	const onSelectImage = (media) => {
        setAttributes({
			id: media.id,
			url: media.url,
			alt: media.alt,
			caption: media.caption
        });
    };
	const onRemoveImage = () => {
        setAttributes({
			id: null,
			url: '',
			alt: '',
			caption: '',
        });
    };
	
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Block Settings', 'lichtberg') }>
					<StylePanel attributes={ attributes } setAttributes={ setAttributes } />
				</PanelBody>
			</InspectorControls>
			
			<div { ...blockProps }>
				{ attributes.url ? (
					<>
						<img
							src={ attributes.url }
							alt={ attributes.alt }
							className={ `${attributes.options.classBaseName}__image` }
						/>
						<figcaption className={ `${attributes.options.classBaseName}__caption` }>
							{ attributes.caption }
						</figcaption>
						<Button
							onClick={ onRemoveImage }
							className={ `${attributes.options.classBaseName}__remove-button` }
							isDestructive>
								Remove Image
						</Button>
					</>
				) : (
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ onSelectImage }
							allowedTypes={ ['image'] }
							value={ attributes.id }
							render={ ({ open }) => (
								<Button onClick={open}
									className={ `${attributes.options.classBaseName}__add-button` }>
										Upload Image
								</Button>
							) }
						/>
					</MediaUploadCheck>
				) }
			</div>
		</>
	);
}
