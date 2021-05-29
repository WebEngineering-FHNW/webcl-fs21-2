/**
 * Makes a http call to the given {url} using the given {method} as http method and {data} as request body.
 *
 * @param {string} url
 * @param {string=GET} method
 * @param {object=null} data
 *
 * @return {Promise<T|String>} A resolved promise that returns {@link T} if the request if successful but not status 204
 *                              or an empty resolved if the http request returned with status 204
 *                              or a rejected promise that returns a string with the error message.
 *
 * @example client('localhost:4200/api/tasks'); Makes a http GET request to 'localhost:4200/api/tasks' with an empty body.
 * @example client('localhost:4200/api/tasks/id', 'DELETE'); Makes a http DELETE request to 'localhost:4200/api/tasks/id' with an empty body.
 * @example client('localhost:4200/api/tasks', 'POST', task); Makes a http Post request to 'localhost:4200/api/tasks' with task as body.
 */

