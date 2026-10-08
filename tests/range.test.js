import range from "../range.js"
import assert from 'node:assert'
import { test } from 'node:test'

test ("range (10) should create integers from 0 to 9", context => {
	const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	const actual = range (10)

	for (let i of actual)
		assert.strictEqual (
			expected[i],
			i,
			"i should equal the index of expected"
		)
})

test ("Array.from (range (10)) should create an array with integers from 0 to 9", context => {
	const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	const actual = range (10)

	assert.deepStrictEqual (
		expected,
		Array.from (actual),
		"actual should be able to create an array like expected"
	)
})

test ("Array.from (range (1, 11)) should create an array with integers from 1 to 10", context => {
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const actual = range (1, 11)

	assert.deepStrictEqual (
		expected,
		Array.from (actual),
		"actual should be able to create an array like expected"
	)
})

test ("Array.from (range (0, 30, 5)) should create an array with integers", context => {
	const expected = [0, 5, 10, 15, 20, 25]
	const actual = range (0, 30, 5)

	assert.deepStrictEqual (
		expected,
		Array.from (actual),
		"actual should be able to create an array like expected"
	)
})

test ("Array.from (range(0, 10, 3)) should create an array with integers", context => {
	const expected = [0, 3, 6, 9]
	const actual = range (0, 10, 3)

	assert.deepStrictEqual (
		expected,
		Array.from (actual),
		"actual should be able to create an array like expected"
	)
})
