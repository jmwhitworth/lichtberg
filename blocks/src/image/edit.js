import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';
import './editor.scss';

import StylePanel from '../components/StylePanel';
import generateClasses from '../helpers/generateClasses';


export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: generateClasses(attributes.style, attributes.classBaseName)
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
					
					{ attributes.url ? (
						<>
							<TextControl
								label={ __( 'Alt Text', 'lichtberg' ) }
								value={ attributes.alt }
								onChange={ ( alt ) => setAttributes( { alt } ) }
							/>
							<TextControl
								label={ __( 'Caption', 'lichtberg' ) }
								value={ attributes.caption }
								onChange={ ( caption ) => setAttributes( { caption } ) }
							/>
						</>
					) : ('')}
					
					<>
						{ attributes.url ? (
							<Button onClick={ onRemoveImage }
								variant='link'
								isDestructive>
									Remove Image
							</Button>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ onSelectImage }
									allowedTypes={ ['image'] }
									value={ attributes.id }
									render={ ({ open }) => (
										<Button onClick={open}
											variant='secondary'>
												Select/Upload Image
										</Button>
									) }
								/>
							</MediaUploadCheck>
						) }
					</>
				</PanelBody>
			</InspectorControls>
			
			<div { ...blockProps }>
				{ attributes.url ? (
					<>
						<img
							src={ attributes.url }
							alt={ attributes.alt }
							className={ `${attributes.classBaseName}__image` }
						/>
						<RichText 
							tagName="figcaption"
							className={ `${attributes.classBaseName}__caption` }
							onChange={ ( caption ) => setAttributes( { caption } ) }
							value={ attributes.caption }
							placeholder='Add a caption...'
						/>
					</>
				) : (
					<p className={ `${attributes.classBaseName}__placeholder` }>
						{ __( 'Select an image from the block panel to the right.', 'lichtberg' ) }
					</p>
				) }
			</div>
		</>
	);
}
