/**
 * Creates the required Tailwind classNames using the given attributes for this block
 * @param {Object} attributes 
 * @returns {String}
 */
export default function CreateClasses({ attributes }) {
    let classNames = "";
    
    // Flex direction
    classNames += " flex-" + attributes.flex.direction;

    // Flex gap
    classNames += " gap-" + attributes.flex.gap;

    return classNames;
}
