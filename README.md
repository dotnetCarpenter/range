<a name="range"></a>

## range([start], [stop], [step]) ⇒ <code>IteratorObject&lt;number, any, any&gt;</code>
The range generator represents an immutable sequence of numbers and is
commonly used for looping a specific number of times in for-of loops
or fill values with `.from()` method.

Supports all iterator helper methods like `map()`, `reduce()`, `take()` etc.

**Kind**: module function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | <code>number</code> | <code>0</code> | If the `start` argument is omitted, it defaults to 0. |
| [stop] | <code>number</code> |  | If the `stop` argument is omitted, it will take the value of `start` and `start` will be 0. |
| [step] | <code>number</code> | <code>1</code> | If the `step` argument is omitted, it defaults to 1. |


## usage

```js
const sum = (a, b) => a + b

// Generating number sequences for calculations
range (1, 101).reduce (sum) // 5050

// Lazily map, filter, reduce over 4 indices with take
range(100_000_000)
	.map (x => 3 * x)         // 0, 3, 6, 9, 12, 15, 18, 21, ...
	.filter (x => x % 5 == 1) // 6, 21, 36, 51, 66, ...
	.take (4)                 // 6, 21, 36, 51
	.reduce (sum)             // Sum: 114

// Easily create two tuples
const input = ["fish", 432, "oranges", 12, "apples", 5]
const tup = []
for (let i of range(0, input.length, 2))
	tup.push ([input[i], input[i + 1]]) // [["fish", 432], ["oranges", 12], ["apples", 5]]

Array.from (range (10))         // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.from (range (1, 11))      // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.from (range (0, 30, 5))   // [0, 5, 10, 15, 20, 25]

Array.from (range (0, 10, 3))   // [0, 3, 6, 9]

Array.from (range (0, -10, -1)) // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

Array.from (range (0))          // []

Array.from (range (1, 0))       // []
```

```js
function bubbleSort (array) {
	const n = array.length
	let swapped = false

	for (let i of range (n)) {
		for (let j of range (0, n - i - 1))
			if (array[j] > array[j + 1])
				swapped = swap (array, j, j + 1)

		if (!swapped) break
	}

	return array
}

function swap (array, i, j) {
	[array[i], array[j]] = [array[j], array[i]]
	return true
}
```
