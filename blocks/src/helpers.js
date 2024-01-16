import lichtberg from './lichtberg.json';

/**
 * 
 * @returns 
 */
export const allBlocks = () => {
    return lichtberg.allBlocks;
};


/**
 * 
 * @returns 
 */
export const nestableBlocks = () => {
    return lichtberg.nestableBlocks;
}


/**
 * Adds the Lichtberg defaults to the given metadata Object
 * @param {Object} metadata 
 * @returns {Object}
 */
export const createMetadata = ( metadata ) => {
    metadata.version = lichtberg.version;
    metadata.category = lichtberg.category;
    metadata.textdomain = lichtberg.textdomain;
    
    metadata.attributes.style = lichtberg.attributes.style;
    metadata.attributes.styleOptions = lichtberg.attributes.styleOptions;
    
    return metadata;
}


/**
 * 
 * @param {*} styles 
 * @param {*} classBaseName 
 * @returns 
 */
export const generateClasses = ( styles=[], classBaseName ) => {
    let classNames = '';
    for ( let i = 0; i < styles.length; i++ ) {
        if ( styles[i] != '' ) {
            classNames += ` ${classBaseName}--style-${styles[i]}`;
        }
	};
    return classNames;
};