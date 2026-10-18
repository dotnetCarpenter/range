import bubble from "../example/bubbleSort.js"
import assert from 'node:assert'
import { suite, test } from 'node:test'

suite ("test bubble sort that uses range", (context) => {
	test ("should swap 3 and 5 in [5,3,6]", () => {
		const expected = [3,5,6]
		const actual = bubble ([5,3,6])
		assert.deepStrictEqual (
			expected,
			actual,
			"should swap 3 and 5 in [5,3,6]"
		)
	})

	test ("slightly bigger array", () => {
		const expected = [11, 12, 22, 25, 34, 64, 90]
		const actual = bubble ([64, 34, 25, 12, 22, 11, 90])
		assert.deepStrictEqual (
			expected,
			actual,
			`should equal ${expected}`
		)
	})
})
