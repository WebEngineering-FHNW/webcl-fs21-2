// The test "framework", exports the Suite function plus a total of how many assertions have been tested

export { Suite, total }

import { padLeft, padRight}   from "../util/strings.js"; // for formatting the report
import { Tuple }              from "../church/rock.js";
import { id }                 from "../church/church.js";

/**
 * @name total
 * @description Total number of {@link Assertion}s that have been tested.
 * @type {number}
 */
let total = 0;

/**
 * @constructor
 * @alias AssertionConstructor
 * @returns {Assertion}
 */
function Assert() {
    const results = []; // [Bool], true if test passed, false otherwise
    return {
        results: results,
        true: (testResult) => {
            if (!testResult) { console.error("test failed") }
            results.push(testResult);
        },
        is: (actual, expected) => {
            const testResult = actual === expected;
            if (!testResult) {
                console.error("test failure. Got '"+ actual +"', expected '" + expected +"'");
            }
            results.push(testResult);
        }
    }
}

const [Test, name, logic] = Tuple(2); // data type to capture test to-be-run

function test(name, callback) {
    const assert = Assert();
    callback(assert);
    report(name, assert.results)
}

/**
 * Represents a TestSuite
 * @constructor
 * @alias TestSuiteConstructor
 * @param {string} suitName - The name for the Suite
 * @returns {TestSuite}
 */
function Suite(suiteName) {
    const tests = []; // [Test]
    const suite = {
        test: (testName, callback) => test(suiteName + "-"+ testName, callback),

        /**
         *
         * @param testName
         * @param callback
         * @return {number}
         */
        add:  (testName, callback) => tests.push(Test (testName) (callback)),
        run:  () => {
            const suiteAssert = Assert();
            tests.forEach( test => test(logic) (suiteAssert) );
            total += suiteAssert.results.length;
            if (suiteAssert.results.every( id )) { // whole suite was ok, report whole suite
                report("suite " + suiteName, suiteAssert.results)
            } else { // some test in suite failed, rerun tests for better error indication
                tests.forEach( test => suite.test( test(name), test(logic) ) )
            }
        }
    };
    return suite;
}

/**
 * Creates the test result report
 *
 * @function report
 * @param {string} origin - Origin of the asserted tests
 * @param {[Boolean]} ok - Array of assertion results
 */
function report(origin, ok) {
    const extend = 20;
    if ( ok.every( elem => elem) ) {
        write(" "+ padLeft(ok.length, 3) +" tests in " + padRight(origin, extend) + " ok.");
        return;
    }
    let reportLine = "    Failing tests in " + padRight(origin, extend);
    bar(reportLine.length);
    write("|" + reportLine+ "|");
    for (let i = 0; i < ok.length; i++) {
        if( ! ok[i]) {
            write("|    Test #"+ padLeft(i, 3) +" failed                     |");
        }
    }
    bar(reportLine.length);
}

/**
 * Writes a message to the document.
 *
 * The message will become visible in the element with Id 'out' in the document.
 * It is expected that such an element is already present.
 *
 * @param {string }message
 */
function write(message) {
    const out = document.getElementById('out');
    out.innerText += message + "\n";
}

/**
 * Prints a bar with style "+-+" of length (extend + 2)
 *
 * @param {number} extend
 */
function bar(extend) {
    write("+" + "-".repeat(extend) + "+");
}

