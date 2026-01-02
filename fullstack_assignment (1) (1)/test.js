const solution = require("./solution");

function assertEqual(actual, expected, message) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.error("FAIL:", message);
  } else {
    console.log("PASS:", message);
  }
}

const input1 = {
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 6,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2,
  "2020-01-08": -2
};

const expected1 = {
  Mon: -6,
  Tue: 2,
  Wed: 2,
  Thu: 4,
  Fri: 6,
  Sat: 8,
  Sun: 2
};

assertEqual(solution(input1), expected1, "Example Test 1");

const input2 = {
  "2020-01-01": 6,
  "2020-01-04": 12,
  "2020-01-05": 14,
  "2020-01-06": 2,
  "2020-01-07": 4
};

const expected2 = {
  Mon: 2,
  Tue: 4,
  Wed: 6,
  Thu: 8,
  Fri: 10,
  Sat: 12,
  Sun: 14
};

assertEqual(solution(input2), expected2, "Example Test 2");
