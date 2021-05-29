/**
 * Interface for a TestSuite
 *
 * @typedef {
                {add: function(testName: String, testLogic: onRunTestCallback): number,
                test: function(testName: String, testLogic: onRunTestCallback): void,
                run: function(): void}
           } ISuite
 */

/**
 * Interface for an Assert instance.
 *
 * @typedef  {{
                true: function(Boolean): void,
                is: function(T, T): void,
                results: [Boolean]
            }} IAssert
 */

/**
 * @callback onRunTestCallback
 * @param    {IAssert} Assert for reporting
 * @return   void
 */

