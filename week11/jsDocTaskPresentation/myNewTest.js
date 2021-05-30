import { Suite } from "../test/test.js";
import { padLeft } from "../util/strings.js";
import "../util/times.js"

const suite = Suite("myNewSuite");

suite.add("myNewTest", assert => {
    const actual = padLeft("123", 5);
    assert.is(actual, "  123");
});

suite.add("myOtherNewTest", assert => {
    const collector = [];
    (10).times(i => collector.push(i));
    assert.is(collector.length, 10);
});

suite.run();


