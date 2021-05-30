// times utility

/**
 * @callback timesCallback
 * @param {number|string} i - Number of iteration
 * */

/**
 * @typedef {ErrorEvent} NotANumberException
 * @description An Exception that is thrown when attempting to convert a value that is not a valid numeric expression to a number.
 */

/**
 * Repeats a given callback i times.
 *
 * This is an extension function to the {@link String} and {@link Number} prototypes.
 * If the function is called on a {string} it is expected, that this string is a valid integer representation
 *
 * @function times
 * @extends {String}
 * @extends {Number}
 * @throws {NotANumberException} - If called on a string that is not a valid integer representation
 * @param callback
 */
const timesFunction = function(callback) {
  if( isNaN(parseInt(Number(this.valueOf()))) ) {
    throw new TypeError("Object is not a valid number");
  }
  for (let i = 0; i < Number(this.valueOf()); i++) {
    callback(i);
  }
};

String.prototype.times = timesFunction;
Number.prototype.times = timesFunction;
