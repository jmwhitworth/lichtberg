
const generateClasses = ( styles=[], classBaseName ) => {
    let classNames = '';
    for ( let i = 0; i < styles.length; i++ ) {
        if ( styles[i] != '' ) {
            classNames += ` ${classBaseName}--style-${styles[i]}`;
        }
	};
    return classNames;
};

export default generateClasses;
