/**
 * Interface for a Test ISuite
 *
 * @typedef {
                {add: function(String, onRunTestCallback)   : number,
                test: function(String, onRunTestCallback)  : void,
                run: function()                            : void}
           } ISuite
 */

/**
 * @typedef  {{
                true: function(Boolean): void,
                is: function(T, T): void,
                results: [Boolean]
            }} IAssert
 */


/**
 * @callback onRunTestCallback
 * @param  {Assert}
 */

