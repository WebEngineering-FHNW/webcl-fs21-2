// string utilities

export { padRight, padLeft }

/**
 * Appends blanks to the right until the string is of size extend
 *
 * padRight :: String, Int -> String
 *
 * @function padRight
 * @param {string} str
 * @param {number} extend
 * @returns {string}
 *
 * @example     padLeft("123", 3) => "123"
 * @example     padLeft("123", 4) => "123 "
 * @example     padLeft("123", 5) => "123  "
 */
function padRight(str, extend) {
    return "" + str + fill(str, extend);
}

/**
 * Appends blanks to the left until the string is of size extend
 *
 * padLeft :: String, Int -> String
 *
 * @function padLeft
 * @param {string} str
 * @param {number} extend
 * @returns {string}
 *
 *
 * @example     padLeft("123", 3) => "123"
 * @example     padLeft("123", 4) => " 123"
 * @example     padLeft("123", 5) => "  123"
 */
function padLeft(str, extend) {
    return "" + fill(str, extend) + str;
}

/**
 * Creates a whitespace string of length n. Where n is the delta between the length of param str and param extend.
 *
 * @param {string } str
 * @param {number} extend
 * @returns {string}
 */
function fill(str, extend) {
    const len = str.toString().length; // in case str is not a string
    if (len > extend) {
        return "";
    }
    return " ".repeat(extend - len);
}
