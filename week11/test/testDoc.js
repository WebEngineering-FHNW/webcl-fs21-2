/**
 * Type definition for a Test Suite
 *
 * @typedef {
                {add: function(testName: String, testLogic: onRunTestCallback): number ,
                test: function(testName: String, testLogic: onRunTestCallback): void,
                run: function(): void}
           } TestSuite
 */

/**
 * Type definition for an Assertion
 *
 * @typedef  {{
                true: function(Boolean): void,
                is: function(actual: any, expected: any): void,
                results: [Boolean]
            }} Assertion

 */

/**
 * @callback onRunTestCallback
 * @param    {Assertion} Assert for reporting
 * @return   void
 */

