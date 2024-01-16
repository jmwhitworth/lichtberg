import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SearchControl } from '@wordpress/components';

import { StylePanel, CustomModal, PostSelect } from '../components';
import { generateClasses } from '../helpers';

import './editor.scss';


export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: generateClasses(attributes.style, attributes.classBaseName)
	});
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
        templateInsertUpdatesSelection: true,
		allowedBlocks: []
    });
	
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Block Settings', 'lichtberg') }>
					<StylePanel attributes={ attributes } setAttributes={ setAttributes } />
					
					<TextControl
						label={ __( 'URL', 'lichtberg' ) }
						value={ attributes.url }
						onChange={ (url) => setAttributes( { url } ) }
						type="url"
					/>
					
					<CustomModal buttonText={ __( 'Add internal link', 'lichtberg' ) } modalTitle={ __( 'Post select', 'lichtberg' ) } >
						<SearchControl
							label={ __('Search for posts', 'lichtberg' ) }
							value={ attributes.searchInput }
							onChange={ (searchInput) => setAttributes( { searchInput } ) }
						/>
						
						<PostSelect
							searchTerm={ attributes.searchInput }
							postTypes={ attributes.selectionPostTypes }
							searchResultsPerPage={ attributes.searchResultsPerPage }
							selected={ attributes.url }
							onchange={ (url) => setAttributes( { url } ) }
						/>
					</CustomModal>
					
					<ToggleControl
						label={ __( 'Open in new tab', 'lichtberg' )  }
						checked={ attributes.openInNewTab }
						onChange={ (openInNewTab) => setAttributes( { openInNewTab } ) }
					/>
					<TextControl
						label={ __( 'Alt', 'lichtberg' ) }
						value={ attributes.alt }
						onChange={ (alt) => setAttributes( { alt } ) }
					/>
					<TextControl
						label={ __( 'Aria-label', 'lichtberg' ) }
						value={ attributes.ariaLabel }
						onChange={ (ariaLabel) => setAttributes( { ariaLabel } ) }
					/>
				</PanelBody>
			</InspectorControls>
			
			<a {...innerBlocksProps} />
		</>
	);
}
