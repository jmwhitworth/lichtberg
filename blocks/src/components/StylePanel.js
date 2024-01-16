import { MultiSelectControl } from '@codeamp/block-components';
import { __ } from '@wordpress/i18n';

const StylePanel = ({ attributes, setAttributes }) => {
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

export default StylePanel;
