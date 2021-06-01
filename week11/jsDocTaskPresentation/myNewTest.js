import { Suite } from "../test/test.js";
import { padLeft } from "../util/strings.js";
import "../util/times.js"

const suite = Suite("myNewSuite");

suite.add("myNewTest", assert => {
    const actual = padLeft("123", 5);
    assert.is(actual, "  123");
});

suite.run();


