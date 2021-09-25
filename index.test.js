import test from "ava";
import { add, multiply } from "./index.js";

test("adds", (t) => {
  t.is(add(1, 2), 3);
});

test("multiply", (t) => {
  t.is(multiply(1, 2), 2);
});
