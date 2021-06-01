
/**
 * Makes a http call to the given url using the given method as http method and data as request body.
 *
 * @typedef {Function} RestClient
 * @param {!string} url
 * @param {?string=GET} method
 * @param {?object=null} data
 *
 * @return {RestResponse}
 *
 * @example client('localhost:4200/api/tasks'); Makes a http GET request to 'localhost:4200/api/tasks' with an empty body.
 * @example client('localhost:4200/api/tasks/id', 'DELETE'); Makes a http DELETE request to 'localhost:4200/api/tasks/id' with an empty body.
 * @example client('localhost:4200/api/tasks', 'POST', task); Makes a http Post request to 'localhost:4200/api/tasks' with task as body.
 */


/**
 * @typedef {Promise<T|String>} RestResponse
 *
 * A RestResponse ist the return value of a call using the {@link RestClient}.
 *
 * This response will always be a promise. The content and state of the promise do however depend on the HTTP Status
 * of the actual REST call:
 *
 * * HTTP Code 204:             Resolved Promise containing the String literal "OK"
 * * Other HTTP Code < 400:     Promise containing with the response data
 * * Any HTTP Code >= 400:      Rejected promise containing the error message String
 * */

