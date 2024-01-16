import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';

import generateClasses from '../helpers/generateClasses';


/**
 * SEO Plugins can add rel="noopener" to the body which causes a block error as the content != save function
 * This is a migration that is an exact copy of the save function, but with the added rel="noopener" added
 */
const REMOVE_REL_OPENER = {
    attributes: metadata.attributes,
    
    save( props ) {
        const blockProps = useBlockProps.save({
            className: generateClasses(props.attributes.style, props.attributes.classBaseName),
            rel: "noopener"
        });
        if ( props.attributes.url != "" ) {
            blockProps.href = props.attributes.url;
        }
        if ( props.attributes.openInNewTab ) {
            blockProps.target = "_blank";
        }
        if ( props.attributes.alt != "" ) {
            blockProps.alt = props.attributes.alt
        }
        if ( props.attributes.ariaLabel != "" ) {
            blockProps['aria-label'] = props.attributes.ariaLabel
        }
        
        return (
            <a { ...blockProps }>
                <InnerBlocks.Content />
            </a>
        );
    },
}

export default [ REMOVE_REL_OPENER ];
