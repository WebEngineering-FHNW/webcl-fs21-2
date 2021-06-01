/**
 * Type definition for a Test Suite.
 *
 * A test suit can be used to add and run tests.
 *
 * @typedef {
                {add: function(testName: String, testLogic: onRunTestCallback): number ,
                test: function(testName: String, testLogic: onRunTestCallback): void,
                run: function(): void}
           } TestSuite
 */

/**
 * Type definition for an Assertion.
 *
 * An assertion can be used to compare the actual and expected values
 * of a given test.
 *
 * @typedef  {{
                true: function(Boolean): void,
                is: function(actual: any, expected: any): void,
                results: [Boolean]
            }} Assertion
 */

/**
 * This callback is used for the actual test functions.
 *
 * It takes the assertion as an input. The onRunTestCallback is expected
 * to run the logic thats is under test and use the passed Assert instance
 * to compare the actual and expected results.
 *
 * @callback onRunTestCallback
 * @param    {Assertion} Assert for reporting
 * @return   void
 */

