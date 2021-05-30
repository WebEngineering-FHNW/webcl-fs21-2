
export { dom }

/**
 * @function dom
 * @description Creates a new div with the given innerString as content and attaches the created {ChildNode} to the document before returning it.
 * @param {string }innerString - String representation of the DIV content
 * @returns {ChildNode} New DIV ChildNode with the given inner content
 */
const dom = innerString => {
    const div = document.createElement("DIV");
    div.innerHTML = innerString;
    return div.firstChild;
};
