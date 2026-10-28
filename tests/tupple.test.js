import tuple from "../example/tuple.js"
import assert from 'node:assert'
import { suite, test } from 'node:test'

const input = ["fish", 432, "oranges", 12, "apples", 5]

suite ("test generic n-tuple that uses range", () => {
	test ("should group related data together given an ordered list and size n", () => {
		const create2tuple = tuple (2)

		const expected = [["fish", 432], ["oranges", 12], ["apples", 5]]
		const actual = create2tuple (input).toArray ()

		assert.deepStrictEqual (
			expected,
			actual,
			'should be [["fish", 432], ["oranges", 12], ["apples", 5]]'
		)

		let [fish, oranges, apples] = actual
		assert.deepStrictEqual (expected[0], fish)
		assert.deepStrictEqual (expected[1], oranges)
		assert.deepStrictEqual (expected[2], apples)
	})
})
