import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const StylePanel = ({ attributes, setAttributes }) => {
    let optionCount = attributes.options.style.length;
    let options = attributes.options.style;
    
    return (
        <>
            <SelectControl
                multiple
                label={ __( 'Styles', 'lichtberg' ) }
                value={ attributes.style }
                options={ options }
                onChange={ ( style ) => setAttributes( { style } ) }
            />
            <div>
                <a href="#">
                    <p>{ __( 'How to add styles.', 'lichtberg' ) }</p>
                </a>
            </div>
        </>
    );
};

export const generateClasses = ( styles=[], classBaseName ) => {
    let classNames = '';
    for ( let i = 0; i < styles.length; i++ ) {
        if ( styles[i] != '' ) {
            classNames += ` ${classBaseName}--style-${styles[i]}`;
        }
	};
    return classNames;
};
