import { withSelect } from '@wordpress/data';
import { RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const PostSelect = withSelect((select, props) => {
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

export default PostSelect;