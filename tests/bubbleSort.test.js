import bubble from "../bubbleSort.js"
import assert from 'node:assert'
import { test } from 'node:test'

test ("test bubble sort that uses range", (context) => {
	const expected = [3,5,6]
	const actual = bubble ([5,3,6])
	assert.deepStrictEqual (
		expected,
		actual,
		"should swap 3 and 5 in [5,3,6]"
	)
})
