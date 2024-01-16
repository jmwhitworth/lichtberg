import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import generateClasses from '../helpers/generateClasses';

export default function save({ attributes }) {
    const { url, openInNewTab, alt, ariaLabel, style, classBaseName } = attributes;
	
    const blockProps = useBlockProps.save({
        className: generateClasses(style, classBaseName),
        ...(url && { href: url }),
        ...(openInNewTab && { target: "_blank" }),
        ...(alt && { alt: alt }),
        ...(ariaLabel && { 'aria-label': ariaLabel }),
    });
	
    return (
        <a {...blockProps}>
            <InnerBlocks.Content />
        </a>
    );
}
