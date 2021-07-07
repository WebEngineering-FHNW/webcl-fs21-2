import { Suite } from "../test/test.js";
import { padLeft } from "../util/strings.js";

const suite = Suite("mySuite");

suite.add("test", assert => {
    // Given
    const initialString = "123";
    const extend = 5;

    // When
    const actual = padLeft(initialString, extend);

    // Then
    assert.is(actual, "  " + initialString);
});

suite.run();
