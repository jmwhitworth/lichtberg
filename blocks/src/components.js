import { Modal, Button, RadioControl, MultiSelectControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';


/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const CustomModal = ({ buttonText, modalTitle, children }) => {
	const [ isOpen, setOpen ] = useState( false );
	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );
	
	return (
		<>
			<Button variant="secondary" onClick={ openModal } style={ { marginBottom: '1rem' } }>
				{ buttonText }
			</Button>
			
			{ isOpen && (
				<Modal title={ modalTitle } onRequestClose={ closeModal }>
					{ children }
					
					<Button variant="secondary" onClick={ closeModal } style={ { marginTop: '1rem' } }>
						Close
					</Button>
				</Modal>
			) }
		</>
	);
};


/**
 * 
 */
export const PostSelect = withSelect((select, props) => {
    let combinedEntities = [];
    
    props.postTypes.forEach( function(postType) {
        const entities = select('core').getEntityRecords('postType', postType, {
            per_page: props.searchResultsPerPage ?? -1,
            search: props.searchTerm ?? '',
        });
        if (entities) {
            combinedEntities = [...combinedEntities, ...entities];
        }
    });
    
    return { combinedEntities };
})(({ combinedEntities, postTypes=['post'], searchTerm, searchResultsPerPage, selected, onchange }) => {
    if (!combinedEntities.length) return <p>{ __('Loading...', 'lichtberg') }</p>;
    
    const options = combinedEntities.map((entity) => ({
        label: entity.title.rendered,
        value: entity.link
    }));
    
    return (
        <RadioControl
            selected={ selected }
            options={ options }
            onChange={ onchange }
        />
    );
});


/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const StylePanel = ({ attributes, setAttributes }) => {
    return (
        <>
            <MultiSelectControl
                label={ __( 'Styles', 'lichtberg' ) }
                value={ attributes.style }
                options={ attributes.styleOptions }
                onChange={ ( style ) => setAttributes( { style } ) }
            />
        </>
    );
};