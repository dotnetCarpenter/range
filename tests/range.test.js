import range from "../range.js"
import assert from 'node:assert'
import { test } from 'node:test'

test ("range (10) should create integers from 0 to 9", () => {
	const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	const actual = range (10)

	for (let i of actual)
		assert.strictEqual (
			expected[i],
			i,
			"i should equal the index of expected"
		)
})

test ("Array.from (range (10)) should create an array with integers from 0 to 9", () => {
	const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	const actual = range (10)

	assert.deepStrictEqual (
		Array.from (actual),
		expected,
		"actual should be able to create an array like expected"
	)
})

test ("Array.from (range (1, 11)) should create an array with integers from 1 to 10", () => {
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const actual = range (1, 11)

	assert.deepStrictEqual (
		Array.from (actual),
		expected,
		"actual should be able to create an array like expected"
	)
})

test ("Array.from (range (0, 30, 5)) should create an array with integers", () => {
	const expected = [0, 5, 10, 15, 20, 25]
	const actual = range (0, 30, 5)

	assert.deepStrictEqual (
		Array.from (actual),
		expected,
		"actual should be able to create an array like expected"
	)
})

test ("Array.from (range(0, 10, 3)) should create an array with integers", () => {
	const expected = [0, 3, 6, 9]
	const actual = range (0, 10, 3)

	assert.deepStrictEqual (
		Array.from (actual),
		expected,
		"actual should be able to create an array like expected"
	)
})

test ("Negative steps: Array.from (range(0, -10, -1)) should create an array with negative integers", () => {
	const expected = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
	const actual = range (0, -10, -1)

	assert.deepStrictEqual (
		Array.from (actual),
		expected,
		"actual should be able to create an array like expected"
	)
})

test ("Array.from (range(0)) should create an empty array", () => {
	/** @type {undefined[]}	*/
	const expected = []
	const actual = range (0)

	assert.deepStrictEqual (
		Array.from (actual),
		expected,
		"actual should be able to create an array like expected"
	)
})

test ("Array.from (range(1, 0)) should immediately stop and create an empty array", () => {
	/** @type {undefined[]}	*/
	const expected = []
	const actual = range (1, 0)

	assert.deepStrictEqual (
		Array.from (actual),
		expected,
		"actual should be able to create an array like expected"
	)
})

test ("Array.from (range(0, 1, 0)) should throw a TypeError", () => {
	const expected = new TypeError ("step must not be zero")

	assert.throws (() => Array.from (range (0, 1, 0)), expected)
})

test ("Generating number sequences for calculations", () => {
	const expected = 5050
	const actual = range (1, 101).reduce ((a, b) => a + b)

	assert.strictEqual (
		actual,
		expected,
		`${actual} should equal ${expected}`
	)
})

test ("Lazily map, filter, reduce over 4 indices with take", () => {
	const expected = 114
	const actual = range(100_000_000)
		.map (x => 3*x)           // 0, 3, 6, 9, 12, 15, 18, 21, ...
		.filter (x => x % 5 == 1) // 6, 21, 36, 51, 66, ...
		.take (4)                 // 6, 21, 36, 51
		.reduce ((a, b) => a + b) // Sum: 114

	assert.deepStrictEqual (
		actual,
		expected,
		"should sum to 114"
	)
})

test ("Easily create two tuples", () => {
	const expected = [["fish", 432], ["oranges", 12], ["apples", 5]]
	const actual = []
	const input = ["fish", 432, "oranges", 12, "apples", 5]

	for (let i of range(0, input.length, 2))
		actual.push ([input[i], input[i + 1]])

	assert.deepStrictEqual (
		actual,
		expected,
		`${actual} should equal ${expected}`
	)

	let [fish, oranges, apples] = actual
	assert.deepStrictEqual (expected[0], fish)
	assert.deepStrictEqual (expected[1], oranges)
	assert.deepStrictEqual (expected[2], apples)
})
